import {Item} from '../../../utils/constants'

interface Props {
	item: Item
}

export default function RoundedItem({item}: Props) {
	const {title, destinationUrl, isPriority} = item
	return (
		<div className="mb-4">
			<a
				href={destinationUrl}
				target="_blank"
				className="w-full block py-4 font-semibold rounded-full border-2 border-gray-900 bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-gray-900"
			>
				{title}
			</a>
		</div>
	)
}
