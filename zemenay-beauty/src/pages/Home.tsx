import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FEATURED_SERVICES = [
  {
    id: 1,
    tag: 'Featured Service',
    title: 'Radiance Facial',
    subtitle: 'Rejuvenate your skin with our signature Habesha glow treatment.',
    bg: 'from-[#f7e8e8] to-[#fce4d6]',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA31QCf4LT1eEr82yZMTkLFKlfHQrYiPTOnpEy_-_AB5QDSEVrEsJxjLQNCKNU2FviCCKvSvpoZUUm19qBqISQpFLRzUOjtm1IPK81moIk4U9tn6TdUq9D083Qk2yf_qEyOBkRDs8r3sasCwWqdWxinEwqCTC1PZ8IAfI4ftNOPC-IrDvQ8JJTev1vd51hgW-RGRJ-vF1H8-TslhnupOCuIfXSl5Ble1hQSZxj8I6E-6CdAjEJTS5G7FlDVix44PgYWKfnjbzQP7HhN',
  },
  {
    id: 2,
    tag: 'Top Rated',
    title: 'Signature Habesha Braids',
    subtitle: 'Traditional braiding elevated with modern technique and care.',
    bg: 'from-[#f0e8f7] to-[#e8d6f5]',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3ffttt1lPx0YSev1IHPyGYCFx5JPFSxTbo5exKbRxUarHJPpi4V4aTr8HTx6wph4VEyL9yzqlRVa4MV8_-uRJP-cSXNagiPhCf_7kUHeJ3uISB4EXO1O6V12GS-eb53WCzWQOeHero_b-3a6-RxFDhNn7o6RbOx-QJvxE-rScR83VGRPgPUXwO5smqW2FTLpgRM7Oo_AjDOBzVKpw9J2uFKA3mJoZACNxRr_17rZjwgo_Ms5oDcOKw2wqOqrN4WsyyE7ryZNcny6Q',
  },
];

const CATEGORIES = [
  { icon: 'content_cut', label: 'Hair', color: 'bg-primary-fixed', iconColor: 'text-on-primary-fixed' },
  { icon: 'face_retouching_natural', label: 'Makeup', color: 'bg-secondary-fixed', iconColor: 'text-on-secondary-fixed' },
  { icon: 'back_hand', label: 'Nails', color: 'bg-surface-variant', iconColor: 'text-on-surface-variant' },
  { icon: 'diamond', label: 'Bridal', color: 'bg-primary-container', iconColor: 'text-on-primary' },
];

