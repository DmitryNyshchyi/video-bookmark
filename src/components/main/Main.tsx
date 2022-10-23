import React, { FC, HTMLAttributes } from 'react';

import classes from './Main.module.scss';

const Main: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => (
  <main className={classes.wrapper}>{children}</main>
);

export default Main;
