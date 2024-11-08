import { css } from '@emotion/react';

const colors = {
  primary: {
    vinglePurple: '#d650ff',
    vingleBlack: '#282529',
  },
  secondary: {
    purple: {
      70: '#e07bff',
      50: '#edb0ff',
      30: '#f5d3ff',
      10: '#f9e7ff',
    },
  },
  gray: {
    900: '#303037',
    800: '#3e3e45',
    700: '#56555f',
    600: '#6f6e7b',
    500: '#9f9eaf',
    400: '#b9b7c4',
    300: '#cecdd6',
    200: '#e6e6ea',
    100: '#f4f3f6',
    50: '#f9f9fa',
  },
  black: '#000000',
  white: '#ffffff',
  status: {
    error: '#ff2424',
    like: 'ff2875',
  },
} as const;

export const colorAlias = {
  vBlack: colors.primary.vingleBlack,
  vPurple: colors.primary.vinglePurple,
  p70: colors.secondary.purple[70],
  p50: colors.secondary.purple[50],
  p30: colors.secondary.purple[30],
  p10: colors.secondary.purple[10],
  g900: colors.gray[900],
  g800: colors.gray[800],
  g700: colors.gray[700],
  g600: colors.gray[600],
  g500: colors.gray[500],
  g400: colors.gray[400],
  g300: colors.gray[300],
  g200: colors.gray[200],
  g100: colors.gray[100],
  g50: colors.gray[50],
  black: colors.black,
  white: colors.white,
  error: colors.status.error,
  like: colors.status.like,
} as const;

const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

const font = {
  head1: css`
    font: ${fontWeight.semibold} 24px/120% 'Pretendard Variable';
    letter-spacing: -0.2px;
    margin: 0;
    padding: 0;
  `,
  head2: css`
    font: ${fontWeight.bold} 20px/120% 'Pretendard Variable';
    letter-spacing: -0.2px;
    margin: 0;
    padding: 0;
  `,
  head3: css`
    font: ${fontWeight.semibold} 20px/120% 'Pretendard Variable';
    letter-spacing: -0.2px;
    margin: 0;
    padding: 0;
  `,
  title1: css`
    font: ${fontWeight.semibold} 18px/150% 'Pretendard Variable';
    letter-spacing: -0.2px;
    margin: 0;
    padding: 0;
  `,
  title2: css`
    font: ${fontWeight.medium} 18px/150% 'Pretendard Variable';
    letter-spacing: -0.2px;
    margin: 0;
    padding: 0;
  `,
  subtitle1: css`
    font: ${fontWeight.bold} 18px/150% 'Pretendard Variable';
    letter-spacing: 0;
    margin: 0;
    padding: 0;
  `,
  subtitle2: css`
    font: ${fontWeight.semibold} 16px/150% 'Pretendard Variable';
    letter-spacing: 0;
    margin: 0;
    padding: 0;
  `,
  subtitle3: css`
    font: ${fontWeight.medium} 16px/150% 'Pretendard Variable';
    letter-spacing: 0;
    margin: 0;
    padding: 0;
  `,
  body1: css`
    font: ${fontWeight.semibold} 14px/150% 'Pretendard Variable';
    letter-spacing: 0;
    margin: 0;
    padding: 0;
  `,
  body2: css`
    font: ${fontWeight.medium} 14px/150% 'Pretendard Variable';
    letter-spacing: 0;
    margin: 0;
    padding: 0;
  `,
  body3: css`
    font: ${fontWeight.regular} 14px/150% 'Pretendard Variable';
    letter-spacing: 0;
    margin: 0;
    padding: 0;
  `,
  caption1: css`
    font: ${fontWeight.medium} 12px/150% 'Pretendard Variable';
    letter-spacing: 0;
    margin: 0;
    padding: 0;
  `,
  caption2: css`
    font: ${fontWeight.medium} 10px/150% 'Pretendard Variable';
    letter-spacing: 0;
    margin: 0;
    padding: 0;
  `,
} as const;

const theme = {
  colors,
  font,
} as const;

export default theme;
