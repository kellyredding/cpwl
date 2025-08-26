"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand('copy-path-with-lines.copyPathWithLines', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor');
            return;
        }
        const document = editor.document;
        const selection = editor.selection;
        const filePath = document.fileName;
        const startLine = selection.start.line + 1;
        const endLine = selection.end.line + 1;
        let pathWithLines;
        if (startLine === endLine) {
            pathWithLines = `${filePath}:${startLine}`;
        }
        else {
            pathWithLines = `${filePath}:${startLine}-${endLine}`;
        }
        await vscode.env.clipboard.writeText(pathWithLines);
        vscode.window.showInformationMessage(`Copied: ${pathWithLines}`);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map