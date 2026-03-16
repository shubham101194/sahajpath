import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import { getCurrentDay, getFormattedDate } from '../utils/dateHelpers';
import { getTeachingByDay, getTotalTeachings } from '../utils/getDailyTeaching';
import { shareTeaching } from '../utils/shareToWhatsApp';
import { t } from '../i18n';
import { TeachingCard } from '../components/TeachingCard';
import { DayPicker } from '../components/DayPicker';
import { IconChevronDown, IconChevronLeft, IconChevronRight } from '../components/Icons';

export const HomeScreen: React.FC = () => {
  const language = useAppStore((s) => s.language);
  const setLanguage = useAppStore((s) => s.setLanguage);
  const installDate = useAppStore((s) => s.installDate);
  const manualDayOverride = useAppStore((s) => s.manualDayOverride);
  const favoriteIds = useAppStore((s) => s.favoriteIds);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);
  const markViewed = useAppStore((s) => s.markViewed);
  const setDay = useAppStore((s) => s.setDay);

  const [showDayPicker, setShowDayPicker] = useState(false);

  const currentDay = manualDayOverride ?? getCurrentDay(installDate);
  const teaching = useMemo(() => getTeachingByDay(currentDay), [currentDay]);
  const total = getTotalTeachings();

  const hasPrev = currentDay > 1;
  const hasNext = currentDay < total;

  useEffect(() => {
    if (teaching) markViewed(teaching.id);
  }, [teaching?.id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentDay]);

  const handleShare = useCallback(() => {
    if (teaching) shareTeaching(teaching, language);
  }, [teaching, language]);

  if (!teaching) return null;

  return (
    <div className="screen page-enter">
      {/* Header */}
      <div className="flex-between">
        <div>
          <h1 className="app-name">SahajPath</h1>
          <p className="app-name-hi">सहज पथ</p>
        </div>
        <button
          className="lang-switch-btn"
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
        >
          {language === 'en' ? 'हिन्दी' : 'English'}
        </button>
      </div>

      {/* Day counter — tappable for jump-to-day */}
      <button
        className="flex-row gap-xs mt-md mb-lg"
        onClick={() => setShowDayPicker(true)}
        style={{ color: 'var(--muted-brown)', fontSize: 13 }}
      >
        <span>
          {language === 'hi'
            ? `दिन ${currentDay} / ${total} · ${getFormattedDate('hi')}`
            : `Day ${currentDay} of ${total} · ${getFormattedDate('en')}`}
        </span>
        <IconChevronDown color="var(--muted-brown)" />
      </button>

      {/* Teaching Card */}
      <TeachingCard
        teaching={teaching}
        language={language}
        isFavorite={favoriteIds.includes(teaching.id)}
        onToggleFavorite={() => toggleFavorite(teaching.id)}
        onShare={handleShare}
      />

      {/* Prev / Next Navigation */}
      <div className="day-nav">
        <button
          className={`day-nav-btn ${!hasPrev ? 'day-nav-btn-disabled' : ''}`}
          onClick={() => hasPrev && setDay(currentDay - 1)}
          disabled={!hasPrev}
        >
          <IconChevronLeft color={hasPrev ? 'var(--saffron)' : 'var(--border)'} size={18} />
          <span>{language === 'hi' ? 'पिछला' : 'Previous'}</span>
        </button>
        <button
          className={`day-nav-btn day-nav-btn-primary ${!hasNext ? 'day-nav-btn-disabled' : ''}`}
          onClick={() => hasNext && setDay(currentDay + 1)}
          disabled={!hasNext}
        >
          <span>{language === 'hi' ? 'अगला' : 'Next'}</span>
          <IconChevronRight color={hasNext ? 'var(--saffron)' : 'var(--border)'} size={18} />
        </button>
      </div>

      {/* Day Picker Modal */}
      {showDayPicker && <DayPicker onClose={() => setShowDayPicker(false)} />}
    </div>
  );
};
