import { getBlogPosts } from '@/lib/actions'
import { BlogCard } from './BlogCard'
import { Post, Category } from '@/payload-types'

interface RelatedPostsProps {
  currentPost: Post
}

export async function RelatedPosts({ currentPost }: RelatedPostsProps) {
  const category = currentPost.category as Category

  // Get related posts from the same category
  const { posts } = await getBlogPosts({
    category: category?.id.toString(),
    limit: 3,
  })

  // Filter out the current post and limit to 3
  const relatedPosts = posts
    .filter(post => post.id !== currentPost.id)
    .slice(0, 3)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="mt-16 pt-8 border-t">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}