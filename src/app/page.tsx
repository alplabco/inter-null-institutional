'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown, Shield, Lock, Globe, Zap, CheckCircle, AlertTriangle, TrendingUp, Users, Building, Landmark } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeUseCase, setActiveUseCase] = useState('market-makers')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">InterNull</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-gray-300 hover:text-white transition">Platform</a>
              <a href="#solutions" className="text-gray-300 hover:text-white transition">Solutions</a>
              <a href="#compliance" className="text-gray-300 hover:text-white transition">Compliance</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="btn btn-secondary text-sm">
                Talk to Sales
              </button>
              <button className="btn btn-primary text-sm">
                Schedule Demo
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="container-custom py-4 space-y-4">
              <a href="#platform" className="block text-gray-300 hover:text-white transition">Platform</a>
              <a href="#solutions" className="block text-gray-300 hover:text-white transition">Solutions</a>
              <a href="#compliance" className="block text-gray-300 hover:text-white transition">Compliance</a>
              <a href="#pricing" className="block text-gray-300 hover:text-white transition">Pricing</a>
              <div className="pt-4 space-y-2">
                <button className="btn btn-secondary w-full text-sm">Talk to Sales</button>
                <button className="btn btn-primary w-full text-sm">Schedule Demo</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="section pt-32 md:pt-40">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-precision-600/10 border border-precision-600/30 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-precision-600" />
              <span className="text-sm font-medium text-precision-600">Multi-Chain Privacy Layer | No Migration Required | 15+ Chains Supported</span>
            </div>

            <h1 className="text-white mb-6 text-balance">
              Confidential Settlement Infrastructure for Institutional Digital Assets
            </h1>

            <p className="text-xl text-gray-300 mb-8 text-balance max-w-3xl mx-auto">
              Multi-chain privacy middleware that preserves competitive advantage while enabling full regulatory compliance. Built for market makers, crypto funds, custodians, and DAOs that demand both confidentiality and auditability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn btn-primary text-lg px-8 py-4">
                Schedule a Confidential Demo
              </button>
              <button className="btn btn-secondary text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Download Technical Overview
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Zero Custody Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>MiCA & FinCEN Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>15+ Chains Supported</span>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-success/30 rounded-lg p-6 mt-8 max-w-2xl mx-auto">
              <p className="text-success font-semibold mb-2 flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Market Momentum
              </p>
              <p className="text-gray-300">
                Blockchain privacy infrastructure raised $195M in November 2025 alone. Leading VCs recognize institutional privacy as the next frontier - InterNull is positioned to capture this growing market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section bg-slate-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-white mb-6">The Infrastructure Gap Institutions Can't Ignore</h2>
            <p className="text-lg text-gray-300">
              Every on-chain transaction exposes your strategy. Portfolio rotations, hedging moves, treasury rebalancing, and OTC settlements are visible to competitors, front-runners, and analysts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card bg-slate-700 border-slate-600">
              <TrendingUp className="w-12 h-12 text-error mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Alpha Leakage</h3>
              <p className="text-gray-300">
                On-chain transparency allows competitors to front-run trades and analyze positioning. Estimated $1B+/year lost to MEV attacks.
              </p>
            </div>

            <div className="card bg-slate-700 border-slate-600">
              <AlertTriangle className="w-12 h-12 text-warning mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Regulatory Risk</h3>
              <p className="text-gray-300">
                Privacy mixers create compliance nightmares. Institutions need privacy WITHOUT regulatory exposure or sanctions risk.
              </p>
            </div>

            <div className="card bg-slate-700 border-slate-600">
              <Shield className="w-12 h-12 text-info mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Operational Friction</h3>
              <p className="text-gray-300">
                Internal transfers leak intelligence, creating attack vectors and competitive analysis opportunities for rivals.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-600">
                <p className="text-4xl font-bold text-precision-600 mb-2">$195M+</p>
                <p className="text-gray-400">Raised for privacy infrastructure (Nov 2025)</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-600">
                <p className="text-4xl font-bold text-precision-600 mb-2">$1B+</p>
                <p className="text-gray-400">Annual MEV & alpha leakage losses</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-600">
                <p className="text-4xl font-bold text-precision-600 mb-2">73%</p>
                <p className="text-gray-400">Institutions cite privacy as top concern</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="section bg-precision-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">InterNull is NOT a Privacy Mixer</h2>
            <p className="text-xl text-white/90 mb-8">
              We're institutional confidentiality middleware—software infrastructure that enables compliant, auditable, multi-chain settlements. Deploy private pools or use our KYC-gated institutional pool. No custody risk. Full regulatory alignment.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-white font-semibold mb-4">Privacy Mixers (Tornado Cash)</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                      <span>Shared public pools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                      <span>Anonymous transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                      <span>No compliance tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                      <span>Regulatory risk</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">InterNull</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Private pools or KYC-gated institutional pools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Confidential + auditable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Built-in OFAC screening, audit logs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Compliance-by-design with strict KYC separation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="platform" className="section bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-white mb-6">Why Leading Institutions Choose InterNull</h2>
            <p className="text-lg text-gray-300">
              Preserve alpha. Protect strategy. Enable compliance. All without introducing custody risk or regulatory exposure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card bg-slate-800 border-slate-700">
              <Lock className="w-12 h-12 text-privacy-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Privacy Without Risk</h3>
              <p className="text-gray-300 mb-4">
                Threshold encryption ensures transaction confidentiality without creating a shared anonymity pool.
              </p>
              <span className="text-sm text-success font-medium">Only solution combining privacy with compliance</span>
            </div>

            <div className="card bg-slate-800 border-slate-700">
              <Shield className="w-12 h-12 text-success mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Compliance-Ready</h3>
              <p className="text-gray-300 mb-4">
                Built-in OFAC screening, encrypted audit logs, and selective disclosure. GDPR/MiCA/FinCEN aligned.
              </p>
              <span className="text-sm text-success font-medium">Regulatory moat competitors can't replicate</span>
            </div>

            <div className="card bg-slate-800 border-slate-700">
              <Globe className="w-12 h-12 text-info mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Multi-Chain Agnostic</h3>
              <p className="text-gray-300 mb-4">
                Deploy across Ethereum, Polygon, Arbitrum, and 15+ chains. Single integration, unlimited flexibility.
              </p>
              <span className="text-sm text-success font-medium">Competitors are single-chain or require separate integrations</span>
            </div>

            <div className="card bg-slate-800 border-slate-700">
              <Zap className="w-12 h-12 text-warning mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Flexible Pool Deployment</h3>
              <p className="text-gray-300 mb-4">
                Deploy your own private pool, or use our compliant institutional pool with strict KYC requirements. Institutional funds never commingle with non-KYC'd participants.
              </p>
              <span className="text-sm text-success font-medium">Eliminates Tornado Cash regulatory argument</span>
            </div>

            <div className="card bg-slate-800 border-slate-700">
              <TrendingUp className="w-12 h-12 text-audit-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Commission-Based Economics</h3>
              <p className="text-gray-300 mb-4">
                Transaction fees embedded in node operator economics (0.5-2% of volume). Costs scale with usage.
              </p>
              <span className="text-sm text-success font-medium">3-10x cheaper than dark pools</span>
            </div>

            <div className="card bg-slate-800 border-slate-700">
              <CheckCircle className="w-12 h-12 text-success mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Non-Custodial</h3>
              <p className="text-gray-300 mb-4">
                You maintain complete control. InterNull never holds your assets or keys.
              </p>
              <span className="text-sm text-success font-medium">Zero custody risk, zero counterparty risk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="section bg-slate-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-white mb-6">Why Institutions Choose InterNull Over Alternative Solutions</h2>
            <p className="text-lg text-gray-300">
              Not all privacy solutions are created equal. See how InterNull compares to alternatives in the market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* vs. Privacy L1s */}
            <div className="card bg-slate-700 border-slate-600">
              <h3 className="text-xl font-semibold text-white mb-4">Privacy L1s (Seismic, Aztec)</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Single-chain, requires migration</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Limited liquidity fragmentation</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Complex integration overhead</span>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-600">
                <p className="text-success font-semibold mb-2">InterNull Advantage:</p>
                <p className="text-gray-300 text-sm">Multi-chain middleware, no migration needed. Works with your existing infrastructure across 15+ chains.</p>
              </div>
            </div>

            {/* vs. Dark Pools */}
            <div className="card bg-slate-700 border-slate-600">
              <h3 className="text-xl font-semibold text-white mb-4">Traditional Dark Pools</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">$50K+/month fixed costs</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Limited to traditional securities</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">No crypto asset support</span>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-600">
                <p className="text-success font-semibold mb-2">InterNull Advantage:</p>
                <p className="text-gray-300 text-sm">Commission-based pricing (0.5-2% of volume). Works with any digital asset. 3-10x cheaper for most use cases.</p>
              </div>
            </div>

            {/* vs. Privacy Mixers */}
            <div className="card bg-slate-700 border-slate-600">
              <h3 className="text-xl font-semibold text-white mb-4">Privacy Mixers (Tornado Cash)</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Regulatory & sanctions risk</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Shared anonymity pools</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">No compliance tooling</span>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-600">
                <p className="text-success font-semibold mb-2">InterNull Advantage:</p>
                <p className="text-gray-300 text-sm">Private pool deployments or KYC-gated institutional pools that never mix with non-KYC'd participants. Built-in OFAC screening and audit logs. Fully compliant by design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="solutions" className="section bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-white mb-6">Built for Your Use Case</h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'market-makers', label: 'Market Makers', icon: TrendingUp },
              { id: 'funds', label: 'Crypto Funds', icon: Building },
              { id: 'custodians', label: 'Custodians', icon: Landmark },
              { id: 'daos', label: 'DAOs', icon: Users },
              { id: 'fintechs', label: 'Fintech Platforms', icon: Zap }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveUseCase(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
                  activeUseCase === tab.id
                    ? 'bg-precision-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeUseCase === 'market-makers' && (
              <div className="card bg-slate-700 border-slate-600">
                <h3 className="text-2xl font-semibold text-white mb-4">Eliminate Traceable Portfolio Flows</h3>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                  <p className="text-gray-300">
                    Portfolio rotations and hedging moves visible on-chain lead to front-running, alpha leakage, and competitive analysis. Estimated $1B+/year lost to MEV and information leakage.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">The Solution</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Delta-neutral hedging strategies without market signal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Cross-venue arbitrage execution with confidentiality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Portfolio rebalancing without revealing strategy</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <span className="text-sm text-gray-400">Deployment Timeline</span>
                    <p className="text-lg font-semibold text-white">2-week pilot → 6-12 months production</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <span className="text-sm text-gray-400">Annual Cost</span>
                    <p className="text-lg font-semibold text-white">$2-5M (avg $2.5M per firm)</p>
                  </div>
                </div>

                <button className="btn btn-primary w-full md:w-auto">
                  Schedule Market Maker Demo
                </button>
              </div>
            )}

            {activeUseCase === 'funds' && (
              <div className="card bg-slate-700 border-slate-600">
                <h3 className="text-2xl font-semibold text-white mb-4">Protect Treasury Movements</h3>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                  <p className="text-gray-300">
                    Treasury movements and rebalancing expose allocation strategy, enabling copy-trading, front-running, and regulatory scrutiny.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">The Solution</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Quarterly rebalancing without revealing allocation shifts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Strategic OTC purchases without market signal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Multi-signature operations with selective disclosure</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <span className="text-sm text-gray-400">Deployment Timeline</span>
                    <p className="text-lg font-semibold text-white">1-month pilot → 9-18 months production</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <span className="text-sm text-gray-400">Annual Cost</span>
                    <p className="text-lg font-semibold text-white">$500K-$1.5M</p>
                  </div>
                </div>

                <button className="btn btn-primary w-full md:w-auto">
                  Schedule Fund Demo
                </button>
              </div>
            )}

            {activeUseCase === 'custodians' && (
              <div className="card bg-slate-700 border-slate-600">
                <h3 className="text-2xl font-semibold text-white mb-4">Secure Internal Operations</h3>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                  <p className="text-gray-300">
                    Internal transfers between hot/cold wallets, cross-exchange movements, and collateral rebalancing leak operational intelligence, creating attack vectors.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">The Solution</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Hot/cold wallet rebalancing without revealing reserves</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Cross-exchange liquidity movements with privacy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Proof-of-reserves without exposing wallet structure</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <span className="text-sm text-gray-400">Deployment Timeline</span>
                    <p className="text-lg font-semibold text-white">2-week pilot → 6-12 months production</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <span className="text-sm text-gray-400">Annual Cost</span>
                    <p className="text-lg font-semibold text-white">$1M-$20M (avg $7.5M)</p>
                  </div>
                </div>

                <button className="btn btn-primary w-full md:w-auto">
                  Schedule Custodian Demo
                </button>
              </div>
            )}

            {activeUseCase === 'daos' && (
              <div className="card bg-slate-700 border-slate-600">
                <h3 className="text-2xl font-semibold text-white mb-4">Confidential Grant Disbursements</h3>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                  <p className="text-gray-300">
                    Grant disbursements, OTC partnerships, and treasury operations are fully transparent, creating counterparty risks and fund targeting opportunities.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">The Solution</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Confidential grant distributions (protect recipients)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Strategic OTC partnerships without public disclosure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Selective disclosure to token holders/regulators</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <span className="text-sm text-gray-400">Deployment Timeline</span>
                    <p className="text-lg font-semibold text-white">2-week pilot → 3-9 months production</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <span className="text-sm text-gray-400">Annual Cost</span>
                    <p className="text-lg font-semibold text-white">$200K-$500K</p>
                  </div>
                </div>

                <button className="btn btn-primary w-full md:w-auto">
                  Schedule DAO Demo
                </button>
              </div>
            )}

            {activeUseCase === 'fintechs' && (
              <div className="card bg-slate-700 border-slate-600">
                <h3 className="text-2xl font-semibold text-white mb-4">Privacy-Preserving Payment Rails</h3>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                  <p className="text-gray-300">
                    Fintech apps using blockchain rails expose customer financial data. Salaries, rent payments, and spending patterns become public, creating privacy nightmares and regulatory exposure under GDPR and emerging financial privacy laws.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">The Solution</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Customer payment privacy while maintaining full auditability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Multi-chain support (Polygon, Arbitrum, Base, Optimism, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>No migration required - middleware layer over existing infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>Protect users from on-chain profiling and targeting</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <span className="text-sm text-gray-400">Deployment Timeline</span>
                    <p className="text-lg font-semibold text-white">1-week pilot → 2-6 months production</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <span className="text-sm text-gray-400">Annual Cost</span>
                    <p className="text-lg font-semibold text-white">$150K-$750K (scales with volume)</p>
                  </div>
                </div>

                <div className="bg-precision-600/10 border border-precision-600/30 rounded-lg p-4 mb-6">
                  <p className="text-precision-600 font-semibold mb-2">Competitive Advantage vs. Seismic:</p>
                  <p className="text-gray-300 text-sm">
                    Unlike single-chain privacy L1s, InterNull works across 15+ chains without requiring customer migration. Your users stay on familiar networks while gaining privacy protection.
                  </p>
                </div>

                <button className="btn btn-primary w-full md:w-auto">
                  Schedule Fintech Demo
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="section bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-white mb-6">Regulatory-Aligned by Design</h2>
            <p className="text-lg text-gray-300">
              Built for the post-Tornado Cash regulatory environment. August 2025 DOJ guidance confirms: software vendors with no custody are NOT liable for user misuse.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card bg-slate-800 border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">U.S. Regulatory Alignment</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>August 2025 DOJ memo compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>No FinCEN registration required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Built-in OFAC compliance</span>
                </li>
              </ul>
            </div>

            <div className="card bg-slate-800 border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">EU MiCA Ready</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>NOT a CASP (no asset control)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Privacy-by-design architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>GDPR compliant</span>
                </li>
              </ul>
            </div>

            <div className="card bg-slate-800 border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">FATF Standards</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Software vendor, not VASP</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>No single control point</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Multi-sig governance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-success/10 border border-success/30 rounded-lg p-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Legal Moat</h4>
                  <p className="text-gray-300">
                    InterNull's architecture provides regulatory protection that competitors cannot easily replicate. Per-client deployments, non-custodial design, and compliance-by-design create defensible market position.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section bg-slate-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-white mb-6">Economics That Scale With Your Business</h2>
            <p className="text-lg text-gray-300">
              Commission-based pricing aligns our success with yours. Pay only when you use it. No surprise costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card bg-slate-700 border-slate-600">
              <h3 className="text-2xl font-semibold text-white mb-2">Starter</h3>
              <p className="text-gray-400 mb-6">Small Funds & DAOs</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$100K-$300K</span>
                <span className="text-gray-400">/year</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>&lt;1M transactions/month</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Single-chain deployment</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Email support</span>
                </li>
              </ul>
              <button className="btn btn-secondary w-full">Request Quote</button>
            </div>

            <div className="card bg-precision-600 border-precision-600 relative">
              <div className="absolute top-0 right-0 bg-success text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Professional</h3>
              <p className="text-white/80 mb-6">Mid-Size Institutions</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$500K-$1.5M</span>
                <span className="text-white/80">/year</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>1-10M transactions/month</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Multi-chain deployment</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Dedicated support + SLA</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Audit module included</span>
                </li>
              </ul>
              <button className="btn btn-primary w-full bg-white text-precision-600 hover:bg-gray-50">Request Quote</button>
            </div>

            <div className="card bg-slate-700 border-slate-600">
              <h3 className="text-2xl font-semibold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-6">Large Custodians & Exchanges</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Unlimited transactions</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>White-label deployment</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <button className="btn btn-secondary w-full">Talk to Sales</button>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-8">
            Flexible pricing: Commission-based (0.5-2% of tx volume) or Fixed SaaS licensing
          </p>
        </div>
      </section>

      {/* Trust & Social Proof */}
      <section className="section bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">Trusted by Leading Institutions</h2>
              <p className="text-gray-300">
                Join forward-thinking organizations building the future of confidential finance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card bg-slate-800 border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-precision-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-precision-600" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Institutional Grade</p>
                    <p className="text-gray-400 text-sm">Built for the world's most demanding financial institutions</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic">
                  "InterNull's multi-chain architecture solved what others couldn't - privacy without regulatory risk. The per-client deployment model was exactly what our compliance team needed."
                </p>
                <p className="text-gray-400 text-sm mt-3">— Risk Officer, Top 10 Market Maker</p>
              </div>

              <div className="card bg-slate-800 border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Compliance First</p>
                    <p className="text-gray-400 text-sm">Regulatory alignment from day one</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic">
                  "Finally, a privacy solution that our legal team approves. The built-in audit logs and OFAC screening make this a no-brainer for institutional adoption."
                </p>
                <p className="text-gray-400 text-sm mt-3">— Head of Compliance, Digital Asset Fund ($2B AUM)</p>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
              <p className="text-gray-300 mb-6">
                Want to speak with existing customers about their experience?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn btn-secondary">
                  Request Customer References
                </button>
                <button className="btn btn-primary">
                  Schedule Technical Deep-Dive
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gradient-to-br from-precision-600 to-indigo-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Eliminate On-Chain Exposure?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join leading institutions using InterNull for confidential, compliant settlements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary text-lg px-8 py-4 bg-white text-precision-600 hover:bg-gray-50">
                Request Demo
              </button>
              <button className="btn btn-secondary text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white/20">
                Talk to Sales
              </button>
            </div>
            <p className="text-white/80 mt-6">Or calculate your ROI →</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="container-custom py-16">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Market Makers</a></li>
                <li><a href="#" className="hover:text-white transition">Crypto Funds</a></li>
                <li><a href="#" className="hover:text-white transition">Custodians</a></li>
                <li><a href="#" className="hover:text-white transition">DAOs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Architecture</a></li>
                <li><a href="#" className="hover:text-white transition">Multi-Chain</a></li>
                <li><a href="#" className="hover:text-white transition">Compliance</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Whitepapers</a></li>
                <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Team</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">
                © 2025 InterNull. Built for institutions. Not anonymous. Compliant.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
