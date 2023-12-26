type Props = {
	params: {
		slug: string[],
	},
};

const Page = ({params}: Props) => {

	if (params.slug.length === 2) {
		return (
			<div>Viewing docs for faeture {params.slug[0]} and concept {params.slug[1]}</div>
		);
	} else if (params.slug.length === 2) {
		return (
			<div>Viewing docs for faeture {params.slug[0]}</div>
		);
	}
	
	return (
		<div>Docs</div>
	)
};

export default Page;