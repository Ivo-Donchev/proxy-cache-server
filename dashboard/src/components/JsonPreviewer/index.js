import React from 'react';
import ReactJson from 'react-json-view';

import './styles.css';

const THEME = 'twilight';
const INDENT = 2;

const JsonPreviewer = ({jsonObject}) => (
  <div className="JsonPreviewer">
    <ReactJson indent={INDENT} theme={THEME} src={jsonObject} />
  </div>
);

export default JsonPreviewer;

/*
  TODO:
  1) Add dropdowns for react-json-view options (https://mac-s-g.github.io/react-json-view/demo/dist/)
  2) Fetch JSON from the BE
  3) Edit JSON
*/
