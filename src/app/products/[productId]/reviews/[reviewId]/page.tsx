import { notFound } from 'next/navigation';

type Props = {
	params: {
		productId: string,
		reviewId: string,
	},
};

const Page = ({ params }: Props) => {

	if (parseInt(params.reviewId) > 1000) {
		notFound()
	};

	return (
		<div>review {params.reviewId} about product {params.productId}</div>
	);
};

export default Page;