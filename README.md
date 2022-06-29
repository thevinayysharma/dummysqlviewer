# SqlViewer

[view liver project]()

- Dummy SQL query viewer application. Built with React & deployed on Netlify.

[]! //gif fo working project

## How it works ?

- Block Diagram.
- Decision taken while building. Please refer to [google doc](https://docs.google.com/document/d/1DnfRGAHtvWO6AhkJD_WQToCXuqpsE6lNZUleXXCKgDs/edit?usp=sharing).

## Optmizations, performance and measurements.

- Reduced bundle size. Didnt use any dependencies besides, create-react-app. For a full - fledged application, toned down version of node_modules/dev dependencies is the right choice.

- React.useMemo hook can be utilzed to cache the result of table.

- Web Vitals: TTFB, TLB, TCB.

## Installation

```
git clone https://github.com/thevinayysharma/dummysqlviewer
```

Install Dependencies Locally

```
yarn init
yarn add --save -D
```

Run Application

```
yarn run
```

## About this Repository

- This application was part of an assessment for a data-centric Startup hiring process.
