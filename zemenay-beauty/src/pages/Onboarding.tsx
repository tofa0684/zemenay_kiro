import { useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <header className="absolute top-0 w-full z-20 flex justify-between items-center px-margin pt-md pb-md">
        <div className="flex items-center gap-sm bg-surface/80 backdrop-blur-md px-md py-sm rounded-full shadow-[0px_4px_16px_rgba(0,0,0,0.06)] border border-surface-variant/50">
          <span className="font-label-lg text-label-lg text-primary">EN</span>
          <div className="w-[1px] h-4 bg-outline-variant"></div>
          <span className="font-label-lg text-label-lg text-on-surface-variant cursor-pointer hover:text-primary transition-colors">አማ</span>
        </div>
        <button aria-label="Help" className="bg-surface/80 backdrop-blur-md p-sm rounded-full shadow-[0px_4px_16px_rgba(0,0,0,0.06)] text-on-surface hover:text-primary transition-colors border border-surface-variant/50">
          <span className="material-symbols-outlined">help</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col relative w-full max-w-[480px] mx-auto bg-surface shadow-[0px_0px_40px_rgba(0,0,0,0.03)] h-full min-h-[100dvh]">
        <div 
          className="relative h-[55vh] min-h-[400px] w-full hero-bg" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtwdVPMTEujITZ7-Pg60tUb5V7l8XRq7WTomk-YN7LhlGZSsHjRlpWVN2ZTdhdc2bO3y-gQA7Y9GqNYdF3_z6X_JfwKmrbV9zkm7Y_T_FE8xL-36jCrJ16PWMs9qBfrfaPiUSDW0hYIxKwP4nqspnanq-9yms3peY6yq7KCERTNd0qudfaDIPIb0-1TKiIVYx56D6McyuoANpxbyMzB1fFELuWLUOlXKJvRY0HaIleg41HTPKP2bc43nuOZNihH6azAVb7Qpbbq3Dd')" }}>
          
          <div className="absolute inset-0 hero-gradient"></div>
          
          <div className="absolute bottom-xl left-0 w-full px-margin flex flex-col items-center text-center z-10">
            <img 
              alt="Zemenay Beauty Logo" 
              className="w-[88px] h-[88px] rounded-xl shadow-[0px_8px_24px_rgba(0,0,0,0.08)] mb-md bg-surface object-cover border border-surface-variant/30" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGgjKC3Cr6ATBGSSsO7_QQw_031orF96miR8Sva1cacTSiz7fS8D_082Yt_6SCZ2H3dJaOFqmfdKnqnnF_0jrQcdOcgJqXd1VF4YJWi8weo6KhybQfnk6c_AcF0sQO3Fpts71qjLhziOGELew8KRItqzgOC3zhVlAPXJwL8oeAGsP0yHtdHgBeHaKDpWZqsCLYR29-XwUdykh1ToFulRCjX2AoLM1CuHuk8DJQFaGLD-V8A4xbXBBlQ1bPbc9mATktVz_IZfF_1F2A" 
            />
            <h1 className="font-display-lg text-display-lg text-on-surface mb-xs tracking-tight">Zemenay</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Premium Beauty On-Demand</p>
          </div>
        </div>

        <div className="flex-1 bg-surface px-margin pb-xl pt-md flex flex-col justify-start relative z-10">
          <div className="w-full bg-surface-container-lowest rounded-xl p-lg shadow-[0px_8px_32px_rgba(0,0,0,0.06)] border border-surface-container-highest flex flex-col gap-lg">
            <div className="text-center">
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Welcome</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Enter your number to continue</p>
            </div>

            <div className="relative flex flex-col gap-base w-full">
              <label className="font-label-md text-label-md text-on-surface-variant px-1" htmlFor="phone">Phone Number</label>
              <div className="flex h-[56px] w-full border border-outline-variant rounded-xl overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all bg-surface">
                <div className="flex items-center gap-xs px-md bg-surface-container-low border-r border-outline-variant text-on-surface font-body-md text-body-md select-none shrink-0 cursor-pointer hover:bg-surface-container transition-colors">
                  <img 
                    alt="Ethiopia Flag" 
                    className="w-6 h-4 object-cover rounded-[2px]" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuApOvWFV5rvUzIPpt8JSrj9omtwcKmbSlUlC--jrGY0rKHoYgjGnd169U0hRh6Tq0id5tFFI1iH2uYx6srRs9lDkjLOsF5fjUhOZiEWwD-vuxhhlj4eN1GaDbSQFT3mRIUZyR0b3uq3HXTMjFbzDRbjCfYkx7huKenNrbr6EAWFx0Vm7RWODTI4NqGNZyY8hhXqlbZxLL4aMjLX1YvLIcgLXZP_Q3gh7s-JT_kA2bDQGGy5U-QZwdKXus45icDr0VWHE0szz-QywLHD" 
                  />
                  <span>+251</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">arrow_drop_down</span>
                </div>
                <input 
                  autoComplete="tel-national" 
                  className="flex-1 bg-transparent border-none focus:ring-0 px-md font-body-md text-body-md text-on-surface placeholder:text-outline h-full w-full outline-none appearance-none" 
                  id="phone" 
                  name="phone" 
                  placeholder="911 234 567" 
                  type="tel" 
                />
              </div>
            </div>

            <button 
              onClick={() => navigate('/home')}
              className="w-full h-[56px] bg-primary text-on-primary rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-sm shadow-[0px_4px_16px_rgba(155,0,68,0.2)] hover:bg-surface-tint hover:shadow-[0px_6px_20px_rgba(155,0,68,0.3)] active:scale-[0.98] transition-all duration-200" 
              type="button"
            >
              Get Started
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>

            <div className="text-center w-full">
              <p className="font-label-md text-label-md text-on-surface-variant flex items-center justify-center gap-xs">
                <span className="material-symbols-outlined text-[16px] text-tertiary">message</span>
                We'll send an OTP via SMS
              </p>
            </div>
          </div>

          <div className="mt-auto pt-xl pb-md text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              By continuing, you agree to our <button onClick={(e) => {e.preventDefault(); navigate('/provider');}} className="text-primary font-medium hover:underline cursor-pointer">Terms of Service</button> and <a className="text-primary font-medium hover:underline" href="#">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
