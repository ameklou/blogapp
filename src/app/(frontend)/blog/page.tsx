import { Suspense } from 'react'
import { getBlogPosts, getCategories } from '@/lib/actions'
import { BlogCard } from '@/components/BlogCard'
import { BlogSearch } from '@/components/BlogSearch'
import { BlogFilters } from '@/components/BlogFilters'
import { BlogPagination } from '@/components/BlogPagination'

interface BlogPageProps {
  searchParams: Promise<{
    search?: string
    category?: string
    page?: string
  }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const search = params.search || ''
  const category = params.category || ''
  const page = parseInt(params.page || '1')

  const [blogData, categories] = await Promise.all([
    getBlogPosts({ search, category, page, limit: 6 }),
    getCategories(),
  ])

  const { posts, totalPages, currentPage, totalPosts, hasNextPage, hasPrevPage } = blogData

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-600">
          Discover our latest articles and insights
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <Suspense fallback={<div>Loading search...</div>}>
          <BlogSearch />
        </Suspense>

        <Suspense fallback={<div>Loading filters...</div>}>
          <BlogFilters categories={categories} />
        </Suspense>
      </div>

      {/* Results Summary */}
      <div className="mb-6">
        <p className="text-gray-600">
          {search || category ? (
            <>
              Found {totalPosts} post{totalPosts !== 1 ? 's' : ''}
              {search && ` matching "${search}"`}
              {category && ` in selected category`}
            </>
          ) : (
            `Showing ${totalPosts} post${totalPosts !== 1 ? 's' : ''}`
          )}
        </p>
      </div>

      {/* Blog Posts */}
      <Suspense fallback={<div>Loading posts...</div>}>
        {posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              hasNextPage={hasNextPage}
              hasPrevPage={hasPrevPage}
            />
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No posts found
            </h3>
            <p className="text-gray-600 mb-4">
              {search || category
                ? 'Try adjusting your search or filter criteria.'
                : 'No posts have been published yet.'}
            </p>
            {(search || category) && (
              <a
                href="/blog"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View all posts →
              </a>
            )}
          </div>
        )}
      </Suspense>
    </div>
  )
}