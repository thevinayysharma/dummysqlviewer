# Dummy Sql Query Visualizer

__[View live](https://getsqlviewer.netlify.app/)__

- Dummy SQL query visualizer application. Built with React.js Library & deployed on ❤️ Netlify.


## How it works ?

- Flow Diagram => 
![image](https://user-images.githubusercontent.com/68610608/176555891-10cd8b30-8e5a-4cb3-8919-a0b71f9fc0e3.png)

- Please refer to my __[google doc](https://docs.google.com/document/d/1DnfRGAHtvWO6AhkJD_WQToCXuqpsE6lNZUleXXCKgDs/edit?usp=sharing)__ to find out, how I learned & approached step by step to build the required application.

## Optmizations, performance and measurements.

- Reduced bundle size. Didn't use any dependencies. For a full - fledged application, toned down version of tanstack-table and react dropdown would be the right choice.
- Used useMemo hook for caching table data.
- Performance details via [Lighthouse](https://drive.google.com/file/d/1CcfkjZhVv03vHY7LBbigFxTZ8xGvmgb_/view?usp=sharing). Score: 100.
![image](https://user-images.githubusercontent.com/68610608/176541272-3d0e1121-9704-4688-a5ae-c5629194e09f.png)
- Dropdown Multi-table checkouts enabled, by a tweak using synthetic events in React.
- Used same colors to drive UI behavior same across components.

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

- This application was part of an assessment for a data-centric Startup hiring process.You are welcome to provide best practices, code-reviews, guide for better learning.
