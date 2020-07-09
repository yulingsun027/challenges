## Background & Objectives

We covered how to select a DOM element, read information on it and update it (text, CSS, etc.). Now we'll see how we can react to [DOM events](https://developer.mozilla.org/en-US/docs/Web/Events) to create interactive websites.

## Specs

Open the `index.html` file in the browser. You can see we are using Bootstrap. Also, there is a big button in the `<body />`.

Your goal is to implement some JavaScript in the `lib/listener.js` file. **You should react to the click on the blue button.** When clicked, we want:

- The button to be disabled. This can be done by adding the `.disabled` class.
- The button text to change from "Click me!" to "Bingo!"
- Optional: the `sound.mp3` [plays in the Browser](https://stackoverflow.com/questions/9419263/playing-audio-with-javascript)
