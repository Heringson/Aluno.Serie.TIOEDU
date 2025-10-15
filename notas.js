"use strict";
// boletim_app.ts
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
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var nome, matematica, _a, portugues, _b, geografia, _c, historia, _d, quimica, _e, presenca, _f, media, situacao, aluno, linha;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    // Garante que a pasta exista
                    if (!fs.existsSync(DIR)) {
                        fs.mkdirSync(DIR, { recursive: true });
                    }
                    // Se o arquivo não existir, cria com cabeçalho
                    if (!fs.existsSync(ARQUIVO)) {
                        fs.writeFileSync(ARQUIVO, 'Nome,Matemática,Português,Geografia,História,Química,Presença (%),Média,Situação\n');
                    }
                    console.log('\n=== Cadastro de Alunos ===\n');
                    return [4 /*yield*/, perguntar('Nome do aluno: ')];
                case 1:
                    nome = _g.sent();
                    _a = Number;
                    return [4 /*yield*/, perguntar('Nota de Matemática: ')];
                case 2:
                    matematica = _a.apply(void 0, [_g.sent()]);
                    _b = Number;
                    return [4 /*yield*/, perguntar('Nota de Português: ')];
                case 3:
                    portugues = _b.apply(void 0, [_g.sent()]);
                    _c = Number;
                    return [4 /*yield*/, perguntar('Nota de Geografia: ')];
                case 4:
                    geografia = _c.apply(void 0, [_g.sent()]);
                    _d = Number;
                    return [4 /*yield*/, perguntar('Nota de História: ')];
                case 5:
                    historia = _d.apply(void 0, [_g.sent()]);
                    _e = Number;
                    return [4 /*yield*/, perguntar('Nota de Química: ')];
                case 6:
                    quimica = _e.apply(void 0, [_g.sent()]);
                    _f = Number;
                    return [4 /*yield*/, perguntar('Presença (%): ')];
                case 7:
                    presenca = _f.apply(void 0, [_g.sent()]);
                    media = (matematica + portugues + geografia + historia + quimica) / 5;
                    situacao = '';
                    if (presenca < 75) {
                        situacao = 'Reprovado por faltas';
                    }
                    else if (media < 6) {
                        situacao = 'Reprovado por nota';
                    }
                    else {
                        situacao = 'Aprovado';
                    }
                    aluno = {
                        nome: nome,
                        matematica: matematica,
                        portugues: portugues,
                        geografia: geografia,
                        historia: historia,
                        quimica: quimica,
                        presenca: presenca,
                        media: media,
                        situacao: situacao,
                    };
                    linha = "".concat(aluno.nome, ",").concat(aluno.matematica, ",").concat(aluno.portugues, ",").concat(aluno.geografia, ",").concat(aluno.historia, ",").concat(aluno.quimica, ",").concat(aluno.presenca, ",").concat(aluno.media.toFixed(2), ",").concat(aluno.situacao, "\n");
                    fs.appendFileSync(ARQUIVO, linha);
                    console.log("\n\u2705 Aluno ".concat(aluno.nome, " salvo com sucesso em ").concat(ARQUIVO));
                    console.log("\uD83D\uDCCA M\u00E9dia: ".concat(aluno.media.toFixed(2), " | Situa\u00E7\u00E3o: ").concat(aluno.situacao));
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
main();
