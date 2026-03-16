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
      <button className="back-btn" onClick={() => navigate(-1)}>
        <IconChevronLeft color="var(--warm-brown)" />
        <span>{language === 'hi' ? `दिन ${teaching.day}` : `Day ${teaching.day}`}</span>
      </button>

      <div style={{ marginTop: 12 }}>
        <TeachingCard
          teaching={teaching}
          language={language}
          isFavorite={favoriteIds.includes(teaching.id)}
          onToggleFavorite={() => toggleFavorite(teaching.id)}
          onShare={handleShare}
        />
      </div>

      <div className="lang-toggle" style={{ marginTop: 16 }}>
        <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>English</button>
        <button className={language === 'hi' ? 'active' : ''} onClick={() => setLanguage('hi')}>हिन्दी</button>
      </div>
    </div>
  );
};
