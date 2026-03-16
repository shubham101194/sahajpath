import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { t } from '../i18n';

export const PathsScreen: React.FC = () => {
  const language = useAppStore((s) => s.language);

  return (
    <div className="screen page-enter">
      <h1 className="screen-title mb-lg">{t('tabPaths', language)}</h1>
      <div className="empty-state">
        <span style={{ fontSize: 32 }}>🌿</span>
        <p className="body-large" style={{ lineHeight: 1.6 }}>
          {language === 'hi'
            ? 'मार्गदर्शित शिक्षा पथ जल्द आ रहे हैं — 7-दिवसीय परिचय, 30-दिवसीय सिद्धांत यात्रा, और अधिक।'
            : 'Guided learning paths coming soon — 7-day intro, 30-day Maxims journey, and more.'}
        </p>
      </div>
    </div>
  );
};
