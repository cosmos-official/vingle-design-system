export interface CaptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  is?: 'c1' | 'c2';
}

const Caption = ({ children, is = 'c1', ...props }: CaptionProps) => {
  return (
    <p
      css={(theme) => {
        switch (is) {
          case 'c2':
            return theme.font.caption2;
          default:
            return theme.font.caption1;
        }
      }}
      {...props}
    >
      {children}
    </p>
  );
};

export default Caption;
