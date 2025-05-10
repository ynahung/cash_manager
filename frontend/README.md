# Cash Manager Frontend

This is the frontend component of the Cash Manager application, built with React and TypeScript.

## Setup

### Prerequisites

1. Node.js (v18 or higher)
2. npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ynahung/cash_manager.git
cd cash_manager/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env` file in the root directory with the following variables:
```
REACT_APP_API_URL=http://localhost:8000/api/v1/
REACT_APP_ENV=dev
```

4. Start the development server:
```bash
npm start
```

The app will be available at http://localhost:3000/

## Project Structure

```
frontend/
├── public/             # Static files
├── src/               # Source code
│   ├── components/    # React components
│   ├── pages/        # Page components
│   ├── services/     # API services
│   ├── styles/       # Styles and Tailwind CSS
│   ├── utils/        # Utility functions
│   ├── App.tsx       # Root component
│   └── index.tsx     # Entry point
├── package.json      # Dependencies and scripts
└── tsconfig.json     # TypeScript configuration
```

## Available Scripts

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## API Configuration

The frontend uses a configurable API endpoint system. The configuration is located in `src/config/api.ts` and supports different environments:

```typescript
export const API_CONFIG = {
  dev: 'http://localhost:8000/api/v1/',
  prod: 'https://api.yourdomain.com/api/v1/',
};

export const API_URL = process.env.REACT_APP_ENV === 'prod' 
  ? API_CONFIG.prod 
  : API_CONFIG.dev;
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
