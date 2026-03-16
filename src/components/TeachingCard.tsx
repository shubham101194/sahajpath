import React from 'react';
import { localized, t } from '../i18n';
import type { Teaching } from '../utils/getDailyTeaching';
import { IconStar, IconWhatsApp } from './Icons';
import booksData from '../content/books.json';

const bookTitles: Record<string, Record<string, string>> = {};
for (const b of booksData.books) {
  bookTitles[b.id] = { en: b.title_en, hi: b.title_hi };
}

interface Props {
  teaching: Teaching;
  language: 'en' | 'hi';
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onShare: () => void;
}

export const TeachingCard: React.FC<Props> = ({
  teaching, language, isFavorite, onToggleFavorite, onShare,
}) => {
  const text = localized(teaching, 'text', language);
  const explanation = localized(teaching, 'simple_explanation', language);
  const reflection = localized(teaching, 'reflection_prompt', language);
  const bookTitle = bookTitles[teaching.source.book]?.[language] ?? teaching.source.book;
  const sourceText = teaching.source.chapter ? `${bookTitle} · ${teaching.source.chapter}` : bookTitle;

  return (
    <div className="card stack gap-lg">
      {/* Top row: source tag + action icons */}
      <div className="flex-between">
        <span className="source-tag">{sourceText}</span>
        <div className="flex-row gap-sm">
          <button
            className="icon-btn"
            onClick={onShare}
            aria-label="Share on WhatsApp"
          >
            <IconWhatsApp size={18} />
          </button>
          <button
            className={`icon-btn ${isFavorite ? 'icon-btn-favorite' : ''}`}
            onClick={onToggleFavorite}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <IconStar
              color={isFavorite ? '#C97B6B' : '#8B7355'}
              size={18}
              filled={isFavorite}
            />
          </button>
        </div>
      </div>

      <p className={language === 'hi' ? 'teaching-large-hi' : 'teaching-large'}>
        "{text}"
      </p>

      <div className="saffron-divider" />

      <div className="stack gap-sm">
        <span className="section-label">{t('inSimpleWords', language)}</span>
        <p className={language === 'hi' ? 'body-large-hi' : 'body-large'}>{explanation}</p>
      </div>

      <div className="reflection-box stack gap-sm">
        <span className="section-label">{t('forReflection', language)}</span>
        <p className={language === 'hi' ? 'body-large-hi' : 'body-large'}>{reflection}</p>
      </div>
    </div>
  );
};
