// Basic typing
const MyComponent = <C extends React.ElementType>({
  as,
  children,
}: {
  as?: C;
  children?: React.ReactNode;
}) => {
  const Component = as || "span";

  return <Component>{children}</Component>;
};

export const Exercice2 = () => {
  // as="test" is not valid anymore :)
  return <MyComponent as="h1">Hello world</MyComponent>;
};
