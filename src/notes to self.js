// when a text is for navigation we use this :
// import { Link } from "react-router-dom";
// <Link to='/reserve-a-table'>Reserve a Table</Link>

// when we want to use react router dom on something else like img , button etc we use this :
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

//npm install react-router-dom
//npm install formik yup @chakra-ui/react @emotion/react @emotion/styled
//import { ChakraProvider } from "@chakra-ui/react";

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//<BrowserRouter>
//     <ChakraProvider>
//         <App />
//     </ChakraProvider>
//</BrowserRouter>,
//     document.getElementById("root")
// );

// example of an async function for data fetching
// const FetchFunc = async (data,url) => {
//     try {
//         const response = await fetch(url)
//         const data = await response.json
//     }
//     catch (error) {
//         console.error('error')
//     }
// }
// FetchFunc();