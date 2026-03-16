import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { getTeachingById } from '../utils/getDailyTeaching';
import { localized, t } from '../i18n';
import { IconChevronLeft, IconStar } from '../components/Icons';
import booksData from '../content/books.json';

const bookTitles: Record<string, Record<string, string>> = {};
for (const b of booksData.books) bookTitles[b.id] = { en: b.title_en, hi: b.title_hi };

export const FavoritesScreen: React.FC = () => {
  const navigate = useNavigate();
  const language = useAppStore((s) => s.language);
  const favoriteIds = useAppStore((s) => s.favoriteIds);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);

  const favorites = favoriteIds.map((id) => getTeachingById(id)).filter(Boolean);

  return (
    <div className="screen page-enter">
      <div className="flex-row gap-md mb-lg">
        <button className="back-btn" onClick={() => navigate('/explore')}>
          <IconChevronLeft color="var(--warm-brown)" />
        </button>
        <h1 className="screen-title">{t('favorites', language)}</h1>
      </div>

      {favorites.length === 0 && (
        <div className="empty-state">
          <IconStar color="var(--border)" size={48} />
          <p style={{ padding: '0 24px', lineHeight: 1.6 }}>{t('noFavorites', language)}</p>
        </div>
      )}

      <div className="stack gap-md">
        {favorites.map((teaching) => {
          if (!teaching) return null;
          const text = localized(teaching, 'text', language);
          const bookTitle = bookTitles[teaching.source.book]?.[language] ?? '';
          const sourceText = teaching.source.chapter ? `${bookTitle} · ${teaching.source.chapter}` : bookTitle;

          return (
            <button
              key={teaching.id}
              className="card card-pressable"
              style={{ textAlign: 'left', width: '100%' }}
              onClick={() => navigate(`/teaching/${teaching.id}`)}
            >
              <div className="flex-between" style={{ marginBottom: 10 }}>
                <span className="source-tag">{sourceText}</span>
                <button
                  className="btn-favorite active"
                  style={{ width: 36, height: 36, borderRadius: 10 }}
                  onClick={(e) => { e.stopPropagation(); toggleFavorite(teaching.id); }}
                >
                  <IconStar color="#C97B6B" size={15} filled />
                </button>
              </div>
              <p className={language === 'hi' ? 'teaching-medium-hi' : 'teaching-medium'}
                 style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                "{text}"
              </p>
              <span className="caption" style={{ marginTop: 8, color: 'var(--saffron)', display: 'block' }}>
                {language === 'hi' ? `दिन ${teaching.day}` : `Day ${teaching.day}`}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
