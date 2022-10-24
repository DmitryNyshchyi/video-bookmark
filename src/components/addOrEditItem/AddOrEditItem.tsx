import { Formik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';
import React from 'react';
import * as yup from 'yup';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { closeSidebar } from '../../redux/slices/layoutSlice';
import {
  addItem,
  clearItemForEditing,
  updateItem,
  VideoItemProps,
  videoListState,
} from '../../redux/slices/videoListSlice';
import Heading from '../heading/Heading';
import AddOrEditItemForm from './components/AddOrEditItemForm';

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is a required'),
  videoSrc: yup.string().required('Video link is a required'),
});

export type VideoItemValuesProps = VideoItemProps;

const AddOrEditItem = () => {
  const dispatch = useAppDispatch();
  const { editVideoItem } = useAppSelector(videoListState);
  const isEditMode = !!editVideoItem;

  const initialValues: VideoItemValuesProps = {
    title: '',
    videoSrc: '',
    timeIntervals: [],
  };

  const handleSubmit = (
    values: VideoItemValuesProps,
    { resetForm }: FormikHelpers<VideoItemValuesProps>,
  ) => {
    if (isEditMode) dispatch(clearItemForEditing());
    dispatch(isEditMode ? updateItem(values) : addItem(values));
    dispatch(closeSidebar());
    resetForm();
  };

  return (
    <section>
      <Heading level="h2" margin="0 0 15px">
        {isEditMode ? 'Edit video bookmark' : ' Add new video bookmark'}
      </Heading>

      <Formik
        enableReinitialize
        initialValues={{
          ...initialValues,
          ...(isEditMode ? editVideoItem : {}),
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialStatus={{ isEditMode }}
      >
        <AddOrEditItemForm />
      </Formik>
    </section>
  );
};

export default AddOrEditItem;
