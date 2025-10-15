"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var readline = require("readline");
var process_1 = require("process");
/* ---------------------- Caminhos ----------------------- */
var ROOT = path.resolve('.');
var DIR = path.join(ROOT, 'csv');
var ARQUIVO = path.join(DIR, 'boletim.csv');
var BOLETIM_TXT = path.join(DIR, 'boletim_final.txt');
/* ---------------------- Funções ------------------------ */
var rl = readline.createInterface({ input: process_1.stdin, output: process_1.stdout });
function perguntar(pergunta) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    rl.question(pergunta, function (resposta) { return resolve(resposta.trim()); });
                })];
        });
    });
}
/* ---------------------- Cadastro ------------------------ */
function cadastrarAluno() {
    return __awaiter(this, void 0, void 0, function () {
        var nome, serie, matematica, _a, portugues, _b, geografia, _c, historia, _d, quimica, _e, presenca, _f, aulas, media, aprovadoPorNota, aprovadoPorPresenca, situacao, linha;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    console.log('\n=== Cadastro de Alunos ===\n');
                    return [4 /*yield*/, perguntar('Nome do aluno: ')];
                case 1:
                    nome = _g.sent();
                    return [4 /*yield*/, perguntar('Série do aluno: ')];
                case 2:
                    serie = _g.sent();
                    _a = Number;
                    return [4 /*yield*/, perguntar('Nota de Matemática: ')];
                case 3:
                    matematica = _a.apply(void 0, [_g.sent()]);
                    _b = Number;
                    return [4 /*yield*/, perguntar('Nota de Português: ')];
                case 4:
                    portugues = _b.apply(void 0, [_g.sent()]);
                    _c = Number;
                    return [4 /*yield*/, perguntar('Nota de Geografia: ')];
                case 5:
                    geografia = _c.apply(void 0, [_g.sent()]);
                    _d = Number;
                    return [4 /*yield*/, perguntar('Nota de História: ')];
                case 6:
                    historia = _d.apply(void 0, [_g.sent()]);
                    _e = Number;
                    return [4 /*yield*/, perguntar('Nota de Química: ')];
                case 7:
                    quimica = _e.apply(void 0, [_g.sent()]);
                    _f = Number;
                    return [4 /*yield*/, perguntar('Presença (%): ')];
                case 8:
                    presenca = _f.apply(void 0, [_g.sent()]);
                    aulas = Math.round((presenca / 100) * 20);
                    media = (matematica + portugues + geografia + historia + quimica) / 5;
                    aprovadoPorNota = media >= 7;
                    aprovadoPorPresenca = presenca >= 75;
                    situacao = '';
                    if (aprovadoPorNota && aprovadoPorPresenca) {
                        situacao = 'Aprovado por nota e presença';
                    }
                    else if (aprovadoPorNota && !aprovadoPorPresenca) {
                        situacao = 'Aprovado por nota e reprovado por falta';
                    }
                    else if (!aprovadoPorNota && aprovadoPorPresenca) {
                        situacao = 'Reprovado por nota e aprovado por presença';
                    }
                    else {
                        situacao = 'Reprovado por nota e reprovado por falta';
                    }
                    linha = "".concat(nome, ",").concat(serie, ",").concat(matematica, ",").concat(portugues, ",").concat(geografia, ",").concat(historia, ",").concat(quimica, ",").concat(presenca, ",").concat(aulas, ",").concat(media.toFixed(2), ",").concat(situacao, "\n");
                    fs.appendFileSync(ARQUIVO, linha);
                    console.log("\n Aluno ".concat(nome, " da sala ").concat(serie, " salvo com sucesso em ").concat(ARQUIVO));
                    console.log(" M\u00E9dia: ".concat(media.toFixed(2), " |  Presen\u00E7a: ").concat(presenca, "% (").concat(aulas, " aulas) | Situa\u00E7\u00E3o: ").concat(situacao));
                    return [2 /*return*/];
            }
        });
    });
}
/* ---------------------- Relatório ----------------------- */
function gerarBoletimTXT() {
    if (!fs.existsSync(ARQUIVO)) {
        console.log(' Nenhum boletim encontrado para gerar relatório.');
        return;
    }
    var dados = fs.readFileSync(ARQUIVO, 'utf-8').trim().split('\n');
    var cabecalho = dados.shift(); // remove cabeçalho
    var conteudo = '===  BOLETIM FINAL ===\n\n';
    for (var _i = 0, dados_1 = dados; _i < dados_1.length; _i++) {
        var linha = dados_1[_i];
        var _a = linha.split(','), nome = _a[0], serie = _a[1], mat = _a[2], port = _a[3], geo = _a[4], hist = _a[5], qui = _a[6], pres = _a[7], aulas = _a[8], media = _a[9], situacao = _a[10];
        var aluno = {
            nome: nome,
            serie: serie,
            matematica: Number(mat),
            portugues: Number(port),
            geografia: Number(geo),
            historia: Number(hist),
            quimica: Number(qui),
            presenca: Number(pres),
            aulas: Number(aulas),
            media: Number(media),
            situacao: situacao,
        };
        // Determina o resultado final (Aprovado/Reprovado)
        var resultadoFinal = aluno.situacao.includes('Aprovado por nota e presença')
            ? 'Aprovado'
            : 'Reprovado';
        conteudo += "".concat(aluno.nome, " (").concat(aluno.serie, ")\n");
        conteudo += "M\u00E9dia: ".concat(aluno.media.toFixed(2), " | Presen\u00E7a: ").concat(aluno.presenca, "% (").concat(aluno.aulas, " aulas) | Situa\u00E7\u00E3o: ").concat(aluno.situacao, " | Resultado Final: ").concat(resultadoFinal, "\n\n");
    }
    fs.writeFileSync(BOLETIM_TXT, conteudo, 'utf-8');
    console.log("\n Boletim final gerado com sucesso em: ".concat(BOLETIM_TXT));
}
/* ---------------------- Menu ----------------------- */
function menu() {
    return __awaiter(this, void 0, void 0, function () {
        var opcao, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('\n=== MENU ===');
                    console.log('1 - Cadastrar Aluno');
                    console.log('2 - Gerar Boletim Final');
                    console.log('0 - Sair\n');
                    return [4 /*yield*/, perguntar('Escolha uma opção: ')];
                case 1:
                    opcao = _b.sent();
                    _a = opcao;
                    switch (_a) {
                        case '1': return [3 /*break*/, 2];
                        case '2': return [3 /*break*/, 4];
                        case '0': return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 6];
                case 2: return [4 /*yield*/, cadastrarAluno()];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 4:
                    gerarBoletimTXT();
                    return [3 /*break*/, 7];
                case 5:
                    console.log(' Saindo...');
                    rl.close();
                    return [2 /*return*/];
                case 6:
                    console.log(' Opção inválida.');
                    _b.label = 7;
                case 7: return [4 /*yield*/, menu()];
                case 8:
                    _b.sent(); // volta ao menu depois de executar a opção
                    return [2 /*return*/];
            }
        });
    });
}
/* ---------------------- Main ----------------------- */
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!fs.existsSync(DIR)) {
                        fs.mkdirSync(DIR, { recursive: true });
                    }
                    if (!fs.existsSync(ARQUIVO)) {
                        fs.writeFileSync(ARQUIVO, 'Nome,Série,Matemática,Português,Geografia,História,Química,Presença (%),Aulas,Média,Situação\n');
                    }
                    return [4 /*yield*/, menu()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main();
