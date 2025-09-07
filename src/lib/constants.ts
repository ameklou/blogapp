export const SITE_CONFIG = {
  name: 'BlogApp',
  description: 'A modern blog built with Next.js and PayloadCMS',
  url: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  author: 'BlogApp Team',
  postsPerPage: 6,
  maxPostsInSearch: 10,
}

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
]

export const SOCIAL_LINKS = [
  { href: 'https://twitter.com', label: 'Twitter', icon: 'Twitter' },
  { href: 'https://github.com', label: 'GitHub', icon: 'Github' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'Linkedin' },
]
