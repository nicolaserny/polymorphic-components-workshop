// Create reusable types
type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = object,
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type MyComponentProps = {
  color?: "red" | "blue";
};

const MyComponent = <C extends React.ElementType = "span">({
  as,
  children,
  ...props
}: PolymorphicComponentProp<C, MyComponentProps>) => {
  const Component = as || "span";

  return <Component {...props}>{children}</Component>;
};

export const Exercice5 = () => {
  return (
    <MyComponent as="a" color="blue" href="https://www.google.com">
      Hello world
    </MyComponent>
  );
};
