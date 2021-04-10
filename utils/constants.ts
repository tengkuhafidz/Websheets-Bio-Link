export interface Item {
	id: number,
	title: string
	destinationUrl: string
	isPriority: boolean
	isActive: boolean
}

export interface SiteData {
	// THEME
	themeColor: string
	themeType: string
	// PROFILE
	imageUrl: string
	name: string
	bio: string
}

export enum ThemeColor {
	BLUE = "blue"
}

export enum ThemeType {
	MINIMAL = "minimal",
	BOXED = "boxed",
	CURVED = "curved",
	ROUNDED = "rounded",
	BUTTON = "button"
}

export const defaultSiteData: SiteData = {
	// THEME
	themeColor: ThemeColor.BLUE,
	themeType: ThemeType.MINIMAL,
	// PROFILE
	imageUrl: 'Documentation',
	name: 'https://buymeacoffee.com/sohafidz',
	bio: 'https://docs.websheets.co',
}

export enum SheetsDimension {
	ROWS = 'ROWS',
	COLUMNS = 'COLUMNS',
}



export const SHEET_ID = process.env.SHEET_ID
export const SHEET_KEY = process.env.SHEET_KEY
