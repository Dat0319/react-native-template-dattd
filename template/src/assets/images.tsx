import { validURL } from '@instances';

const path = './images/';
export const reacts = [
  'like',
  'love',
  'heartEyes',
  'celebrate',
  'clap',
  'haha',
  'fear',
  'cry',
];
export const _returnReact = (type: string) => {
  switch (
    type
    // case 'like':
    //   return Images.ic_like;
    // case 'love':
    //   return Images.ic_heart;
    // case 'heartEyes':
    //   return Images.ic_heart_eyes;
    // case 'celebrate':
    //   return Images.ic_wave;
    // case 'clap':
    //   return Images.ic_clap;
    // case 'haha':
    //   return Images.ic_lmao;
    // case 'fear':
    //   return Images.ic_panic;
    // case 'cry':
    //   return Images.ic_cry;
  ) {
  }
};

export const Images = {
  uri: (url: string, noImage?: string) => {
    let NoImage = noImage !== undefined ? noImage : Images.NoImage,
      image = { uri: url };
    if (validURL(url)) {
      return image;
    } else {
      return NoImage;
    }
  },
  NoImage: require(`${path}ic_no_image.png`),
  avatar_merchant: require(`${path}avatar_merchant.png`),
};
