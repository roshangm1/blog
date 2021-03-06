---
template: post
title: Why not to use `&&` in JSX ?
slug: why-not-use-&&-jsx
draft: false
date: 2021-06-10T20:20:29.004Z
description: Using `&&` instead of good old ternary operator in JSX is not
  actually a very clever idea. It might result in unexpected behavior in your
  application and even a crash if it's react native.
category: blog
tags:
  - javascript
  - jsx
  - ternary operators
  - react-native
  - tips
socialImage: https://images.unsplash.com/photo-1571401835393-8c5f35328320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3667&q=80
---

<img src="https://images.unsplash.com/photo-1571401835393-8c5f35328320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3667&q=80" width="100%"  height="400px" style="object-fit: contain" alt="Mardi Himal" />

<center>Mardi Basecamp by <a href="https://unsplash.com/photos/2Q2dpVPY6XU">Sanjay Hona</a></center>

It's generally a good practice to write fewer lines of code for a feature in a project and this is somehow part of the clean code momentum. Because of this, we tend to use shorthand operators like `&&`, `||` for checking certain conditions in javascript. For example

HelloWorld.jsx

```javascript
const HelloWorld = ({ name }) => {
  return name && <Text>Hello World ${name}</Text>;
};
```

Main.jsx

```javascript
const name = 'roshan';

return <HelloWorld name={name} />;
```

It looks like a perfect block of code, doesn't it ? It actually is. It takes less lines of code and looks clean but what happens if something goes wrong and `name` prop that we are sending to `HelloWorld` component is empty (`""`) ?\
\
Before answering the question, let me just mention a very basic idea on how comparison works in javascript.

```javascript
'' && true; // ""
true && ''; // ""
false && true; // false
```

As you can see here, `&&` is a boolean operator which returns the value of a falsy one when both operands aren't truthy.\
\
Let's revisit the above code with slight modification i.e `name` is now empty instead of proper value.

```javascript
const HelloWorld = ({ name }) => {
  return name && <Text>Hello World ${name}</Text>;
};

const name = '';

return <HelloWorld name={name} />;
```

Now, return part of the `HelloWorld` component will now look like:

```javascript
return '' && <Text>Hello World ${name}</Text>;
```

and according the basic comparison principle that I mentioned above, the output would be the falsy part of the comparison which is `""`. This is not what we wanted to return, right ? `""` is not even a valid component.\

In react native, this will actually result in hard crash which looks like this: \
\
![](https://i.stack.imgur.com/KXWS9.jpg)\
\
**_Solution?_**\
\
Personally, I almost always try to avoid using `&&` operator while comparing things in JSX. I prefer using ternary operators `? :` instead. Unlike `&&` operator, ternary operators do not increase the cognitive complexity of the code as the only purpose of ternary operators is to compare two values. I find it more readable and concise. Having said that, if the number of lines for the increases, I prefer to extract the jsx into a function and use `if` statements.\
\
But if you insist in using `&&` , then I would recommend you to wrap the variable (`name` in this case) with `Boolean` or use double negation `!!` to cast it to boolean value.

```javascript
Boolean(name) && <Text>Hello World \${name}</Text>;
```

OR

```javascript
!!name && <Text>Hello World \${name}</Text>;
```

To try:
https://snack.expo.io/@roshangm1/dfc23e

I hope you find this article helpful. See you in the next one. \
Keep learning!
