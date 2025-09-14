
import * as monaco from 'monaco-editor';

export interface EditorConfig {
  theme: 'vs-light' | 'vs-dark' | 'hc-black' | 'nebulaai-dark';
  language: string;
  readOnly?: boolean;
  minimap?: boolean;
  lineNumbers?: 'on' | 'off' | 'relative';
  wordWrap?: 'on' | 'off' | 'wordWrapColumn' | 'bounded';
  fontSize?: number;
  tabSize?: number;
}

export interface NebulaAIFeatures {
  autoComplete?: boolean;
  errorChecking?: boolean;
  formatting?: boolean;
  smartIndent?: boolean;
}

export interface EditorOptions extends monaco.editor.IStandaloneEditorConstructionOptions {
  nebulaAIFeatures?: NebulaAIFeatures;
}

export interface LanguageExtension {
  id: string;
  name: string;
  extensions: string[];
  configuration: monaco.languages.LanguageConfiguration;
  tokenizer: monaco.languages.IMonarchLanguage;
}

export interface EditorInstance {
  getValue(): string;
  setValue(value: string): void;
  getLanguage(): string;
  setLanguage(language: string): void;
  focus(): void;
  layout(): void;
  dispose(): void;
  onDidChangeModelContent(callback: () => void): monaco.IDisposable | undefined;
  getEditor(): monaco.editor.IStandaloneCodeEditor | null;
}
