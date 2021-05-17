export const languages = [
	'Go',
	'Java',
	'JavaScript',
	'TypeScript',
	'Python',
	'Ruby',
	'Rust',
	'Scala',
]

export const getInitialFilterValue = (params: any) => {
	if (!params.language) return []
	if (typeof params.language === 'string') return [params.language]
	return params.language
}
