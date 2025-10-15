//Heringson Lima 2404307
//Wesley da Silva Santos 2522594

import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

/* ---------------------- Interface ---------------------- */
interface Boletim {
  nome: string;
  serie: string;
  matematica: number;
  portugues: number;
  geografia: number;
  historia: number;
  quimica: number;
  presenca: number;      // em %
  aulas: number;         // em número de aulas
  media: number;
  situacao: string;
}

/* ---------------------- Caminhos ----------------------- */
const ROOT = path.resolve('.');
const DIR = path.join(ROOT, 'csv');
const ARQUIVO = path.join(DIR, 'boletim.csv');
const BOLETIM_TXT = path.join(DIR, 'boletim_final.txt');

/* ---------------------- Funções ------------------------ */
const rl = readline.createInterface({ input, output });

async function perguntar(pergunta: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => resolve(resposta.trim()));
  });
}

/* ---------------------- Cadastro ------------------------ */
async function cadastrarAluno() {
  console.log('\n=== Cadastro de Alunos ===\n');

  const nome = await perguntar('Nome do aluno: ');
  const serie = await perguntar('Série do aluno: ');
  const matematica = Number(await perguntar('Nota de Matemática: '));
  const portugues = Number(await perguntar('Nota de Português: '));
  const geografia = Number(await perguntar('Nota de Geografia: '));
  const historia = Number(await perguntar('Nota de História: '));
  const quimica = Number(await perguntar('Nota de Química: '));
  const presenca = Number(await perguntar('Presença (%): '));

  const aulas = Math.round((presenca / 100) * 20); // 100% = 20 aulas
  const media = (matematica + portugues + geografia + historia + quimica) / 5;

  // --- Situação detalhada ---
  const aprovadoPorNota = media >= 7;
  const aprovadoPorPresenca = presenca >= 75;

  let situacao = '';
  if (aprovadoPorNota && aprovadoPorPresenca) {
    situacao = 'Aprovado por nota e presença';
  } else if (aprovadoPorNota && !aprovadoPorPresenca) {
    situacao = 'Aprovado por nota e reprovado por falta';
  } else if (!aprovadoPorNota && aprovadoPorPresenca) {
    situacao = 'Reprovado por nota e aprovado por presença';
  } else {
    situacao = 'Reprovado por nota e reprovado por falta';
  }

  const linha = `${nome},${serie},${matematica},${portugues},${geografia},${historia},${quimica},${presenca},${aulas},${media.toFixed(2)},${situacao}\n`;
  fs.appendFileSync(ARQUIVO, linha);

  console.log(`\n Aluno ${nome} da sala ${serie} salvo com sucesso em ${ARQUIVO}`);
  console.log(` Média: ${media.toFixed(2)} |  Presença: ${presenca}% (${aulas} aulas) | Situação: ${situacao}`);
}

/* ---------------------- Relatório ----------------------- */
function gerarBoletimTXT() {
  if (!fs.existsSync(ARQUIVO)) {
    console.log(' Nenhum boletim encontrado para gerar relatório.');
    return;
  }

  const dados = fs.readFileSync(ARQUIVO, 'utf-8').trim().split('\n');
  const cabecalho = dados.shift(); // remove cabeçalho

  let conteudo = '===  BOLETIM FINAL ===\n\n';

  for (const linha of dados) {
    const [nome, serie, mat, port, geo, hist, qui, pres, aulas, media, situacao] = linha.split(',');
    const aluno: Boletim = {
      nome,
      serie,
      matematica: Number(mat),
      portugues: Number(port),
      geografia: Number(geo),
      historia: Number(hist),
      quimica: Number(qui),
      presenca: Number(pres),
      aulas: Number(aulas),
      media: Number(media),
      situacao,
    };

    // Determina o resultado final (Aprovado/Reprovado)
    const resultadoFinal = aluno.situacao.includes('Aprovado por nota e presença')
      ? 'Aprovado'
      : 'Reprovado';

    conteudo += `${aluno.nome} (${aluno.serie})\n`;
    conteudo += `Média: ${aluno.media.toFixed(2)} | Presença: ${aluno.presenca}% (${aluno.aulas} aulas) | Situação: ${aluno.situacao} | Resultado Final: ${resultadoFinal}\n\n`;
  }

  fs.writeFileSync(BOLETIM_TXT, conteudo, 'utf-8');
  console.log(`\n Boletim final gerado com sucesso em: ${BOLETIM_TXT}`);
}

/* ---------------------- Menu ----------------------- */
async function menu() {
  console.log('\n=== MENU ===');
  console.log('1 - Cadastrar Aluno');
  console.log('2 - Gerar Boletim Final');
  console.log('0 - Sair\n');

  const opcao = await perguntar('Escolha uma opção: ');

  switch (opcao) {
    case '1':
      await cadastrarAluno();
      break;
    case '2':
      gerarBoletimTXT();
      break;
    case '0':
      console.log(' Saindo...');
      rl.close();
      return;
    default:
      console.log(' Opção inválida.');
  }

  await menu(); // volta ao menu depois de executar a opção
}

/* ---------------------- Main ----------------------- */
async function main() {
  if (!fs.existsSync(DIR)) {
    fs.mkdirSync(DIR, { recursive: true });
  }

  if (!fs.existsSync(ARQUIVO)) {
    fs.writeFileSync(
      ARQUIVO,
      'Nome,Série,Matemática,Português,Geografia,História,Química,Presença (%),Aulas,Média,Situação\n'
    );
  }

  await menu();
}

main();


