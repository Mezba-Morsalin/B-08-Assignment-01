# Type Narrowing in TypeScript

# 1. What is Type Narrowing?

**Type Narrowing** is the process of taking a broad type or a type with
multiple possibilities and narrowing it down to a more specific type.

For example:

``` ts
let value: string | number;
```

Here, `value` can hold either a `string` or a `number`.

TypeScript does not initially know which type of value `value` contains.
We can use a condition to narrow its type.

``` ts
function checkValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}
```

What happens here?

1.  Initially, the type of `value` is `string | number`.
2.  We check whether `typeof value === "string"`.
3.  If the condition is true, TypeScript understands that `value` is a
    `string`.
4.  Therefore, we can safely use the `toUpperCase()` method.
5.  Inside the `else` block, TypeScript understands that `value` is a
    `number`, so we can use `toFixed()`.

**Type Narrowing:** Narrowing a type such as `string | number` to a
specific type, such as `string` or `number`.

# 2. What is a Type Guard?

A **Type Guard** is a runtime check that helps TypeScript identify the
specific type of a variable and narrow it accordingly.

In simple terms:

-   **Type Narrowing:** The process of making a type more specific.
-   **Type Guard:** The condition or check used to perform Type
    Narrowing.

Remember: TypeScript type annotations do not perform runtime checks by
themselves. Type guards such as `typeof` and `instanceof` use JavaScript
runtime checks.

# 3. Common Type Guards

# A. `typeof`

The `typeof` operator is used to check primitive types.

``` ts
function checkValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}
```

Here:

-   Inside the `if` block, `value` is a `string`.
-   Inside the `else` block, `value` is a `number`.

# B. `in` Operator

The `in` operator checks whether an object contains a specific property.

``` ts
type Dog = {
    bark: () => void;
};

type Cat = {
    meow: () => void;
};

function makeSound(animal: Dog | Cat) {
    if ("bark" in animal) {
        animal.bark();
    } else {
        animal.meow();
    }
}
```

Here:

-   The `Dog` type has a `bark` property.
-   The `Cat` type has a `meow` property.
-   If `"bark" in animal` is true, TypeScript narrows `animal` to `Dog`.
-   Otherwise, it narrows `animal` to `Cat`.

# C. `instanceof`

The `instanceof` operator checks whether an object is an instance of a
particular class or constructor.

``` ts
function checkDate(value: Date | string) {
    if (value instanceof Date) {
        console.log(value.toISOString());
    } else {
        console.log(value.toUpperCase());
    }
}

checkDate(new Date());
checkDate("2026-11-12");
```

Here:

-   If `value` is an instance of `Date`, we can use Date methods.
-   Otherwise, TypeScript knows that `value` is a `string`, so we can
    use String methods.

# D. Discriminated Union

A **Discriminated Union** uses a common property with literal types to
help TypeScript identify which member of a union is currently being
used.

``` ts
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape = Circle | Square;

function calculateArea(shape: Shape) {
    if (shape.kind === "circle") {
        console.log(Math.PI * shape.radius ** 2);
    } else {
        console.log(shape.sideLength ** 2);
    }
}
```

Here:

-   `kind` is the common property.
-   If `kind === "circle"`, TypeScript understands that `shape` is a
    `Circle`.
-   Otherwise, it narrows `shape` to a `Square`.

# 4. Type Guards at a Glance

  -----------------------------------------------------------------------
  Type Guard                          What It Checks
  ----------------------------------- -----------------------------------
  `typeof`                            Primitive types

  `in`                                Whether an object has a specific
                                      property

  `instanceof`                        Whether an object is an instance of
                                      a class or constructor

  Discriminated Union                 A literal type property
  -----------------------------------------------------------------------

# 5. Key Takeaways

When learning Type Narrowing, do not just memorize the definition. Try
to understand how TypeScript narrows a variable's type before and after
each condition.

*Remember:*

-   Type Narrowing means moving from a broad type to a more specific
    type.
-   A Type Guard is a runtime check or condition used to narrow a type.
-   TypeScript allows you to safely use properties and methods based on
    the narrowed type.
