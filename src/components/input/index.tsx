import cn from 'classnames';

import styles from './index.module.css';

export type InputProps = {
	className?: string;
	foo: boolean;
};


const helper = () => {
	const a = 1;



	const b = 2;

	return 3;
};

export const Input: React.FC<InputProps> = ({ className }) => (
	<input className={ cn(styles.input, className) } />
);
