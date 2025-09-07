import { getBlogPosts, getCategories } from '@/lib/actions'

export async function BlogStats() {
  const [{ totalPosts }, categories] = await Promise.all([
    getBlogPosts({ limit: 1 }), // Just get count
    getCategories(),
  ])

  const stats = [
    { label: 'Total Posts', value: totalPosts },
    { label: 'Categories', value: categories.length },
    { label: 'Years Writing', value: new Date().getFullYear() - 2020 + 1 },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Blog Stats</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}