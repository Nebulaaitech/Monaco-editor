
import * as monaco from 'monaco-editor';

export interface LanguageConfig {
  id: string;
  extensions: string[];
  aliases: string[];
  mimetypes?: string[];
}

import * as monaco from 'monaco-editor';

export interface LanguageConfig {
  id: string;
  extensions: string[];
  aliases: string[];
  mimetypes?: string[];
}

export class LanguageSupport {
  static registerLanguage(config: LanguageConfig): void {
    monaco.languages.register({
      id: config.id,
      extensions: config.extensions,
      aliases: config.aliases,
      mimetypes: config.mimetypes,
    });
  }

  static registerNebulaAILanguages(): void {
    // Register Ne0Script language
    this.registerLanguage({
      id: 'ne0script',
      extensions: ['.ne0'],
      aliases: ['Ne0Script', 'ne0script'],
      mimetypes: ['text/ne0script'],
    });

    // Set up syntax highlighting for Ne0Script
    monaco.languages.setMonarchTokensProvider('ne0script', {
      tokenizer: {
        root: [
          [/\b(class|function|if|else|while|for|return|var|let|const|import|export)\b/, 'keyword'],
          [/\b(true|false|null|undefined)\b/, 'constant'],
          [/\b\d+\b/, 'number'],
          [/"([^"\\]|\\.)*$/, 'string.invalid'],
          [/"/, 'string', '@string'],
          [/\/\/.*$/, 'comment'],
          [/\/\*/, 'comment', '@comment'],
        ],
        string: [
          [/[^\\"]+/, 'string'],
          [/\\./, 'string.escape'],
          [/"/, 'string', '@pop'],
        ],
        comment: [
          [/[^\/*]+/, 'comment'],
          [/\*\//, 'comment', '@pop'],
          [/[\/*]/, 'comment'],
        ],
      },
    });

    // Set up completion provider for Ne0Script
    monaco.languages.registerCompletionItemProvider('ne0script', {
      provideCompletionItems: () => ({
        suggestions: [
          {
            label: 'consciousness',
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: 'consciousness',
            documentation: 'Define consciousness state',
          },
          {
            label: 'neural',
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: 'neural',
            documentation: 'Neural network operations',
          },
          {
            label: 'agent',
            kind: monaco.languages.CompletionItemKind.Class,
            insertText: 'agent',
            documentation: 'AI Agent class',
          },
        ],
      }),
    });
  }
}

export { LanguageSupport as default };
