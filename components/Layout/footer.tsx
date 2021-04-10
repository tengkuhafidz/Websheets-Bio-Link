export default function Footer() {
	return (
		<div className="py-4 text-center text-gray-500 text-sm font-light h-10">
			<WebsheetsBranding />
		</div>
	)
}

function WebsheetsBranding() {
	return (
		<p className="mb-4">
			Powered by{' '}
			<a
				href="https://websheets.co"
				target="_blank"
				className="hover:text-green-600 underline"
			>
				Websheets
			</a>
		</p>
	)
}
