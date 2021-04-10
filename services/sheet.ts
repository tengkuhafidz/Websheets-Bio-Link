import axios from 'axios'
import {SheetsDimension, SHEET_ID, SHEET_KEY} from '../utils/constants'
import {transformItemsData, transformSiteData} from './transformers'

const fetchSheetsData = async (
	tabName: string,
	cellRange: string,
	majorDimension: SheetsDimension,
) => {
	return await axios.get(
		`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${tabName}!${cellRange}?majorDimension=${majorDimension}&key=${SHEET_KEY}`,
	)
}

export const getItems = async () => {
	const {data} = await fetchSheetsData('items', 'A2:D', SheetsDimension.ROWS)
	const allItems = transformItemsData(data.values)
	return allItems.filter(item => item.isActive)
}

export const getSiteData = async () => {
	const {data} = await fetchSheetsData(
		'site',
		'B1:B19',
		SheetsDimension.COLUMNS,
	)
	return transformSiteData(data.values[0])
}
