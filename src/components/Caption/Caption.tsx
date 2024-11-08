import { css, useTheme } from '@emotion/react';
import { useCallback } from 'react';
import { colorAlias } from '../../styles/theme';

export interface CaptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  is?: 'c1' | 'c2';
  color?: keyof typeof colorAlias;
}

const Caption = ({
  children,
  is = 'c1',
  color = 'black',
  ...props
}: CaptionProps) => {
  const theme = useTheme();

  const getCaptionStyle = useCallback(() => {
    switch (is) {
      case 'c2':
        return theme.font.caption2;
      default:
        return theme.font.caption1;
    }
  }, [is, theme.font.caption1, theme.font.caption2]);
  return (
    <p
      css={css`
        ${getCaptionStyle()}
        color: ${colorAlias[color]};
      `}
      {...props}
    >
      {children}
    </p>
  );
};

export default Caption;
