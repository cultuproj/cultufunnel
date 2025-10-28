import React from 'react';
import Counter from './Counter';

const progressData = {
  communityCount: 812,
  timeline: [
    { name: 'Phase 1: Genesis', status: 'complete' },
    { name: 'Phase 2: Ikigai', status: 'active' },
    { name: 'Phase 3: Unfolding', status: 'upcoming' },
    { name: 'Phase 4: Synthesis', status: 'upcoming' },
  ],
  logs: [
    { date: 'S.01_W.04', entry: 'The experiment shifted—participant thoughts are shaping the next phase.' },
    { date: 'S.01_W.02', entry: 'Initial myth framework established. The core narrative is taking form.' },
    { date: 'S.01_W.01', entry: 'The first observers have joined. The lab is open.' },
  ]
};

const TimelineIcon: React.FC<{ status: string }> = ({ status }) => {
  if (status === 'complete') {
    return (
      <div className="w-6 h-6 rounded-full bg-[#C7A76B] flex items-center justify-center">
        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
      </div>
    );
  }
  if (status === 'active') {
    return (
      <div className="w-6 h-6 rounded-full bg-transparent border-2 border-[#C7A76B] flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-[#C7A76B] animate-pulse"></div>
      </div>
    );
  }
  return <div className="w-6 h-6 rounded-full bg-transparent border-2 border-black/30"></div>;
};

const ProgressSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-[#000000]">
          The Laboratory Log
        </h2>
        <p className="text-center mt-4 text-lg text-[#000000]/70">Everything here is in progress. We don't polish; we reveal.</p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white/70 p-8 rounded-lg border border-[#C7A76B]/50 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="font-heading text-2xl text-[#000000]">Participants</h3>
            <div className="text-6xl font-bold text-[#000000] mt-4">
              <Counter end={progressData.communityCount} duration={2000} />
            </div>
            <p className="text-sm text-[#000000]/70 mt-2">Observing the unfolding.</p>
          </div>

          <div className="bg-white/70 p-8 rounded-lg border border-[#C7A76B]/50 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="font-heading text-2xl text-[#000000] text-center mb-6">Season Timeline</h3>
            <div className="relative pl-4">
              <div className="absolute top-0 bottom-0 left-7 w-0.5 bg-black/10" aria-hidden="true"></div>
              <ul className="space-y-6">
                {progressData.timeline.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="z-10 mr-4 flex-shrink-0">
                      <TimelineIcon status={item.status} />
                    </div>
                    <span className={`text-lg ${item.status === 'upcoming' ? 'text-black/50' : 'text-black'}`}>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white/70 p-8 rounded-lg border border-[#C7A76B]/50 shadow-lg transform hover:scale-105 transition-transform duration-300">
             <h3 className="font-heading text-2xl text-[#000000] text-center mb-6">Field Notes</h3>
             <div className="space-y-5">
               {progressData.logs.slice(0, 3).map((log, index) => (
                 <div key={index} className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                        <p className="font-mono text-xs text-black/60 pt-1 tracking-wider group-hover:text-[#C7A76B] transition-colors">{log.date}</p>
                        <div className="w-px h-6 bg-black/10"></div>
                        <p className="text-sm text-black/80">{log.entry}</p>
                    </div>
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