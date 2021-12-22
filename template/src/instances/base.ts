import { Device } from '@assets';
import { Linking } from 'react-native';
export interface ActionBasePayloadProps {
  payload?: string;
}

export function openLinking(
  content: string,
  type: 'mail' | 'tel' | 'web' | 'whatsapp' | 'sms' | 'map',
  extra?: string
) {
  let formatContent = content.replace(/\s/g, '');
  let url = '';
  if (type === 'mail') {
    url = 'mailto:' + formatContent;
  } else if (type === 'tel') {
    url = 'tel:' + formatContent;
  } else if (type === 'web') {
    url =
      'https://' + formatContent.replace('https://', '').replace('http://', '');
  } else if (type === 'whatsapp') {
    url = 'whatsapp://send?phone=' + formatContent;
  } else if (type === 'sms') {
    url = `sms:${formatContent}?body=`;
  } else if (type === 'map') {
    var scheme = Device.isIos ? 'maps:0,0?q=' : 'geo:0,0?q=';
    const label = extra;
    url = Device.isIos
      ? `${scheme}${label}&ll=${formatContent}`
      : `${scheme}${formatContent}(${label})`;
  }
  Linking.openURL(url);
}

export function isVideo(url: string) {
  let ext = url.split('.').pop()?.split(/\#|\?/)[0];
  if (!!ext) {
    console.log('🚀 ~ file: index.ts ~ line 27 ~ isVideo ~ ext', ext);
    let videoExt = [
      'MOV',
      'AVI',
      'MP4',
      'M4P',
      'M4V',
      'MPG',
      'MPEG',
      'MPE',
      'MPV',
      'WEBM',
    ];
    if (videoExt.includes(ext.toLocaleUpperCase())) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

export function validURL(str) {
  if (str === '') return false;
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
}

export function validYoutube(str) {
  var pattern = new RegExp(
    '(?:https?:\\/\\/)?(?:www\\.)?youtu\\.?be(?:\\.com)?\\/?.*(?:watch|embed)?(?:.*v=|v\\/|\\/)([\\w\\-_]+)\\&?'
  ); // fragment locator
  return !!pattern.test(str);
}

export function parseUrl(url) {
  var match = url.match(
    // eslint-disable-next-line no-useless-escape
    /^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/
  );
  return (
    match && {
      href: url,
      protocol: match[1],
      host: match[2],
      hostname: match[3],
      port: match[4],
      pathname: match[5],
      search: match[6],
      hash: match[7],
    }
  );
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
