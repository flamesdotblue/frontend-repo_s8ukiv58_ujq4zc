import React from 'react';
import { Filter, CheckCircle2, ShieldCheck, PlayCircle } from 'lucide-react';

const Step = ({ icon: Icon, title, desc }) => (
  <div className="rounded-xl bg-black px-5 py-6 text-white ring-1 ring-white/10">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: '#6CD0FF' }}>
        <Icon className="h-5 w-5 text-black" />
      </div>
      <h4 className="font-semibold">{title}</h4>
    </div>
    <p className="mt-3 text-sm text-white/80">{desc}</p>
  </div>
);

const Category = ({ label, filled = true }) => (
  <button
    className={`rounded-full px-5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-0 ${
      filled
        ? 'text-white shadow-[0_0_20px_rgba(108,208,255,0.25)]'
        : 'text-white'
    }`}
    style={
      filled
        ? { backgroundColor: '#6CD0FF' }
        : { backgroundColor: 'transparent', borderColor: '#6CD0FF', borderWidth: 1 }
    }
  >
    {label}
  </button>
);

const Explore = () => {
  return (
    <section id="explore" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Product Showcase (devices visual mock) */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
          {/* Left mock: tablet/screen */}
          <div className="relative">
            <div className="rounded-2xl bg-white text-black p-4 shadow-2xl">
              <div className="rounded-xl border border-black/10 p-4">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="mt-4 rounded-lg bg-white p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full" style={{ backgroundColor: '#6CD0FF' }} />
                    <div>
                      <div className="font-semibold">Creator Portfolio</div>
                      <div className="text-sm text-black/60">Photography • Videography</div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-[4/3] rounded-md bg-black/5" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right mock: phone */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 rounded-[2rem] bg-white p-3 shadow-2xl">
              <div className="rounded-[1.5rem] bg-white ring-1 ring-black/10 overflow-hidden">
                <div className="bg-black text-white py-3 text-center font-semibold" style={{ color: '#000', backgroundColor: '#6CD0FF' }}>
                  Snapkar
                </div>
                <div className="p-4">
                  <div className="rounded-lg bg-black/5 p-3 text-sm">
                    Book instantly, chat immediately, pay securely.
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-md bg-black/5 p-2">Wedding</div>
                    <div className="rounded-md bg-black/5 p-2">Product</div>
                    <div className="rounded-md bg-black/5 p-2">Portrait</div>
                    <div className="rounded-md bg-black/5 p-2">Events</div>
                  </div>
                  <button
                    className="mt-4 w-full rounded-md py-2 text-white font-semibold"
                    style={{ backgroundColor: '#6CD0FF' }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-16">
          <p className="text-xs tracking-widest text-white/60">STEPS TO USE THE APP</p>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Step icon={Filter} title="FIND AND FILTER" desc="Set your location, budget & category (e.g., Wedding, Product)." />
            <Step icon={CheckCircle2} title="BOOK INSTANTLY" desc="Select a verified creator, view transparent pricing, and confirm." />
            <Step icon={ShieldCheck} title="SECURE PAYMENT" desc="Pay securely in-app and chat with your pro immediately." />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold">WHAT ARE YOU LOOKING FOR?</h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Category label="Weddings" filled />
            <Category label="Product Shoots" filled />
            <Category label="Drone Videography" filled={false} />
            <Category label="Influencer Content" filled />
            <Category label="Portraits" filled />
            <Category label="Event Photography" filled={false} />
            <Category label="Editing Services" filled />
            <Category label="Fashion" filled={false} />
          </div>
        </div>

        {/* Featured Work */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold">SOME OF OUR FREELANCER'S WORK</h3>
          <div className="mx-auto mt-6 max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              {/* Placeholder thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6CD0FF]/20 to-transparent" />
              <button className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full shadow-[0_0_40px_rgba(108,208,255,0.45)]" style={{ backgroundColor: '#6CD0FF' }}>
                <PlayCircle className="h-9 w-9 text-black" />
              </button>
            </div>
            <p className="mt-3 text-center text-white/80">Featured: Aurora Films – Wedding Portfolio</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 border-t border-white/10 pt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <div className="text-3xl font-extrabold tracking-tight text-white/80">Snapkar</div>
              <p className="mt-3 text-sm text-white/60 max-w-sm">On-demand creators for every moment. Photography, videography, and editing—done right.</p>
            </div>
            <div className="text-sm">
              <div className="font-semibold mb-2">Company</div>
              <ul className="space-y-1 text-white/80">
                <li><a href="#" className="hover:text-white" style={{ color: undefined }}>About Us</a></li>
                <li><a href="#" className="hover:text-white">Creator Onboarding</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div className="text-sm">
              <div className="font-semibold mb-2">Support</div>
              <ul className="space-y-1 text-white/80">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Terms & Privacy</a></li>
                <li className="mt-3 flex items-center gap-3">
                  <span className="text-white/60">Get the app:</span>
                  <span className="rounded-md border border-[#6CD0FF] px-2 py-1 text-xs text-white">App Store</span>
                  <span className="rounded-md border border-[#6CD0FF] px-2 py-1 text-xs text-white">Google Play</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative mt-16">
            <div className="pointer-events-none select-none text-center text-6xl sm:text-8xl font-extrabold tracking-tight text-white/5">SNAPKAR</div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Explore;
