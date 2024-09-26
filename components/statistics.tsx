'use client'

export function StatisticsComponent() {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">НАСИЛИЮ. НЕТ</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <span className="text-4xl md:text-5xl font-bold">6</span>
          <span className="text-lg md:text-xl">лет работы</span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-4xl md:text-5xl font-bold">XX XXX</span>
          <span className="text-lg md:text-xl">пострадавших<br />получили<br />помощь</span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-4xl md:text-5xl font-bold">15</span>
          <span className="text-lg md:text-xl">человек в<br />команде<br />Центра<br />Насилию Нет</span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-4xl md:text-5xl font-bold">X XX</span>
          <span className="text-lg md:text-xl">волонтеров помогают<br />в разных проектах НН</span>
        </div>
      </div>
    </div>
  )
}
