import React from 'react';

import { Input } from './components/input';

export const App: React.FC = () => (
	<div>
		<h1>Hello world</h1>
		<Input className='t' foo={ true } />
	</div>
);
