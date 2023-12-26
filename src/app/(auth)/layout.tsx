'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLink = [
	{
		name: 'Login',
		href: '/login',
	},
	{
		name: 'Register',
		href: '/register',
	},
	{
		name: 'Forgot Password',
		href: '/forgot-password',
	},
];

type Props = {
	children: React.ReactNode,
}

const AuthLayout = ({children}: Props) => {

	const pathname = usePathname();
	return (
		<div>
			{
				navLink.map((link) => {
					const isActive = pathname.startsWith(link.href);
					return (
						<Link
							key={link.name}
							href={link.href}
							className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
						>
							{link.name}
						</Link>
					);
				})
			}
			{children}
		</div>
	);
};

export default AuthLayout;