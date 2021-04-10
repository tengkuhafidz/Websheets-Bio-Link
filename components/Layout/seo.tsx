import Head from 'next/head'
import {useContext} from 'react'
import {defaultSiteData} from '../../utils/constants'
import SiteDataContext from '../../utils/SiteDataContext'

export default function SEO() {
	const {name, bio, imageUrl} = useContext(SiteDataContext)
	const fullSeoTitle = `${name} | Powered by ${defaultSiteData.name}`
	return (
		<Head>
			<link rel="icon" href="/favicon.ico" />
			{/* HTML Meta Tags */}
			<title>{fullSeoTitle}</title>
			<meta name="description" content={bio} />

			{/* Facebook Meta Tags */}
			<meta property="og:url" content="https://websheets.co/" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={fullSeoTitle} />
			<meta property="og:description" content={bio} />
			<meta property="og:image" content={imageUrl} />

			{/* Twitter Meta Tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="websheets.co" />
			<meta property="twitter:url" content="https://websheets.co/" />
			<meta name="twitter:title" content={fullSeoTitle} />
			<meta name="twitter:description" content={bio} />
			<meta name="twitter:image" content={imageUrl} />
		</Head>
	)
}
