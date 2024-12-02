import { css, useTheme } from '@emotion/react';
import { colorAlias } from '../../styles/theme';
import { useCallback } from 'react';
import { conditionalStyle } from '../../util/style';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3';
  color?: keyof typeof colorAlias;
}

const Heading = ({
  children,
  as: Component = 'h1',
  color,
  ...props
}: HeadingProps) => {
  const theme = useTheme();
  const getHeadingStyle = useCallback(() => {
    switch (Component) {
      case 'h1':
        return theme.font.head1;
      case 'h2':
        return theme.font.head2;
      case 'h3':
        return theme.font.head3;
      /** never reach here */
      default:
        return theme.font.head1;
    }
  }, [Component, theme.font.head1, theme.font.head2, theme.font.head3]);
  return (
    <Component
      css={css`
        ${getHeadingStyle()}
        ${conditionalStyle(
          color,
          `color: ${colorAlias[color as keyof typeof colorAlias]};`
        )}
      `}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;
