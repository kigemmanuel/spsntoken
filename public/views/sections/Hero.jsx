
const Hero = () => {
    return (
      <div className="w-full min-h-screen mt-14 md:mt-10">

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 gap-8 lg:gap-12">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center gap-6 sm:gap-8 w-full lg:w-auto">
          <div>
            <h1 className="font-black text-4xl sm:text-5xl lg:text-7xl text-black leading-tight mb-2 sm:mb-4" style={{textShadow: '4px 4px 0px #84cc16, 8px 8px 0px rgba(0,0,0,0.2)'}}>
              SPSN TOKEN
            </h1>
            {/* <div className="flex gap-2 sm:gap-3 flex-wrap">
              <span className="inline-block bg-blue-600 text-white font-black px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm border-3 border-blue-800" style={{boxShadow: '3px 3px 0px rgba(30, 58, 138, 0.5)'}}>$SOHARE</span>
              <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm border-3 border-purple-700" style={{boxShadow: '3px 3px 0px rgba(126, 34, 206, 0.5)'}}>🚀 MOON</span>
              <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm border-3 border-cyan-700" style={{boxShadow: '3px 3px 0px rgba(34, 211, 238, 0.5)'}}>DOGE VIBES</span>
            </div> */}
          </div>

          <p className="text-gray-900 font-bold text-base sm:text-lg lg:text-xl leading-relaxed max-w-md">
            SPSN comes straight from South Park’s own joke—Stan’s ‘South Park sucks now’ rant turned crypto chaos. A parody brought on-chain, hyped by the community and even winked at by the official South Park page
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="https://dexscreener.com/solana/9n97dejbnjrrubpcayv1v1uuzvpo8dcjmve5crrpz8yv" target="_blank">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition transform hover:scale-110 text-sm sm:text-base w-full sm:w-auto border-4 border-blue-800 shadow-lg" style={{boxShadow: '5px 5px 0px rgba(30, 58, 138, 0.5)'}}>
                🎉 BUY SOHARE
              </button>
            </a>
            <a href="#About">
              <button className="border-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition transform hover:scale-110 text-sm sm:text-base w-full sm:w-auto" style={{boxShadow: '5px 5px 0px rgba(37, 99, 235, 0.2)'}}>
                About SPSN
              </button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-8">
            <div className="bg-white border-4 border-black rounded-2xl p-3 sm:p-4 text-center" style={{boxShadow: '4px 4px 0px black'}}>
              <div className="font-black text-2xl sm:text-3xl text-black">10K+</div>
              <div className="text-xs sm:text-sm font-black text-black">HOLDERS</div>
            </div>
            <div className="bg-white border-4 border-black rounded-2xl p-3 sm:p-4 text-center" style={{boxShadow: '4px 4px 0px black'}}>
              <div className="font-black text-2xl sm:text-3xl text-blue-600">500K</div>
              <div className="text-xs sm:text-sm font-black text-black">COMMUNITY</div>
            </div>
            <div className="bg-white border-4 border-black rounded-2xl p-3 sm:p-4 text-center" style={{boxShadow: '4px 4px 0px black'}}>
              <div className="font-black text-2xl sm:text-3xl text-red-600">🔥 VIRAL</div>
              <div className="text-xs sm:text-sm font-black text-black">TRENDING</div>
            </div>
          </div>
        </div>

        {/* Right Content - Character */}
        <div className="flex-1 flex items-center justify-center w-full lg:w-auto mt-8 lg:mt-0">
          <div className="relative w-full max-w-sm lg:max-w-md">
            {/* Character Container */}
            <div className="relative bg-white rounded-3xl p-8 sm:p-12 border-6 border-black" style={{boxShadow: '8px 8px 0px black'}}>
              {/* Character Image */}
              <div className="w-full aspect-square bg-gradient-to-br from-yellow-300 via-orange-300 to-orange-400 rounded-2xl border-4 border-black overflow-hidden">
                <img src="/assets/logo.png" alt="FUZZY Character" className="w-full h-full object-cover" />
              </div>

              {/* Floating Badges */}
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-black px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm animate-bounce border-3 border-blue-600" style={{boxShadow: '4px 4px 0px rgba(37, 99, 235, 0.5)'}}>
                ⭐ BEST
              </div>
              <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm animate-bounce border-3 border-purple-700" style={{animationDelay: '0.2s', boxShadow: '4px 4px 0px rgba(126, 34, 206, 0.5)'}}>
                🎮 PLAY
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Ticker
      <div className="bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 py-12 sm:py-16 overflow-hidden border-t-2 border-b-2 border-slate-700 relative">
        Animated Background Glow 
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-pulse"></div>
        
        Left Fade Gradient
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-slate-900 via-slate-900 to-transparent z-10 pointer-events-none"></div>
        
        Right Fade Gradient
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-slate-900 via-slate-900 to-transparent z-10 pointer-events-none"></div>
        
        Scrolling Text - Transparent Glassmorphism Style
        <div className="flex gap-20 sm:gap-32 font-black whitespace-nowrap animate-scroll text-2xl sm:text-4xl relative z-5">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-2xl">💰 $SOHARE</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-2xl">🚀 MOON TIME</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 drop-shadow-2xl">💎 DIAMOND</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-2xl">🔥 GETTING HOT</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-2xl">💰 $SOHARE</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-2xl">🚀 MOON TIME</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 drop-shadow-2xl">💎 DIAMOND</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-2xl">🔥 GETTING HOT</span>
        </div>
      </div> */}
    </div>
    )
}

export default Hero