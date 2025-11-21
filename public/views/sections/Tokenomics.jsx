const Tokenomics = () => {
    return (
      <div className="w-full min-h-screen py-10 sm:py-14">
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
              <div className="relative bg-gradient-to-br from-yellow-300 to-orange-400 rounded-3xl p-8 sm:p-10 border-6 border-black" style={{boxShadow: '12px 12px 0px black', maxWidth: '320px'}}>
                {/* Card Content */}
                <div className="relative z-10">
                  {/* Character Avatar */}
                  <div className="w-full aspect-square bg-gradient-to-br from-yellow-200 to-orange-300 rounded-2xl border-4 border-black mb-4 overflow-hidden">
                    <img src="/assets/logo.png" alt="FUZZY Character" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Card Info */}
                  <div className="bg-white border-4 border-black rounded-xl p-4 text-center">
                    <div className="font-black text-sm text-black mb-2">MEMEVISCOSITY CLUB</div>
                    <div className="font-black text-lg text-orange-600">$HARE</div>
                    <div className="text-xs font-bold text-gray-700 mt-2">Created by Matt Furie</div>
                    <div className="flex justify-center gap-2 mt-3 text-sm">
                      <span className="font-black bg-yellow-300 px-2 py-1 rounded border-2 border-black">🎨 HarelCTO</span>
                      <span className="font-black bg-yellow-300 px-2 py-1 rounded border-2 border-black">📱 HarelSocial</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Tokenomics Info */}
            <div className="flex flex-col gap-6">
              
              {/* About Section */}
              <div>
                <h3 className="font-black text-3xl sm:text-4xl text-black mb-4" style={{textShadow: '2px 2px 0px #84cc16'}}>
                  THE STORY
                </h3>
                <p className="text-gray-900 font-bold text-base sm:text-lg leading-relaxed">
                  SPSN comes straight from South Park’s own joke—Stan’s ‘South Park sucks now’ rant turned crypto chaos. A parody brought on-chain, hyped by the community and even winked at by the official South Park page
                </p>
              </div>

              {/* Token Details Cards */}
              <div className="space-y-4">
                
                {/* Contract */}
                <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-2xl p-6 border-4 border-black" style={{boxShadow: '6px 6px 0px black'}}>
                  <div className="font-black text-black text-sm uppercase mb-2">CONTRACT</div>
                  <div className="font-mono text-xs sm:text-sm text-black break-all font-bold">
                    0x7Z80Q8gE3AkQCh9jPJ353T09GEc432QP2
                  </div>
                </div>

                {/* Token Address */}
                <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-2xl p-6 border-4 border-black" style={{boxShadow: '6px 6px 0px black'}}>
                  <div className="font-black text-black text-sm uppercase mb-2">TOKEN ADDRESS</div>
                  <div className="font-mono text-xs sm:text-sm text-black break-all font-bold">
                    0x7Z80Q8gE3AkQCh9jPJ353T09GEc432QP2
                  </div>
                </div>

                {/* Total Supply */}
                <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-2xl p-6 border-4 border-black" style={{boxShadow: '6px 6px 0px black'}}>
                  <div className="font-black text-black text-sm uppercase mb-2">TOTAL SUPPLY</div>
                  <div className="font-black text-3xl text-black">
                    100M TOTAL SUPPLY
                  </div>
                </div>

                {/* No Taxes */}
                <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-2xl p-6 border-4 border-black" style={{boxShadow: '6px 6px 0px black'}}>
                  <div className="font-black text-black text-sm uppercase mb-2">NO TAXES</div>
                  <div className="font-black text-2xl text-green-700">
                    ✅ 0% TAXES
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white border-4 border-black rounded-xl p-4 text-center" style={{boxShadow: '4px 4px 0px black'}}>
                  <div className="text-3xl mb-2">🔒</div>
                  <div className="font-black text-sm text-black">LOCKED LIQUIDITY</div>
                </div>
                <div className="bg-white border-4 border-black rounded-xl p-4 text-center" style={{boxShadow: '4px 4px 0px black'}}>
                  <div className="text-3xl mb-2">🔥</div>
                  <div className="font-black text-sm text-black">COMMUNITY DRIVEN</div>
                </div>
                <div className="bg-white border-4 border-black rounded-xl p-4 text-center" style={{boxShadow: '4px 4px 0px black'}}>
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="font-black text-sm text-black">MEME MAGIC</div>
                </div>
                <div className="bg-white border-4 border-black rounded-xl p-4 text-center" style={{boxShadow: '4px 4px 0px black'}}>
                  <div className="text-3xl mb-2">💎</div>
                  <div className="font-black text-sm text-black">REAL UTILITY</div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 sm:mt-20 text-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-black px-8 sm:px-12 py-4 sm:py-6 rounded-xl transition transform hover:scale-110 text-base sm:text-lg border-4 border-blue-800 inline-block" style={{boxShadow: '6px 6px 0px rgba(30, 58, 138, 0.5)'}}>
              🎉 LAUNCH ON UNISWAP
            </button>
          </div>
        </div>
      </div>
    )
}

export default Tokenomics