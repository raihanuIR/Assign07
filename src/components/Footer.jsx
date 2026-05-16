import { Link } from 'react-router';
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';

export default function Footer() {
  return (
    <footer className="bg-[#2b4a3f] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Logo */}
        <h2 className="text-5xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
        
        {/* Subtitle */}
        <p className="text-emerald-100/80 mb-10 max-w-2xl text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mb-16">
          <h3 className="font-semibold text-lg mb-4">Social Links</h3>
          <div className="flex space-x-4 justify-center">
            <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center">
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5 object-contain" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center">
              <img src={facebookIcon} alt="Facebook" className="w-5 h-5 object-contain" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center">
              <img src={twitterIcon} alt="Twitter" className="w-5 h-5 object-contain" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="max-w-7xl mx-auto border-t border-emerald-800/50 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center text-xs text-emerald-100/60">
        <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
