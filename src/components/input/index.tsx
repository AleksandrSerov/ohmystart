import cn from 'classnames';

import styles from './index.module.css';

export type InputProps = {
	className?: string;
	foo: boolean;
};

export const Input: React.FC<InputProps> = ({ className }) => (
	<input className={ cn(styles.input, className) } />
);