const NEARBY = [
  {
    id: 1,
    name: 'Selamawit T.',
    role: 'Master Hair Stylist',
    dist: '1.2 km',
    rating: '4.9',
    tag: 'Hair & Braids',
    tagColor: 'bg-primary-fixed text-on-primary-fixed',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA31QCf4LT1eEr82yZMTkLFKlfHQrYiPTOnpEy_-_AB5QDSEVrEsJxjLQNCKNU2FviCCKvSvpoZUUm19qBqISQpFLRzUOjtm1IPK81moIk4U9tn6TdUq9D083Qk2yf_qEyOBkRDs8r3sasCwWqdWxinEwqCTC1PZ8IAfI4ftNOPC-IrDvQ8JJTev1vd51hgW-RGRJ-vF1H8-TslhnupOCuIfXSl5Ble1hQSZxj8I6E-6CdAjEJTS5G7FlDVix44PgYWKfnjbzQP7HhN',
  },
  {
    id: 2,
    name: 'Helen M.',
    role: 'Bridal Makeup Artist',
    dist: '2.5 km',
    rating: '4.8',
    tag: 'Makeup',
    tagColor: 'bg-secondary-fixed text-on-secondary-fixed',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3ffttt1lPx0YSev1IHPyGYCFx5JPFSxTbo5exKbRxUarHJPpi4V4aTr8HTx6wph4VEyL9yzqlRVa4MV8_-uRJP-cSXNagiPhCf_7kUHeJ3uISB4EXO1O6V12GS-eb53WCzWQOeHero_b-3a6-RxFDhNn7o6RbOx-QJvxE-rScR83VGRPgPUXwO5smqW2FTLpgRM7Oo_AjDOBzVKpw9J2uFKA3mJoZACNxRr_17rZjwgo_Ms5oDcOKw2wqOqrN4WsyyE7ryZNcny6Q',
  },
  {
    id: 3,
    name: 'Bethel Nails',
    role: 'Premium Nail Care',
    dist: '3.1 km',
    rating: '5.0',
    tag: 'Nails',
    tagColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGgjKC3Cr6ATBGSSsO7_QQw_031orF96miR8Sva1cacTSiz7fS8D_082Yt_6SCZ2H3dJaOFqmfdKnqnnF_0jrQcdOcgJqXd1VF4YJWi8weo6KhybQfnk6c_AcF0sQO3Fpts71qjLhziOGELew8KRItqzgOC3zhVlAPXJwL8oeAGsP0yHtdHgBeHaKDpWZqsCLYR29-XwUdykh1ToFulRCjX2AoLM1CuHuk8DJQFaGLD-V8A4xbXBBlQ1bPbc9mATktVz_IZfF_1F2A',
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);

  return (
    <div className="bg-background text-on-background min-h-screen pb-24 font-body-md flex flex-col">
      {/* Top App Bar */}
      <header className="flex justify-between items-center px-margin h-14 w-full bg-surface sticky top-0 z-40 shadow-[0px_2px_8px_rgba(0,0,0,0.06)]">
        <span className="font-headline-md text-headline-md text-primary tracking-tight" style={{ fontFamily: 'Noto Serif, serif' }}>
          Zemenay Beauty
        </span>
        <button
          onClick={() => navigate('/profile')}
          className="w-9 h-9 rounded-full overflow-hidden border-2 border-primary-fixed active:scale-95 transition-transform"
          aria-label="Profile"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA31QCf4LT1eEr82yZMTkLFKlfHQrYiPTOnpEy_-_AB5QDSEVrEsJxjLQNCKNU2FviCCKvSvpoZUUm19qBqISQpFLRzUOjtm1IPK81moIk4U9tn6TdUq9D083Qk2yf_qEyOBkRDs8r3sasCwWqdWxinEwqCTC1PZ8IAfI4ftNOPC-IrDvQ8JJTev1vd51hgW-RGRJ-vF1H8-TslhnupOCuIfXSl5Ble1hQSZxj8I6E-6CdAjEJTS5G7FlDVix44PgYWKfnjbzQP7HhN"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </header>

      <main className="flex-1 w-full max-w-screen-sm mx-auto">
        {/* Hero Carousel */}
        <section className="relative w-full overflow-hidden" style={{ height: 220 }}>
          {FEATURED_SERVICES.map((s, i) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-500 ${i === slide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-margin pb-5">
                <span className="inline-block bg-secondary-container text-on-secondary-container font-label-md text-label-md px-3 py-1 rounded-full mb-2">
                  {s.tag}
                </span>
                <h2 className="font-headline-md text-white" style={{ fontFamily: 'Noto Serif, serif', fontSize: 22, fontWeight: 700 }}>
                  {s.title}
                </h2>
                <p className="text-white/80 text-sm mt-1">{s.subtitle}</p>
              </div>
            </div>
          ))}
          {/* Dots */}
          <div className="absolute bottom-3 right-margin flex gap-1.5 z-20">
            {FEATURED_SERVICES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === slide ? 'bg-white w-4' : 'bg-white/50'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Discover Services */}
        <section className="px-margin pt-lg pb-md">
          <h2 className="font-headline-md text-on-background mb-md" style={{ fontFamily: 'Noto Serif, serif' }}>
            Discover Services
          </h2>
          <div className="flex gap-md overflow-x-auto hide-scrollbar pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.label}
                className="flex flex-col items-center gap-2 shrink-0 active:scale-95 transition-transform"
                onClick={() => cat.label === 'Bridal' && navigate('/checkout')}
              >
                <div className={`w-14 h-14 rounded-full ${cat.color} flex items-center justify-center shadow-sm`}>
                  <span className={`material-symbols-outlined ${cat.iconColor} text-[26px]`}>{cat.icon}</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface">{cat.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Nearby Professionals */}
        <section className="px-margin py-md">
          <div className="flex justify-between items-center mb-md">
            <h2 className="font-headline-md text-on-background" style={{ fontFamily: 'Noto Serif, serif' }}>
              Nearby Professionals
            </h2>
            <button className="font-label-lg text-label-lg text-primary-container hover:text-primary transition-colors">
              View All
            </button>
          </div>
          <div className="flex flex-col gap-md">
            {NEARBY.map((pro) => (
              <div
                key={pro.id}
                onClick={() => navigate('/profile')}
                className="bg-surface rounded-xl p-md flex gap-md items-center shadow-[0px_4px_16px_rgba(0,0,0,0.06)] active:scale-[0.98] transition-transform cursor-pointer border border-transparent hover:border-outline-variant"
              >
                <div className="w-[72px] h-[72px] rounded-xl overflow-hidden shrink-0 bg-surface-variant">
                  <img src={pro.img} alt={pro.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline-sm text-on-surface" style={{ fontFamily: 'Noto Serif, serif' }}>
                      {pro.name}
                    </h3>
                    <button
                      className="text-on-surface-variant hover:text-primary transition-colors active:scale-90 ml-2"
                      aria-label="Save"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="material-symbols-outlined text-[22px]">favorite_border</span>
                    </button>
                  </div>
                  <p className="font-body-sm text-on-surface-variant mb-2">{pro.role}</p>
                  <div className="flex items-center gap-md">
                    <div className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      {pro.dist}
                    </div>
                    <span className={`font-label-md text-label-md px-2 py-0.5 rounded-full ${pro.tagColor}`}>
                      {pro.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI FAB */}
        <button
          onClick={() => navigate('/chat')}
          className="fixed bottom-24 right-margin w-14 h-14 bg-primary-container text-on-primary rounded-full shadow-[0px_4px_20px_rgba(155,0,68,0.35)] flex items-center justify-center active:scale-90 transition-transform z-40 hover:bg-primary"
          aria-label="AI Beauty Guide"
        >
          <span className="material-symbols-outlined fill text-[28px]">auto_awesome</span>
        </button>
      </main>

      {/* Bottom Nav */}
      <nav className="bg-surface/90 backdrop-blur-md shadow-[0px_-2px_12px_rgba(0,0,0,0.08)] fixed bottom-0 w-full z-50 flex justify-around items-center px-2 py-2 rounded-t-2xl border-t border-surface-variant/30">
        {[
          { icon: 'home', label: 'Home', active: true, path: '/home' },
          { icon: 'search', label: 'Search', active: false, path: '/home' },
          { icon: 'event_note', label: 'Bookings', active: false, path: '/home' },
          { icon: 'person', label: 'Profile', active: false, path: '/profile' },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center px-4 py-1.5 rounded-full transition-all duration-200 active:scale-90 ${
              item.active
                ? 'bg-primary-fixed text-primary'
                : 'text-on-surface-variant hover:bg-surface-variant/50'
            }`}
          >
            <span className={`material-symbols-outlined ${item.active ? 'fill' : ''}`}>{item.icon}</span>
            <span className="font-label-md text-label-md mt-0.5">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
