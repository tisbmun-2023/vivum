interface SocialMedia {
    id: string;
    url: string;
    icon: string;
    alt: string;
}

export const socialMedia: SocialMedia[] = [
    {
        id: 'facebook',
        url: 'https://www.facebook.com/your-facebook-page',
        icon: 'mdi:facebook',
        alt: "Facebook page"
    },
    {
        id: 'twitter',
        url: 'https://twitter.com/your-twitter-page',
        icon: 'mdi:twitter',
        alt: "Twitter page"
    }
]