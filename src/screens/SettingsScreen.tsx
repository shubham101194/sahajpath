import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { t } from '../i18n';
import { IconChevronLeft } from '../components/Icons';

export const SettingsScreen: React.FC = () => {
  const navigate = useNavigate();
  const language = useAppStore((s) => s.language);
  const setLanguage = useAppStore((s) => s.setLanguage);

  return (
    <div className="screen page-enter">
      <div className="flex-row gap-md mb-lg">
        <button className="back-btn" onClick={() => navigate('/explore')}>
          <IconChevronLeft color="var(--warm-brown)" />
        </button>
        <h1 className="screen-title">{t('settings', language)}</h1>
      </div>

      <div className="stack gap-xl">
        <div className="stack gap-md">
          <span className="section-label">{t('language', language)}</span>
          <div className="lang-toggle">
            <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>
              English
            </button>
            <button className={language === 'hi' ? 'active' : ''} onClick={() => setLanguage('hi')}>
              हिन्दी
            </button>
          </div>
        </div>

        <div className="card about-card stack gap-sm" style={{ alignItems: 'center' }}>
          <h2 className="app-name" style={{ fontSize: 22 }}>SahajPath</h2>
          <p className="app-name-hi">सहज पथ</p>
          <div className="saffron-divider" style={{ margin: '8px 0' }} />
          <p className="body-large text-center" style={{ padding: '0 8px', lineHeight: 1.6 }}>
            {t('aboutDescription', language)}
          </p>
          <p className="caption text-center" style={{ marginTop: 8, lineHeight: 1.5 }}>
            {language === 'hi'
              ? 'बाबूजी महाराज (1899-1983) की शिक्षाओं पर आधारित\nश्री राम चंद्र मिशन से अनौपचारिक'
              : 'Based on the teachings of Babuji Maharaj (1899-1983)\nUnofficial — not affiliated with SRCM'}
          </p>
        </div>
      </div>
    </div>
  );
};
