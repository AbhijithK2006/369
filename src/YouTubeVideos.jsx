import React, { useState, useEffect } from 'react';

const YouTubeVideos = () => {
  const [loading, setLoading] = useState(true);

  // This effect will run once on component mount
  useEffect(() => {
    // Set a timer to turn off the loading state after the animation completes
    const timer = setTimeout(() => setLoading(false), 2800); // Animation duration is 2.8 seconds
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  const videos = [
    {
      id: { videoId: 'b5BIVRcV6PA' },
      snippet: {
        title: 'RECOIL COMPARISON - NEW GUN ASM ABAKAN AR & POPULAR 5.56 ARs',
        description: 'Detailed recoil comparison between the new ASM Abakan AR and popular 5.56 assault rifles in BGMI.',
        thumbnails: { medium: { url: 'https://img.youtube.com/vi/b5BIVRcV6PA/mqdefault.jpg' } },
        publishedAt: '2024-01-20T10:00:00Z'
      }
    },
    {
      id: { videoId: 'YXGHgFZoBrY' },
      snippet: {
        title: 'ATTACK OF TITAN BGMI 3.8 UPDATE 🤯🤯 TRAILER',
        description: 'Official trailer and first look at the Attack on Titan collaboration in BGMI 3.8 update.',
        thumbnails: { medium: { url: 'https://img.youtube.com/vi/YXGHgFZoBrY/mqdefault.jpg' } },
        publishedAt: '2024-01-18T10:00:00Z'
      }
    },
    {
      id: { videoId: 'Ou2VIeNhhCw' },
      snippet: {
        title: 'Crazyyyyyy glitch 🤣🤣 BGMI 🤡 #glitch #bgmi',
        description: 'Hilarious and crazy glitches found in BGMI that will make you laugh out loud!',
        thumbnails: { medium: { url: 'https://img.youtube.com/vi/Ou2VIeNhhCw/mqdefault.jpg' } },
        publishedAt: '2024-01-15T10:00:00Z'
      }
    },
    {
      id: { videoId: 'tafo-ST6Jxk' },
      snippet: {
        title: 'Garena Delta Force Gameplay | 25 PvPcombat | Delta Force',
        description: 'Intense Delta Force gameplay featuring 25 PvP combat matches with epic action and strategies.',
        thumbnails: { medium: { url: 'https://img.youtube.com/vi/tafo-ST6Jxk/mqdefault.jpg' } },
        publishedAt: '2024-01-12T10:00:00Z'
      }
    }
  ];

  const handleVideoClick = (videoId) => {
    window.open(`http://googleusercontent.com/youtube.com/9{videoId}`, '_blank');
  };

  return (
    <>
      <head>
        <title>369 Gaming - YouTube Videos</title>
      </head>
      {/* Custom styles for the animations with the new red color */}
      <style>{`
        @keyframes fadeInScaleUpRed {
          0% { opacity: 0; transform: scale(0.9); text-shadow: none; }
          50% { opacity: 1; transform: scale(1.05); text-shadow: 0 0 15px #ef4444; }
          100% { opacity: 0; transform: scale(0.9); text-shadow: none; }
        }
        .animate-logo-red {
          animation: fadeInScaleUpRed 2.8s ease-in-out forwards;
        }
      `}</style>

      {/* Preloader - Themed with red on black */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-700 ease-in-out
        ${!loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <h1 className="text-9xl font-extrabold text-red-500 animate-logo-red">
          369
        </h1>
      </div>

      {/* Main Content - Dark theme with red accents */}
      <div className={`min-h-screen bg-gray-900 font-sans transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <nav className="bg-gradient-to-r from-black to-red-900 p-4 shadow-lg sticky top-0 z-50">
          <a
            href="https://www.youtube.com/@369_gaming1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-4xl font-extrabold text-white tracking-wider hover:text-red-500 hover:shadow-red-500/20 hover:shadow-2xl transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="currentColor" className="text-red-600">
              <path d="M31.4 8.3c-.4-1.6-1.7-2.9-3.3-3.3C25.1 4.4 16 4.4 16 4.4s-9.1 0-12.1.6c-1.6.4-2.9 1.7-3.3 3.3C0 11.3 0 16 0 16s0 4.7.6 7.7c.4 1.6 1.7 2.9 3.3 3.3 3 .6 12.1.6 12.1.6s9.1 0 12.1-.6c1.6-.4 2.9-1.7 3.3-3.3.6-3 .6-7.7.6-7.7s0-4.7-.6-7.7zM12.8 21.5V10.5l8.3 5.5-8.3 5.5z"/>
            </svg>
            369 Gaming
          </a>
        </nav>
        <main className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-white">Latest Gaming Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos.map((video) => (
              <div
                key={video.id.videoId}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer flex flex-col group border-2 border-gray-700 hover:border-red-500 hover:shadow-red-500/20 hover:shadow-2xl"
                onClick={() => handleVideoClick(video.id.videoId)}
              >
                <div className="relative">
                  <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full h-48 object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white opacity-80" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-md font-bold text-white mb-2 leading-tight">
                    {video.snippet.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {video.snippet.description}
                  </p>
                  <p className="text-gray-500 text-xs text-right mt-auto font-medium">
                    {new Date(video.snippet.publishedAt).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default YouTubeVideos;