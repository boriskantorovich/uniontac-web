'use client'

import Image from 'next/image';

export function Team() {
  const teamMembers = [
    { name: 'Анна Ривина', role: 'основательница Насилию.нет', image: '/images/team/anna_rivina_09-282x282.jpg' },
    { name: 'Екатерина Прохорова', role: 'руководитель Центра?', image: '/images/team/ekaterina-prohorova_koordinator-adresnoj-pomoshhi-282x282.jpg' },
    { name: 'Светлана Губенко', role: 'директор Центра', image: '/images/team/svetlana-gubenko-e1638786403979-282x282.jpeg' },
  ];

  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="space-y-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center space-x-6">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0 relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 128px, 192px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600 text-lg">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-gray-700 text-lg">
        И еще <strong>12 человек,</strong> которые работают постоянно
      </p>
    </div>
  )
}
