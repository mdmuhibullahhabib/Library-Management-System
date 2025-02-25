import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Library Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Library Management System</h2>
          <p className="text-gray-400">"Bringing knowledge to your fingertips"</p>
        </div>

        {/* Center Section - Quick Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/library" className="hover:text-gray-300">Library</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-pink-500" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 mt-4 border-t border-gray-700 pt-2">
        <p>© {new Date().getFullYear()} Library Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
