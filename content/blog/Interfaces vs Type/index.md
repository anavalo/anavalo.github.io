# The Underappreciated Power of TypeScript Interfaces: Going Beyond Interface vs Type

## Introduction

In the TypeScript community, there's often a focus on comparing "interfaces" and "types," dissecting their differences, and weighing which is better for different scenarios. While that discussion is invaluable, it tends to overshadow another powerful aspect of TypeScript interfaces—its role in Object-Oriented Programming (OOP).

In TypeScript, an interface can do more than just define the shape of an object; it can serve as a robust contract that classes must adhere to. This article aims to shed some light on this underappreciated feature, demonstrating its practical applications and benefits.

## What's Usually Discussed: Interface vs Type

Before diving into the OOP aspect, let's briefly discuss what usually garners attention. Developers often compare "interface" and "type" to decide which is best for their needs:

- **Interface** can be extended and implemented by classes.
- **Type** is more flexible and can represent primitive types, union types, etc.

The decision usually boils down to specific use-cases. But by focusing solely on this dichotomy, we miss out on the OOP benefits of using interfaces in TypeScript.

## The OOP Benefit: Implementing Interfaces in Classes

When working with classes in TypeScript, you can use interfaces to ensure that a class adheres to a particular contract. This approach offers several benefits:

- **Compile-Time Checking**: TypeScript checks your classes at compile-time to ensure they adhere to the contract, catching issues early on.
- **Code Modularity**: Interfaces encourage clean, modular code that's easier to reason about.
- **Readability**: Using a well-named interface makes your code more self-explanatory, enhancing readability.

## Code Example

```typescript
interface Runnable {
  run(distance: number): string;
}

class Human implements Runnable {
  run(distance: number): string {
    return `Ran ${distance} meters`;
  }
}

class Car implements Runnable {
  run(distance: number): string {
    return `Drove ${distance} meters`;
  }
}

const executeRun = (runnable: Runnable, distance: number) => {
  console.log(runnable.run(distance));
};

executeRun(new Human(), 1000);
executeRun(new Car(), 2000);
```

## Advanced Use Cases: Design Patterns

The practical applications of interfaces don't stop here. If you're familiar with design patterns like Strategy, Adapter, or Composite, you'll find that TypeScript interfaces are extremely useful for implementing these patterns effectively.

## Conclusion

Interfaces in TypeScript offer more than just a way to define the shape of data. They serve as robust contracts that your classes can adhere to, bringing the benefits of strong typing to your OOP endeavors in TypeScript. By looking beyond the "interface vs type" debate, you can leverage the full potential of TypeScript interfaces to write clean, modular, and robust code.
