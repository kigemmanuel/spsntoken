const Footer = () => {
    return (
      <div className="w-full pt-10 sm:pt-14 lg:pt-16" id="footer">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* JOIN US Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
            
            {/* Left - Character with Call to Action */}
            <div className="flex justify-center relative">
              <div className="relative max-w-sm">
                {/* Character Card */}
                <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 rounded-3xl p-8 sm:p-10 border-6 border-black text-white" style={{boxShadow: '10px 10px 0px rgba(0,0,0,0.5)'}}>
                  <div className="text-center">
                    {/* Character */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 rounded-ful overflow-hidden">
                      <img src="/assets/logo.png" alt="FUZZY Character" className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Text */}
                    <h3 className="font-black text-3xl sm:text-4xl mb-4 drop-shadow-lg" style={{textShadow: '3px 3px 0px black'}}>
                      JOIN US
                    </h3>
                    
                    {/* CTA Button */}
                    <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition transform hover:scale-110 border-4 border-red-800 w-full mb-4" style={{boxShadow: '5px 5px 0px rgba(139, 0, 0, 0.5)'}}>
                      CLICK TO JOIN US!
                    </button>
                    
                    {/* Social Icons */}
                    <div className="flex justify-center gap-3">
                      <a href="https://x.com/spsntoken?t=JtGMlQdINXCxJpvKnwHREQ&s=09" target="_blank" className="bg-white border-3 border-black rounded-lg p-2 hover:scale-110 transition" title="Twitter">
                        <span className="font-black text-black text-lg">𝕏</span>
                      </a>
                      <a href="https://t.me/SPSNCTO" target="_black" className="bg-white border-3 border-black rounded-lg p-2 hover:scale-110 transition" title="Telegram">
                        <span className="font-black text-black text-lg">📱</span>
                      </a>
                      <a href="https://www.reddit.com/r/southparksucksnow/" className="bg-white border-3 border-black rounded-lg p-2 hover:scale-110 transition" title="Discord">
                        <span className="font-black text-black text-lg">💬</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Info Content */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-black leading-tight mb-6" style={{textShadow: '4px 4px 0px orange, 8px 8px 0px rgba(0,0,0,0.2)'}}>
                  READY TO MOON?
                </h2>
                <p className="text-gray-900 font-bold text-lg sm:text-xl leading-relaxed">
                  Join the $HARE community and be part of something extraordinary. Connect with fellow hodlers, stay updated on the latest developments, and help shape the future of our meme coin.
                </p>
              </div>

              {/* Community Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white border-4 border-black rounded-2xl p-6 text-center" style={{boxShadow: '6px 6px 0px black'}}>
                  <div className="font-black text-3xl sm:text-4xl text-blue-600 mb-2">50K+</div>
                  <div className="font-black text-sm text-black">COMMUNITY</div>
                </div>
                <div className="bg-white border-4 border-black rounded-2xl p-6 text-center" style={{boxShadow: '6px 6px 0px black'}}>
                  <div className="font-black text-3xl sm:text-4xl text-green-600 mb-2">100%</div>
                  <div className="font-black text-sm text-black">DECENTRALIZED</div>
                </div>
                <div className="bg-white border-4 border-black rounded-2xl p-6 text-center" style={{boxShadow: '6px 6px 0px black'}}>
                  <div className="font-black text-3xl sm:text-4xl text-purple-600 mb-2">24/7</div>
                  <div className="font-black text-sm text-black">SUPPORT</div>
                </div>
                <div className="bg-white border-4 border-black rounded-2xl p-6 text-center" style={{boxShadow: '6px 6px 0px black'}}>
                  <div className="font-black text-3xl sm:text-4xl text-red-600 mb-2">0%</div>
                  <div className="font-black text-sm text-black">TAXES</div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-4 border-black my-12 sm:my-16"></div>

          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-center sm:text-left">
              <p className="font-black text-lg text-black mb-2">&copy; 2025 spsntoken</p>
              <p className="font-bold text-gray-800 text-sm">
                DYOR!
              </p>
            </div>
          </div>
        </div>

        {/* Cover Image Section - 16:9 Aspect Ratio */}
        <div className="w-full mt-16 sm:mt-20 lg:mt-24">
          <img src="./assets/cover.jpg" alt="Cover Image" className="w-full h-36 aspect-video object-cover" />
        </div>
      </div>
    )
}

export default Footer