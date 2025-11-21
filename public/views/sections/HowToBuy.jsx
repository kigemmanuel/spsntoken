const HowToBuy = () => {
    return (
      <div className="w-full min-h-screen py-10 sm:py-14 lg:py-16">
        {/* Section Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Section Header */}
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="font-black text-5xl sm:text-6xl lg:text-7xl text-black leading-tight mb-4" style={{textShadow: '4px 4px 0px #84cc16, 8px 8px 0px rgba(0,0,0,0.2)'}}>
              HOW TO BUY
            </h2>
            <p className="text-gray-900 font-bold text-lg sm:text-xl">
              Follow these easy steps to become a $HARE holder.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Step 1 */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-b from-green-500 to-green-600 rounded-3xl p-6 sm:p-8 border-6 border-black text-white" style={{boxShadow: '8px 8px 0px black', transform: 'rotate(-2deg)'}}>
                <div className="mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center border-4 border-black font-black text-2xl sm:text-3xl text-black">
                    1
                  </div>
                </div>
                <h3 className="font-black text-xl sm:text-2xl mb-3 text-white drop-shadow-lg" style={{textShadow: '2px 2px 0px black'}}>
                  CREATE A WALLET
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  Download MetaMask or your wallet of choice from the official App Store or website.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-b from-green-500 to-green-600 rounded-3xl p-6 sm:p-8 border-6 border-black text-white" style={{boxShadow: '8px 8px 0px black', transform: 'rotate(2deg)'}}>
                <div className="mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center border-4 border-black font-black text-2xl sm:text-3xl text-black">
                    2
                  </div>
                </div>
                <h3 className="font-black text-xl sm:text-2xl mb-3 text-white drop-shadow-lg" style={{textShadow: '2px 2px 0px black'}}>
                  GET SOME ETH
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  Head to a crypto exchange and buy ETH to get you started on your journey.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-b from-green-500 to-green-600 rounded-3xl p-6 sm:p-8 border-6 border-black text-white" style={{boxShadow: '8px 8px 0px black', transform: 'rotate(-2deg)'}}>
                <div className="mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center border-4 border-black font-black text-2xl sm:text-3xl text-black">
                    3
                  </div>
                </div>
                <h3 className="font-black text-xl sm:text-2xl mb-3 text-white drop-shadow-lg" style={{textShadow: '2px 2px 0px black'}}>
                  GO TO UNISWAP
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  Connect your wallet to Uniswap and swap your ETH for $HARE tokens now!
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-b from-green-500 to-green-600 rounded-3xl p-6 sm:p-8 border-6 border-black text-white" style={{boxShadow: '8px 8px 0px black', transform: 'rotate(2deg)'}}>
                <div className="mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center border-4 border-black font-black text-2xl sm:text-3xl text-black">
                    4
                  </div>
                </div>
                <h3 className="font-black text-xl sm:text-2xl mb-3 text-white drop-shadow-lg" style={{textShadow: '2px 2px 0px black'}}>
                  YOU ARE NOW A HOLDER
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  Congratulations! You are officially part of the $HARE family. Welcome aboard!
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 sm:mt-20 text-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-black px-8 sm:px-12 py-4 sm:py-6 rounded-xl transition transform hover:scale-110 text-base sm:text-lg border-4 border-blue-800 inline-block" style={{boxShadow: '6px 6px 0px rgba(30, 58, 138, 0.5)'}}>
                🎉 BUY $HARE NOW
            </button>
          </div>
        </div>
      </div>
    )
}

export default HowToBuy