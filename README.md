
![400129-removebg-preview](https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-AHM-Moinuddin-Sami/assets/121725700/00139f5e-4194-4819-a18e-80ef9b0a9e80)
Way of the Dragon Martial Arts based Summer Camp website

Live Site Link: https://way-of-the-dragon.web.app

Some points about website features:
- Have maintained a consistent color scheme of Red and Black on everything from the Logo to the background pictures. The Login and Registration backgrounds are a bit different to invoke a feeling of beginning of something special. The homepage is fully responsive as was required.
- I have implemented payment through Stripe and have kept a payment history in the database which is shown in the Student Dashboard.
- The dashboard option in the navbar is conditionally loaded after checking whether the user is an admin, or an instructor or a student or not logged in at all and showing the appropriate option.
- I have added the Entrance section and the Newsletter subscription section as extra section. I have also added a Loading screen for page reload as an extra section if it counts.
- I have used animations using react animejs in several places in the homepage, such as the spinning logos, the scaling popular items and most importantly the Loading screen.
- I have used tanstack query and axios very regularly, many more times than the 2 required.
- I have used react-hook-form in Registration and Login page, as well as add a class, subscribe to newsletter and other places where forms are used.
- All the dashboards are appropriately private routed and has all the required information and functionality added, with some extra info in the dashboard home page.
- I have added a light and dark mode toggle utilizing daisy UI's inherent modes.
- I have added JWT token implementation and used ENV variables on both client and server side.
- I have added a fully detached 404 not found page that has no navbar or footer and has a gif with a button to return to homepage.

The packages/technologies I have used in my project:

Client side:
- React-helmet-async
- react-hook-form
- JSON Web Token
- Axios
- tanstack query
- animejs
- DaisyUI
- React router dom
- react icons
- Stripe
- React spring
- TailwindCSS
- Firebase
- dotenv

Server Side:
- Stripe
- Vercel
- cors
- mongodb
- jsonwebtoken
- express

and more maybe.
