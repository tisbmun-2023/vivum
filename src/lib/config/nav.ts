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
        isOnPage: (path: string) => path === '/about'
    },
]