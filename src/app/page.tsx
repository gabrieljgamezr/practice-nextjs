import Link from "next/link";

type Props = {}

const Page = (props: Props) => {
	return (
		<>
			<div>Home</div>
			<Link
				href='/blog'
			>
				Blog
			</Link>
			<Link
				href='/products'
			>
				Products
			</Link>
		</>
	);
};

export default Page;