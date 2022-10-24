import { Field, useFormikContext } from 'formik';
import React, {
  useCallback,
  useMemo,
  useState,
  useEffect,
  CSSProperties,
} from 'react';
import { Accept, useDropzone } from 'react-dropzone';

import { megaBytesToBytes } from '../../../../utils';
import Input from '../../../input/Input';
import VideoPreview from '../../../VideoPreview';
import classes from './VideoUploader.module.scss';

interface VideoUploaderProps<T> {
  name: keyof T;
  maxSize?: number;
  multiple?: boolean;
  accept?: Accept;
}

const baseStyle = {
  padding: '10px 0',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#7C8DA5',
  borderStyle: 'dashed',
  backgroundColor: '#ffffff',
  color: '#a7a9af',
  textAlign: 'center',
  fontSize: 14,
};

const focusedStyle = {
  borderColor: '#475B74',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#EB5757',
};

const VideoUploader = <T extends object>({
  name,
  maxSize = 50,
  multiple = false,
  accept = { 'video/*': [] },
}: VideoUploaderProps<T>) => {
  const [files, setFiles] = useState<Array<string | ArrayBuffer | null>>([]);
  const { values, setFieldValue } = useFormikContext<T>();

  const previewSrc = values[name];

  useEffect(() => {
    if (files[0]) {
      setFieldValue(name as string, files[0]);
    }
  }, [files]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => setFiles([...files, reader.result]);
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept,
      onDrop,
      multiple,
      maxSize: megaBytesToBytes(maxSize),
    });

  const style = useMemo(
    () =>
      ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {}),
      } as CSSProperties),
    [isFocused, isDragAccept, isDragReject],
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.label}>
        You can add a link to the file or upload the file from your PC *
      </div>

      {previewSrc ? (
        <VideoPreview src={previewSrc as string} />
      ) : (
        <>
          <Field id={name} name={name} as={Input} placeholder="Enter a link" />
          <div className={classes.separator}>or</div>
          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoUploader;
