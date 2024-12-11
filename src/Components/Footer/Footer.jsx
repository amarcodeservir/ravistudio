import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Destination */}
          <div>
            <h3 className="font-bold text-lg mb-4">LOCATION</h3>
            <ul className="space-y-2 text-gray-300">
              {['Indira Nager', 'Gomti Nager', 'Gomti Nager Vistar', 'Mtiyari Churaha'].map((item) => (
                <li key={item} className="hover:text-white">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Photography */}
          <div>
            <h3 className="font-bold text-lg mb-4">PHOTOGRAPHY</h3>
            <ul className="space-y-2 text-gray-300">
              {['Wedding', 'Pre Wedding', 'Post Wedding', 'Maternity', 'Fashion'].map((item) => (
                <li key={item} className="hover:text-white">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">NAVIGATION</h3>
            <ul className="space-y-2 text-gray-300">
              {['Home', 'About', 'Photography', 'Destination', 'Awards', 'Films', 'Poetry', 'Blog', 'Book Us', 'Privacy Policy'].map((item) => (
                <li key={item} className="hover:text-white">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">WEDDING PHOTOGRAPHERS IN LUCKNOW</h3>
            <p className="text-gray-300 mb-6">
              <h4 className="font-bold text-base mb-2">Sukh Complex</h4>
               Munshi Puliya Indira Nager, Lucknow-16 
            </p>
            {/* <h3 className="font-bold text-lg mb-4">WEDDING PHOTOGRAPHERS IN LUCKNOW</h3>
            <p className="text-gray-300">
              
            </p> */}
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media */}
          <div className="flex space-x-4">
            {[
              { icon: 'facebook', link: '#' },
              { icon: 'instagram', link: '#' },
              { icon: 'linkedin', link: '#' },
              { icon: 'whatsapp', link: '#' },
              { icon: 'youtube', link: '#' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="bg-gray-800 p-3 rounded-full text-center text-white hover:bg-gray-600"
              >
                <i className={`fab fa-${social.icon}`}></i>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            © Copyrights Difmo Tech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
