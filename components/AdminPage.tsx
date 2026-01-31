
import React, { useState, useEffect } from 'react';
import { PACKAGES, TESTIMONIALS } from '../constants';

type AdminTab = 'overview' | 'inquiries' | 'packages' | 'flavors';

const AdminPage: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [inquiries, setInquiries] = useState([
    { id: 101, name: 'Isabella V.', email: 'isabella@weddings.it', date: '2024-09-15', status: 'Pending', guests: '120', package: 'Mellow Scooper' },
    { id: 102, name: 'Corporate Tech Co.', email: 'events@techco.com', date: '2024-11-20', status: 'In Review', guests: '200', package: 'Ultimate Scooper' },
    { id: 103, name: 'James Smith', email: 'james@gmail.com', date: '2024-08-05', status: 'Confirmed', guests: '45', package: 'Petite Scooper' },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '1234') { // Mock passcode
      setIsAuthorized(true);
    } else {
      alert('Incorrect authorization code.');
      setPasscode('');
    }
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-2xl text-center">
          <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-3">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8-8v4" />
            </svg>
          </div>
          <h1 className="text-2xl font-serif text-white mb-2">Staff Portal</h1>
          <p className="text-slate-500 text-sm mb-8 uppercase tracking-widest font-black">Authorized Access Only</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              maxLength={4}
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter 4-digit Pin"
              className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl py-4 text-center text-2xl tracking-[1em] text-white focus:border-rose-600 outline-none transition-all"
            />
            <button className="w-full bg-rose-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-rose-700 transition-all">
              Unlock Terminal
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row text-white pt-20">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-slate-900 border-r border-slate-800 p-8 space-y-2">
        <div className="mb-10 px-4">
          <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1">Command Center</p>
          <p className="text-sm font-serif">Staff: Admin_01</p>
        </div>
        
        {(['overview', 'inquiries', 'packages', 'flavors'] as AdminTab[]).map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
              activeTab === tab ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/20' : 'text-slate-400 hover:bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}

        <div className="pt-20">
          <button onClick={() => window.location.reload()} className="w-full text-left px-4 py-3 text-slate-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-all">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Panel Content */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        {activeTab === 'overview' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom duration-500">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-serif mb-2">Operations Summary</h2>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Last Updated: Just Now</p>
              </div>
              <button className="bg-white/5 border border-white/10 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                Export Data
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Pending Inquiries</p>
                <p className="text-5xl font-serif text-rose-500">08</p>
                <p className="text-xs text-slate-400 mt-4">+2 from yesterday</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Most Popular Tier</p>
                <p className="text-2xl font-serif text-white uppercase">Mellow</p>
                <p className="text-xs text-slate-400 mt-4">65% of total bookings</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Upcoming Events</p>
                <p className="text-5xl font-serif text-white">14</p>
                <p className="text-xs text-slate-400 mt-4">For the month of August</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h3 className="text-xl font-serif mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="flex items-center gap-4 py-4 border-b border-slate-800 last:border-0">
                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-rose-500 font-bold">A</div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">New Inquiry from Emma L.</p>
                      <p className="text-xs text-slate-500">Petite Package | Sept 12, 2024</p>
                    </div>
                    <span className="text-[10px] text-slate-600">2h ago</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'inquiries' && (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
             <h2 className="text-3xl font-serif mb-8">Inquiry Pipeline</h2>
             <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-800/50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                      <th className="px-8 py-4">Client</th>
                      <th className="px-8 py-4">Event Date</th>
                      <th className="px-8 py-4">Package</th>
                      <th className="px-8 py-4">Status</th>
                      <th className="px-8 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {inquiries.map(item => (
                      <tr key={item.id} className="text-sm hover:bg-white/5 transition-colors">
                        <td className="px-8 py-6">
                          <p className="font-bold">{item.name}</p>
                          <p className="text-xs text-slate-500">{item.email}</p>
                        </td>
                        <td className="px-8 py-6 font-medium">{item.date}</td>
                        <td className="px-8 py-6"><span className="bg-slate-800 px-3 py-1 rounded-full text-[10px] font-bold">{item.package}</span></td>
                        <td className="px-8 py-6">
                          <span className={`text-[10px] font-black uppercase tracking-widest ${
                            item.status === 'Pending' ? 'text-amber-500' : item.status === 'Confirmed' ? 'text-emerald-500' : 'text-blue-400'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <button className="text-rose-500 font-black text-[10px] uppercase tracking-widest hover:text-rose-400">Manage</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </div>
        )}

        {activeTab === 'packages' && (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <h2 className="text-3xl font-serif mb-8">Service Tier Manager</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PACKAGES.map(pkg => (
                <div key={pkg.id} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-2xl font-serif text-rose-500 mb-6">{pkg.price}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Capacity:</span>
                        <span className="text-white font-bold">{pkg.guests}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Flavors:</span>
                        <span className="text-white font-bold">{pkg.flavors}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="bg-white/5 hover:bg-white/10 p-3 rounded-xl transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </button>
                    <button className="bg-white/5 hover:bg-rose-500/20 p-3 rounded-xl transition-all text-rose-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </div>
              ))}
              <button className="border-2 border-dashed border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-slate-500 hover:border-rose-500 hover:text-rose-500 transition-all group">
                <svg className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                <span className="text-xs font-black uppercase tracking-widest">Add New Tier</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'flavors' && (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
             <h2 className="text-3xl font-serif mb-8">Flavor Library</h2>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
               {['Pistachio', 'Dark Choc', 'Fior di Latte', 'Lemon', 'Honeycomb', 'Strawberry', 'Hazelnut', 'Espresso'].map((f, idx) => (
                 <div key={f} className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-slate-800 rounded-2xl mb-4 flex items-center justify-center text-xl">🍨</div>
                    <h4 className="font-bold text-sm mb-4">{f}</h4>
                    <div className="flex items-center gap-2">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-rose-600"></div>
                      </label>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Active</span>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPage;
