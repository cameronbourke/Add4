## Getting Started

In a [Nand2Tetris](http://nand2tetris.org/) inspired style, you will get to implement a 4-bit adder in software. But, before you can get onto solving the dilemma, you will need to get the tools up and running. If you haven't already on your system, you will need to install [entr](http://entrproject.org/). For MacOS users, you can install using `hombrew`:

```$ brew install entr```

Next, make sure you have `yarn` or `npm` installed, then run:

```$ yarn && yarn start```

For MacOS users, Chrome should automatically open and focus the window outlining the dilemma!

When you are all setup, you should now have yourself a broken 4-bit adder like [this one!](https://cameronbourke.github.io/Add4/site/)

## The Dilemma

It's 1970 and you love mathematics, but haven't quite mastered the art of adding up small numbers. To help your claim as the next Einstein, you devise a plan to make a machine called the adder, in which you will fool and amaze people with your new found ability. But, where to start you ask?

Like any good adder, before being able to add multiple bits, it starts only being able to add two bits. Over in the chips directory, conviently you will find three files that need finishing. Start with `HalfAdder.js`. Once you think you've got it working, run:

```$ yarn run test:HalfAdder```

Then move onto `FullAdder.js` *hint you will need HalfAdder* and finally `Add4.js`. Make sure to test your chip before starting the next.

When you think you are ready to rock and roll, all there is left to do is to watch the adder do that arthimetic it does so damn well. Try picking your two favourite numbers less than 8 and see if it works! Groovy, though 14 + 4 is bit of a problem. Nevermind, 1972 isn't too far away.
