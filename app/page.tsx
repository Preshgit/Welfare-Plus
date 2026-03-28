'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function RootPage() {
  const router = useRouter();
  const t = useTranslations('General');
  useEffect(() => {
    router.replace(`/${routing.defaultLocale}`);
  }, [router]);
  return <p>{t('redirecting')}</p>;
}
