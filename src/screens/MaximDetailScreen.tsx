import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { localized, t } from '../i18n';
import { getTeachingById } from '../utils/getDailyTeaching';
import { IconChevronLeft, IconChevronRight } from '../components/Icons';
import maximsData from '../content/maxims.json';

export const MaximDetailScreen: React.FC = () => {
  const { number } = useParams<{ number: string }>();
  const navigate = useNavigate();
  const language = useAppStore((s) => s.language);

  const maxim = maximsData.maxims.find((m) => m.number === Number(number));
  if (!maxim) return null;

  const relatedTeachings = maxim.related_teachings
    .map((id) => getTeachingById(id))
    .filter(Boolean);

  return (
    <div className="screen page-enter">
      <button className="back-btn" onClick={() => navigate('/maxims')}>
        <IconChevronLeft color="var(--warm-brown)" />
        <span>{t('tenMaxims', language)}</span>
      </button>

      <div className="flex-row gap-md" style={{ margin: '16px 0' }}>
        <div className="number-badge large">{maxim.number}</div>
        <span className="caption" style={{ textTransform: 'uppercase', letterSpacing: 1 }}>
          {t('maxim', language)} {maxim.number}
        </span>
      </div>

      <p className={language === 'hi' ? 'teaching-large-hi' : 'teaching-large'}>
        "{localized(maxim, 'text', language)}"
      </p>

      <div className="saffron-divider" style={{ margin: '20px 0' }} />

      <div className="stack gap-sm mb-lg">
        <span className="section-label">{t('commentary', language)}</span>
        <p className={language === 'hi' ? 'body-large-hi' : 'body-large'}>
          {localized(maxim, 'commentary', language)}
        </p>
      </div>

      <div className="stack gap-sm mb-lg">
        <span className="section-label">{t('inSimpleWords', language)}</span>
        <p className={language === 'hi' ? 'body-large-hi' : 'body-large'}>
          {localized(maxim, 'simple_explanation', language)}
        </p>
      </div>

      <div className="reflection-box stack gap-sm mb-lg">
        <span className="section-label">{t('dailyPractice', language)}</span>
        <p className={language === 'hi' ? 'body-large-hi' : 'body-large'}>
          {localized(maxim, 'daily_practice', language)}
        </p>
      </div>

      {relatedTeachings.length > 0 && (
        <div className="stack gap-sm">
          <span className="section-label">{t('relatedTeachings', language)}</span>
          <div className="stack gap-sm">
            {relatedTeachings.map((teaching) => {
              if (!teaching) return null;
              return (
                <button
                  key={teaching.id}
                  className="related-card"
                  onClick={() => navigate(`/teaching/${teaching.id}`)}
                >
                  <span className="related-day">
                    {language === 'hi' ? `दिन ${teaching.day}` : `Day ${teaching.day}`}
                  </span>
                  <span className="related-text">
                    {localized(teaching, 'text', language)}
                  </span>
                  <IconChevronRight color="var(--saffron)" />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
