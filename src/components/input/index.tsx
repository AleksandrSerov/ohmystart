import React from 'react';
import cn from 'classnames';

import styles from './index.module.css';

export type InputProps = {
	className?: string;
};

export const Input: React.FC<InputProps> = ({ className }) => (
	<input className={ cn(styles.input, className) } />
);
