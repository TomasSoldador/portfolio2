interface SkillItem {
  name: string
  icon: React.ReactNode
}

interface SkillCardProps {
  category: string
  items: SkillItem[]
}

export function SkillCard({ category, items }: SkillCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="text-2xl mr-2 text-blue-500">{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

