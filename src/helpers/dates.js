import TimeAgo from 'javascript-time-ago';
import lt from 'javascript-time-ago/locale/lt';
TimeAgo.addDefaultLocale(lt);

export const shortMonth = month => {
  switch (month) {
    case 1:
      return 'Sau';
    case 2:
      return 'Vas';
    case 3:
      return 'Kov';
    case 4:
      return 'Bal';
    case 5:
      return 'Geg';
    case 6:
      return 'Bir';
    case 7:
      return 'Lie';
    case 8:
      return 'Rugp';
    case 9:
      return 'Rugs';
    case 10:
      return 'Spa';
    case 11:
      return 'Lap';
    case 12:
      return 'Gru';
    default:
      return '???';
  }
};

export const timeAgo = timestamp => {
  const returnValue = new TimeAgo('en-US');
  return returnValue.format(timestamp - 60 * 1000);
};
