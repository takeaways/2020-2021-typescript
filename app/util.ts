export function getIsValidEnumValue(enumObj: any, value: number | string) {
	return Object.keys(enumObj)
		.filter((key) => isNaN(Number(key)))
		.some((key) => enumObj[key] === value);
}
