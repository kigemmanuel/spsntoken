const Nav = () => {
    return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-slate-900/40 backdrop-blur-xl border-b border-white/10">
        {/* Section Container - Matching About Section Margins */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between py-3 md:py-3">
            
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-lime-300 to-green-400 rounded-full flex items-center justify-center border-2 border-lime-400 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-black font-black text-sm sm:text-base">$</span>
              </div>
              <span className="font-black text-lg sm:text-xl lg:text-2xl text-white group-hover:text-lime-300 transition-colors duration-300">SOHARE</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8">
              <a href="#" className="font-bold text-sm text-white/90 hover:text-lime-300 transition-all duration-300 relative group">
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lime-300 to-green-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="font-bold text-sm text-white/90 hover:text-lime-300 transition-all duration-300 relative group">
                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lime-300 to-green-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="font-bold text-sm text-white/90 hover:text-lime-300 transition-all duration-300 relative group">
                HOW TO BUY
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lime-300 to-green-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="font-bold text-sm text-white/90 hover:text-lime-300 transition-all duration-300 relative group">
                TOKENOMICS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lime-300 to-green-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="font-bold text-sm text-white/90 hover:text-lime-300 transition-all duration-300 relative group">
                JOIN US
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lime-300 to-green-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 transform hover:scale-110 text-xs sm:text-base border-4 border-blue-800 shadow-lg" style={{boxShadow: '4px 4px 0px rgba(30, 58, 138, 0.5)'}}>
              🎉 BUY
            </button>
          </div>
        </div>
    </nav>
    )
}

export default Nav