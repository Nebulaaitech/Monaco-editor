
import * as monaco from 'monaco-editor';

export interface ThemeDefinition {
  base: monaco.editor.BuiltinTheme;
  inherit: boolean;
  rules: monaco.editor.ITokenThemeRule[];
  colors: { [colorId: string]: string };
}

export const NebulaAIThemes: Record<string, ThemeDefinition> = {
  dark: {
    base: 'vs-dark' as monaco.editor.BuiltinTheme,
    inherit: true,
    rules: [
      { token: '', foreground: 'ffffff' },
      { token: 'comment', foreground: '6a9955', fontStyle: 'italic' },
      { token: 'keyword', foreground: '569cd6' },
      { token: 'string', foreground: 'ce9178' },
      { token: 'number', foreground: 'b5cea8' },
      { token: 'type', foreground: '4ec9b0' },
      { token: 'class', foreground: '4ec9b0' },
      { token: 'function', foreground: 'dcdcaa' },
      { token: 'variable', foreground: '9cdcfe' },
    ],
    colors: {
      'editor.background': '#1e1e1e',
      'editor.foreground': '#ffffff',
      'editor.lineHighlightBackground': '#2d2d30',
      'editor.selectionBackground': '#264f78',
      'editor.inactiveSelectionBackground': '#3a3d41',
      'editorCursor.foreground': '#ffffff',
      'editorWhitespace.foreground': '#404040',
      'editorIndentGuide.background': '#404040',
      'editorLineNumber.foreground': '#858585',
      'editorLineNumber.activeForeground': '#ffffff',
    },
  },

  light: {
    base: 'vs' as monaco.editor.BuiltinTheme,
    inherit: true,
    rules: [
      { token: '', foreground: '000000' },
      { token: 'comment', foreground: '008000', fontStyle: 'italic' },
      { token: 'keyword', foreground: '0000ff' },
      { token: 'string', foreground: 'a31515' },
      { token: 'number', foreground: '098658' },
      { token: 'type', foreground: '267f99' },
      { token: 'class', foreground: '267f99' },
      { token: 'function', foreground: '795e26' },
      { token: 'variable', foreground: '001080' },
    ],
    colors: {
      'editor.background': '#ffffff',
      'editor.foreground': '#000000',
      'editor.lineHighlightBackground': '#f7f7f7',
      'editor.selectionBackground': '#add6ff',
      'editor.inactiveSelectionBackground': '#e5ebf1',
      'editorCursor.foreground': '#000000',
      'editorWhitespace.foreground': '#b3b3b3',
      'editorIndentGuide.background': '#d3d3d3',
      'editorLineNumber.foreground': '#237893',
      'editorLineNumber.activeForeground': '#0b216f',
    },
  },
};

export function registerNebulaAIThemes(): void {
  monaco.editor.defineTheme('nebulaai-dark', NebulaAIThemes.dark);
  monaco.editor.defineTheme('nebulaai-light', NebulaAIThemes.light);
}

export { NebulaAIThemes as default };
