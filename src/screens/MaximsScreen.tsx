import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { localized, t } from '../i18n';
import { IconChevronRight } from '../components/Icons';
import maximsData from '../content/maxims.json';

const timeLabels: Record<string, Record<string, string>> = {
  dawn: { en: 'Dawn', hi: 'भोर' },
  morning: { en: 'Morning', hi: 'सुबह' },
  day: { en: 'Daytime', hi: 'दिन' },
  evening: { en: 'Evening', hi: 'शाम' },
  bedtime: { en: 'Bedtime', hi: 'सोने का समय' },
};

export const MaximsScreen: React.FC = () => {
  const navigate = useNavigate();
  const language = useAppStore((s) => s.language);

  return (
    <div className="screen page-enter">
      <h1 className="screen-title">{t('tenMaxims', language)}</h1>
      <p className="body-large mt-sm mb-lg" style={{ lineHeight: 1.6 }}>
        {language === 'hi'
          ? 'बाबूजी महाराज के दस दैनिक जीवन सिद्धांत — भोर से सोने तक, एक पूरे दिन का मार्गदर्शन।'
          : "Babuji's ten guidelines for daily living — from dawn to bedtime, a complete day's compass."}
      </p>

      <div className="stack gap-md">
        {maximsData.maxims.map((maxim) => (
          <button
            key={maxim.number}
            className="card card-pressable"
            style={{ textAlign: 'left', width: '100%' }}
            onClick={() => navigate(`/maxims/${maxim.number}`)}
          >
            <div className="flex-between" style={{ marginBottom: 12 }}>
              <div className="number-badge">{maxim.number}</div>
              <span className="caption">
                {timeLabels[maxim.time_of_day]?.[language] ?? maxim.time_of_day}
              </span>
            </div>
            <p className={language === 'hi' ? 'teaching-medium-hi' : 'teaching-medium'}
               style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {localized(maxim, 'text', language)}
            </p>
            <p className="caption" style={{ marginTop: 8, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {localized(maxim, 'simple_explanation', language)}
            </p>
            <div style={{ alignSelf: 'flex-end', marginTop: 8 }}>
              <IconChevronRight color="var(--saffron)" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
