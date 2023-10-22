# Conditional React props with TypeScript Function Overloading

[//]: # 'Keywords: TypeScript, React, function overloading, optional props'
[//]: # 'Description: TypeScript function overloading is a way to specify which props are meant to be used together, making your components foolproof.'

Optional props in TypeScript interfaces give you some freedom when crafting components. However, this freedom can also create confusion and weaken the integrity of your components. TypeScript function overloading is a way to specify which props are meant to be used together, making your components foolproof.

## The Problem with Optional Props

Optional props offer customization but can lead to unclear combinations of props, creating room for mistakes. For instance:

```typescript
// Using the Button component with optional props
<Button text="Click Me" handleClickIcon={yourClickHandler} />
```

Here, `handleClickIcon` is specified, but `icon` is not. It's unclear whether this is intentional or a mistake, and TypeScript won't complain either way.

## The `Button` Component

Let's examine a `Button` component that can optionally include an icon. The component should only accept an `icon` prop if a `handleClickIcon` function is also present.

### The Basic Way: Using Optional Props

The props could be defined as follows:

```typescript
type ButtonProps = {
  text: string;
  icon?: JSX.Element;
  handleClickIcon?: () => void;
};
```

This won't enforce that `handleClickIcon` is relevant only when you've got an `icon`.

### Leveling Up: Function Overloading

A better strategy is to use function overloading in TypeScript:

```typescript
type CommonProps = { text: string };
type IconAndClickProps = { icon: JSX.Element; handleClickIcon: () => void };

// function overloading
export function Button(props: CommonProps): JSX.Element;
export function Button(props: CommonProps & IconAndClickProps): JSX.Element;

export function Button(props: CommonProps & IconAndClickProps): JSX.Element {
  // ...your button implementation
}
```

Now, you'll get a TypeScript error if you try to use `handleClickIcon` without supplying an `icon`:

```typescript
<Button text="Just Text" />
<Button text="With Icon" icon={<IconComponent />} handleClickIcon={yourClickHandler} />
```

You're basically instructing TypeScript to allow either Set A or Set B of props. No mixing allowed.

## Wrap-up: Stronger, Self-Documenting Components

Function overloading does more than enforce types. It also acts as a form of built-in documentation and makes your components less prone to errors. So, it's a technique you should think about for crafting clear and robust React components.

## Further Reading

- [TypeScript Handbook: Function Overloading](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)

Give function overloading a try!

Feel free to comment and share!
