import { useNavigate } from 'react-router-dom';

export default function ProviderDashboard() {
  const navigate = useNavigate();

  return (
    <div className="font-body-md bg-background text-on-background antialiased pb-24">
      <header className="flex justify-between items-center px-margin h-14 w-full shadow-sm bg-surface dark:bg-surface-dim shadow-[0px_4px_16px_rgba(0,0,0,0.06)] fixed top-0 z-50">
        <div className="flex items-center gap-md">
          <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">spa</span>
          <span className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim tracking-tight">Zemenay</span>
        </div>
        <div className="flex items-center gap-md">
          <button className="hover:opacity-80 transition-opacity active:scale-95 transition-transform text-on-surface-variant relative cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <img 
            alt="Zemenay Logo" 
            className="w-8 h-8 rounded-full object-cover border border-outline-variant cursor-pointer" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGgjKC3Cr6ATBGSSsO7_QQw_031orF96miR8Sva1cacTSiz7fS8D_082Yt_6SCZ2H3dJaOFqmfdKnqnnF_0jrQcdOcgJqXd1VF4YJWi8weo6KhybQfnk6c_AcF0sQO3Fpts71qjLhziOGELew8KRItqzgOC3zhVlAPXJwL8oeAGsP0yHtdHgBeHaKDpWZqsCLYR29-XwUdykh1ToFulRCjX2AoLM1CuHuk8DJQFaGLD-V8A4xbXBBlQ1bPbc9mATktVz_IZfF_1F2A" 
            onClick={() => navigate('/home')}
          />
        </div>
      </header>
      
      <main className="mt-[72px] px-margin space-y-xl max-w-screen-md mx-auto">
        <section>
          <h1 className="font-headline-md text-headline-md text-on-background mb-xs">Hello, Selam Beauty</h1>
          <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-xs">
            <span className="material-symbols-outlined text-secondary-container text-lg fill">star</span>
            <span className="font-label-lg text-label-lg">4.9</span> (128 reviews)
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="bg-surface rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] p-md flex flex-col justify-between h-full border border-surface-container-high relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-fixed-dim rounded-full opacity-20 blur-xl"></div>
            <div>
              <h2 className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest mb-sm">Today's Summary</h2>
              <div className="flex items-baseline gap-xs">
                <span className="font-display-lg text-display-lg text-primary">3</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Bookings</span>
              </div>
            </div>
            <div className="mt-lg flex items-center gap-sm bg-surface-container-low p-sm rounded-lg border border-surface-variant">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <p className="font-body-sm text-body-sm text-on-background">Next at <strong className="font-label-lg text-label-lg">2:00 PM</strong></p>
            </div>
          </div>

          <div className="bg-surface rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] p-md flex flex-col justify-between h-full border border-surface-container-high relative overflow-hidden">
            <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-secondary-container rounded-full opacity-10 blur-xl"></div>
            <div>
              <h2 className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest mb-sm">Daily Earnings</h2>
              <div className="flex items-baseline gap-xs">
                <span className="font-display-lg text-display-lg text-on-background">4,500</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">ETB</span>
              </div>
            </div>
            
            <div className="mt-lg">
              <p className="font-label-md text-label-md text-on-surface-variant mb-xs">Weekly Progress</p>
              <div className="flex items-end gap-xs h-16 w-full opacity-80">
                <div className="w-1/5 bg-surface-variant rounded-t-sm h-[40%]"></div>
                <div className="w-1/5 bg-surface-variant rounded-t-sm h-[60%]"></div>
                <div className="w-1/5 bg-surface-variant rounded-t-sm h-[30%]"></div>
                <div className="w-1/5 bg-primary-container rounded-t-sm h-[80%] relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-md text-[10px] px-1.5 py-0.5 rounded shadow-sm">Today</div>
                </div>
                <div className="w-1/5 bg-surface-variant rounded-t-sm h-[10%]"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-md">
          <div className="flex justify-between items-center border-b border-surface-variant pb-xs">
            <h2 className="font-headline-sm text-headline-sm text-on-background">Incoming Requests</h2>
            <span className="bg-error-container text-on-error-container font-label-md px-2 py-0.5 rounded-full">2 New</span>
          </div>

          <div className="bg-surface rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] p-md border-l-4 border-l-secondary-container">
            <div className="flex justify-between items-start mb-md">
              <div>
                <h3 className="font-label-lg text-label-lg text-on-background mb-xs">Hirut T.</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[16px]">content_cut</span>
                  Bridal Hair Styling
                </p>
              </div>
              <div className="text-right">
                <p className="font-label-lg text-label-lg text-primary">Tomorrow</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">10:00 AM</p>
              </div>
            </div>
            <div className="flex gap-sm">
              <button className="flex-1 h-[48px] bg-primary text-on-primary font-label-lg rounded-lg shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-xs cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">check_circle</span> Accept
              </button>
              <button className="flex-1 h-[48px] bg-transparent border border-outline text-on-surface font-label-lg rounded-lg active:scale-95 transition-transform flex items-center justify-center gap-xs cursor-pointer hover:bg-surface-variant/50">
                Decline
              </button>
            </div>
          </div>

          <div className="bg-surface rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] p-md border-l-4 border-l-surface-variant">
            <div className="flex justify-between items-start mb-md">
              <div>
                <h3 className="font-label-lg text-label-lg text-on-background mb-xs">Abebech K.</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[16px]">pan_tool</span>
                  Gel Manicure
                </p>
              </div>
              <div className="text-right">
                <p className="font-label-lg text-label-lg text-on-surface">Friday</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">3:30 PM</p>
              </div>
            </div>
            <div className="flex gap-sm">
              <button className="flex-1 h-[48px] bg-primary text-on-primary font-label-lg rounded-lg shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-xs cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">check_circle</span> Accept
              </button>
              <button className="flex-1 h-[48px] bg-transparent border border-outline text-on-surface font-label-lg rounded-lg active:scale-95 transition-transform flex items-center justify-center gap-xs cursor-pointer hover:bg-surface-variant/50">
                Decline
              </button>
            </div>
          </div>
        </section>
      </main>

      <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center px-2 py-3 bg-surface dark:bg-surface-container shadow-[0px_-4px_16px_rgba(0,0,0,0.06)] docked full-width rounded-t-xl">
        <button className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 hover:bg-surface-variant/50 active:scale-90 transition-all duration-200 cursor-pointer">
          <span className="material-symbols-outlined fill">dashboard</span>
          <span className="font-label-md text-label-md mt-1">Dashboard</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 active:scale-90 transition-all duration-200 px-4 py-1 rounded-full cursor-pointer">
          <span className="material-symbols-outlined">event_note</span>
          <span className="font-label-md text-label-md mt-1">Bookings</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 active:scale-90 transition-all duration-200 px-4 py-1 rounded-full cursor-pointer">
          <span className="material-symbols-outlined">payments</span>
          <span className="font-label-md text-label-md mt-1">Earnings</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 active:scale-90 transition-all duration-200 px-4 py-1 rounded-full relative cursor-pointer">
          <span className="material-symbols-outlined">forum</span>
          <span className="absolute top-1 right-3 w-2 h-2 bg-error rounded-full"></span>
          <span className="font-label-md text-label-md mt-1">Chat</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 active:scale-90 transition-all duration-200 px-4 py-1 rounded-full cursor-pointer">
          <span className="material-symbols-outlined">person_pin</span>
          <span className="font-label-md text-label-md mt-1">Profile</span>
        </button>
      </nav>
    </div>
  );
}
