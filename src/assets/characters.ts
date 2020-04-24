/* prettier-ignore */

export interface CharactersType {
	name: string,
	title: string,
	active?: boolean,
	data: Array<string>,
	id: string
}

export const Characters: CharactersType[] = [
	{
		id: '0-9',
		name: 'numeral',
		title: 'Numeral',
		data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		active: true
	},
	{
		id: 'lat',
		name: 'latinLowercase',
		title: 'Latin Lowercase',
		data: [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'w',
			'x',
			'y',
			'z'
		],
		active: true
	},
	{
		id: 'LAT',
		name: 'latinUppercase',
		title: 'Latin Uppercase',
		data: [
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z'
		],
		active: true
	},
	{
		id: 'sc',
		name: 'basicSpecialCharacters',
		title: 'Basic Special characters',
		data: [
			'.',
			',',
			':',
			';',
			'-',
			'–',
			'—',
			'•',
			'·',
			'…',
			'“',
			'‘',
			'’',
			'‘',
			'‚',
			'“',
			'”',
			'„',
			'‹',
			'›',
			'«',
			'»',
			'/',
			'"',
			'?',
			'!',
			'¿',
			'¡',
			'(',
			')',
			'[',
			']',
			'{',
			'}',
			'†',
			'*',
			'&',
			'©',
			'®',
			'@',
			'#',
			'§',
			'+',
			'×',
			'=',
			'_',
			'°',
			'|'
		],
		active: true
	},
	{
		id: 'lat-acc',
		name: 'basicAccents',
		title: 'Basic Accents',
		data: [
			'á',
			'â',
			'à',
			'ä',
			'å',
			'ã',
			'æ',
			'ç',
			'é',
			'ê',
			'è',
			'ë',
			'í',
			'î',
			'ì',
			'ï',
			'ı',
			'ñ',
			'ó',
			'ô',
			'ò',
			'ö',
			'õ',
			'ø',
			'œ',
			'š',
			'ß',
			'ú',
			'û',
			'ù',
			'ü',
			'ý',
			'ÿ',
			'ž',
			'Á',
			'Â',
			'À',
			'Ä',
			'Å',
			'Ã',
			'Æ',
			'Ç',
			'É',
			'Ê',
			'È',
			'Ë',
			'Í',
			'Î',
			'Ì',
			'Ï',
			'Ñ',
			'Ó',
			'Ô',
			'Ò',
			'Ö',
			'Õ',
			'Ø',
			'Œ',
			'Š',
			'Ú',
			'Û',
			'Ù',
			'Ü',
			'Ý',
			'Ÿ'
		],
		active: true
	},
	{
		id: 'cur',
		name: 'currency',
		title: 'currency',
		data: ['$', ' ¢', ' £', '¥']
	},
	{
		id: 'cyr',
		name: 'cyrillicLowercase',
		title: 'Cyrillic Lowercase',
		data: [
			'а',
			'б',
			'в',
			'г',
			'д',
			'е',
			'ё',
			'ж',
			'з',
			'и',
			'й',
			'к',
			'л',
			'м',
			'н',
			'о',
			'п',
			'р',
			'с',
			'т',
			'у',
			'ф',
			'х',
			'ц',
			'ч',
			'ш',
			'щ',
			'ъ',
			'ы',
			'ь',
			'э',
			'ю',
			'я'
		]
	},
	{
		id: 'CYR',
		name: 'cyrillicUppercase',
		title: 'Cyrillic Uppercase',
		data: [
			'а',
			'б',
			'в',
			'г',
			'д',
			'е',
			'ё',
			'ж',
			'з',
			'и',
			'й',
			'к',
			'л',
			'м',
			'н',
			'о',
			'п',
			'р',
			'с',
			'т',
			'у',
			'ф',
			'х',
			'ц',
			'ч',
			'ш',
			'щ',
			'ъ',
			'ы',
			'ь',
			'э',
			'ю',
			'я'
		]
	},
	{
		id: 'arm',
		name: 'armenianLowercase',
		title: 'Armenian Lowercase',
		data: [
			'ա',
			'բ',
			'գ',
			'դ',
			'ե',
			'զ',
			'է',
			'ը',
			'թ',
			'ժ',
			'ի',
			'լ',
			'խ',
			'ծ',
			'կ',
			'հ',
			'ձ',
			'ղ',
			'ճ',
			'մ',
			'յ',
			'ն',
			'շ',
			'ո',
			'չ',
			'պ',
			'ջ',
			'ռ',
			'ս',
			'վ',
			'տ',
			'ր',
			'ց',
			'ւ',
			'փ',
			'ք',
			'օ',
			'ֆ',
			'ո',
			'ւ',
			'և'
		]
	}
];