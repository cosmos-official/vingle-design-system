interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3';
}

const Heading = ({
  children,
  as: Component = 'h1',
  ...props
}: HeadingProps) => {
  return (
    <Component
      css={(theme) => {
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
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;
