import cn from 'classnames';

import * as styles from './index.module.css';

export type InputProps = {
	className?: string;
};

export const Input: React.FC<InputProps> = ({ className }) => {
	console.log(styles);
	console.log(className);
	return <input className={cn(styles.input, className)} />;
};
