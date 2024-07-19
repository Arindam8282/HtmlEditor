import React, { Component } from 'react';

const CustomToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
    <select className="ql-size"></select>

  </span>
  <span className="ql-formats">

      <button className="ql-custom-highlight">
        comment
      </button>
      </span>
  </div>
);
export default CustomToolbar;