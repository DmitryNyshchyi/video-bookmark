import type * as CSS from 'csstype';
import React, { FC, HTMLAttributes } from 'react';

import classes from './Heading.module.scss';

interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  margin?: CSS.Properties['margin'];
}

const Heading: FC<HeadingProps & HTMLAttributes<HTMLHeadingElement>> = ({
  level = 'h3',
  children,
  className,
  margin,
  ...props
}) => {
  const HeadingTag = (props: HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(level, props, children);

  return (
    <HeadingTag style={{ margin }} {...props} className={classes.heading}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
