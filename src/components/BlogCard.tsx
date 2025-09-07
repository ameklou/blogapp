import Link from 'next/link'
import Image from 'next/image'
import { Category, Media, Post, User } from '@/payload-types'

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  const category = post.category as Category
  const author = post.author as User
  const featuredImage = post.featuredImage as Media

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {featuredImage && (
        <div className="aspect-video relative">
          <Image
            src={featuredImage.url || ''}
            alt={featuredImage.alt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          {category && (
            <Link
              href={`/blog?category=${category.id}`}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md hover:bg-blue-200 transition-colors"
            >
              {category.name}
            </Link>
          )}
          <time dateTime={post.publishedDate}>
            {formatDate(post.publishedDate)}
          </time>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-blue-600 transition-colors"
          >
            {post.title}
          </Link>
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>By {author?.name || 'Unknown'}</span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  )
}
