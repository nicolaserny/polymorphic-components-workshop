// No typing => I can type as="test" :(
const MyComponent = ({ as, children }) => {
  const Component = as || "span";

  return <Component>{children}</Component>;
};

export const Exercice1 = () => {
  return <MyComponent as="h1">Hello world</MyComponent>;
};
