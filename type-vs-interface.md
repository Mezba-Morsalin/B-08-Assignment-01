# Type Aliases vs Interfaces in TypeScript

## Introduction

TypeScript uses both `type` alias and `interface` Declarations to describe data shapes. They may look similar when Defining objects, but they have Different Features. Knowing the Differences helps you choose the right tool and keep your code easy to maintain.

## 1. Using an Interface

An `interface` is commonly used to describe the structure of an object. It can be extended by another interface with the `extends` keyword.

```typescript
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  permissions: string[];
}
```

Here, `Admin` receives the `name` and `age` properties from `User` and adds its own `permissions` property.

Interfaces also support **declaration merging**. If you declare the same interface name more than once, TypeScript combines its members.

## 2. Using a Type Alias

A `type` alias can Describe an object, but it can also define unions, intersections, primitive types, tuples, and function types.

```Typescript
type Status = "pending" | "success" | "failed";

type UserInfo = {
  name: string;
  age: number;
};

type AdminInfo = UserInfo & {
  permissions: string[];
};
```

Unlike interfaces, type alias cannot be re-opened through declaration merging.

## 3. When Should You Choose Each?

Choose an `interface` when defining object contracts that may be extended or merged, especially in public APIs. Choose a `type` when working with unions, tuples, primitives, or complex type combinations. For simple object shapes, either option works well.

## Conclusion

Both tools are useful and support many similar by pattern. The best choice depends on the features you need and the conventions used in your project. Consistency is more Important than choose everywhere.
