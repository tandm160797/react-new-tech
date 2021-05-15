import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const randomColor = (colors, currentColor) => {
	let idx = Math.floor(Math.random() * colors.length);

	while (currentColor === colors[idx]) {
		idx = Math.floor(Math.random() * colors.length);
	}
	return colors[idx];
};

const useMagicColor = (props) => {
	const { colors } = props;

	const [color, setColor] = useState(() => '#ff86b8');

	const colorRef = useRef('#ff86b8');

	useEffect(() => {
		const magicColorIntervalID = setInterval(() => {
			const newColor = randomColor(colors, colorRef.current);
			colorRef.current = newColor;
			setColor(newColor);
		}, 1000);
		return () => {
			clearInterval(magicColorIntervalID);
		};
	}, []);
	return color;
};

useMagicColor.propTypes = {
	colors: PropTypes.array.isRequired
};

export default useMagicColor;
