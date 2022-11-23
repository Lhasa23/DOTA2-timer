const timeFormat = (time: number): string => {
	const lessThanTwo = time.toString().length < 2

	return lessThanTwo ? `0${time}` : `${time}`
}

export default timeFormat
