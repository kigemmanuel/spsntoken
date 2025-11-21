const About = () => {
    return (
      <div className="w-full min-h-screen py-10 sm:py-14 lg:py-16" id="About">
        {/* Section Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Section Title */}
          <div className="mb-12 sm:mb-16">
            <h2 className="font-black text-5xl sm:text-6xl lg:text-7xl text-black leading-tight" style={{textShadow: '4px 4px 0px #84cc16, 8px 8px 0px rgba(0,0,0,0.2)'}}>
              ABOUT
            </h2>
            <div className="w-20 h-2 bg-black mt-4 rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left - Character & Stats */}
            <div className="flex flex-col gap-8">
              {/* Character Card */}
              <div className="relative bg-white rounded-3xl p-8 sm:p-12 border-6 border-black" style={{boxShadow: '8px 8px 0px black'}}>
                <div className="w-full aspect-square bg-gradient-to-br from-yellow-300 via-orange-300 to-orange-400 rounded-2xl border-4 border-black overflow-hidden">
                  <img src="/assets/logo.png" alt="FUZZY Character" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white border-4 border-black rounded-2xl p-4 sm:p-6 text-center" style={{boxShadow: '4px 4px 0px black'}}>
                  <div className="font-black text-3xl sm:text-4xl text-blue-600">100%</div>
                  <div className="text-xs sm:text-sm font-black text-black mt-2">COMMUNITY</div>
                </div>
                <div className="bg-white border-4 border-black rounded-2xl p-4 sm:p-6 text-center" style={{boxShadow: '4px 4px 0px black'}}>
                  <div className="font-black text-3xl sm:text-4xl text-red-600">0%</div>
                  <div className="text-xs sm:text-sm font-black text-black mt-2">TAXES</div>
                </div>
                <div className="bg-white border-4 border-black rounded-2xl p-4 sm:p-6 text-center" style={{boxShadow: '4px 4px 0px black'}}>
                  <div className="font-black text-3xl sm:text-4xl text-green-600">LOCK</div>
                  <div className="text-xs sm:text-sm font-black text-black mt-2">LIQUIDITY</div>
                </div>
                <div className="bg-white border-4 border-black rounded-2xl p-4 sm:p-6 text-center" style={{boxShadow: '4px 4px 0px black'}}>
                  <div className="font-black text-3xl sm:text-4xl text-purple-600">BURN</div>
                  <div className="text-xs sm:text-sm font-black text-black mt-2">CONTRACT</div>
                </div>
              </div>
            </div>

            {/* Right - About Text */}
            <div className="flex flex-col gap-6">
              <h3 className="font-black text-3xl sm:text-4xl lg:text-5xl text-black leading-tight">
                MAD VISCOSITY
              </h3>

              <div className="space-y-4">
                <p className="text-gray-900 font-bold text-base sm:text-lg leading-relaxed">
                  Meet Fuzzy, the magnificent creature with a visionary spirit! Fuzzy brings a unique blend of humor, innovation, and community vibes to the meme coin space. With unwavering support from our passionate community, Fuzzy is here to shake things up!
                </p>

                <p className="text-gray-900 font-bold text-base sm:text-lg leading-relaxed">
                  This coin operates as Madeocracy - a token where every holder has a voice in decision-making. The community drives the narrative and shapes the future of the project. Together, we create the next big wave in crypto culture!
                </p>

                <p className="text-gray-900 font-bold text-base sm:text-lg leading-relaxed">
                  Our mission is simple: combine the spirit of meme culture with real utility and community governance. No fancy promises, just pure meme magic and genuine connection with our holders.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white border-3 border-black rounded-2xl p-4 text-center" style={{boxShadow: '3px 3px 0px black'}}>
                  <span className="text-2xl">🚀</span>
                  <div className="font-black text-sm text-black mt-2">ROCKET FUEL</div>
                </div>
                <div className="bg-white border-3 border-black rounded-2xl p-4 text-center" style={{boxShadow: '3px 3px 0px black'}}>
                  <span className="text-2xl">💎</span>
                  <div className="font-black text-sm text-black mt-2">DIAMOND HANDS</div>
                </div>
                <div className="bg-white border-3 border-black rounded-2xl p-4 text-center" style={{boxShadow: '3px 3px 0px black'}}>
                  <span className="text-2xl">👥</span>
                  <div className="font-black text-sm text-black mt-2">COMMUNITY</div>
                </div>
                <div className="bg-white border-3 border-black rounded-2xl p-4 text-center" style={{boxShadow: '3px 3px 0px black'}}>
                  <span className="text-2xl">🔥</span>
                  <div className="font-black text-sm text-black mt-2">MEME MAGIC</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-black px-8 sm:px-10 py-4 sm:py-5 rounded-xl transition transform hover:scale-110 text-base sm:text-lg w-full border-4 border-blue-800" style={{boxShadow: '6px 6px 0px rgba(30, 58, 138, 0.5)'}}>
                  🎉 JOIN THE MOVEMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About
