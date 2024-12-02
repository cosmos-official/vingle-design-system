import { colorAlias } from '../../styles/theme';
import { css, useTheme } from '@emotion/react';
import { conditionalStyle } from '../../util/style';

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  is?: 't1' | 't2';
  color?: keyof typeof colorAlias;
}

const Title = ({ children, is = 't1', color, ...props }: TitleProps) => {
  const theme = useTheme();
  if (is === 't2') {
    return (
      <h5
        css={css`
          ${theme.font.title2}
          ${conditionalStyle(
            color,
            `color: ${colorAlias[color as keyof typeof colorAlias]};`
          )}
        `}
        {...props}
      >
        {children}
      </h5>
    );
  }
  return (
    <h4
      css={css`
        ${theme.font.title1}
        ${conditionalStyle(
          color,
          `color: ${colorAlias[color as keyof typeof colorAlias]};`
        )}
      `}
      {...props}
    >
      {children}
    </h4>
  );
};

export default Title;
