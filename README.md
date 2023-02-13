# WATCHIT UIX
>Watchit ui / ux components library



The design contains 3 layers of abstraction:

1. **Atoms**: Exposes core components that should not have dependencies, those that have dependencies will be with the same internal packages and as far as possible they will be utility packages. For example: Input, Label, Button, Icon, Logo

2. **Molecules**: Exposes components that are mainly made up of Atoms. For example: ChannelItem, Poster
   
3. **Organisms**: Exposes components that are mainly made up of Molecules and Atoms. For example: MobileMenu, MobileHeader

## Install

```bash
$ npm install
```

## Development

#### Test

Use this command to test all components of UI using [testing-library/react](https://testing-library.com/docs/react-testing-library/intro/).

```bash
$ npm run test
```

#### Storybook

Use this command to start the storybook server using [Storybook](https://storybook.js.org/).

```bash
$ npm run storybook
```

## More info

- Visit our site [watchit.movie](http://watchit.movie).
- Read our post in [dev.to](https://dev.to/geolffreym/watchit-2b88).
- Get in touch with us in [gitter](https://gitter.im/watchit-app/community).
- For help or bugs please [create an issue](https://github.com/ZorrillosDev/watchit-toolkit/issues).
