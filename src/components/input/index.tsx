import * as styles from './index.module.css';
import cn from 'classnames';

export type InputProps = {
	className?: string;
};
// eslint-disable-next-line react/prop-types
export const Input: React.FC<InputProps> = ({ className }) => {
	return <input className={cn(styles.input, className)} />;
};
