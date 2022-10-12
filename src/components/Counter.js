import {useState} from 'react';


import {Buttons} from './styled.components/Buttons.styled';

export default function Example() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>You clicked {count} times</p>
			<Buttons onClick={() => setCount(count + 1)}>Click me</Buttons>
			<Buttons onClick={() => setCount(count - 1)}>Click me</Buttons>
		</div>
	);
}
