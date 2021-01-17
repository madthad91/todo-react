import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.css';

const Box = () => (
  <div className={styles.Box} data-testid="Box">
    Box Component
  </div>
);

Box.propTypes = {};

Box.defaultProps = {};

export default Box;
