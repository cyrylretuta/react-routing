# Multi-Page React Application

This project demonstrates a structured multi-page React application with routing, props usage, and lifted state between components.

## Pages / Routes

The application includes the following routes:

- `/` → **Home** – Displays a welcome message.
- `/about` → **About** – Contains brief information about the app or developer.
- `/services` → **Services** – Displays a list of services using reusable components.
- `/contact` → **Contact** – Contains a feedback form and shows a summary of submitted data.

Routing is implemented using `react-router-dom` and navigated using `<Link>` components without full page reloads.

## How Props Were Used

On the **Services** page:

- A list of service items is defined in the parent component.
- Each service is passed as props (`title` and `description`) to a child component named `ServiceCard`.
- The list is rendered using `.map()` to display multiple instances of the `ServiceCard`.
- 
## How State Was Lifted
On the Contact page:

The parent component (ContactPage) holds the form state using useState.

Both the state and its update function are passed down to the ContactForm child component via props.

On form submission, the data is updated and displayed below using the FormSummary component.

This pattern ensures shared state management between child components by "lifting" the state to the common parent.

## Technologies Used
React (Vite or Create React App)

React Router DOM – for routing

JavaScript (ES6+)

HTML + CSS – for styling

## Features
Client-side routing using <BrowserRouter>, <Routes>, <Route>, and <Link>

Component communication via props

Real-time state updates and summaries using useState and state lifting

Reusable components for cleaner structure

## Live Demo

Live Demo:(https://cyrylretuta.github.io/react-routing/).
