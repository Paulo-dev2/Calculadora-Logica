# Calculadora de Lógica Proposicional

    A Calculadora de Lógica Proposicional é uma aplicação móvel desenvolvida para auxiliar estudantes e entusiastas da lógica proposicional a visualizar e calcular expressões lógicas de forma simples e intuitiva.

# Recursos Principais

    Avaliação de Expressões: A aplicação permite que o usuário insira expressões lógicas na forma de proposições e conectivos lógicos, e em seguida avalia e exibe os resultados da avaliação.

    Visualização de Tabelas Verdade: Além de calcular o resultado da expressão, a calculadora também gera e exibe tabelas verdade correspondentes à expressão inserida, fornecendo uma representação visual das diferentes combinações de valores de verdade para as variáveis da expressão.

    Suporte a Operadores Lógicos: A aplicação suporta uma variedade de operadores lógicos, incluindo negação, conjunção, disjunção, implicação e bicondicional, permitindo aos usuários trabalhar com expressões complexas de forma eficiente.

    Interface Intuitiva: Com uma interface de usuário simples e amigável, a Calculadora de Lógica Proposicional oferece uma experiência de uso fluida e acessível, adequada para estudantes de todos os níveis de experiência.

# Funcionamento do código

    O código consiste em uma implementação para construir uma árvore de expressão a partir de uma expressão booleana fornecida como entrada. Ele segue as seguintes etapas principais:

    - Análise dos Tokens:

    A expressão booleana é dividida em tokens individuais, que podem ser operadores lógicos, operandos (premissas) ou parênteses.

    - Construção da Árvore de Expressão:

    A função buildTree percorre os tokens e constrói a árvore de expressão correspondente.
    Durante a iteração, os tokens são organizados em uma pilha, e a árvore é construída conforme a precedência dos operadores.
    Quando um parêntese é encontrado, os nós anteriores são empilhados para formar uma subárvore. Essa subárvore é então combinada com a estrutura de árvore existente.

    - Avaliação da Expressão:

    A árvore de expressão resultante é então utilizada para avaliar a expressão booleana e gerar a tabela de verdade correspondente.
    A função evaluateOperation é responsável por calcular o valor da expressão para cada combinação possível de valores de premissas.

    - Geração da Tabela de Verdade:

    A tabela de verdade é gerada com base nas combinações possíveis de valores de premissas.
    Cada linha da tabela contém uma combinação de valores de premissas e o resultado correspondente da expressão booleana.

    - Verificação de Validade:

    A função isValidOperatorSequence verifica se a sequência de operadores na expressão é válida.
    Além disso, verifica se o número de parênteses abertos é igual ao número de parênteses fechados, garantindo a validade da expressão.

    - Limpeza e Extração:

    Funções auxiliares, como cleanExpression e extractPremises, são responsáveis por limpar a expressão e extrair as premissas dela.
    Essa implementação fornece uma maneira eficiente e modular de analisar, construir e avaliar expressões booleanas, além de gerar suas tabelas de verdade correspondentes.

# Instalação
    Para instalar a aplicação, basta seguir os seguintes passos:

    Clone este repositório em seu ambiente local.
    Certifique-se de ter o ambiente de desenvolvimento configurado corretamente para React Native.
    Execute npm install para instalar todas as dependências necessárias.
    Execute npm start para iniciar a aplicação no seu dispositivo móvel ou emulador.
    Contribuição
    Contribuições são bem-vindas! Se você identificar problemas, bugs ou tiver sugestões de novos recursos, fique à vontade para abrir uma issue ou enviar um pull request. Juntos, podemos melhorar e expandir ainda mais a Calculadora de Lógica Proposicional.
