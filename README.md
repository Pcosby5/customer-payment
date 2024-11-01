# Customer Payments Web Application

## Project Overview
This is a Customer Payments Web Application developed using **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. The application provides a user-friendly interface for shop vendors to view and manage payment records, integrating with provided APIs to display and manage data effectively.

## Features
- **Payment Data Table**: Displays a responsive table of payment records on page load, showcasing information such as Payment ID, Customer, Amount, and Payment Date.
- **View Payment Details**: A "View" button for each record opens a modal, displaying detailed information about the selected payment.
- **API Integration**: Utilizes API calls to fetch payment data and view specific payment details.
- **Responsive Design**: Optimized for various screen sizes, ensuring a seamless user experience on both desktop and mobile devices.
- **Modern UI**: Styled using Tailwind CSS and enhanced with shadcn/ui for a polished and consistent design.

## Project Setup and Installation
1. **Clone the Repository**: Download or clone the project repository to your local machine.
2. **Install Dependencies**: Run `npm install` to install all required packages, including Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
3. **Configure Tailwind CSS**: Tailwind CSS is pre-configured in the project. The `tailwind.config.js` file specifies paths for Tailwind to scan for class names.
4. **API Integration**: The project includes service functions to interact with the given API endpoints.

## Step-by-Step Approach
1. **Initialize Next.js Project**: The project was created using `create-next-app` with TypeScript support for type-safe development.
2. **Tailwind CSS Setup**: Configured Tailwind CSS to provide utility-first styling, ensuring responsiveness and efficient styling.
3. **Integrate shadcn/ui**: Leveraged shadcn/ui for consistent and reusable UI components, simplifying the creation of features like modals.
4. **TypeScript Interfaces**: Defined TypeScript interfaces to describe the structure of data returned by the API, ensuring robust type checking and preventing runtime errors.
5. **Develop Core Components**:
   - **PaymentTable**: A component that renders a table with payment records, styled using Tailwind CSS.
   - **PaymentModal**: A modal component that displays detailed information for a selected payment when the "View" button is clicked.
6. **API Service Implementation**: Centralized API calls in a dedicated service file to maintain clean and organized code.
7. **Server-Side Rendering (SSR)**: Utilized Next.js's `getServerSideProps` for initial data fetching to improve SEO and performance.
8. **State Management**: Managed state using React hooks (`useState` and `useEffect`) for handling data fetching and modal interactions.
9. **Responsive Design**: Applied Tailwind CSS to ensure the UI is responsive across different devices and screen sizes.
10. **Testing and Optimization**: Performed extensive testing on multiple browsers and devices to ensure consistent and high-quality performance.

## Future Enhancements
- **Sorting and Filtering**: Add features for sorting and filtering payment data to improve usability.
- **Error Handling**: Implement more robust error handling and user notifications for a better user experience.
- **Performance Optimization**: Optimize for handling larger datasets efficiently.

## Getting Started
1. **Run the Development Server**: Use `npm run dev` to start the Next.js development server.
2. **Build for Production**: Use `npm run build` to generate a production-ready build.
3. **Start the Production Server**: Use `npm start` to run the application in production mode.

## Tools and Technologies
- **Next.js**: Framework for building React applications with server-side rendering and static site generation.
- **TypeScript**: Provides static typing, enhancing code quality and maintainability.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **shadcn/ui**: A collection of pre-styled UI components for a seamless design experience.
- **Axios**: Library used for making HTTP requests to the API.

## Project Structure
- **pages**: Contains Next.js pages and server-side logic.
- **components**: Reusable UI components, such as `PaymentTable` and `PaymentModal`.
- **services**: Functions for making API calls and managing data fetching.
- **types**: TypeScript interfaces and type definitions.
- **styles**: Custom and global styles.

## License
This project is open-source and available for educational and development purposes.
