import {useContext} from 'react'
import SiteDataContext from '../../utils/SiteDataContext'

export default function Profile() {
	const {imageUrl, name, bio} = useContext(SiteDataContext)
	return (
		<div className="py-6">
			<img src={imageUrl} className="rounded-full h-28 mx-auto" />
			<h1 className="text-xl font-bold mt-4">{name}</h1>
			<p className="mt-2">{bio}</p>
		</div>
	)
}
