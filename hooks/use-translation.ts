import { useLanguage } from '@/contexts/language-context';
import en from '@/translations/en.json';
import es from '@/translations/es.json';

const translations = { en, es };

export function useTranslation() {
  const { language } = useLanguage();
  return translations[language] as typeof en;
}
