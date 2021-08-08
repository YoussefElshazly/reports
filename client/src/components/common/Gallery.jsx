import React, { forwardRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core';

import { useWidth } from '../../hooks';

export default forwardRef((props, ref) => {
  const {
    xs = 12,
    sm = xs,
    md = sm || xs,
    lg = md || sm || xs,
    xl = lg || md || sm || xs,
    variant,
    horizontalSpacing,
    verticalSpacing,
    images,
    className,
    ...rest
  } = props;
  const [columns, setColumns] = useState();
  const classes = useStyles({
    horizontalSpacing,
    verticalSpacing,
    columns,
  });
  const width = useWidth();

  useEffect(() => {
    const _columns = 12 / { xs, sm, md, lg, xl }[width];

    if (columns !== _columns) {
      setColumns(_columns);
    }
  }, [width]); // eslint-disable-line react-hooks/exhaustive-deps

  const getImagesInColumns = () => {
    const imagesInColumns = [];

    const _images = images.map((image, index) => (
      <img key={index} src={image} alt={_.padStart(index + 1, 3, '0')} className={classes.image} />
    ));

    for (let index = 0; index < images.length; index++) {
      const columnIndex = index % columns;

      if (!imagesInColumns[columnIndex]) {
        imagesInColumns[columnIndex] = [];
      }

      imagesInColumns[columnIndex].push(_images[index]);
    }

    return imagesInColumns;
  };

  return (
    <div className={clsx(className, classes.gallery)} {...rest} ref={ref}>
      {getImagesInColumns().map((items, index) => (
        <div key={index} className={classes.column}>
          {items}
        </div>
      ))}
    </div>
  );
});

const useStyles = makeStyles((theme) => ({
  gallery: {
    display: 'flex',
    marginLeft: (props) => theme.spacing(-props.verticalSpacing),
    width: 'auto',
  },
  column: {
    width: (props) => `${100 / props.columns}%`,
    paddingLeft: (props) => theme.spacing(props.verticalSpacing),
    '& > *:not(:last-child)': {
      paddingBottom: (props) => theme.spacing(props.horizontalSpacing),
    },
  },
  image: {
    display: 'block',
    width: '100%',
  },
}));
