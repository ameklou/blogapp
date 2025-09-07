// src/lib/actions.ts
'use server'

import { payload } from './payload'
import { Category, Post } from '@/payload-types'

export interface BlogFilters {
  search?: string
  category?: string
  page?: number
  limit?: number
}

export interface BlogResponse {
  posts: Post[]
  totalPages: number
  currentPage: number
  totalPosts: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export async function getBlogPosts(filters: BlogFilters = {}): Promise<BlogResponse> {
  const {
    search = '',
    category = '',
    page = 1,
    limit = 6,
  } = filters

  try {
    const where: any = {
      status: { equals: 'published' }
    }

    // Add search filter
    if (search) {
      where.or = [
        { title: { contains: search } },
        { excerpt: { contains: search } },
        { content: { contains: search } }
      ]
    }

    // Add category filter
    if (category) {
      where.category = { equals: category }
    }

    const result = await payload.find({
      collection: 'posts',
      where,
      sort: '-publishedDate',
      limit,
      page,
      populate: {
        category: true,
        author: true,
        featuredImage: true,
      },
    })

    return {
      posts: result.docs as Post[],
      totalPages: result.totalPages,
      currentPage: result.page || 1,
      totalPosts: result.totalDocs,
      hasNextPage: result.hasNextPage,
      hasPrevPage: result.hasPrevPage,
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return {
      posts: [],
      totalPages: 0,
      currentPage: 1,
      totalPosts: 0,
      hasNextPage: false,
      hasPrevPage: false,
    }
  }
}

export async function getBlogPost(slug: string): Promise<Post | null> {
  try {
    const result = await payload.find({
      collection: 'posts',
      where: {
        slug: { equals: slug },
        status: { equals: 'published' }
      },
      limit: 1,
      populate: {
        category: true,
        author: true,
        featuredImage: true,
      },
    })

    return result.docs[0] as Post || null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const result = await payload.find({
      collection: 'categories',
      sort: 'name',
      limit: 100,
    })

    return result.docs as Category[]
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export async function searchPosts(query: string): Promise<Post[]> {
  if (!query.trim()) {
    return []
  }

  try {
    const result = await payload.find({
      collection: 'posts',
      where: {
        and: [
          { status: { equals: 'published' } },
          {
            or: [
              { title: { contains: query } },
              { excerpt: { contains: query } },
              { content: { contains: query } }
            ]
          }
        ]
      },
      sort: '-publishedDate',
      limit: 10,
      populate: {
        category: true,
        author: true,
        featuredImage: true,
      },
    })

    return result.docs as Post[]
  } catch (error) {
    console.error('Error searching posts:', error)
    return []
  }
}