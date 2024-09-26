'use client'

export function StatisticsComponent() {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">NASILIU.NET</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <span className="text-4xl md:text-5xl font-bold">6</span>
          <span className="text-lg md:text-xl">years of work</span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-4xl md:text-5xl font-bold">XX XXX</span>
          <span className="text-lg md:text-xl">victims<br />received<br />help</span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-4xl md:text-5xl font-bold">15</span>
          <span className="text-lg md:text-xl">people in<br />the team<br />of Nasiliu.Net</span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-4xl md:text-5xl font-bold">X XX</span>
          <span className="text-lg md:text-xl">volunteers help<br />in various projects of NN</span>
        </div>
      </div>
    </div>
  )
}
