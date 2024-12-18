export function Header() {
    return (
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-2 nav-item">
          <span>MONOLITH STUDIO</span>
          <span className="text-xs opacity-60">4:52 PM, ET • NYC</span>
        </div>
  
        <div className="flex items-center space-x-6">
          <button className="nav-item opacity-60">
            SOUND: OFF
          </button>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="nav-item hover:opacity-60">ARTISTS</a>
            <a href="#" className="nav-item hover:opacity-60">STUDIO</a>
            <a href="#" className="nav-item hover:opacity-60">BLOG</a>
            <a href="#" className="nav-item hover:opacity-60">LAB (SOON)</a>
          </nav>
          
          <a href="#" className="nav-item font-medium">
            BOOK EXPERIENCE →
          </a>
        </div>
      </header>
    )
  }
  
  