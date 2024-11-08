import { colorAlias } from '../../styles/theme';
import { css, useTheme } from '@emotion/react';

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  is?: 't1' | 't2';
  color?: keyof typeof colorAlias;
}

const Title = ({
  children,
  is = 't1',
  color = 'black',
  ...props
}: TitleProps) => {
  const theme = useTheme();
  if (is === 't2') {
    return (
      <h5
        css={css`
          ${theme.font.title2}
          color: ${colorAlias[color]};
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
        color: ${colorAlias[color]};
      `}
      {...props}
    >
      {children}
    </h4>
  );
};

export default Title;
