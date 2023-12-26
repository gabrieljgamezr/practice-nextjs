type Props = {
	children: React.ReactNode,
}

const Layout = ({children}: Props) => {
	return (
		<>
			{children}
			<h2>F</h2>
		</>
	);
};

export default Layout;