'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'
import { Category } from '@/payload-types'

interface BlogFiltersProps {
  categories: Category[]
}

export function BlogFilters({ categories }: BlogFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const selectedCategory = searchParams.get('category') || ''

  const handleCategoryChange = (categoryId: string) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams)
      if (categoryId) {
        params.set('category', categoryId)
      } else {
        params.delete('category')
      }
      params.delete('page') // Reset to first page when filtering
      router.push(`/blog?${params.toString()}`)
    })
  }

  return (
    <div className="mb-6">
      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
        Filter by Category
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
        disabled={isPending}
        className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none disabled:opacity-50"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  )
}
