# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Examine this code:

```js
class Shape {
  constructor(type) {
    this.type = type;
  }
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("circle");
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super("square");
    this.side = side;
  }
  getArea() {
    return this.side ** 2;
  }
}

const shapes = [new Circle(5), new Square(4), new Circle(3)];
const totalArea = shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
```

Explain how this code demonstrates **polymorphism**. Why can we call `getArea()` on each shape without checking what type of shape it is?

## Response 1

We can call `getArea()` on each shape because the program executes the method based on its place in the _prototype chain_. This is **polymorphism**, which allows the `getArea()` method to take on many forms depending on the object that calls it. When `new Circle()` is called, the program will use the `getArea()` from the `Circle` class, and when `new Square ()` is called, it uses the `getArea()` from the `Square` class.

## Prompt 2

Look at this code:

```js
class Media {
  constructor(title) {
    this.title = title;
  }
  play() {
    return `Playing media: ${this.title}`;
  }
}

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
  playSong() {
    return `♪ Playing "${this.title}" by ${this.artist}`;
  }
}

class Podcast {
  constructor(title, host) {
    this.title = title;
    this.host = host;
  }
  playPodcast() {
    return `🎙️ Playing podcast "${this.title}" hosted by ${this.host}`;
  }
}

const playlist = [
  new Song("Thriller", "Michael Jackson"),
  new Podcast("CodeNewbie", "Saron Yitbarek"),
  new Media("voice-memo.mp3"),
];

playlist.forEach((item) => {
  if (item instanceof Song) {
    console.log(item.playSong());
  } else if (item instanceof Podcast) {
    console.log(item.playPodcast());
  } else {
    console.log(item.play());
  }
});
```

This code works, but it has some problems. Answer the following:

1. Rewrite the `Song` and `Podcast` classes to use inheritance and polymorphism. What changes would you make?
2. After your changes, rewrite the `playlist.forEach()` loop. How does polymorphism simplify this code?
3. Explain what would happen if you wanted to add a new `Video` class. Compare how much work it would take with the original code versus your improved version.

## Response 2

1. To use **inheritance**, I’d have `Song` and `Podcast` extend the `Media` class so they automatically get the `title` property, and I’d replace `this.title = title` with `super(title)` in their constructors. For **polymorphism**, I’d rename their play methods to `play()`, _letting the same method name work differently depending on which class is calling it_.

2. **Polymorphism** simplifies the loop because instead of checking the `instanceof` each item and calling three different method names, you can call `.play()` on every item and JavaScript will use the method defined in each object's respective class.

3. If I wanted to add a `Video` class, I’d extend `Media` and write my own version of `play()`. In the original code, I’d have to create a new method like `playVideo()` and add another instanceof check in the loop, which makes the code less **predictable and consistent**. With the improved version, the loop stays exactly the same and only the new class needs to be written.

```js
class Media {
  constructor(title) {
    this.title = title;
  }
  play() {
    return `Playing media: ${this.title}`;
  }
}

class Song extends Media {
  constructor(title, artist) {
    super(title);
    this.artist = artist;
  }
  play() {
    return `♪ Playing "${this.title}" by ${this.artist}`;
  }
}

class Podcast extends Media {
  constructor(title, host) {
    super(title);
    this.host = host;
  }
  play() {
    return `🎙️ Playing podcast "${this.title}" hosted by ${this.host}`;
  }
}

class Video extends Media {
  constructor(title, creator) {
    super(title);
    this.creator = creator;
  }
  play() {
    return `Playing video "${this.title}" created by ${this.creator}`;
  }
}

const playlist = [
  new Song("Thriller", "Michael Jackson"),
  new Podcast("CodeNewbie", "Saron Yitbarek"),
  new Media("voice-memo.mp3"),
  new Video("funny.mp4", "Some Funny Person"),
];

playlist.forEach((item) => console.log(item.play()));
```
