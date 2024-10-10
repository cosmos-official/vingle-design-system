export interface TextProps
  extends React.HTMLAttributes<
    HTMLParagraphElement | HTMLDivElement | HTMLSpanElement
  > {
  is?: 'b1' | 'b2' | 'b3';
  as?: 'p' | 'div' | 'span';
}

const Text = ({
  children,
  as: Component = 'p',
  is = 'b1',
  ...props
}: TextProps) => {
  return (
    <Component
      css={(theme) => {
        switch (is) {
          case 'b2':
            return theme.font.body2;
          case 'b3':
            return theme.font.body3;
          default:
            return theme.font.body1;
        }
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
