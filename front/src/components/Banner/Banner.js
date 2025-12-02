import "./Banner.css";
import React, { useState, useEffect } from "react";

const Banner = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const videos = [
    "/videos/banner-video-1.mp4",
    "/videos/banner-video-2.mp4",
    "/videos/banner-video-3.mp4",
  ];

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      text: "До 40 минут полета",
      desc: "Продолжительная работа",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect
            x="4"
            y="6"
            width="16"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
          <path d="M8 6V4H16V6" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      text: "4K камеры",
      desc: "Профессиональное качество",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 2V4M12 20V22M4 12H2M20 12H22"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M17.5 8L19 6.5M6.5 8L5 6.5M8 6.5L6.5 8M17.5 16L19 17.5M6.5 16L5 17.5M8 17.5L6.5 16"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      text: "GPS навигация",
      desc: "Точное позиционирование",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
      text: "Стабилизация",
      desc: "Плавные кадры",
    },
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const preloadNextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    const video = document.createElement("video");
    video.src = videos[nextIndex];
    video.preload = "auto";
  };

  useEffect(() => {
    preloadNextVideo();

    const interval = setInterval(() => {
      nextVideo();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentVideoIndex, videos.length]);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="container video-carousel-banner">
      <div className="video-container">
        {isLoading && (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        )}

        {videos.map((videoSrc, index) => (
          <video
            key={index}
            autoPlay
            muted
            loop
            playsInline
            className={`banner-video ${
              index === currentVideoIndex ? "active" : "hidden"
            }`}
            onLoadedData={index === 0 ? handleVideoLoad : undefined}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ))}

        <div className="banner-content">
          <div className="banner-text">
            <h1>Мир с высоты птичьего полета</h1>
            <p className="banner-subtitle">
              Профессиональные дроны для съемки, исследований и экстрима
            </p>

            <div className="banner-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Моделей дронов</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4K</span>
                <span className="stat-label">Макс. качество</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5км</span>
                <span className="stat-label">Дальность</span>
              </div>
            </div>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-text">
                  <div className="feature-title">{feature.text}</div>
                  <div className="feature-desc">{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="video-overlay"></div>
      </div>
    </section>
  );
};

export default Banner;
