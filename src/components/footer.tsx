'use client'

import { SiInstagram } from '@icons-pack/react-simple-icons'
import { Send } from 'lucide-react'
import Link from 'next/link'
import { analytics } from '@/utils/analytics'

export function FooterComponent() {
  const menuItems = [
    { name: "How to help", href: "/how-to-help" },
    { name: "Get help", href: "/get-help" },
    { name: "About us", href: "/about" },
    { name: "Reports", href: "/reports" },
  ]

  const handleSocialLinkClick = (platform: string) => {
    analytics.trackFooter('Social Link Click', platform);
  };

  return (
    <footer className="w-full bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6 md:mb-0">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-800 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="https://www.instagram.com/uniontac_ua/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-800"
              onClick={() => handleSocialLinkClick('Instagram')}
            >
              <SiInstagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link 
              href="https://t.me/uniontac" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-800"
              onClick={() => handleSocialLinkClick('Telegram')}
            >
              <Send size={20} />
              <span className="sr-only">Telegram</span>
            </Link>
          </div>
        </div>
        <div className="text-center md:text-left">
          <p className="text-gray-600 text-sm">
            © 2024 Uniontac
          </p>
        </div>
      </div>
    </footer>
  )
}
