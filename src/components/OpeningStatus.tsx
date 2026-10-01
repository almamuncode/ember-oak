'use client';
import { useEffect, useState } from 'react';
export function OpeningStatus() {
  const [text, setText] = useState('Austin, Texas · A seat for every story');
  useEffect(() => {
    const update = () => {
      const day = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Chicago',
        weekday: 'short',
      }).format(new Date());
      setText(
        `Open today · ${day === 'Sun' ? '12 pm – 9 pm' : day === 'Fri' || day === 'Sat' ? '11 am – 11 pm' : '11 am – 10 pm'}`,
      );
    };
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);
  return (
    <span className="opening-status">
      <i />
      {text}
    </span>
  );
}
