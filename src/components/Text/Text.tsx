import { css, useTheme } from '@emotion/react';
import { colorAlias } from '../../styles/theme';
import { useCallback } from 'react';

export interface TextProps
  extends React.HTMLAttributes<
    HTMLParagraphElement | HTMLDivElement | HTMLSpanElement
  > {
  is?: 'b1' | 'b2' | 'b3';
  as?: 'p' | 'div' | 'span';
  color?: keyof typeof colorAlias;
}

const Text = ({
  children,
  as: Component = 'p',
  is = 'b1',
  color = 'black',
  ...props
}: TextProps) => {
  const theme = useTheme();
  const getTextStyle = useCallback(() => {
    switch (is) {
      case 'b2':
        return theme.font.body2;
      case 'b3':
        return theme.font.body3;
      default:
        return theme.font.body1;
    }
  }, [is, theme.font.body1, theme.font.body2, theme.font.body3]);
  return (
    <Component
      css={css`
        ${getTextStyle()}
        color: ${colorAlias[color]};
      `}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
