import {Item} from '../../../utils/constants'

interface Props {
	item: Item
}

export default function ButtonItem({item}: Props) {
	const {title, destinationUrl, isPriority} = item
	return (
		<div className="mb-4">
			<a
				href={destinationUrl}
				target="_blank"
				className="w-full block py-4 font-semibold rounded-2xl border-b-8 border-gray-800 bg-gray-600 text-gray-100 hover:bg-gray-700 hover:border-gray-900 "
			>
				{title}
			</a>
		</div>
	)
}
