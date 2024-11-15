// Support all the component props
type MyComponentProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

const MyComponent = <C extends React.ElementType = "span">({
  as,
  children,
  ...props
}: MyComponentProps<C>) => {
  const Component = as || "span";

  return <Component {...props}>{children}</Component>;
};

export const Exercice3 = () => {
  return (
    <MyComponent as="a" href="https://www.google.com">
      Hello world
    </MyComponent>
  );
};
