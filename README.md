## @6nehemie/textguard

### Description

**@6nehemie/textguard** is a javaScript/TypeScript library for datavalidation such as validating the user password.

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
