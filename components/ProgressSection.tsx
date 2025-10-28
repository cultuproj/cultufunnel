
import React from 'react';

const progressData = {
  communityCount: 472,
  timeline: [
    { name: 'Phase 1: Genesis', status: 'complete' },
    { name: 'Phase 2: Ikigai', status: 'active' },
    { name: 'Phase 3: Unfolding', status: 'upcoming' },
  ],
  logs: [
    { date: 'Week 4', entry: 'The experiment shifted—participant thoughts are shaping the next phase.' },
    { date: 'Week 2', entry: 'Initial myth framework established. The core narrative is taking form.' },
    { date: 'Week 1', entry: 'The first observers have joined. The lab is open.' },
  ]
};

const ProgressSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-[#000000]">
          The Laboratory Log
        </h2>
        <p className="text-center mt-4 text-lg text-[#000000]/70">Everything here is in progress. We don't polish; we reveal.</p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#FFFFFF]/50 p-8 rounded-lg border border-[#C7A76B]/50 text-center">
            <h3 className="font-heading text-2xl text-[#000000]">Participants</h3>
            <p className="text-6xl font-bold text-[#000000] mt-4">{progressData.communityCount}</p>
            <p className="text-sm text-[#000000]/70 mt-2">Observing the unfolding.</p>
          </div>

          <div className="bg-[#FFFFFF]/50 p-8 rounded-lg border border-[#C7A76B]/50">
            <h3 className="font-heading text-2xl text-[#000000] text-center mb-6">Season Timeline</h3>
            <div className="space-y-4">
              {progressData.timeline.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-5 h-5 rounded-full mr-4 flex-shrink-0 border-2 ${item.status === 'complete' ? 'bg-[#C7A76B] border-[#C7A76B]' : item.status === 'active' ? 'bg-[#C7A76B] border-[#C7A76B] animate-pulse' : 'border-[#000000]/50'}`}></div>
                  <span className={`text-lg ${item.status === 'upcoming' ? 'text-[#000000]/60' : 'text-[#000000]'}`}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#FFFFFF]/50 p-8 rounded-lg border border-[#C7A76B]/50">
             <h3 className="font-heading text-2xl text-[#000000] text-center mb-6">Recent Entries</h3>
             <div className="space-y-4">
               {progressData.logs.slice(0, 3).map((log, index) => (
                 <div key={index} className="border-l-2 border-[#C7A76B] pl-4">
                   <p className="font-bold text-sm text-[#000000]">{log.date}</p>
                   <p className="text-sm text-[#000000]/80">{log.entry}</p>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
