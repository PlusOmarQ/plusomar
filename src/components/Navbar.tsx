import { useState, memo, useMemo, useCallback } from 'react'
import { Menu } from 'lucide-react'
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export const Navbar = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = useMemo(() => [
    { label: 'Home', href: '/', isActive: true },
    { label: 'Photography', href: 'http://plusomar.smugmug.com/', external: true },
    { label: 'Animation', href: 'https://www.youtube.com/channel/UCxE-spVb1_Edo2vnPCBvoow', external: true },
  ], [])

  const socialLinks = useMemo(() => [
    { icon: FaInstagram, href: 'https://www.instagram.com/plusomar/', label: 'Instagram' },
    { icon: FaTwitter, href: 'https://twitter.com/plusomar', label: 'Twitter' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/omar-alqabandi-374ba5bb', label: 'LinkedIn' },
    { icon: FaYoutube, href: 'https://www.youtube.com/channel/UCxE-spVb1_Edo2vnPCBvoow', label: 'YouTube' },
  ], [])

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <>
      {/* Navbar - Top on desktop, Bottom on mobile/tablet */}
      <nav 
        className="fixed md:top-0 bottom-0 md:bottom-auto left-0 right-0 z-50 text-white h-16 navbar-mobile-border" 
        style={{ backgroundColor: '#212121' }}
      >
        <div className="max-w-4xl mx-auto px-2 sm:px-4 flex items-center justify-between h-full">
          {/* Burger Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                aria-label="Open menu"
              >
                <Menu className={`h-6 w-6 transition-transform duration-250 ${isMenuOpen ? 'rotate-90 scale-110' : 'rotate-0'}`} />
              </Button>
            </SheetTrigger>
            
            <SheetContent side="left" className="w-full sm:w-96 text-white p-0 border-0">
              <div className="flex flex-col h-full justify-center text-center">
                {/* Main Navigation */}
                <div className="space-y-8 mb-12">
                  <nav className="space-y-6">
                    {menuItems.map((item, index) => (
                      <div 
                        key={item.label}
                        className="menu-item-stagger"
                        style={{
                          animationDelay: `${0.2 + index * 0.1}s`,
                          animationFillMode: 'forwards',
                        }}
                      >
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-2xl font-light text-white hover:text-gray-300 transition-all duration-300 hover:scale-105 hover:translate-x-2"
                            onClick={handleLinkClick}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <a
                            href={item.href}
                            className={`block text-2xl font-light transition-all duration-300 hover:scale-105 hover:translate-x-2 ${
                              item.isActive 
                                ? 'text-white' 
                                : 'text-white hover:text-gray-300'
                            }`}
                            onClick={handleLinkClick}
                          >
                            {item.label}
                          </a>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>



                {/* Social Media Icons */}
                <div 
                  className="px-6 social-icons-animate"
                  style={{
                    animationDelay: '0.5s',
                    animationFillMode: 'forwards',
                  }}
                >
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition-all duration-300 hover:scale-125 hover:rotate-12 transform social-icon-item"
                        aria-label={social.label}
                        onClick={handleLinkClick}
                        style={{
                          animationDelay: `${0.6 + index * 0.08}s`,
                          animationFillMode: 'forwards',
                        }}
                      >
                        <social.icon className="h-6 w-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex-1 text-center">
            <span className="font-bold text-lg tracking-widest"></span>
          </div>

          {/* Social Media Icons - Desktop: show all 4, Mobile: show all */}
          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Mobile: Show social icons on the right */}
          <div className="md:hidden flex items-center space-x-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors p-1"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="md:h-16 h-0" />
    </>
  )
})

Navbar.displayName = 'Navbar'
