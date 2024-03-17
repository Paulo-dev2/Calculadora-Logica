class TreeNode {
    value: string;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: string) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export const isOperator = (token: string): boolean =>
    token == "^" ||
    token == "V" ||
    token == "~" ||
    token == "->" ||
    token == "<->";

const isPremise = (token: string): boolean =>
    token == "P" ||
    token == "Q" ||
    token == "R" ||
    token == "S";

const precedence = (op: string): number => {
    switch (op) {
        case '~':
            return 3;
        case '^':
            return 2;
        case 'V':
            return 1;
        default:
            return 0;
    }
}

const buildTree = (expression: string): TreeNode | null => {
    const values: TreeNode[] = [];
    const operators: string[] = [];
    for (let char of expression) {
        if (isPremise(char)) {
            values.push(new TreeNode(char));
        } else if (isOperator(char)) {
            while (operators.length > 0 && precedence(char) <= precedence(operators[operators.length - 1])) {
                const node = new TreeNode(operators.pop()!);
                node.right = values.pop()!;
                node.left = values.pop()!;
                values.push(node);
            }
            operators.push(char);
        }
    }
    while (operators.length > 0) {
        const node = new TreeNode(operators.pop()!);
        node.right = values.pop()!;
        node.left = values.pop()!;
        values.push(node);
    }
    return values.pop() || null;
}

export const generateTruthTable = (expression: string): { [key: string]: boolean }[] => {
    const variables = new Set(expression.replace(/[^P-S]/g, ''));
    const combinations = generateCombinations(Array.from(variables));
    const tree = buildTree(expression)!;
    const truthTable: { [key: string]: boolean }[] = [];
    for (let combination of combinations) {
        const result = evaluateOperation(tree, combination);
        truthTable.push({ ...combination, Result: result });
    }
    return truthTable;
}

const generateCombinations = (variables: string[]): { [key: string]: boolean }[] => {
    const combinations: { [key: string]: boolean }[] = [];
    const numberOfCombinations = Math.pow(2, variables.length);
    for (let i = 0; i < numberOfCombinations; i++) {
        const combination: { [key: string]: boolean } = {};
        for (let j = 0; j < variables.length; j++) {
            combination[variables[j]] = !!(i & (1 << j));
        }
        combinations.push(combination);
    }
    return combinations;
}

const evaluateOperation = (node: TreeNode | null, values: { [key: string]: boolean }): boolean => {
    if (!node) {
        return false;
    }
    if (isPremise(node.value)) {
        return values[node.value];
    }
    const leftValue = evaluateOperation(node.left, values);
    const rightValue = node.right ? evaluateOperation(node.right, values) : false;
    console.log({leftValue, rightValue})
    switch (node.value) {
        case '^':
            return leftValue && rightValue;
        case 'V':
            return leftValue || rightValue;
        case '->':
            return !(rightValue === true && leftValue === false);
        case '~':
            return !rightValue;
        case '<->':
            return leftValue === rightValue;
        default:
            throw new Error(`Operador desconhecido: ${node.value}`);
    }
}