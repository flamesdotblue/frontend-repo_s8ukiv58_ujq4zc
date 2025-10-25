import React from 'react';

const brands = [
  'EventCo',
  'FashionBrand',
  'TechStartup',
  'UrbanMedia',
  'StudioLight',
  'AlphaLabs',
  'VistaWorks',
  'NovaEvents',
];

const TrustedBrands = () => {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Divider */}
        <div className="h-px w-full" style={{ backgroundColor: '#6CD0FF' }} />

        <div className="py-10 text-center">
          <h2 className="text-sm tracking-[0.2em] text-white/90">TOP BRANDS TRUST US</h2>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 items-center">
            {brands.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-md bg-white/5 px-3 py-4 backdrop-blur-sm ring-1 ring-white/10"
              >
                <span className="text-xs sm:text-sm md:text-base font-medium text-white/70">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
