export interface cardDataType {
	id: number,
	name: string,
	location: string,
	avatar?: string,
	text: string
}
export interface NavMenuItemType {
	id: number
	title: string
	link: string
}

export interface QuestionsType {
	id: number
	question: string
	answer: string
}