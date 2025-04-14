# React-shop-cloudfront

This is frontend starter project for nodejs-aws mentoring program. It uses the following technologies:

- [Vite](https://vitejs.dev/) as a project bundler
- [React](https://beta.reactjs.org/) as a frontend framework
- [React-router-dom](https://reactrouterdotcom.fly.dev/) as a routing library
- [MUI](https://mui.com/) as a UI framework
- [React-query](https://react-query-v3.tanstack.com/) as a data fetching library
- [Formik](https://formik.org/) as a form library
- [Yup](https://github.com/jquense/yup) as a validation schema
- [Serverless](https://serverless.com/) as a serverless framework
- [Vitest](https://vitest.dev/) as a test runner
- [MSW](https://mswjs.io/) as an API mocking library
- [Eslint](https://eslint.org/) as a code linting tool
- [Prettier](https://prettier.io/) as a code formatting tool
- [TypeScript](https://www.typescriptlang.org/) as a type checking tool

## Available Scripts

### `start`

Starts the project in dev mode with mocked API on local environment.

### `build`

Builds the project for production in `dist` folder.

### `preview`

Starts the project in production mode on local environment.

### `test`, `test:ui`, `test:coverage`

Runs tests in console, in browser or with coverage.

### `lint`, `prettier`

Runs linting and formatting for all files in `src` folder.

### `cdk:synth`

Runs `cdk synth` command to take CDK code and convert it into a CloudFormation template.

### `cdk:bootstrap`
Bootstraps CDK code for AWS deployment.

### `cdk:deploy`
Deploys project to a S3 Bucket with a CloduFront distribution in AWS. This script internally runs `build` script. 

### `cdk:destroy`
Destroys all related AWS resources.

## Link to deployed resources - Assignment 2

### Manual Deployment Version:
Link:
https://d22xly9tdst5zv.cloudfront.net/

### Automated Deployment Version: 
Link:
https://d2zhnbnr2iyna4.cloudfront.net/
