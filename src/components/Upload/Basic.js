import React from 'react';
import {useDropzone} from 'react-dropzone';
import { Button } from 'semantic-ui-react'

const Basic = () => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>{file.path} - {file.size} bytes</li>
  ));

  return (
    <div {...getRootProps({className: 'dropzone'})}>
      <input {...getInputProps()} />
      <Button>Add source code here</Button>
      <ul>{files}</ul>
    </div>
  );
}

export default Basic;