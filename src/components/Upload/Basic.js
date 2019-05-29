import React from 'react';
import {useDropzone} from 'react-dropzone';
import { Button, Header, Icon, Segment, Divider, Grid, Input } from 'semantic-ui-react'

const Basic = () => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>{file.path} - {file.size} bytes</li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default Basic;