'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- pathname and params are handled by next-intl
      { pathname, params },
      { locale: nextLocale }
    );
  }

  return (
    <div className="flex gap-2 text-sm font-medium">
      <button
        onClick={() => onSelectChange('en')}
        className={`${locale === 'en' ? 'text-primary' : 'text-gray-500 hover:text-primary transition-colors'}`}
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => onSelectChange('fi')}
        className={`${locale === 'fi' ? 'text-primary' : 'text-gray-500 hover:text-primary transition-colors'}`}
      >
        FI
      </button>
    </div>
  );
}
