import { buildTree, generateTruthTable, isOperator, operators } from "./tree";

const cleanExpression = (expression: string): string => expression.replace(/\s/g, "");

const extractPremises = (expression: string): string[] => Array.from(new Set(expression.match(/[P-S]/g) || []));

const isValidOperatorSequence = (expression: string): boolean => {
    const lastChar = expression[expression.length - 1];
    if (operators.has(lastChar)) {
        return false;
    }
    for (let i = 0; i < expression.length - 1; i++) {
        if (isOperator(expression[i]) && isOperator(expression[i + 1])) return false;
        if (isOperator(expression[i]) && expression[i + 1] === ")") return false;
        if (isOperator(expression[i]) && i === 0 && expression[i] !== "~") return false;
    }
    return true;
};

const calculate = (expression: string): { truthTable: object[], tableHeader: string[] } | false | undefined => {
    if (expression.length === 0) return;
    const cleanedExpression = cleanExpression(expression);
    const {
        openParentheses,
        closeParentheses
    } = countParentheses(cleanedExpression);
    if (openParentheses !== closeParentheses) return false;

    if (!isValidOperatorSequence(cleanedExpression)) return false;

    const premises = extractPremises(expression);

    const tree = buildTree(cleanedExpression.split(''));
    console.log(tree);
    const tableHeader = [...premises, cleanedExpression];
    const truthTable = generateTruthTable(cleanedExpression);
    return {
        truthTable,
        tableHeader
    };
};

const countParentheses = (expression: string): { openParentheses: number, closeParentheses: number } => {
    let openParentheses = 0;
    let closeParentheses = 0;
    for (let char of expression) {
        if (char === "(") openParentheses++;
        else if (char === ")") closeParentheses++;
    }
    return {
        openParentheses,
        closeParentheses
    };
};

export default calculate;
