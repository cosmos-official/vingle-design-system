export interface SubTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  is?: 'sub1' | 'sub2' | 'sub3';
}

const SubTitle = ({ children, is = 'sub1', ...props }: SubTitleProps) => {
  return (
    <h6
      css={(theme) => {
        switch (is) {
          case 'sub2':
            return theme.font.subtitle2;
          case 'sub3':
            return theme.font.subtitle3;
          default:
            return theme.font.subtitle1;
        }
      }}
      {...props}
    >
      {children}
    </h6>
  );
};

export default SubTitle;
