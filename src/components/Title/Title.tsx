export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  is?: 't1' | 't2';
}

const Title = ({ children, is = 't1', ...props }: TitleProps) => {
  if (is === 't2') {
    return (
      <h5 css={(theme) => theme.font.title2} {...props}>
        {children}
      </h5>
    );
  }
  return (
    <h4 css={(theme) => theme.font.title1} {...props}>
      {children}
    </h4>
  );
};

export default Title;
