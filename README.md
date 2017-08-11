# `testpilot-contribute`

A minisite aggregating open bugs suitable for first-time contributors across
Test Pilot's various projects and repositories.

![Screenshot](docs/screenshot.png)

## Developing the site

To set up:

```
git clone https://github.com/chuckharmston/testpilot-contribute.git
cd testpilot-contribute
yarn install
```

Then to run the development server:

```
npm run start
```

To run the [Storybook](https://storybook.js.org) server simultaneously:

```
npm run storybook
```

To view the current Storybook: [https://chuckharmston.github.io/testpilot-contribute](https://chuckharmston.github.io/testpilot-contribute).

To update the deployed Storybook:

```
npm run deploy-storybook
```
