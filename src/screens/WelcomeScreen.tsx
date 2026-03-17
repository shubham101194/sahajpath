import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

export const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const language = useAppStore((s) => s.language);
  const setLanguage = useAppStore((s) => s.setLanguage);

  const quoteEn = `"O Master!\nThou art the real goal of human life.\nWe are yet but slaves of wishes,\nPutting bar to our advancement.\nThou art the only God and Power\nTo bring us up to that stage."`;

  const quoteHi = `"हे नाथ!\nतू ही मनुष्य जीवन का ध्येय है।\nहम लोग इच्छाओं के दास बने हुए हैं,\nजो हमारी उन्नति में बाधक हैं।\nतू ही एकमात्र ईश्वर और शक्ति है\nजो हमें उस अवस्था तक पहुँचा सकती है।"`;

  return (
    <div className="welcome-screen" onClick={() => navigate('/today')}>
      {/* Language switch */}
      <button
        className="lang-switch-btn"
        style={{ position: 'absolute', top: 'var(--space-xl)', right: 'var(--space-xl)', zIndex: 10 }}
        onClick={(e) => {
          e.stopPropagation();
          setLanguage(language === 'en' ? 'hi' : 'en');
        }}
      >
        {language === 'en' ? 'हिन्दी' : 'English'}
      </button>

      {/* Photo */}
      <div className="welcome-photo-container">
        <img
          src="./babuji.png"
          alt="Babuji Maharaj"
          className="welcome-photo"
        />
      </div>

      {/* Name */}
      <h1 className="welcome-name">
        {language === 'hi' ? 'बाबूजी महाराज' : 'Babuji Maharaj'}
      </h1>
      <p className="welcome-subtitle">
        {language === 'hi'
          ? 'श्री राम चंद्र, शाहजहाँपुर'
          : 'Shri Ram Chandra of Shahjahanpur'}
      </p>

      {/* Prayer */}
      <p className={`welcome-quote ${language === 'hi' ? 'welcome-quote-hi' : ''}`}>
        {language === 'hi' ? quoteHi : quoteEn}
      </p>

      {/* Divider */}
      <div className="saffron-divider" style={{ alignSelf: 'center' }} />

      {/* App name + enter */}
      <div className="welcome-footer">
        <p className="welcome-app-name">SahajPath</p>
        <p className="welcome-app-name-hi">सहज पथ</p>
        <p className="welcome-tap">
          {language === 'hi' ? 'शिक्षाएँ पढ़ने के लिए टैप करें' : 'Tap to begin'}
        </p>
      </div>
    </div>
  );
};
