'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Shield, Lock, Globe, Zap, CheckCircle, TrendingUp, Users, Building, Landmark, ArrowRight, ChevronRight, FileText, Eye, Settings, Scale, Server, Wallet, Layers } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeUseCase, setActiveUseCase] = useState('hedge-funds')

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
              <span className="text-xl font-bold text-white tracking-tight">Internull</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['Platform', 'Use Cases', 'Compliance', 'Technical'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
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
              {['Platform', 'Use Cases', 'Compliance', 'Technical'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-300 hover:text-white text-lg font-medium">
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
                Cross-Chain Privacy Protocol | EVM + Solana
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1] animate-slide-up">
                Privacy-Preserving <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow via-blue-400 to-accent text-glow">
                  Cross-Chain Transactions
                </span>
              </h1>

              <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up [animation-delay:100ms]">
                Deposit assets on one chain and withdraw on another with zero linkage between the two actions. Complete privacy for institutional actors—at a fraction of the cost of traditional ZK solutions.
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

            {/* Hero Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 border-y border-slate-800/50 py-10 bg-surface/30 backdrop-blur-sm">
               <div className="text-center group cursor-default">
                 <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-primary-glow transition-colors">
                   <Lock className="w-6 h-6 text-primary" /> Permissioned
                 </div>
                 <div className="text-xs text-slate-500 uppercase tracking-wider font-mono">KYC-Only Privacy Pools</div>
               </div>
               <div className="text-center group cursor-default">
                 <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-primary-glow transition-colors">
                   <Shield className="w-6 h-6 text-primary" /> Compliant
                 </div>
                 <div className="text-xs text-slate-500 uppercase tracking-wider font-mono">MiCA, Travel Rule, DORA Ready</div>
               </div>
               <div className="text-center group cursor-default">
                 <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-primary-glow transition-colors">
                   <Layers className="w-6 h-6 text-primary" /> Multi-Chain
                 </div>
                 <div className="text-xs text-slate-500 uppercase tracking-wider font-mono">EVM + Solana Ecosystems</div>
               </div>
            </div>
          </div>
        </section>

        {/* --- INSTITUTIONAL USE CASES --- */}
        <section id="use-cases" className="py-24 border-t border-slate-800">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Institutional Use Cases</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Tailored for professional entities managing significant crypto assets who require confidential movement of funds.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {[
                  { id: 'hedge-funds', label: 'Hedge Funds & VCs' },
                  { id: 'treasuries', label: 'Protocol Treasuries' },
                  { id: 'market-makers', label: 'Market Makers' },
                  { id: 'family-offices', label: 'Family Offices' }
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

              <div className="glass-card rounded-2xl p-8 md:p-12 min-h-[400px] border-slate-700/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                    {activeUseCase === 'hedge-funds' ? <TrendingUp className="w-64 h-64 text-white" /> : 
                     activeUseCase === 'treasuries' ? <Building className="w-64 h-64 text-white" /> :
                     activeUseCase === 'market-makers' ? <Zap className="w-64 h-64 text-white" /> :
                     <Landmark className="w-64 h-64 text-white" />
                    }
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                  <div>
                    {/* Hedge Funds & VCs */}
                    {activeUseCase === 'hedge-funds' && (
                      <div className="animate-fade-in">
                        <div className="inline-block px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-mono mb-4 border border-blue-500/20">
                          STEALTH ASSET ALLOCATION
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Redistribute Holdings Invisibly</h3>
                        <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                          Rebalance portfolios across chains without alerting the market. Prevent competitors or on-chain analysts from tracing large transfers—avoiding frontrunning and speculation about your strategy.
                        </p>
                        <ul className="space-y-3 mb-8">
                          {['Obfuscate source and destination', 'Cross-chain portfolio rebalancing', 'Protect investment positions'].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-300">
                              <CheckCircle className="w-4 h-4 text-primary" /> {item}
                            </li>
                          ))}
                        </ul>
                        <button className="text-primary-glow hover:text-white font-medium flex items-center gap-2 transition-colors group">
                          Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    )}
                    
                    {/* Protocol Treasuries */}
                    {activeUseCase === 'treasuries' && (
                       <div className="animate-fade-in">
                       <div className="inline-block px-3 py-1 rounded bg-purple-500/10 text-purple-400 text-xs font-mono mb-4 border border-purple-500/20">
                         PRIVATE TREASURY MANAGEMENT
                       </div>
                       <h3 className="text-3xl font-bold text-white mb-4">Discreet Disbursements</h3>
                       <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                         Disburse grants, salaries, or investments discreetly. Move funds from a treasury wallet to multiple recipients on different chains without revealing the treasury&apos;s on-chain identity.
                       </p>
                       <ul className="space-y-3 mb-8">
                         {['Multi-recipient disbursement', 'Cross-chain grant payments', 'Hide treasury-recipient links'].map((item, i) => (
                           <li key={i} className="flex items-center gap-2 text-slate-300">
                             <CheckCircle className="w-4 h-4 text-primary" /> {item}
                           </li>
                         ))}
                       </ul>
                       <button className="text-primary-glow hover:text-white font-medium flex items-center gap-2 transition-colors group">
                         Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </button>
                     </div>
                    )}

                    {/* Market Makers */}
                    {activeUseCase === 'market-makers' && (
                       <div className="animate-fade-in">
                       <div className="inline-block px-3 py-1 rounded bg-green-500/10 text-green-400 text-xs font-mono mb-4 border border-green-500/20">
                         MARKET MAKER OPERATIONS
                       </div>
                       <h3 className="text-3xl font-bold text-white mb-4">Anonymous Liquidity Transfers</h3>
                       <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                         Transfer liquidity between exchanges or layer-1 and layer-2 networks without exposing your addresses. Preserve anonymity in order books and avoid copycat behavior.
                       </p>
                       <ul className="space-y-3 mb-8">
                         {['Cross-venue liquidity management', 'Hide address patterns', 'Prevent copy-trading'].map((item, i) => (
                           <li key={i} className="flex items-center gap-2 text-slate-300">
                             <CheckCircle className="w-4 h-4 text-primary" /> {item}
                           </li>
                         ))}
                       </ul>
                       <button className="text-primary-glow hover:text-white font-medium flex items-center gap-2 transition-colors group">
                         Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </button>
                     </div>
                    )}

                    {/* Family Offices */}
                    {activeUseCase === 'family-offices' && (
                       <div className="animate-fade-in">
                       <div className="inline-block px-3 py-1 rounded bg-yellow-500/10 text-yellow-400 text-xs font-mono mb-4 border border-yellow-500/20">
                         FAMILY OFFICE TRANSFERS
                       </div>
                       <h3 className="text-3xl font-bold text-white mb-4">Private Cross-Custodian Movements</h3>
                       <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                         Move funds between custodians or jurisdictions privately. Enhance security by not disclosing holdings and prevent unwanted attention or targeting.
                       </p>
                       <ul className="space-y-3 mb-8">
                         {['Cross-jurisdiction transfers', 'Multi-custodian management', 'Enhanced security posture'].map((item, i) => (
                           <li key={i} className="flex items-center gap-2 text-slate-300">
                             <CheckCircle className="w-4 h-4 text-primary" /> {item}
                           </li>
                         ))}
                       </ul>
                       <button className="text-primary-glow hover:text-white font-medium flex items-center gap-2 transition-colors group">
                         Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </button>
                     </div>
                    )}
                  </div>
                  
                  {/* Visual placeholder */}
                  <div className="h-full min-h-[300px] rounded-xl border border-slate-700/50 flex flex-col items-center justify-center relative bg-slate-900/50 backdrop-blur-sm p-8">
                     <p className="text-xs text-slate-500 font-mono mb-4 uppercase tracking-widest">Internull Architecture</p>
                     <div className="flex flex-col items-center gap-4 text-slate-400">
                       <div className="flex items-center gap-4">
                         <div className="px-4 py-2 rounded bg-surface border border-slate-700 text-sm">Chain A</div>
                         <ArrowRight className="w-4 h-4" />
                         <div className="px-4 py-2 rounded bg-primary/20 border border-primary/30 text-primary text-sm">Internull</div>
                         <ArrowRight className="w-4 h-4" />
                         <div className="px-4 py-2 rounded bg-surface border border-slate-700 text-sm">Chain B</div>
                       </div>
                       <p className="text-xs text-slate-600 mt-4 text-center">Zero on-chain correlation between deposit and withdrawal</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- KEY FEATURES FOR INSTITUTIONAL ADOPTION --- */}
        <section id="platform" className="py-24 bg-surface/20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for Institutional Requirements</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Specific features and safeguards designed to meet the strict compliance requirements of regulated entities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Permissioned Privacy Pools */}
              <div className="glass-card p-8 rounded-xl group">
                <Lock className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Permissioned Privacy Pools</h3>
                <p className="text-slate-400">
                  Only vetted institutions and accredited investors can access private liquidity pools. Eliminates co-mingling with unknown or illicit users.
                </p>
              </div>

              {/* No Commingling */}
              <div className="glass-card p-8 rounded-xl group">
                <Wallet className="w-10 h-10 text-success mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">No Commingling of Funds</h3>
                <p className="text-slate-400">
                  Segregated or compartmentalized fund flows prevent clean assets from mixing with unknown sources. Your crypto never touches blacklisted addresses.
                </p>
              </div>

              {/* Integrated Compliance */}
              <div className="glass-card p-8 rounded-xl group">
                <Shield className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Integrated Compliance Controls</h3>
                <p className="text-slate-400">
                  KYC/AML checks for all participants. Deposits screened against sanction lists in real time to block prohibited addresses.
                </p>
              </div>

              {/* Travel Rule */}
              <div className="glass-card p-8 rounded-xl group">
                <FileText className="w-10 h-10 text-warning mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Travel Rule Compliance</h3>
                <p className="text-slate-400">
                  Required originator/beneficiary data attached and communicated through secure channels. Privacy on-chain, compliance data off-chain.
                </p>
              </div>

              {/* Audit Trails */}
              <div className="glass-card p-8 rounded-xl group">
                <Eye className="w-10 h-10 text-primary-glow mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Audit Trails & Reporting</h3>
                <p className="text-slate-400">
                  Every deposit and withdrawal recorded in encrypted logs accessible to clients and auditors. Prove source of funds at any time.
                </p>
              </div>

              {/* Custom Controls */}
              <div className="glass-card p-8 rounded-xl group">
                <Settings className="w-10 h-10 text-slate-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Custom Policy & Controls</h3>
                <p className="text-slate-400">
                  Set withdrawal limits, time delays, or multi-signature approvals. Align with fiduciary duties and internal risk management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- REGULATORY ALIGNMENT --- */}
        <section id="compliance" className="py-24 border-t border-slate-800">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Regulatory Alignment <br />
                  <span className="text-slate-500">by Design</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  Built with global regulations in mind. Internull provides privacy without legal compromise—enabling institutions to use the platform confident it won&apos;t jeopardize their licenses or reputation.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: 'EU MiCA Compliance', desc: 'Full AML/CFT integration, supervised CASPs, and cooperation with FIUs enabled.' },
                    { title: 'FATF Travel Rule', desc: 'Secure APIs for originator/beneficiary data exchange alongside private on-chain transactions.' },
                    { title: 'DORA Resilience', desc: 'Enterprise-grade infrastructure with redundancy, audited smart contracts, and 24/7 monitoring.' },
                    { title: 'U.S. FinCEN Ready', desc: 'OFAC screening, sanctions compliance, and MSB registration framework where required.' },
                    { title: 'Swiss FINMA Guidelines', desc: 'Compliant with travel rule interpretation and unhosted wallet verification requirements.' }
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
                      <span className="text-slate-600">PUBLIC MIXERS</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                       { feat: 'Access', us: 'KYC-Verified Only', them: 'Open to Anyone' },
                       { feat: 'Pool Structure', us: 'Isolated / Private', them: 'Shared / Public' },
                       { feat: 'Travel Rule', us: 'Compliant', them: 'Non-Compliant' },
                       { feat: 'Audit Trails', us: 'Full Reporting', them: 'None' },
                       { feat: 'OFAC Screening', us: 'Real-time', them: 'None' },
                       { feat: 'Regulatory Status', us: 'License-Ready', them: 'Sanctioned Risk' },
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

        {/* --- TECHNICAL ADVANTAGE --- */}
        <section id="technical" className="py-24 bg-surface/30 border-y border-slate-800">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Advantage</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Efficiency and flexibility compared to traditional zero-knowledge privacy solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="glass-card p-6 rounded-xl text-center">
                <Zap className="w-8 h-8 text-warning mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Lower Costs</h3>
                <p className="text-sm text-slate-400">No heavy ZK proofs means significantly reduced gas fees and operational costs.</p>
              </div>

              <div className="glass-card p-6 rounded-xl text-center">
                <Server className="w-8 h-8 text-success mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">High Throughput</h3>
                <p className="text-sm text-slate-400">Not bottlenecked by proof generation. Batch-process multiple transfers rapidly.</p>
              </div>

              <div className="glass-card p-6 rounded-xl text-center">
                <Layers className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Multi-Chain Native</h3>
                <p className="text-sm text-slate-400">EVM-compatible chains and Solana supported. Bridge value across ecosystems privately.</p>
              </div>

              <div className="glass-card p-6 rounded-xl text-center">
                <Scale className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Easy Integration</h3>
                <p className="text-sm text-slate-400">APIs and dashboard for seamless integration with existing custody solutions.</p>
              </div>
            </div>

            <div className="mt-12 max-w-3xl mx-auto text-center">
              <p className="text-slate-500 text-sm">
                Our novel treasury and routing mechanism breaks links between deposits and withdrawals without the computational overhead of zero-knowledge proofs. The simpler architecture means easier integration, fewer points of failure, and faster operations.
              </p>
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 z-0"></div>
          <div className="container-custom relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Complete Privacy with Accountability</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Execute transactions without public traceability while retaining full control over compliance. The best of both worlds—anonymity with auditability.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary text-lg px-8 py-4 rounded shadow-xl">
                Schedule Demo
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
              <span className="text-lg font-bold text-slate-500">Internull</span>
            </div>
            <div className="text-slate-600 text-sm">
              © 2025 Internull Institutional. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="https://internull.xyz" className="text-slate-600 hover:text-primary transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}