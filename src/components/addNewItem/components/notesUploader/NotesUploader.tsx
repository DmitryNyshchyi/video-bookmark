import { useFormikContext } from 'formik';
import React, { useCallback } from 'react';
import { Accept, useDropzone } from 'react-dropzone';

import { megaBytesToBytes } from '../../../../utils';
import classes from './NotesUploader.module.scss';

interface VideoUploaderProps {
  maxSize?: number;
  multiple?: boolean;
  accept?: Accept;
}

const NotesUploader = <T extends object>({
  maxSize = 10,
  accept = { 'application/json': ['.json'] },
}: VideoUploaderProps) => {
  const { values, setValues } = useFormikContext<T>();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        setValues({ ...values, ...JSON.parse(reader.result as string) });
      };

      reader.readAsText(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept,
    multiple: false,
    maxSize: megaBytesToBytes(maxSize),
    onDrop,
  });

  return (
    <div className={classes.wrapper}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p className={classes.label}>
          You can import video notes from a file by simply clicking on this text
        </p>
      </div>
    </div>
  );
};

export default NotesUploader;
