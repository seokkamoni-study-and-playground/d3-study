export type Color = 'orange' | 'sub';

const color: { [key in Color]: string } = {
  orange: '#ff6700',
  sub: '#FFFFFF',
};

export default { color };
