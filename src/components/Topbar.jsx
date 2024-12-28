import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import darkTheme from '../assets/dark.png';
import lightTheme from '../assets/light.png';
import settings from '../assets/settings.png';
import { useNavigate } from 'react-router-dom';


export const Topbar = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate(); 





  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);


  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  const navigateUserProfile = () => {
    navigate('/userprofile'); 
  };

  const navigateHome = () => {
    navigate('/'); 
  };

  return (
    <div
      className={`flex flex-wrap justify-between items-center p-4  shadow-lg transition-all duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white'
          : 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800' // Darker text for light mode
      }`}
    >

      <div onClick={navigateHome} className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <div className="text-xl font-bold ">
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 bg-white rounded-full cursor-pointer"
          />
        </div>
        <div className="text-base font-medium cursor-pointer">Web Based Wallet App</div>
        <div className="text-sm cursor-pointer">
          <div className='text-gray-700 flex items-center space-x-1 rounded-full border p-2' >
            <strong className='text-xl line-height-1'>V</strong>
            <div><p>1.1</p></div>
          </div>
        </div>
      </div>




      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-4">

        <img
          src={isDarkMode ? lightTheme : darkTheme}  
          alt="Theme Toggle"
          onClick={toggleTheme}
          className={`w-6 h-6 rounded-full cursor-pointer transition duration-300 transform ${
            isDarkMode ? 'opacity-100' : 'opacity-50'

          }`}
        />



        

          <img 
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAxAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEEBQYIAwL/xAA5EAACAQMCBQEEBwcFAQAAAAAAAQIDBAUGEQcSITFBURRhcZETIjJCUoHBIzNDcrHR8TRTYoKhFv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB9ixy2UtMTZVby+rRp0aa3bb7v0XvAvX2LS8yVjZ/6q7oUWvE6iRCerOJuUytSdHEuVjaesX+0kve/7Gi161a4nKdepOpJ95TluwOm6eo8LWly08payfoqqRk6NWnWgp0qkakH2lFpo5N2XncyeJz+Ww9WNSwvKtNxe/Lzbxf5AdRgjvQ/Ee2zU4WOWULa9fSMl9mo/wBGSEu4H0AAAAAAAAAAAAAAAAAAAAAAAD5nJRjJyaSS3b9DnziTqurqHMzo0ZyVhbS5KUU+k35k/Ul/iFk5YvSN/cU3tVlD6ODXq+hzh1T33b39QAAAAACqlKDUoScZJ7pxezRPnC3VUtQYl293Pe9tNo1G+84+GQEzbOF+TljtYWi5moXO9GS8PfsB0SD5T6n0AAAAAAAAAAAAAAAAAAAAAAaHxlUv/jpuPZVqfN8yBjpXXWLll9K39rBb1HT5ofzLqc1bNPaXffqvRgAAAAAAyulOZ6lxip/a9ph/UxT7e/wbjwpxUsjq62quO9O0i603437IDoNFSiTKgAAAAAAAAAAAAAAAAAAADey3YPG5uaNrQnWuKsadKC3lOb2SA9JNbNf+EC8UNJVMLlJ5G1pP2C5nzbpfu5PumbFqri0oSnbaboxm02vaay6f9Y+fzNTxWvclC6rRz8nlcfc/Vr29ZJ8q9YegGoA3e90Tb5alK+0XeQvbZ9XZzny1qPu69zUrzHX1jUdO8s69GS8VKbQFqCsYyk9oxk37kzO4bR+dzDTtbGrTpferVlyQS+LAwlGlUr1YUqEZTqTfLGMOrbOg+HGl1prDJV4pXtx9et7vSP5EbxucHoSE/YKlLK6ha2dfbelb/D1ZaYTiXqHG1+a5rxvqEpbypV1s1/K12A6B5lvtuVNZ0lrPFampv2abpXUft29T7S+HqvgbKmn2AqAAAAAAAAAAAAAAAAAH2A8bu6o2ltVuLiap0qUeac5dEkc+a81rdanu5UqE50sXTf7Okn+8/wCUvf7jbuNWo5R+hwNrNrmSq3W3lfdj+pEoD4/4AAHpbXFxa1lWtq1SjVX34SafzRtFnxF1JQpqnXuaN3BdNrmjGT+ZqYA3WXEzNJfsbPF0Z/ihbLf+phMvqzPZlOF9karpf7cPqR+SMKAKLx02RUAD1trita3NO4tq1SlWg94VIPZpk8cN9bQ1JbO1vZQhk6MVzpdFUX4kvX1IC+BeYjJ3GHydvkLRuNSjNS+K8r5AdUJ79ipZYfIUsrjLW+t3vTr01Nfn4L0AAAAAAAAAAAAAAFH26lT4rqTo1FD7Ti+X47Acx6ryEsrqXJXs5cyncSUV6RXRf0MSZHO4PI4C9lbZW3lSqN9J941Ou+8X5Mcnv/kAAAAAAAAAAAA9PXfoA3st+4E4cEchK501cWc5czs7hxjv+GX1l+pIpGHBPEZLH0L+7vLeVG2uo0/oefo5cu/Xb06kngAAAAAAAAAAAAAAo+q2KgCxymKssraStchb07ijL7k12+D8EW6m4R1ISnX09cKpHq/Z63Rr3KRMD6rYo1uByzk8RkcTVdLJWda3kvxx6fMsVJPz0Orrm1oXVN0rmjSq033jOKaNUynDTTeQcpRtZW05eaEtl8gOfH08Aly94NU95OxyrS8KrT/sYmrwfzEG/or60mvfugI5HzJDXCLOvvc2aXxZd23BvISa9pylvBeeSDbAjHfqFvJ8sU3L0XUmvH8H8TRcZX17cXDXeMdoI2/E6TweJ2dlj6KmvvzjzS+bAg3AaCz2cadK1dtQf8auto/LyStpbhth8HKFxcRV7er+JVX1Yv3RN15Fun0WxXyAjHb4eCoAAAAAAAAAAAAAAAAAAAAAAAKbFQBTYbFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k="
          alt="User Profile" 
          onClick={navigateUserProfile}
          className="w-6 h-6 rounded-full cursor-pointer transition duration-300 transform hover:scale-110" />
        </div>
        <div className="text-sm cursor-pointer">
          <img
            src={settings}
            alt="Settings"
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
