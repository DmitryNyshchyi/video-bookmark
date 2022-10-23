import { Field, useFormikContext } from 'formik';
import React from 'react';

import Button from '../../button/Button';
import Input from '../../input/Input';
import Textarea from '../../Textarea';
import TimeIntervals from '../../timeIntervals/TimeIntervals';
import VideoUploader from '../../videoUploader/VideoUploader';
import { VideoItemValuesProps } from '../AddNewItem';

const AddNewItemForm = () => {
  const { submitForm, isSubmitting, dirty } =
    useFormikContext<VideoItemValuesProps>();

  return (
    <>
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
        ADD
      </Button>
    </>
  );
};

export default AddNewItemForm;
