import classNames from 'classnames';
import React, { FC, HTMLAttributes, useRef } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useOutsideAlerter } from '../../hooks/useClickOutside';
import {
  closeSidebar,
  layoutState,
  openSidebar,
} from '../../redux/slices/layoutSlice';
import {
  clearItemForEditing,
  videoListState,
} from '../../redux/slices/videoListSlice';
import classes from './Sidebar.module.scss';

const Sidebar: FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
  const { isSidebarOpen } = useAppSelector(layoutState);
  const { editVideoItem } = useAppSelector(videoListState);
  const dispatch = useAppDispatch();
  const asideRef = useRef<HTMLElement>(null);

  useOutsideAlerter(asideRef, () => dispatch(closeSidebar()));

  return (
    <aside
      ref={asideRef}
      className={classNames(classes.wrapper, {
        [classes.isOpen]: isSidebarOpen,
      })}
      onClick={() => dispatch(openSidebar())}
    >
      <button
        className={classes.button}
        onClick={(e) => {
          if (isSidebarOpen) {
            e.stopPropagation();
            dispatch(closeSidebar());

            if (!!editVideoItem) {
              dispatch(clearItemForEditing());
            }
          }
        }}
      >
        &#65291;
      </button>

      <div className={classes.substrate} />
      {children}
    </aside>
  );
};

export default Sidebar;
