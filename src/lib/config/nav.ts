interface Nav {
	id: string;
	name: string;
	url: string;
	isOnPage: (path: string) => boolean;
}

export const nav: Nav[] = [
	{
		id: 'home',
		name: 'Home',
		url: '/',
		isOnPage: (path: string) => path === '/'
	},
	{
		id: 'about',
		name: 'About',
		url: '/about',
		isOnPage: (path: string) => path.startsWith('/about')
	},
	{
		id: "sponsors",
		name: "Sponsors",
		url: "/sponsors",
		isOnPage: (path: string) => path.startsWith("/sponsors")
	},
	{
		id: "contact-us",
		name: "Contact Us",
		url: "/contact",
		isOnPage: (path: string) => path.startsWith("/contact")
	}
];
