import React, { useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { getTeachingById } from '../utils/getDailyTeaching';
import { shareTeaching } from '../utils/shareToWhatsApp';
import { TeachingCard } from '../components/TeachingCard';
import { IconChevronLeft } from '../components/Icons';

export const TeachingDetailScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const language = useAppStore((s) => s.language);
  const setLanguage = useAppStore((s) => s.setLanguage);
  const favoriteIds = useAppStore((s) => s.favoriteIds);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);
  const markViewed = useAppStore((s) => s.markViewed);

  const teaching = id ? getTeachingById(id) : null;

  useEffect(() => {
    if (teaching) markViewed(teaching.id);
  }, [teaching?.id]);

  const handleShare = useCallback(() => {
    if (teaching) shareTeaching(teaching, language);
  }, [teaching, language]);

  if (!teaching) return <div className="screen">Teaching not found</div>;

  return (
    <div className="screen page-enter">
      <div className="flex-between">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <IconChevronLeft color="var(--warm-brown)" />
          <span>{language === 'hi' ? `दिन ${teaching.day}` : `Day ${teaching.day}`}</span>
        </button>
        <button
          className="lang-switch-btn"
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
        >
          {language === 'en' ? 'हिन्दी' : 'English'}
        </button>
      </div>

      <div style={{ marginTop: 12 }}>
        <TeachingCard
          teaching={teaching}
          language={language}
          isFavorite={favoriteIds.includes(teaching.id)}
          onToggleFavorite={() => toggleFavorite(teaching.id)}
          onShare={handleShare}
        />
      </div>
    </div>
  );
};
