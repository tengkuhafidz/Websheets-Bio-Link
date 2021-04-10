import React, {useContext} from 'react'
import {ThemeType} from '../../utils/constants'
import SiteDataContext from '../../utils/SiteDataContext'
import BoxedItem from './item-types/boxed-item'
import ButtonItem from './item-types/button-item'
import CurvedItem from './item-types/curved-item'
import MinimalItem from './item-types/minimal-item'
import RoundedItem from './item-types/rounded-item'

export default function ItemsList({items}) {
	const {themeType} = useContext(SiteDataContext)

	const renderItemsByThemeType = themeType => {
		switch (themeType) {
			case ThemeType.MINIMAL:
				return items.map(item => <MinimalItem item={item} key={item.id} />)
			case ThemeType.BOXED:
				return items.map(item => <BoxedItem item={item} key={item.id} />)
			case ThemeType.CURVED:
				return items.map(item => <CurvedItem item={item} key={item.id} />)
			case ThemeType.ROUNDED:
				return items.map(item => <RoundedItem item={item} key={item.id} />)
			case ThemeType.BUTTON:
				return items.map(item => <ButtonItem item={item} key={item.id} />)
			default:
				return items.map(item => <MinimalItem item={item} key={item.id} />)
		}
	}

	return <div>{renderItemsByThemeType(themeType)}</div>
}
