# Random Password Generator

This is a React-based password generator with configurable options for length, inclusion of numbers, and special characters. It allows users to quickly generate secure passwords and copy them to the clipboard with a simple click. Built with modern React hooks like `useState`, `useEffect`, `useRef`, and `useCallback`, this app delivers a smooth and responsive user experience.

> **Learning Opportunity**: This project is an excellent way to get hands-on experience with essential React hooks. By building this app, you'll gain a clear understanding of how and when to use `useState`, `useEffect`, `useRef`, and `useCallback` to create functional, interactive applications.

## Features

- **Configurable Password Length**: Set a password length between 6 and 30 characters.
- **Number and Special Character Inclusion**: Toggle options to include numbers and/or special characters in the password.
- **Instant Copy to Clipboard**: Easily copy the generated password to the clipboard with a visual confirmation tooltip.
- **Responsive Design**: Adapted for a seamless experience across all device sizes.

## React Hooks Utilized

This project serves as a comprehensive practice exercise for learning the core React hooks:

- **useState**: For managing the state of password length, inclusion options, and generated password.
- **useEffect**: Automatically regenerates the password whenever an option is modified.
- **useRef**: Handles input references for toggling options by clicking the associated labels.
- **useCallback**: Memoizes functions for password generation and clipboard copying, improving app performance.

By working through this project, you'll deepen your understanding of how these hooks work and how to integrate them effectively in a real-world application.

## How It Works

1. **Password Generation**: Based on selected options, a random password is generated using a character pool. If numbers and/or special characters are enabled, they’re added to the pool.
2. **Copy to Clipboard**: Clicking the **Copy** button copies the password to the clipboard, displaying a "Copied to clipboard" tooltip for confirmation.
3. **Responsive UI**: Styled using Tailwind CSS to ensure a consistent experience across various screen sizes.

## Technologies Used

- **React**: A powerful JavaScript library for building user interfaces.
- **React Hooks**: Efficiently manage and optimize state and behavior.
- **Tailwind CSS**: A utility-first CSS framework for fast and customizable styling.

## Code Structure

The main functional components are structured as follows:

- **Password Generation Logic**: A `passwordGenerator` function handles the creation of random passwords based on selected options.
- **Clipboard Copy**: A `copyPasswordToClipboard` function copies the password to the clipboard and triggers a temporary tooltip display.
- **Responsive and Interactive UI**: Utilizes Tailwind CSS for styling, with responsive elements and intuitive interactions.

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/FaizwebWorks/password-generator.git

   ```

2. **Navigate to the project directory**:

   ```bash
   cd password-generator

   ```

3. **Install dependencies**:

   ```bash
    npm install

   ```

4. **Start the development server**:

   ```bash
    npm run dev

   ```

5. **Open http://localhost:3000 in your browser to use the app.**

## Example code snippet

```bash
  const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "!@#$%^&*-_";

  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }
  setPassword(pass);

}, [length, numberAllowed, charAllowed]);

```


## License

This project is licensed under the MIT License.

## Acknowledgments

Special thanks to the React community and the creators of Tailwind CSS for their helpful resources and tools.
