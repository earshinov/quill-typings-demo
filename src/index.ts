import '../node_modules/quill/dist/quill.snow.css';
import { Quill, QuillType } from './quill';


class SampleQuillModule {

  constructor(quill: QuillType, options = {}) {
    window.setTimeout(() => {
      quill.insertText(0, 'Hello from SampleQuillModule!');
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
