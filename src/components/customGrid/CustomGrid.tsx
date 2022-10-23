import React, { PropsWithChildren, ReactNode } from 'react';

import classes from './CustomGrid.module.scss';

export interface CustomGridProps<T> {
  content: T[];
  render: PropsWithChildren<(content: T[]) => ReactNode>;
  isLoading?: boolean;
}

const CustomGrid = <T extends object>({
  content,
  render,
  isLoading = false,
}: CustomGridProps<T>) => {
  const isContent = content && content.length > 0;

  return (
    <section className={classes.wrapper}>
      {isLoading ? (
        <div className={classes.loading}>Loading...</div>
      ) : isContent ? (
        render(content)
      ) : (
        <div className={classes.notFound}>Not found</div>
      )}
    </section>
  );
};

export default CustomGrid;
