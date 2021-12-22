import { store } from '@redux';
import I18n from 'react-native-i18n';
import { en } from './en';
import { ja } from './jp';
import { LocaleConfig } from 'react-native-calendars';

I18n.fallbacks = true;
I18n.defaultLocale = 'jp';

I18n.translations = {
  en,
  ja,
};

const trans = (string: string, params?: any) => {
  let language = store.getState().authReducers.locale;
  I18n.locale = language;
  return I18n.t(string, params);
};

export const initCalendar = (lang?: string) => {
  LocaleConfig.defaultLocale = !!lang ? lang : 'en';
  LocaleConfig.locales['en'] = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan.',
      'Feb.',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul.',
      'Aug',
      'Sep.',
      'Oct.',
      'Nov.',
      'Dec.',
    ],
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursdya',
      'Friday',
      'Sunday',
    ],
    dayNamesShort: ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: 'Today',
  };
  //France
  LocaleConfig.locales['fr'] = {
    monthNames: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ],
    monthNamesShort: [
      'Janv.',
      'Févr.',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juil.',
      'Août',
      'Sept.',
      'Oct.',
      'Nov.',
      'Déc.',
    ],
    dayNames: [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    today: "Aujourd'hui",
  };
};

export default { ...I18n, trans };
