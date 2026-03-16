import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { t } from '../i18n';
import { IconStar, IconSearch, IconSettings, IconChevronRight } from '../components/Icons';

export const ExploreScreen: React.FC = () => {
  const navigate = useNavigate();
  const language = useAppStore((s) => s.language);
  const favoriteCount = useAppStore((s) => s.favoriteIds.length);

  return (
    <div className="screen page-enter">
      <h1 className="screen-title mb-lg">{t('explore', language)}</h1>

      <div className="stack gap-md">
        <button className="menu-item" onClick={() => navigate('/favorites')}>
          <div className="menu-icon">
            <IconStar color="var(--saffron)" size={18} filled />
          </div>
          <div className="menu-item-text">
            <div className="menu-item-title">{t('favorites', language)}</div>
            <div className="menu-item-subtitle">
              {favoriteCount === 0
                ? language === 'hi' ? 'अभी कोई पसंदीदा नहीं' : 'No favorites yet'
                : language === 'hi'
                  ? `${favoriteCount} शिक्षाएँ सहेजी गईं`
                  : `${favoriteCount} teaching${favoriteCount === 1 ? '' : 's'} saved`}
            </div>
          </div>
          <IconChevronRight color="var(--saffron)" />
        </button>

        <button className="menu-item" style={{ opacity: 0.6, cursor: 'default' }}>
          <div className="menu-icon">
            <IconSearch color="var(--saffron)" size={18} />
          </div>
          <div className="menu-item-text">
            <div className="menu-item-title">{t('concepts', language)}</div>
            <div className="menu-item-subtitle">
              {language === 'hi' ? 'जल्द आ रहा है' : 'Coming soon'}
            </div>
          </div>
        </button>

        <div style={{ height: 8 }} />

        <button className="menu-item" onClick={() => navigate('/settings')}>
          <div className="menu-icon">
            <IconSettings color="var(--muted-brown)" size={18} />
          </div>
          <div className="menu-item-text">
            <div className="menu-item-title">{t('settings', language)}</div>
            <div className="menu-item-subtitle">
              {language === 'hi' ? 'भाषा, अनुस्मारक' : 'Language, reminders'}
            </div>
          </div>
          <IconChevronRight color="var(--saffron)" />
        </button>
      </div>
    </div>
  );
};
