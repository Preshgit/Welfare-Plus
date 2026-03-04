'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export default function GoogleTranslate() {
  const initialized = useRef(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (initialized.current || document.getElementById('google-translate-script')) return;
    initialized.current = true;

    // Define the initialization function for the Google widget
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            // Add or remove languages as needed
            includedLanguages: 'en,fi,sv,de,fr,es',
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500 hidden lg:inline-block">Translate:</span>
      <div id="google_translate_element" className="google-translate-container" />
    </div>
  );
}
