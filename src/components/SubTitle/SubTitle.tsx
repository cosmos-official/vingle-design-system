import { css, useTheme } from '@emotion/react';
import { colorAlias } from '../../styles/theme';
import { useCallback } from 'react';

export interface SubTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  is?: 'sub1' | 'sub2' | 'sub3';
  color?: keyof typeof colorAlias;
}

const SubTitle = ({
  children,
  is = 'sub1',
  color = 'black',
  ...props
}: SubTitleProps) => {
  const theme = useTheme();

  const getSubTitleStyle = useCallback(() => {
    switch (is) {
      case 'sub2':
        return theme.font.subtitle2;
      case 'sub3':
        return theme.font.subtitle3;
      default:
        return theme.font.subtitle1;
    }
  }, [is, theme.font.subtitle1, theme.font.subtitle2, theme.font.subtitle3]);
  return (
    <h6
      css={css`
        ${getSubTitleStyle()}
        color: ${colorAlias[color]};
      `}
      {...props}
    >
      {children}
    </h6>
  );
};

export default SubTitle;
