import { useEffect, useState } from 'react';

const getTimeString = () => {
	const now = new Date();
	const hours = `0${now.getHours()}`.slice(-2);
	const minutes = `0${now.getMinutes()}`.slice(-2);
	const seconds = `0${now.getSeconds()}`.slice(-2);
	return `${hours}:${minutes}:${seconds}`;
};

const useClock = () => {
	const [timeString, setTimeString] = useState(() => getTimeString());

	useEffect(() => {
		const clockIntervalID = setInterval(() => {
			const newTimeString = getTimeString();
			setTimeString(newTimeString);
		}, 1000);
		return () => {
			clearInterval(clockIntervalID);
		};
	}, []);

	return timeString;
};

export default useClock;
