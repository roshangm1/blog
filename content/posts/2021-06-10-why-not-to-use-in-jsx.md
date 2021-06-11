---
template: post
title: Why not to use `&&` in JSX ?
slug: why-not-use-&&-jsx
draft: false
date: 2021-06-10T20:20:29.004Z
description: Using `&&` instead of good old ternary operator in JSX is not
  actually a very clever idea. It might result in unexpected behavior in your
  application and even a crash if it's react native. This will be short and
  sweet blog talking about it with some examples.
category: blog
tags:
  - javascript
  - jsx
  - ternary operators
  - react-native
  - tips
---




![Mardi Himal Base Camp](/media/sanjay-hona-2q2dpvpy6xu-unsplash.jpeg =x350)

It's generally a good practice to write fewer lines of code for a feature in a project and this is somehow part of the clean code momentum. Because of this, we tend to use shorthand operators like `&&`, `||` for checking certain conditions in javascript. For example

HelloWorld.jsx

```javascript
const HelloWorld = ({ name }) => {
  return name && <Text>Hello World ${name}</Text>;
};
```

Main.jsx

```javascript
const name = "roshan";

return <HelloWorld name={name} />;
```

It looks like a perfect block of code, doesn't it ? It actually is. It takes less lines of code and looks clean but what happens if something goes wrong and `name` prop that we are sending to `HelloWorld` component is empty (`""`) ?\
\
Before answering the question, let me just mention a very basic idea on how comparison works in javascript.

```javascript
"" && true; // ""
true && ""; // ""
false && true; // false
```

As you can see here, `&&` is a boolean operator which returns the value of a falsy one when both operands aren't truthy.\
\
Let's revisit the above code with slight modification i.e `name` is now empty instead of proper value.

```javascript
const HelloWorld = ({ name }) => {
  return name && <Text>Hello World ${name}</Text>;
};

const name = "";

return <HelloWorld name={name} />;
```

Now, return part of the `HelloWorld` component will now look like:

```javascript
return "" && <Text>Hello World ${name}</Text>;
```

and according the basic comparison principle that I mentioned above, the output would be the falsy part of the comparison which is `""`. This is not what we wanted to return, right ? `""` is not even a valid component.\

In react native, this will actually result in hard crash which looks like this: \
\
![](https://i.stack.imgur.com/KXWS9.jpg)\
\
***Solution?***\
\
Personally, I almost always try to avoid using `&&` operator while comparing things in JSX. I prefer using ternary operators `? :` instead. Unlike `&&` operator, ternary operators do not increase the cognitive complexity of the code as the only purpose of ternary operators is to compare two values. I find it more readable and concise. \
\
But if you insist in using `&&` , then I would recommend you to wrap the variable (`name` in this case) with `Boolean` or use double negation `!!` to cast it to boolean value.

```javascript
Boolean(name) && <Text>Hello World \${name}</Text>;
```

OR

```javascript
!!name && <Text>Hello World \${name}</Text>;
```

I hope you find this article helpful. See you in the next one. \
Keep learning!