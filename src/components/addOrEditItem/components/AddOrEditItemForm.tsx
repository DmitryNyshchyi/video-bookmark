import { Field, useFormikContext } from 'formik';
import React from 'react';

import Button from '../../button/Button';
import Input from '../../input/Input';
import Textarea from '../../Textarea';
import { VideoItemValuesProps } from '../AddOrEditItem';
import NotesUploader from './notesUploader/NotesUploader';
import TimeIntervals from './timeIntervals/TimeIntervals';
import VideoUploader from './videoUploader/VideoUploader';

const AddOrEditItemForm = () => {
  const {
    submitForm,
    isSubmitting,
    dirty,
    initialStatus: { isEditMode },
  } = useFormikContext<VideoItemValuesProps>();

  return (
    <>
      <NotesUploader<VideoItemValuesProps> />

      <Field
        id="title"
        name="title"
        as={Input}
        label="Title *"
        placeholder="Enter title"
      />

      <VideoUploader<VideoItemValuesProps> name="videoSrc" />

      <Field
        id="timeIntervals"
        name="timeIntervals"
        as={TimeIntervals}
        label="Time intervals"
      />

      <Field
        id="description"
        name="description"
        as={Textarea}
        label="Description"
        placeholder="Enter description"
      />

      <Button
        isMobileFullWidth
        onClick={submitForm}
        disabled={!dirty || isSubmitting}
      >
        {isEditMode ? 'SAVE' : 'ADD'}
      </Button>
    </>
  );
};

export default AddOrEditItemForm;
