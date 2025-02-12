import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Blog. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
