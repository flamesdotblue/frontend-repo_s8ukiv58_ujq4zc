import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          HIRE A FREELANCER IN 2 MINUTES
        </h1>
        <p className="mt-5 max-w-3xl text-base sm:text-lg md:text-xl text-white/90">
          Hire a <span className="font-semibold" style={{ color: '#6CD0FF' }}>Snapkar</span> Professional. Verified Photographers, Videographers & Editors on-demand.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#explore"
            className="inline-flex items-center justify-center rounded-md border border-white/10 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_0_30px_rgba(108,208,255,0.25)]"
            style={{ backgroundColor: '#6CD0FF' }}
          >
            Find a Creator Now
          </a>
          <a
            href="#explore"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm sm:text-base font-semibold text-white/90 ring-1 ring-white/10 hover:ring-white/20 transition"
          >
            Book Your Moment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
