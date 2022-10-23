import { FieldInputProps } from 'formik/dist/types';
import type { FocusEvent } from 'react';

export const onBlurFn =
  (field: FieldInputProps<unknown>, isTrim?: boolean) =>
  (e: FocusEvent<HTMLInputElement>) => {
    let event = e;

    if (isTrim) {
      event = {
        ...e,
        target: { ...e?.target, value: e?.target?.value?.trim() },
      };

      field.onChange(field.name)(event);
    }

    field.onBlur(field.name)(event);
  };
