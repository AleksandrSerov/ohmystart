import cn from 'classnames';

import styles from './index.module.css';

export type InputProps = {
	className?: string;
};

export const Input: React.FC<InputProps> = ({ className }) => {
	return <input className={cn(styles.input, className)} />;
};
