import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { getCurrentDay } from '../utils/dateHelpers';
import { getTotalTeachings } from '../utils/getDailyTeaching';
import { t } from '../i18n';

interface Props {
  onClose: () => void;
}

export const DayPicker: React.FC<Props> = ({ onClose }) => {
  const language = useAppStore((s) => s.language);
  const installDate = useAppStore((s) => s.installDate);
  const manualDayOverride = useAppStore((s) => s.manualDayOverride);
  const setDay = useAppStore((s) => s.setDay);
  const resetToNaturalDay = useAppStore((s) => s.resetToNaturalDay);

  const naturalDay = getCurrentDay(installDate);
  const currentDay = manualDayOverride ?? naturalDay;
  const total = getTotalTeachings();
  const [value, setValue] = useState(String(currentDay));

  const handleGo = () => {
    const n = parseInt(value, 10);
    if (n >= 1 && n <= total) {
      setDay(n);
      onClose();
    }
  };

  const adjust = (delta: number) => {
    const n = Math.max(1, Math.min(total, (parseInt(value, 10) || 1) + delta));
    setValue(String(n));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="modal-handle" />
        <h2 className="screen-title text-center">{t('chooseDayTitle', language)}</h2>
        <p className="caption text-center mt-sm" style={{ padding: '0 20px' }}>
          {t('chooseDayDescription', language)}
        </p>

        <div className="day-input-row">
          <button className="day-adjust-btn" onClick={() => adjust(-1)}>−</button>
          <input
            className="day-input"
            type="number"
            min={1}
            max={total}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGo()}
          />
          <button className="day-adjust-btn" onClick={() => adjust(1)}>+</button>
        </div>

        <p className="caption text-center mb-lg">1 — {total}</p>

        <button className="btn-go" onClick={handleGo}>
          {t('goToDay', language)} {value}
        </button>

        {manualDayOverride !== null && (
          <button
            className="btn-text"
            style={{ display: 'block', margin: '12px auto 0' }}
            onClick={() => { resetToNaturalDay(); onClose(); }}
          >
            {t('resetToNatural', language)}
          </button>
        )}
      </div>
    </div>
  );
};
