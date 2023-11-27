# React UI-kit

Minimalistic React components library.

- [Table of Contents](#react-ui-kit)
  - [Installation & Usage](#installation--usage)
  - [Example App](#example-app)
  - [API Reference](#api-reference)

## Installation & Usage

To install the library run the following command:

```shell
$ npm install @anorone/react-ui-kit
```

Usage:

```css
/* import component styles to your main css file */
@import '@anorone/react-ui-kit/dist/style.css';
```
```js
// App.jsx
import { Button, Modal } from '@anorone/react-ui-kit';

```

## Example App

To run the example app that showcases the package components in action you should download the source code first.

```shell
// Clone the repo. Run commands:
$ cd <project folder>
$ npm install
$ npm run start
```

There are a couple more commands available in the `package.json` file that you can run in the development mode.

## API Reference

### Button

```js
<Button color="primary" size="large" rounded onClick={openModal}>
  Open
</Button>
```

#### children
- type: `React.ReactNode`
- required: `true`

#### color:
- type: `'primary' | 'secondary'`

#### size
- type: `'small' | 'medium' | 'large'`

#### disabled
- type: `boolean`

#### rounded
- type: `boolean`

#### onClick
- type: `(e: React.MouseEvent) => void`
- required: `true`

### Modal

```js
<Modal isOpen={isOpen} title="Title">
  <p>Content</p>
  <Button onClick={closeModal}>Close</Button>
</Modal>
```

#### children:
- type: `React.ReactNode`
- required: `true`

#### isOpen
- type: `boolean`

#### title
- type: `string`
