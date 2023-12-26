import Link from "next/link"

type Props = {}

const Page = (props: Props) => {
	const productId = 100;
	return (
		<>
			<Link
				href='/'
			>
				Home
			</Link>
			<div>products</div>
			<ul>
				<li>
					<Link
						href='products/1'
					>
						product 1
					</Link>
				</li>
				<li>
					<Link
						href='products/2'
					>
						product 2
					</Link>
				</li>
				<li>
					<Link
						href='products/3'
						replace
					>
						product 3 (Replace)
					</Link>
				</li>
				<li>
					<Link
						href={`products/${productId}`}
					>
						product {productId}
					</Link>
				</li>
			</ul>
		</>
	);
};

export default Page;