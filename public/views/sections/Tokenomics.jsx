const Tokenomics = () => {
    return (
      <div className="w-full min-h-screen py-10 sm:py-14" id="tokenomics">
        {/* Section Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Section Title */}
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="font-black text-5xl sm:text-6xl lg:text-7xl text-black leading-tight mb-4" style={{textShadow: '4px 4px 0px #ff6b00, 8px 8px 0px rgba(0,0,0,0.3)'}}>
              TOKENOMICS
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left - Character Card */}
            <div className="flex justify-center">
              <div className="relative bg-gradient-to-br from-blue-300 to-blue-200 rounded-3xl p-8 sm:p-10 border-6 border-blue-500" style={{maxWidth: '320px'}}>
                {/* Card Content */}
                <div className="relative z-10">
                  {/* Character Avatar */}
                  <div className="w-full aspect-square mb-4 overflow-hidden">
                    <img src="./assets/logo.png" alt="FUZZY Character" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Card Info */}
                  <div className="bg-white border-4 border-blue-500 rounded-xl p-4 text-center" style={{boxShadow: '4px 4px 0px #0000FF'}}>
                    <div className="font-black text-smblue-900 mb-2">South Park Sucks Now</div>
                    <div className="font-black text-lg text-blue-600">$SPSN</div>
                    <div className="text-xs font-bold text-blue-700 mt-2">CTO</div>
                    <div className="flex justify-center gap-2 mt-3 text-xs">
                      <span className="font-black bg-blue-300 text-blue-900 px-2 py-1 rounded border-2 border-blue-600">Active community</span>
                      <span className="font-black bg-blue-300 text-blue-900 px-2 py-1 rounded border-2 border-blue-600">Super Hype</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Tokenomics Info */}
            <div className="flex flex-col gap-6">
              
              {/* About Section */}
              <div>
                <h3 className="font-black text-3xl sm:text-4xl text-black mb-4" style={{textShadow: '2px 2px 0px orange'}}>
                  THE STORY
                </h3>
                <p className="text-gray-900 font-bold text-base sm:text-lg leading-relaxed">
                  SPSN comes straight from South Park’s own joke—Stan’s ‘South Park sucks now’ rant turned crypto chaos. A parody brought on-chain, hyped by the community and even winked at by the official South Park page
                </p>
              </div>

              {/* Token Details Cards */}
              <div className="space-y-4">

                {/* Token Address */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 border-4 border-blue-800 text-white" style={{boxShadow: '6px 6px 0px rgba(30, 58, 138, 0.6)'}}>
                  <div className="font-black text-blue-100 text-sm uppercase mb-2">TOKEN ADDRESS</div>
                  <div className="font-mono text-xs sm:text-sm text-blue-50 break-all font-bold">
                    Sg4k4iFaEeqhv5866cQmsFTMhRx8sVCPAq2j8Xcpump
                  </div>
                </div>

                {/* Total Supply */}
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 border-4 border-purple-800 text-white" style={{boxShadow: '6px 6px 0px rgba(88, 28, 135, 0.6)'}}>
                  <div className="font-black text-purple-100 text-sm uppercase mb-2">Holders</div>
                  <div className="font-black text-3xl text-white">
                    6000+
                  </div>
                </div>

                {/* No Taxes */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 border-4 border-orange-800 text-white" style={{boxShadow: '6px 6px 0px rgba(154, 52, 18, 0.6)'}}>
                  <div className="font-black text-orange-100 text-sm uppercase mb-2">NO TAXES</div>
                  <div className="font-black text-2xl text-white">
                    0% TAXES
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 border-4 border-blue-600 rounded-xl p-4 text-center" style={{boxShadow: '4px 4px 0px rgba(37, 99, 235, 0.4)'}}>
                  <div className="text-3xl mb-2">🔒</div>
                  <div className="font-black text-sm text-blue-900">LOCKED LIQUIDITY</div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 border-4 border-purple-600 rounded-xl p-4 text-center" style={{boxShadow: '4px 4px 0px rgba(126, 34, 206, 0.4)'}}>
                  <div className="text-3xl mb-2">🔥</div>
                  <div className="font-black text-sm text-purple-900">COMMUNITY DRIVEN</div>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 border-4 border-orange-600 rounded-xl p-4 text-center" style={{boxShadow: '4px 4px 0px rgba(234, 88, 12, 0.4)'}}>
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="font-black text-sm text-orange-900">MEME MAGIC</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-50 border-4 border-green-600 rounded-xl p-4 text-center" style={{boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.4)'}}>
                  <div className="text-3xl mb-2">💎</div>
                  <div className="font-black text-sm text-green-900">REAL UTILITY</div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 sm:mt-20 text-center">
            <a href="https://dexscreener.com/solana/9n97dejbnjrrubpcayv1v1uuzvpo8dcjmve5crrpz8yv">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-black px-8 sm:px-12 py-4 sm:py-6 rounded-xl transition transform hover:scale-110 text-base sm:text-lg border-4 border-blue-800 inline-block" style={{boxShadow: '6px 6px 0px rgba(30, 58, 138, 0.5)'}}>
                LAUNCH ON PUMPFUN
              </button>
            </a>
          </div>
        </div>
      </div>
    )
}

export default Tokenomics