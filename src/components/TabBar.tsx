import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IconSun, IconGrid, IconBookmark, IconSearch } from './Icons';
import { useAppStore } from '../store/useAppStore';
import { t } from '../i18n';

const tabs = [
  { path: '/today', icon: IconSun, labelKey: 'tabToday' as const },
  { path: '/maxims', icon: IconGrid, labelKey: 'tabMaxims' as const },
  { path: '/paths', icon: IconBookmark, labelKey: 'tabPaths' as const },
  { path: '/explore', icon: IconSearch, labelKey: 'tabExplore' as const },
];

export const TabBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const language = useAppStore((s) => s.language);

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="tab-bar">
      <div className="tab-bar-inner">
        {tabs.map(({ path, icon: Icon, labelKey }) => (
          <button
            key={path}
            className={`tab-item ${isActive(path) ? 'active' : ''}`}
            onClick={() => navigate(path)}
          >
            <Icon color={isActive(path) ? '#C8A96E' : '#8B7355'} />
            <span>{t(labelKey, language)}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
