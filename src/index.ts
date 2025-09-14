/**
 * @nebulaai/monaco-editor
 * Monaco Editor components and extensions for modern development
 * 
 * MIT License - Open Source
 */

import * as monaco from 'monaco-editor';

// Configure monaco environment for web workers
if (typeof window !== 'undefined') {
  (window as any).MonacoEnvironment = {
    getWorkerUrl: function (moduleId: string, label: string) {
      if (label === 'json') {
        return './json.worker.bundle.js';
      }
      if (label === 'css' || label === 'scss' || label === 'less') {
        return './css.worker.bundle.js';
      }
      if (label === 'html' || label === 'handlebars' || label === 'razor') {
        return './html.worker.bundle.js';
      }
      if (label === 'typescript' || label === 'javascript') {
        return './ts.worker.bundle.js';
      }
      return './editor.worker.bundle.js';
    }
  };
}


export * from './types';
export { NebulaAIEditor } from './editor/NebulaAIEditor';
export { NebulaAIThemes, registerNebulaAIThemes } from './themes/NebulaAITheme';
export { LanguageSupport, LanguageConfig } from './language/LanguageSupport';

// Re-export monaco-editor for convenience
export * as monaco from 'monaco-editor';

// Default export
export { NebulaAIEditor as default } from './editor/NebulaAIEditor';