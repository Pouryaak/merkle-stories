# MStories

MStories is a simple website which it utilize the [Hacker News API](https://github.com/HackerNews/API) to fetch and list the stories.

### Tech Stack

This project is using React / TypeScript as the main framework. It's using Eslint/Prettier to maintain a standard pattern throughout the app. It is bundled using Vite and it uses React SCSS Module to do the styling.

## Installation

After cloning the project, you should run;

```bash
npm i
```

and then to run the application you should run:

```bash
npm run dev
```

## Description

The app is implementing data fetching by utilizing a custom hook called useStories. The useStories hook has been developed with performance optimization in mind, and it includes a basic caching strategy that prevents redundant fetching if the data was retrieved within the last minute. While this strategy is functional, there are more efficient and scalable methods of caching data, such as implementing third-party libraries like react-query.

### Color Reference

The color pallete of this app is inspired by the [Merkle](merkle.com) website colors.

| Color           | Hex                                                              |
| --------------- | ---------------------------------------------------------------- |
| Primary Color   | ![#0a192f](https://via.placeholder.com/10/12295d?text=+) #12295d |
| Secondary Color | ![#f8f8f8](https://via.placeholder.com/10/f23a1d?text=+) #f23a1d |

## Author

- [@Pouryaak](https://github.com/Pouryaak)
