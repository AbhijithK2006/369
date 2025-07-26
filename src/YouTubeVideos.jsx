import React from 'react';

const YouTubeVideos = () => {
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
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <>
    <head>
    <title>369</title>
    </head>
    <div className="min-h-screen bg-white flex flex-col">
       <nav className="bg-[#3e1929] py-4 shadow-2xl rounded-b-4xl">
        <a
          href="https://www.youtube.com/@369_gaming1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-3xl font-bold text-center text-white hover:text-red-600 transition-colors duration-300"
        >
          {/* YouTube Logo SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="text-red-600"
          >
            <path d="M31.4 8.3c-.4-1.6-1.7-2.9-3.3-3.3C25.1 4.4 16 4.4 16 4.4s-9.1 0-12.1.6c-1.6.4-2.9 1.7-3.3 3.3C0 11.3 0 16 0 16s0 4.7.6 7.7c.4 1.6 1.7 2.9 3.3 3.3 3 0.6 12.1 0.6 12.1 0.6s9.1 0 12.1-.6c1.6-.4 2.9-1.7 3.3-3.3.6-3 0.6-7.7 0.6-7.7s0-4.7-.6-7.7zM12.8 21.5V10.5l8.3 5.5-8.3 5.5z"/>
          </svg>
          369 Gaming
        </a>
      </nav>
      <h2 className="text-2xl font-bold mt-8 mb-6 text-center text-violet">YouTube Videos</h2>
      <div className="flex-1 flex justify-center items-start">
        <div className="w-full max-w-7xl px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div
                key={video.id.videoId}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg flex flex-col h-full border-2 border-[#3e1929]"
                onClick={() => handleVideoClick(video.id.videoId)}
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2 text-center">
                    {video.snippet.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-2 line-clamp-2 text-center">
                    {video.snippet.description}
                  </p>
                  <p className="text-gray-500 text-xs text-center mt-auto">
                    {new Date(video.snippet.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default YouTubeVideos;