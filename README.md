# Cart App Frontend# React + TypeScript + Vite



A modern, React-based shopping cart application built with TypeScript, Vite, and Adobe React Spectrum. This frontend provides a smooth user experience for browsing treats, managing cart items, and calculating order totals with date-based pricing considerations.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## OverviewCurrently, two official plugins are available:



**Cart App Frontend** is a feature-rich e-commerce interface designed to showcase treats with individual and bulk pricing options. Users can add products to their cart, adjust quantities, apply date filters, and calculate totals through API integration with a backend service.- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Features

## React Compiler

- **Product Catalog**: Browse available treats with images, names, prices, and bulk pricing options

- **Shopping Cart Management**: Add, update quantities, and remove items from cartThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- **Responsive UI**: Clean, modern interface powered by Adobe React Spectrum design system

- **Date Selection**: Choose dates for order fulfillment with date picker## Expanding the ESLint configuration

- **Total Calculation**: Backend-integrated total computation considering date and quantity

- **Loading States**: User-friendly loading indicators during API callsIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- **Error Handling**: Graceful error messages for failed API requests

- **Type Safe**: Built entirely in TypeScript for reliability and maintainability```js

export default defineConfig([

## 🛠️ Tech Stack  globalIgnores(['dist']),

  {

- **React 19**: Latest React with hooks-based architecture    files: ['**/*.{ts,tsx}'],

- **TypeScript 5.9**: Strongly-typed JavaScript for safer code    extends: [

- **Vite 7**: Lightning-fast build tool and dev server      // Other configs...

- **Adobe React Spectrum**: Enterprise UI component library with accessibility focus

- **Axios**: HTTP client for API communication      // Remove tseslint.configs.recommended and replace with this

- **Internationalized Date**: Robust date handling library      tseslint.configs.recommendedTypeChecked,

      // Alternatively, use this for stricter rules

## 📁 Project Structure      tseslint.configs.strictTypeChecked,

      // Optionally, add this for stylistic rules

```      tseslint.configs.stylisticTypeChecked,

src/

├── components/              # Reusable React components      // Other configs...

│   ├── ProductsList/        # Display treats in grid layout    ],

│   ├── Cart/                # Shopping cart with item management    languageOptions: {

│   └── AddToCartControl/    # Quantity selector and add button      parserOptions: {

├── App.tsx                  # Main app component with state management        project: ['./tsconfig.node.json', './tsconfig.app.json'],

├── cartApiHooks.ts          # Custom React hooks for API integration        tsconfigRootDir: import.meta.dirname,

├── main.tsx                 # React entry point      },

├── treats.json              # Sample treat data      // other options...

└── App.css, index.css       # Global and component styling    },

```  },

])

## Getting Started```



### PrerequisitesYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:



- Node.js 16+ and npm/yarn```js

- Backend API running at `http://localhost:8080` (or configure `VITE_API_HOST`)// eslint.config.js

import reactX from 'eslint-plugin-react-x'

### Installationimport reactDom from 'eslint-plugin-react-dom'



1. Clone the repository:export default defineConfig([

```bash  globalIgnores(['dist']),

git clone https://github.com/NakkaMohan/cart-app-frontend.git  {

cd cart-app-frontend    files: ['**/*.{ts,tsx}'],

```    extends: [

      // Other configs...

2. Install dependencies:      // Enable lint rules for React

```bash      reactX.configs['recommended-typescript'],

npm install      // Enable lint rules for React DOM

```      reactDom.configs.recommended,

    ],

3. Configure environment (optional):    languageOptions: {

Create a `.env` file in the root directory:      parserOptions: {

```        project: ['./tsconfig.node.json', './tsconfig.app.json'],

VITE_API_HOST=http://localhost:8080        tsconfigRootDir: import.meta.dirname,

```      },

      // other options...

### Development    },

  },

Start the development server with hot module replacement:])

```bash```

npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Build

Create an optimized production build:
```bash
npm run build
```

The compiled assets will be in the `dist/` directory.

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality and TypeScript compilation:
```bash
npm run lint
```

## API Integration

The app communicates with a backend service through two main endpoints:

### Get Products
- **Endpoint**: `GET /cart/products`
- **Response**: Array of treat objects with `id`, `name`, `price`, `imageURL`, and optional `bulkPricing`

### Compute Total
- **Endpoint**: `POST /cart/total`
- **Request Body**:
```json
{
  "items": [
    { "id": 1, "qty": 2 },
    { "id": 3, "qty": 1 }
  ],
  "date": "2024-01-12"
}
```
- **Response**: `{ "total": 25.50 }`

### Configuration

Set the API host via `VITE_API_HOST` environment variable or default to `http://localhost:8080`.

## 🧩 Component Details

### ProductsList Component
Displays all available treats in a responsive grid. Features include:
- Product images with fixed dimensions
- Price display with optional bulk pricing info
- Individual "Add to Cart" controls per item

### Cart Component
Shopping cart view with:
- Cart item list with images and names
- Quantity adjustment for each item
- Remove item functionality
- Date picker for order fulfillment
- Total calculation button
- Loading and error states for API responses

### AddToCartControl Component
Compact quantity selector component:
- Number field for quantity input
- "Add to Cart" button
- Automatic quantity reset after adding

## 📊 Custom Hooks

### useProducts()
Fetches treat data on component mount. Returns:
- `treats`: Array of product objects
- `loading`: Boolean indicating fetch status
- `error`: Error message if fetch fails

### useComputeTotal()
Computes order total based on cart items and date. Returns:
- `computeTotal(cart, date)`: Function to trigger calculation
- `loading`: Boolean indicating computation status
- `error`: Error message if computation fails
- `total`: Calculated total price

## Styling

The application uses:
- **Adobe React Spectrum**: Component-level styling via props
- **CSS Files**: Global and component-specific CSS files
- **Responsive Design**: Mobile-first approach with breakpoints for different screen sizes

## Dependencies

Core dependencies:
- `react`: ^19.2.0
- `react-dom`: ^19.2.0
- `@adobe/react-spectrum`: ^3.46.0
- `axios`: ^1.13.2
- `typescript`: ~5.9.3

Dev dependencies include ESLint configurations, Vite plugins, and TypeScript support.


