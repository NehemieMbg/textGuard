# Introduction

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

```linux
npm i @6nehemie/textguard
```

or

```linux
yarn add @6nehemie/textguard
```

## Usage

**TypeScript**

```typescript
import { isValidEmail } from '@6nehemie/textguard';

const email = 'example@example.com';
const validEmail = isValidEmail(email); // returns true
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### License

MIT
