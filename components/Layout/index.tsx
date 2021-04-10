import Footer from './footer'
import SEO from './seo'

export default function Layout({children}) {
	return (
		<div className="text-gray-900 bg-gray-100">
			<div className="container mx-auto max-w-3xl py-4 px-4 text-center flex flex-col min-h-screen">
				<SEO />
				<main className="flex-grow">{children}</main>
				<Footer />
			</div>
		</div>
	)
}
