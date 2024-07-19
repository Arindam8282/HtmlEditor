// src/QuillEditor.js
import React, { useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import 'quill/dist/quill.snow.css';
import Highlight from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // Import your preferred theme
import CustomToolbar from '../CustomToolbar';
const QuillEditor = ({ value, onChange }) => {
  const quillRef = useRef(null);

  useEffect(() => {    
    const editor = document.querySelector('.ql-editor');
    editor.addEventListener('input', (event) => {
      const highlightedCode = Highlight.highlight(event.target.innerText, { language: 'javascript' }).value;
      // console.log("highlighted",highlightedCode);
      // editor.innerHTML = highlightedCode;
    });

  }, [value]);
  const handleHighlightText = (quill) => {
    const range = quill.getSelection();
    if (range) {
        quill.formatText(range.index, range.length, { 'background': 'yellow','highlighted':true });
    }
};

  useEffect(() => {
    const quill = quillRef.current.getEditor();
    const highlightButton = document.querySelector('.ql-custom-highlight');
    highlightButton.addEventListener('click', () => {
        handleHighlightText(quill);
    });
    quill.on('text-change', () => {
      const highlightedText = quill.getContents().ops.filter(op => op.attributes && op.attributes.highlighted);
      console.log('Highlighted Text:', highlightedText);
  });
}, []);

  const modules = {
    toolbar: {
      container: "#toolbar",
    },
  };

  return (<>
    <CustomToolbar />
    <ReactQuill theme='snow' modules={modules} ref={quillRef} onChange={onChange} />
    </>
  );
};

export default QuillEditor;
