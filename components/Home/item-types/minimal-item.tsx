import {Item} from '../../../utils/constants'

interface Props {
	item: Item
}

export default function MinimalItem({item}: Props) {
	const {title, destinationUrl, isPriority} = item
	return (
		<div className="mb-4">
			<a
				href={destinationUrl}
				target="_blank"
				className={`w-full block border border-gray-900 py-4 font-semibold rounded-sm hover:bg-gray-900 hover:text-gray-100 ${
					isPriority ? 'animate' : ''
				}`}
			>
				{title}
			</a>
		</div>
	)
}
