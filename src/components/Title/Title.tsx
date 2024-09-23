export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  is?: 't1' | 't2' | 'sub1' | 'sub2' | 'sub3';
}

const Title = ({ children, is = 't1', ...props }: TitleProps) => {
  return (
    <h4
      css={(theme) => {
        switch (is) {
          case 't1':
            return theme.font.title1;
          case 't2':
            return theme.font.title2;
          case 'sub1':
            return theme.font.subtitle1;
          case 'sub2':
            return theme.font.subtitle2;
          case 'sub3':
            return theme.font.subtitle3;
          /** never reach here */
          default:
            return theme.font.title1;
        }
      }}
      {...props}
    >
      {children}
    </h4>
  );
};

export default Title;
