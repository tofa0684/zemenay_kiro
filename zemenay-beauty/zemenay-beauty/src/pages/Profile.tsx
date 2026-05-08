import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background font-body-md antialiased pb-24 min-h-[max(884px,100dvh)]">
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin h-14 bg-surface/90 backdrop-blur-md shadow-[0px_4px_16px_rgba(0,0,0,0.06)]">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-surface-variant/50 transition-colors active:scale-95 cursor-pointer">
          <span className="material-symbols-outlined text-on-surface">arrow_back</span>
        </button>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-surface-variant/50 transition-colors active:scale-95 cursor-pointer">
            <span className="material-symbols-outlined text-on-surface">favorite_border</span>
          </button>
          <button className="p-2 -mr-2 rounded-full hover:bg-surface-variant/50 transition-colors active:scale-95 cursor-pointer">
            <span className="material-symbols-outlined text-on-surface">share</span>
          </button>
        </div>
      </header>

      <main className="pt-14">
        <section className="relative h-72 md:h-96 w-full">
          <img 
            alt="Portrait of a professional makeup artist working in a well-lit, modern studio." 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA31QCf4LT1eEr82yZMTkLFKlfHQrYiPTOnpEy_-_AB5QDSEVrEsJxjLQNCKNU2FviCCKvSvpoZUUm19qBqISQpFLRzUOjtm1IPK81moIk4U9tn6TdUq9D083Qk2yf_qEyOBkRDs8r3sasCwWqdWxinEwqCTC1PZ8IAfI4ftNOPC-IrDvQ8JJTev1vd51hgW-RGRJ-vF1H8-TslhnupOCuIfXSl5Ble1hQSZxj8I6E-6CdAjEJTS5G7FlDVix44PgYWKfnjbzQP7HhN" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </section>

        <section className="px-margin -mt-16 relative z-10 max-w-4xl mx-auto">
          <div className="flex flex-col gap-xs">
            <div className="flex items-center gap-2">
              <h1 className="font-headline-md text-headline-md text-on-background">Selamawit Tadesse</h1>
              <span className="material-symbols-outlined fill text-[#fcab28] text-[20px]">verified</span>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Lumina Bridal & Artistry</p>
            <div className="flex flex-wrap items-center gap-md mt-sm">
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined fill text-[#fcab28] text-[18px]">star</span>
                <span className="font-label-lg text-label-lg text-on-background">4.8</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">(124 reviews)</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-surface-variant"></div>
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-on-surface-variant text-[18px]">location_on</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">1.5km away (Bole)</span>
              </div>
            </div>

            <div className="mt-md bg-surface-container-low p-md rounded-xl border border-surface-variant flex gap-sm items-start shadow-[0px_4px_16px_rgba(0,0,0,0.03)]">
              <span className="material-symbols-outlined text-primary text-[20px] mt-xs">auto_awesome</span>
              <div>
                <p className="font-label-md text-label-md text-primary mb-xs">AI Summary</p>
                <p className="font-body-sm text-body-sm text-on-surface italic">"Clients consistently praise her flawless bridal work, punctuality, and incredible attention to detail. Highly recommended for full-day bookings."</p>
              </div>
            </div>
          </div>
        </section>

        <nav className="px-margin mt-xl max-w-4xl mx-auto border-b border-surface-variant">
          <ul className="flex gap-lg">
            <li>
              <button className="pb-sm font-label-lg text-label-lg text-primary border-b-2 border-primary cursor-pointer w-full text-left">Services</button>
            </li>
            <li>
              <button className="pb-sm font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors cursor-pointer w-full text-left">Portfolio</button>
            </li>
            <li>
              <button className="pb-sm font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors cursor-pointer w-full text-left">Reviews</button>
            </li>
          </ul>
        </nav>

        <section className="px-margin py-lg max-w-4xl mx-auto flex flex-col gap-md">
          <div className="bg-surface p-md rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] border border-surface-container flex justify-between items-start gap-md">
            <div className="flex-1">
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-xs">Classic Bridal Makeup</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">Full face makeup application including premium lashes, skin prep, and long-lasting setting spray designed to last through tears and dancing.</p>
              <span className="font-label-lg text-label-lg text-primary">2,500 ETB</span>
            </div>
            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
              <img 
                alt="Bridal makeup" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3ffttt1lPx0YSev1IHPyGYCFx5JPFSxTbo5exKbRxUarHJPpi4V4aTr8HTx6wph4VEyL9yzqlRVa4MV8_-uRJP-cSXNagiPhCf_7kUHeJ3uISB4EXO1O6V12GS-eb53WCzWQOeHero_b-3a6-RxFDhNn7o6RbOx-QJvxE-rScR83VGRPgPUXwO5smqW2FTLpgRM7Oo_AjDOBzVKpw9J2uFKA3mJoZACNxRr_17rZjwgo_Ms5oDcOKw2wqOqrN4WsyyE7ryZNcny6Q" 
              />
            </div>
          </div>

          <div className="bg-surface p-md rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] border border-surface-container flex justify-between items-start gap-md">
            <div className="flex-1">
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-xs">Editorial Hair Styling</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">Complex updos, extensions styling, or sleek modern looks for photoshoots or special events. Includes consultation.</p>
              <span className="font-label-lg text-label-lg text-primary">1,200 ETB</span>
            </div>
            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-surface-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary text-3xl">face_retouching_natural</span>
            </div>
          </div>

          <div className="bg-surface p-md rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] border border-surface-container flex justify-between items-start gap-md">
            <div className="flex-1">
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-xs">Soft Glam Party Look</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">A beautiful, enhanced everyday look perfect for wedding guests or evening parties. Focuses on glowing skin and soft features.</p>
              <span className="font-label-lg text-label-lg text-primary">1,500 ETB</span>
            </div>
            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-surface-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary text-3xl">brush</span>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 w-full z-50 bg-surface border-t border-surface-variant p-margin shadow-[0px_-4px_16px_rgba(0,0,0,0.06)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-md">
          <div>
            <p className="font-label-md text-label-md text-on-surface-variant">Starting from</p>
            <p className="font-headline-sm text-headline-sm text-on-background">1,200 ETB</p>
          </div>
          <button onClick={() => navigate('/checkout')} className="flex-1 h-14 bg-primary text-on-primary rounded-xl font-label-lg text-label-lg flex items-center justify-center hover:bg-surface-tint transition-colors active:scale-95 shadow-[0px_4px_16px_rgba(0,0,0,0.06)] cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
