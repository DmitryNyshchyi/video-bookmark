import React, { FC, HTMLAttributes } from 'react';

import classes from './Layout.module.scss';

const Layout: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => (
  <div className={classes.wrapper}>{children}</div>
);

export default Layout;
