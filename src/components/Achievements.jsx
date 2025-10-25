import React from 'react';

const stats = [
  { label: 'Verified Creators', value: '219+' },
  { label: 'Projects Completed', value: '1,464+' },
  { label: 'Cities Live', value: '73+' },
];

const Achievements = () => {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-2xl border" style={{ borderColor: '#6CD0FF' }}>
          <div className="bg-[#0b0b0b] rounded-2xl p-8 sm:p-10">
            <p className="text-xs tracking-widest text-white/60 mb-6">OUR ACHIEVEMENT</p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="text-center">
                  <div
                    className="text-4xl sm:text-5xl font-extrabold drop-shadow-[0_0_24px_rgba(108,208,255,0.35)]"
                    style={{ color: '#6CD0FF' }}
                  >
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm sm:text-base text-white/80">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
