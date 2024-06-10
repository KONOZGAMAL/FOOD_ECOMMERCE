// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";
// import PropTypes from "prop-types"; // Import PropTypes
// const token = `843a6b53f417b29349b9fe938b38dcbbe30bcc27b6edfc10cccd0a8d56247e85c9195e11e8c8a335c69e6e7d34ddc69bfa936fa3c73a5ef44ce7c59d03993c1eaaf0a9d91a6ee0199bbc230f510ac809a077f1deae409505f13f85b378f17bb59ab45b3fa1ce68005bbbf64a397a6aa46b0cc0d5194fbdfcfc84fc925b23fc7d`;

// export default function Checkout({ products }) {
//   const stripePromise = loadStripe(import.meta.env.REACT_APP_STRIPE_KEY);
//   const handlePayment = async () => {
//     const headerConfig = token
//       ? {
//           headers: {
//             Authorization: `bearer ${token}`,
//           },
//         }
//       : {};
//     try {
//       const stripe = await stripePromise;
//       const session = await axios.post(
//         "http://localhost:1337/api/orders",
//         {
//           orders: products,
//         },
//         headerConfig
//       );
//       await stripe.redirectToCheckout({
//         sessionId: session.data.stripeSession.id,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <div className="check">
//       <button className="checkOut" onClick={() => handlePayment()}>
//         Check out
//       </button>
//     </div>
//   );
// }

// Checkout.propTypes = {
//   products: PropTypes.node.isRequired, // Validate productData prop
// };
