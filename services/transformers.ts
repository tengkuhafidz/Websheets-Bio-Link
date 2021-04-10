import {defaultSiteData, Item, SiteData} from '../utils/constants'

const stringToBoolean = (field: string) => field === 'TRUE'
const toLowercase = (field: string) => field?.toLowerCase()

export const transformItemsData = (itemValues: any[]): Item[] => {
	return itemValues.map((itemValue, index) => ({
		id: index,
		title: itemValue[0],
		destinationUrl: itemValue[1],
		isPriority: stringToBoolean(itemValue[2]),
		isActive: stringToBoolean(itemValue[3]),
	}))
}

export const transformSiteData = (siteDataValue: any[]): SiteData => ({
	// THEME
	themeColor: toLowercase(siteDataValue[1]) || defaultSiteData.themeColor,
	themeType: toLowercase(siteDataValue[2]) || defaultSiteData.themeType,
	// NAVBAR
	imageUrl: siteDataValue[4],
	name: siteDataValue[5],
	bio: siteDataValue[6],
})
