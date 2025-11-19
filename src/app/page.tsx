'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Shield, Lock, Globe, Zap, CheckCircle, AlertTriangle, TrendingUp, Users, Building, Landmark, ArrowRight, ChevronRight, LayoutGrid, Server, EyeOff, Wallet } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeUseCase, setActiveUseCase] = useState('market-makers')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden selection:bg-primary/30">
      {/* --- AMBIENT BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-background to-background z-0 pointer-events-none" />
      <div className="fixed inset-0 bg-grid-pattern bg-[length:4rem_4rem] opacity-[0.03] z-0 pointer-events-none" />
      <div className="fixed inset-0 bg-noise z-0 pointer-events-none" />

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded flex items-center justify-center shadow-lg shadow-primary/20">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">InterNull</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['Platform', 'Solutions', 'Compliance', 'Pricing'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                Talk to Sales
              </button>
              <button className="btn-primary px-5 py-2 rounded text-sm font-semibold transition-all transform hover:scale-105">
                Schedule Demo
              </button>
            </div>

            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full glass-nav border-t border-slate-800 p-6 md:hidden animate-fade-in">
            <div className="flex flex-col space-y-4">
              {['Platform', 'Solutions', 'Compliance', 'Pricing'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-300 hover:text-white text-lg font-medium">
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <button className="btn-secondary py-3 rounded font-medium">Talk to Sales</button>
                <button className="btn-primary py-3 rounded font-medium">Schedule Demo</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="pt-40 pb-20 lg:pt-52 lg:pb-32 relative">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-glow text-xs font-medium mb-8 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Multi-Chain Privacy Layer | 15+ Chains
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1] animate-slide-up">
                Confidential Settlement <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow via-blue-400 to-accent text-glow">
                  Without Custody Risk
                </span>
              </h1>

              <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up [animation-delay:100ms]">
                Preserve competitive advantage while enabling full regulatory compliance. The infrastructure for market makers, funds, and custodians demanding both confidentiality and auditability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:200ms]">
                <button className="group relative px-8 py-4 bg-primary text-white font-semibold rounded overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(15,82,186,0.5)]">
                  <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 skew-x-12 -ml-4 w-[150%]" />
                  <span className="relative flex items-center gap-2">
                    Schedule Confidential Demo <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
                <button className="px-8 py-4 text-slate-300 hover:text-white font-medium transition-colors border border-slate-800 hover:border-slate-600 rounded hover:bg-surface/50">
                  Technical Overview
                </button>
              </div>
            </div>

            {/* Hero Metrics Grid (Merged from your new content) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 border-y border-slate-800/50 py-10 bg-surface/30 backdrop-blur-sm">
               <div className="text-center group cursor-default">
                  <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-primary-glow transition-colors">
                    $195M <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-mono">Privacy Infra Raised (Nov '25)</div>
               </div>
               <div className="text-center group cursor-default">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-primary-glow transition-colors">
                    0%
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-mono">Custody Risk</div>
               </div>
               <div className="text-center group cursor-default">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-primary-glow transition-colors">
                    15+
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-mono">Chains Supported</div>
               </div>
            </div>
          </div>
        </section>

        {/* --- BENTO GRID: PROBLEM & SOLUTION --- */}
        <section className="py-24 bg-surface/20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Infrastructure Gap</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Institutional strategies are leaking alpha through on-chain transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Card 1: Alpha Leakage */}
              <div className="col-span-1 md:col-span-2 glass-card p-8 rounded-xl relative group overflow-hidden min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <TrendingUp className="w-10 h-10 text-error mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">Alpha Leakage</h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                    Estimated <span className="text-white font-semibold">$1B+/year</span> lost to MEV attacks. On-chain transparency allows competitors to front-run trades and analyze your positioning.
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                  <LayoutGrid className="w-64 h-64 text-white" />
                </div>
              </div>

              {/* Card 2: Compliance */}
              <div className="col-span-1 row-span-2 glass-card p-8 rounded-xl relative group overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div>
                  <Shield className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3">Regulatory Risk</h3>
                  <p className="text-slate-400 mb-4">
                    Mixers create compliance nightmares. Institutions need privacy WITHOUT exposure.
                  </p>
                  <ul className="space-y-3 mt-6">
                    {['MiCA & FinCEN Ready', 'OFAC Screening', 'Audit Logs'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 3: Operational Friction */}
              <div className="col-span-1 glass-card p-8 rounded-xl relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <EyeOff className="w-10 h-10 text-success mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Operational Friction</h3>
                <p className="text-slate-400">
                  Internal transfers leak intelligence, creating attack vectors for rivals.
                </p>
              </div>

              {/* Card 4: Tech Spec */}
              <div className="col-span-1 glass-card p-8 rounded-xl relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Server className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">DKG Architecture</h3>
                <p className="text-slate-400">
                  Distributed Key Generation ensures no single point of failure. You hold the keys.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- INTERACTIVE USE CASES (Updated with Fintech) --- */}
        <section id="solutions" className="py-24 border-t border-slate-800">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {[
                  { id: 'market-makers', label: 'Market Makers' },
                  { id: 'funds', label: 'Crypto Funds' },
                  { id: 'custodians', label: 'Custodians' },
                  { id: 'fintechs', label: 'Fintechs' }, // Added from your update
                  { id: 'daos', label: 'DAOs' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveUseCase(tab.id)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeUseCase === tab.id
                        ? 'bg-primary text-white shadow-[0_0_20px_-5px_rgba(15,82,186,0.5)]'
                        : 'bg-surface border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="glass-card rounded-2xl p-1 md:p-12 min-h-[450px] border-slate-700/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                    {activeUseCase === 'market-makers' ? <TrendingUp className="w-64 h-64 text-white" /> : 
                     activeUseCase === 'funds' ? <Building className="w-64 h-64 text-white" /> :
                     activeUseCase === 'custodians' ? <Lock className="w-64 h-64 text-white" /> :
                     activeUseCase === 'fintechs' ? <Zap className="w-64 h-64 text-white" /> :
                     <Users className="w-64 h-64 text-white" />
                    }
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                  <div className="order-2 md:order-1">
                    {/* Market Makers */}
                    {activeUseCase === 'market-makers' && (
                      <div className="animate-fade-in">
                        <div className="inline-block px-3 py-1 rounded bg-red-500/10 text-red-400 text-xs font-mono mb-4 border border-red-500/20">
                          PROBLEM: FRONT-RUNNING
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Execute Without Signaling</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                          Eliminate traceable portfolio flows. Execute delta-neutral hedging and cross-venue arbitrage without alerting the market.
                        </p>
                        
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/60 border border-slate-800 mb-8">
                            <div className="text-green-400 font-bold text-xl">$2M-5M</div>
                            <div className="h-8 w-px bg-slate-700"></div>
                            <div className="text-sm text-slate-400">Est. annual cost (Avg $2.5M)</div>
                        </div>

                        <button className="text-primary-glow hover:text-white font-medium flex items-center gap-2 transition-colors group">
                          Schedule Market Maker Demo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    )}
                    
                    {/* Funds */}
                    {activeUseCase === 'funds' && (
                       <div className="animate-fade-in">
                       <div className="inline-block px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-mono mb-4 border border-blue-500/20">
                          PROBLEM: COPY TRADING
                       </div>
                       <h3 className="text-3xl font-bold text-white mb-4">Protect Treasury Movements</h3>
                       <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                         Enter and exit large positions without triggering copy-traders. Perform quarterly rebalancing and OTC settlements while shielding your LPs' strategies.
                       </p>
                       <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/60 border border-slate-800 mb-8">
                            <div className="text-white font-bold text-xl">$500K-1.5M</div>
                            <div className="h-8 w-px bg-slate-700"></div>
                            <div className="text-sm text-slate-400">Est. annual cost</div>
                        </div>
                       <button className="text-primary-glow hover:text-white font-medium flex items-center gap-2 transition-colors group">
                         Schedule Fund Demo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </button>
                     </div>
                    )}

                    {/* Custodians */}
                    {activeUseCase === 'custodians' && (
                       <div className="animate-fade-in">
                       <div className="inline-block px-3 py-1 rounded bg-yellow-500/10 text-yellow-400 text-xs font-mono mb-4 border border-yellow-500/20">
                          PROBLEM: WALLET RECONNAISSANCE
                       </div>
                       <h3 className="text-3xl font-bold text-white mb-4">Secure Internal Operations</h3>
                       <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                         Move funds between hot and cold wallets without revealing your total assets under custody. Reduce the attack surface by obfuscating internal operational flows.
                       </p>
                       <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/60 border border-slate-800 mb-8">
                            <div className="text-white font-bold text-xl">$1M-20M</div>
                            <div className="h-8 w-px bg-slate-700"></div>
                            <div className="text-sm text-slate-400">Est. annual cost</div>
                        </div>
                       <button className="text-primary-glow hover:text-white font-medium flex items-center gap-2 transition-colors group">
                         Schedule Custodian Demo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </button>
                     </div>
                    )}

                    {/* Fintechs (New) */}
                    {activeUseCase === 'fintechs' && (
                       <div className="animate-fade-in">
                       <div className="inline-block px-3 py-1 rounded bg-purple-500/10 text-purple-400 text-xs font-mono mb-4 border border-purple-500/20">
                          PROBLEM: USER PRIVACY
                       </div>
                       <h3 className="text-3xl font-bold text-white mb-4">Privacy-Preserving Rails</h3>
                       <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                         Salaries, rent payments, and spending patterns are exposed on-chain. Protect your users from profiling and GDPR liabilities using our middleware.
                       </p>
                       <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/60 border border-slate-800 mb-8">
                            <div className="text-white font-bold text-xl">$150K-750K</div>
                            <div className="h-8 w-px bg-slate-700"></div>
                            <div className="text-sm text-slate-400">Scales with volume</div>
                        </div>
                       <button className="text-primary-glow hover:text-white font-medium flex items-center gap-2 transition-colors group">
                         Schedule Fintech Demo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </button>
                     </div>
                    )}
                    
                    {/* DAOs */}
                    {activeUseCase === 'daos' && (
                       <div className="animate-fade-in">
                       <div className="inline-block px-3 py-1 rounded bg-green-500/10 text-green-400 text-xs font-mono mb-4 border border-green-500/20">
                          PROBLEM: CONTRIBUTOR PRIVACY
                       </div>
                       <h3 className="text-3xl font-bold text-white mb-4">Confidential Grants</h3>
                       <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                         Disburse grants and pay contributors without doxxing their wallets. Maintain a public ledger of amounts spent while keeping recipient identities private.
                       </p>
                       <button className="text-primary-glow hover:text-white font-medium flex items-center gap-2 transition-colors group">
                         Schedule DAO Demo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </button>
                     </div>
                    )}
                  </div>
                  
                  {/* Architecture Diagram */}
                  <div className="order-1 md:order-2 h-full min-h-[300px] rounded-xl border border-slate-700/50 flex flex-col items-center justify-center relative bg-slate-900/50 backdrop-blur-sm p-8">
                     <p className="text-xs text-slate-500 font-mono mb-4 uppercase tracking-widest">InterNull Architecture</p>
                                       </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- COMPARISON: STRATEGIC POSITIONING --- */}
        <section id="comparison" className="py-24 bg-surface/30 border-y border-slate-800">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Institutional Privacy <br />
                  <span className="text-slate-500">vs. Public Mixers</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  InterNull is middleware, not a mixer. Our architecture is designed from the ground up for the post-Tornado Cash regulatory environment.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: 'Isolated Deployments', desc: 'No shared liquidity pools. Your transaction set is yours alone.' },
                    { title: 'Audit Keys', desc: 'Generate view-only keys for auditors or regulators instantly.' },
                    { title: 'OFAC Screening', desc: 'Built-in oracle screens all interactions against sanctions lists.' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20"></div>
                <div className="relative bg-background border border-slate-700 rounded-2xl p-8">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-6">
                    <span className="text-white font-mono text-sm uppercase tracking-widest">Comparison</span>
                    <div className="flex gap-4 text-xs font-bold">
                      <span className="text-primary-glow">INTERNULL</span>
                      <span className="text-slate-600">MIXERS</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                       { feat: 'Custody', us: 'Non-Custodial', them: 'Smart Contract Risk' },
                       { feat: 'Auditability', us: 'Full & Selective', them: 'None' },
                       { feat: 'AML/KYC', us: 'Integrated', them: 'None' },
                       { feat: 'Pool Structure', us: 'Isolated / Private', them: 'Shared / Public' },
                       { feat: 'Sanctions', us: 'Real-time Screening', them: 'None' },
                    ].map((row, i) => (
                        <div key={i} className="grid grid-cols-3 text-sm py-3 border-b border-slate-800/50 last:border-0">
                            <div className="text-slate-400 font-medium">{row.feat}</div>
                            <div className="text-green-400 font-semibold flex items-center gap-2">
                                <CheckCircle className="w-3 h-3" /> {row.us}
                            </div>
                            <div className="text-slate-600 flex items-center gap-2">
                                <X className="w-3 h-3" /> {row.them}
                            </div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PRICING SECTION (Updated Cost Structure) --- */}
        <section id="pricing" className="py-24">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Economics That Scale</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Commission-based pricing aligns our success with yours.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
              {/* Starter */}
              <div className="glass-card p-8 rounded-xl border-slate-800">
                <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                <p className="text-slate-500 text-sm mb-6">Small Funds & DAOs</p>
                <div className="text-2xl font-bold text-white mb-1">$100K - $300K<span className="text-sm text-slate-500 font-normal">/yr</span></div>
                <p className="text-xs text-slate-500 mb-8">&lt;1M tx/month</p>
                <ul className="space-y-3 mb-8 text-sm text-slate-400">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-slate-600" /> Single Chain</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-slate-600" /> Email Support</li>
                </ul>
                <button className="w-full py-3 border border-slate-700 text-white rounded hover:bg-slate-800 transition-colors">Request Quote</button>
              </div>

              {/* Professional (Highlight) */}
              <div className="glass-card p-8 rounded-xl border-primary/50 relative bg-surface/60 transform md:-translate-y-4 shadow-2xl shadow-black/50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-success text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
                <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
                <p className="text-slate-400 text-sm mb-6">Mid-Size Institutions</p>
                <div className="text-3xl font-bold text-white mb-1">$500K - $1.5M<span className="text-sm text-slate-500 font-normal">/yr</span></div>
                <p className="text-xs text-slate-500 mb-8">1-10M tx/month</p>
                <ul className="space-y-3 mb-8 text-sm text-slate-300">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Multi-chain Deployment</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Audit Module Included</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Dedicated Support + SLA</li>
                </ul>
                <button className="w-full py-3 bg-primary text-white rounded font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">Request Quote</button>
              </div>

              {/* Enterprise */}
              <div className="glass-card p-8 rounded-xl border-slate-800">
                <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-slate-500 text-sm mb-6">Large Custodians & Exchanges</p>
                <div className="text-3xl font-bold text-white mb-1">Custom</div>
                <p className="text-xs text-slate-500 mb-8">Unlimited volume</p>
                <ul className="space-y-3 mb-8 text-sm text-slate-400">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-slate-600" /> White Label Options</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-slate-600" /> Custom Integrations</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-slate-600" /> 24/7 Priority Support</li>
                </ul>
                <button className="w-full py-3 border border-slate-700 text-white rounded hover:bg-slate-800 transition-colors">Contact Sales</button>
              </div>
            </div>
            <p className="text-center text-slate-500 text-sm mt-8">
                Flexible pricing: Commission-based (0.5-2% of tx volume) or Fixed SaaS licensing available.
            </p>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 z-0"></div>
          <div className="container-custom relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to go dark?</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Join leading institutions using InterNull for confidential, compliant settlements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary text-lg px-8 py-4 rounded shadow-xl">
                Start Integration
              </button>
              <button className="px-8 py-4 border border-slate-700 text-white rounded font-semibold hover:bg-surface/50 transition-colors">
                Talk to Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-background border-t border-slate-800 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-slate-600" />
              <span className="text-lg font-bold text-slate-500">InterNull</span>
            </div>
            <div className="text-slate-600 text-sm">
              © 2025 InterNull Institutional. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-slate-600 hover:text-primary transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}