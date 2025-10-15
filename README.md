                                       Sistema de Boletim Escolar
    Aplicação simples em TypeScript para cadastrar alunos, calcular médias e gerar boletins finais.

______________________________________________________________________________________________________

                Funcionalidades
    -Cadastro de alunos com notas e presença
    -Cálculo automático da média e frequência
    -Situação detalhada: aprovado/reprovado
    -Geração do arquivo boletim_final.txt com formato:

    Maria Souza (2º Ano)
    Média: 7.00 | Presença: 30% (6 aulas) | Situação: Aprovado por nota e reprovado por falta | Resultado Final: Reprovado

______________________________________________________________________________________________________

    Requisitos:
    Node.js 16+
    TypeScript e ts-node
    
    Instalação rápida:
    npm install -g typescript ts-node

______________________________________________________________________________________________________    


    Como executar
    npx ts-node boletim.ts
    
    
    Menu:
    
    1 - Cadastrar Aluno
    2 - Gerar Boletim Final
    0 - Sair

______________________________________________________________________________________________________

    Os arquivos são salvos automaticamente na pasta csv/:
    
    boletim.csv → dados de todos os alunos
    
    boletim_final.txt → relatório final formatado

______________________________________________________________________________________________________

     Regras de avaliação
    Critério	Condição	Resultado
    Média	≥ 7	Aprovado por nota
    Presença	≥ 75%	Aprovado por presença
    Ambos	Verdadeiros	Aprovado por nota e presença
    Caso contrário	Falso em um ou ambos	Reprovado

______________________________________________________________________________________________________

          📂 Estrutura
          📁 projeto-boletim
           ┣ 📁 csv
           ┃ ┣ 📄 boletim.csv
           ┃ ┗ 📄 boletim_final.txt
           ┣ 📄 boletim.ts
           ┗ 📄 README.md
