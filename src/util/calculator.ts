import { generateTruthTable, isOperator } from "./tree";

const cleanExpression = (expression: string): string => expression.replace(/\s/g, "");

const extractPremises = (expression: string): string[] => {
    const premises = new Set<string>();
    const premiseRegex = /[P-S]/g; // Regex para encontrar letras do alfabeto, exceto 'V'

    let match;
    while ((match = premiseRegex.exec(expression)) !== null) {
        premises.add(match[0]); // Adiciona a letra encontrada ao conjunto de premissas
    }

    return Array.from(premises); // Converte o conjunto de premissas de volta em um array
};

const countParentheses = (expression: string): { openParentheses: number; closeParentheses: number } => {
    const openParentheses = (expression.match(/\(/g) || []).length;
    const closeParentheses = (expression.match(/\)/g) || []).length;
    return { openParentheses, closeParentheses };
};

const isValidOperatorSequence = (expression: string): boolean => {
    const operators = ["^", "V", "~", "->", "<->"];
    const lastChar = expression[expression.length - 1];

    // Verifica se a expressão termina com um operador
    if (operators.includes(lastChar)) {
        return false;
    }

    for (let i = 0; i < expression.length - 1; i++) {
        if (isOperator(expression[i]) && isOperator(expression[i + 1])) return false; // Retorna false se dois operadores estiverem lado a lado
        if (isOperator(expression[i]) && expression[i + 1] === ")") return false; // Retorna falso se um operador for seguido por um parêntese fechado
        if (isOperator(expression[i]) && (i === 0 && operators[2] != expression[i])) return false; // Retorna falso se a expressão começar com um operador
    }
    return true;
};

const calculate = (expression: string): any => {
    if (expression.length === 0) return;
    const cleanedExpression = cleanExpression(expression);
    const { openParentheses, closeParentheses } = countParentheses(cleanedExpression);
    if (openParentheses !== closeParentheses) return;

    if (!isValidOperatorSequence(cleanedExpression)) return false;

    const premises = extractPremises(expression);

    const tableHeader = [...premises];
    tableHeader.push(cleanedExpression);

    let truthTable = generateTruthTable(cleanedExpression);
    for (let row of truthTable) {
        const values = Object.values(row).map(value => (value ? "V" : "F"));
    }
    return {truthTable, tableHeader}
};

export default calculate;
