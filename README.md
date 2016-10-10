# pure-blueprint
Blueprint of a Pure Component
### Install and Usage
```
npm i -S pure-blueprint
```
In React component:
```
import React, { Component } from 'react';
import {Hello} from 'pure-blueprint'

class App extends Component {
  render() {
    return (
      <Hello name="Anna" />
    );
  }
}
```
### Clone and Setup
Clone the repository and install dependencies.
```
git clone https://github.com/schabluk/pure-blueprint.git
cd pure-blueprint
npm install
```
### Running and building
To start in development mode with HRM:
```
npm run start
```
To create bundle.js with index.html in dist/ folder:
```
npm run build
```
To release for publication in NPM:
```
npm run release
npm version patch
npm publish
```
To release minified production bundle:
```
npm run relmini
```
To release and install locally:
```
npm pack
> pure-blueprint-1.0.7.tgz
```
From project directory:
```
npm i /path/to/generated/pure-blueprint-1.0.0.tgz
```
