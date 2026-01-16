# ShopStore - Add to Cart Implementation

A modern React application demonstrating e-commerce product listing and cart functionality using React Router, Context API, and Tailwind CSS.

## Features

- **Product Listing**: Fetches products from the Fake Store API.
- **Responsive Design**: Mobile-friendly grid layout and components.
- **Cart Management**:
  - Add items to cart.
  - Remove items from cart.
  - Quantity adjustments (+/-).
  - Persistence (State managed via Context).
- **Price Calculation**:
  - Dynamic subtotal.
  - **10% Discount** applied automatically to the final price.
- **Modern UI/UX**:
  - Glassmorphism effects.
  - Smooth transitions and hover effects.
  - Clean and accessible interface.

## Tech Stack

- **React**: Frontend library.
- **React Router**: Client-side routing.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Context API**: State management for the shopping cart.
- **Vite**: Build tool and development server.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Project Structure

- `src/components`: UI components (Header, ProductCard, CartItem).
- `src/pages`: Page views (Home, Cart).
- `src/context`: Cart state management.
- `src/services`: API calls.

## Deployment

Refer to [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step instructions on how to push to GitHub and deploy to Netlify.
