import React, { useRef } from "react";

// Support ref

// Define ref type
type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

// Same types as the version without ref
type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = object,
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// Add ref to the props
type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = object,
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

// Define my component props based on my reusable type
type MyComponentProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, { color?: "red" | "blue" }>;

// Sadly forwardRef does not fully support generics => we need a cast (line 18)
type MyComponentType = <C extends React.ElementType = "span">(
  props: MyComponentProps<C>,
) => React.ReactElement | null;

const MyComponent = React.forwardRef(
  <C extends React.ElementType = "span">(
    props: Omit<MyComponentProps<C>, "ref">,
    ref: PolymorphicRef<C>,
  ) => {
    const { as, children, ...rest } = props;
    const Component: React.ElementType = as || "span";
    return (
      <Component {...rest} ref={ref}>
        {children}
      </Component>
    );
  },
) as MyComponentType;

export const Exercice6 = () => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <MyComponent
      ref={linkRef}
      as="a"
      color="blue"
      href="https://www.google.com"
    >
      Hello world
    </MyComponent>
  );
};
