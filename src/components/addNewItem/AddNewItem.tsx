import { Formik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';
import React from 'react';
import * as yup from 'yup';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addItem, VideoItemProps } from '../../redux/slices/videoListSlice';
import { URL_REGEX } from '../../utils';
import Heading from '../heading/Heading';
import AddNewItemForm from './components/AddNewItemForm';

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is a required'),
  videoSrc: yup
    .string()
    .matches(URL_REGEX, 'Please enter correct url')
    .required('Video link is a required'),
});

export type VideoItemValuesProps = VideoItemProps;

const AddNewItem = () => {
  const dispatch = useAppDispatch();

  const initialValues: VideoItemValuesProps = {
    title: '',
    videoSrc: '',
    timeIntervals: [],
  };

  const handleSubmit = async (
    values: VideoItemValuesProps,
    { resetForm }: FormikHelpers<VideoItemValuesProps>,
  ) => {
    await dispatch(addItem(values));
    await resetForm();
  };

  return (
    <section>
      <Heading level="h2">Add new video bookmark</Heading>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <AddNewItemForm />
      </Formik>
    </section>
  );
};

export default AddNewItem;
