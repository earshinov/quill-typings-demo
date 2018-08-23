import '../node_modules/quill/dist/quill.snow.css';
import { Delta, Quill, QuillType } from './quill';


const _Delta: typeof Delta = Quill.import('delta');

class SampleQuillModule {

  constructor(quill: QuillType, options = {}) {
    window.setTimeout(() => {
      quill.updateContents(new _Delta([
        { insert: 'Hello from SampleQuillModule!' },
      ]));
    });
  }
}

Quill.register('modules/sampleQuill', SampleQuillModule);


// Taken from the Quill Playground pen:
// https://codepen.io/quill/pen/KzZqZx
var quill = new Quill('#editor-container', {
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block']
    ],
    sampleQuill: {},
  },
  theme: 'snow'
});
