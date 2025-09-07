import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPost } from '@/lib/actions'
import { Category, Media, User } from '@/payload-types'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | BlogApp`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

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

  // Helper function to render rich text content
  const renderContent = (content: any) => {
    if (!content) return null

    // This is a simplified version. In a real app, you'd want to properly
    // render the Lexical content structure
    if (typeof content === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: content }} />
    }

    // Handle Lexical editor output
    if (content.root && content.root.children) {
      return (
        <div className="prose max-w-none">
          {content.root.children.map((child: any, index: number) => (
            <div key={index}>
              {child.children?.map((textNode: any, textIndex: number) => (
                <span key={textIndex}>{textNode.text}</span>
              ))}
            </div>
          ))}
        </div>
      )
    }

    return <div>Content not available</div>
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-gray-900">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{post.title}</span>
      </nav>

      {/* Post Header */}
      <header className="mb-8">
        <div className="mb-4">
          {category && (
            <Link
              href={`/blog?category=${category.id}`}
              className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-200 transition-colors"
            >
              {category.name}
            </Link>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <span>By {author?.name || 'Unknown Author'}</span>
          </div>
          <time dateTime={post.publishedDate} className="flex items-center gap-2">
            <span>{formatDate(post.publishedDate)}</span>
          </time>
        </div>

        <p className="text-xl text-gray-700 leading-relaxed">
          {post.excerpt}
        </p>
      </header>

      {/* Featured Image */}
      {featuredImage && (
        <div className="mb-8 aspect-video relative rounded-lg overflow-hidden">
          <Image
            src={featuredImage.url || ''}
            alt={featuredImage.alt || post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Post Content */}
      <div className="prose prose-lg max-w-none mb-12">
        {renderContent(post.content)}
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tagItem: any, index: number) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm"
              >
                {tagItem.tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Back to Blog */}
      <div className="border-t pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  )
}