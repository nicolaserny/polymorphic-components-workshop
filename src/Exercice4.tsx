// Add other types and avoid conflicts with Component props + Refactoring
type MyComponentProps<C extends React.ElementType> = {
  as?: C;
  color?: "red" | "blue";
};

type Props<C extends React.ElementType> = React.PropsWithChildren<
  MyComponentProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof MyComponentProps<C>>;

const MyComponent = <C extends React.ElementType = "span">({
  as,
  children,
  ...props
}: Props<C>) => {
  const Component = as || "span";

  return <Component {...props}>{children}</Component>;
};

export const Exercice4 = () => {
  return (
    <MyComponent as="a" color="blue" href="https://www.google.com">
      Hello world
    </MyComponent>
  );
};
