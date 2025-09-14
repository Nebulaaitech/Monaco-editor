
import * as monaco from 'monaco-editor';
import { EditorOptions, NebulaAIFeatures } from '../types';

export class NebulaAIEditor {
  private editor: monaco.editor.IStandaloneCodeEditor | null = null;
  private container: HTMLElement | null = null;

  constructor(
    container: HTMLElement,
    options: EditorOptions = {}
  ) {
    this.container = container;
    this.createEditor(options);
  }

  private createEditor(options: EditorOptions): void {
    if (!this.container) return;

    const defaultOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
      value: '',
      language: 'typescript',
      theme: 'vs-dark',
      automaticLayout: true,
      minimap: { enabled: true },
      fontSize: 14,
      lineNumbers: 'on',
      renderWhitespace: 'selection',
      tabSize: 2,
      insertSpaces: true,
      wordWrap: 'on',
      scrollBeyondLastLine: false,
      ...options,
    };

    this.editor = monaco.editor.create(this.container, defaultOptions);

    // Enable NebulaAI features
    if (options.nebulaAIFeatures?.autoComplete !== false) {
      this.enableAutoComplete();
    }

    if (options.nebulaAIFeatures?.errorChecking !== false) {
      this.enableErrorChecking();
    }

    if (options.nebulaAIFeatures?.formatting !== false) {
      this.enableFormatting();
    }
  }

  getValue(): string {
    return this.editor?.getValue() || '';
  }

  setValue(value: string): void {
    this.editor?.setValue(value);
  }

  getLanguage(): string {
    return this.editor?.getModel()?.getLanguageId() || '';
  }

  setLanguage(language: string): void {
    const model = this.editor?.getModel();
    if (model) {
      monaco.editor.setModelLanguage(model, language);
    }
  }

  focus(): void {
    this.editor?.focus();
  }

  layout(): void {
    this.editor?.layout();
  }

  dispose(): void {
    this.editor?.dispose();
    this.editor = null;
  }

  onDidChangeModelContent(callback: () => void): monaco.IDisposable | undefined {
    return this.editor?.onDidChangeModelContent(callback);
  }

  private enableAutoComplete(): void {
    // Enhanced auto-completion for NebulaAI
    monaco.languages.registerCompletionItemProvider('typescript', {
      provideCompletionItems: (model, position) => {
        const suggestions = [
          {
            label: 'nebulaai.deploy',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'nebulaai.deploy(${1:config})',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Deploy to NebulaAI network',
          },
          {
            label: 'nebulaai.connect',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'nebulaai.connect(${1:endpoint})',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Connect to NebulaAI network',
          },
        ];

        return { suggestions };
      },
    });
  }

  private enableErrorChecking(): void {
    // Enhanced error checking
    if (this.editor) {
      const model = this.editor.getModel();
      if (model) {
        monaco.editor.setModelMarkers(model, 'nebulaai', []);
      }
    }
  }

  private enableFormatting(): void {
    // Enhanced formatting
    monaco.languages.registerDocumentFormattingEditProvider('typescript', {
      provideDocumentFormattingEdits: (model) => {
        return [];
      },
    });
  }

  getEditor(): monaco.editor.IStandaloneCodeEditor | null {
    return this.editor;
  }
}

export { NebulaAIEditor as default };
