# Introduction

[![Website](https://img.shields.io/badge/Visit%20Our-Website-blue)](https://nehemie-textguard.vercel.app/docs/validation)

Welcome to the @nehemie/textguard documentation!

### What is @6nehemie/textguard?

**@6nehemie/textguard** is a comprehensive JavaScript/TypeScript library engineered for robust data validation. This library allows you to enhance the integrity of various data inputs in your application, from emails and usernames to custom fields.

With its straightforward set of functions and methods, @6nehemie/textguard employs a range of best practices and algorithms to make sure your validation is both secure and efficient. This enables you to concentrate on building your application, relieving you from the complexities of data validation.

Whether you're an individual developer aiming to improve the security and reliability of your project, or part of a larger team in search of a reliable validation solution, @6nehemie/textguard is designed to meet your requirements.

### Features

- **Data Validation**: Robust validation for email, username, and password fields.
- **Custom Error Messages**: Provides customizable error messages for better user experience.
- **Easy Integration**: Designed to be easily integrated into existing projects.
- **TypeScript Support**: Comes with built-in TypeScript definitions.
- **Efficient**: Lightweight with minimal dependencies, optimized for performance.
- **Security**: Uses best practices to ensure data validation is secure and reliable.

## Installation

System Requirements:
Before installing @6nehemie/textguard, please ensure that your system meets the following requirements:

- Node.js: 16.14 or above. Note that this library uses ES modules, so make sure your Node.js environment supports it.
- TypeScript: Version 5.2.2 or above if you are using TypeScript in your project.

### Quick and Easy Installation Steps

**Using npm:**

To install @nehemie/textgurad via npm, run the following command:

```linux
npm i @6nehemie/textguard
```

**Using yarn:**

To install @nehemie/textgurad via yarn, run the following command:

```linux
yarn add @6nehemie/textguard
```

After installation, you are ready to import @6nehemie/textguard into your project and start laveragin its powerful features.

## Quick Start

**TypeScript**

### Example Usage

Here's a simple example that demonstrates email validation:

```typescript
import { isValidEmail } from '@6nehemie/textguard';

const email = 'example@example.com';
const validEmail = isValidEmail(email); // returns true
```

And that's it! You've successfully validated an email address.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### License

MIT
