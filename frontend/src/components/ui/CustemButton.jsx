// import React from "react";
// import styled, { keyframes } from "styled-components";

// // Define keyframes for the shimmer animation
// const shimmer = keyframes`
//    from {
//      background-position: 0 0;
//    }
//    to {
//      background-position: -200% 0;
//    }
//  `;

// // Styled button with shimmer effect
// const ShimmerButton = styled.button`

//   height: 3rem;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 0.375rem;
//   border: 1px solid #2d3748;
//   background: linear-gradient(110deg, #000103 45%, #1e2631 55%, #000103);
//   background-size: 200% 100%;
//   padding: 0 1.5rem;
//   font-weight: 500;
//   color: #cbd5e1;
//   transition: background-color 0.2s;
//   outline: none;
//   position: relative;
//   overflow: hidden;
//   animation: ${shimmer} 2s linear infinite;

//   &:focus {
//     ring: 2px solid #cbd5e1;
//     ring-offset: 2px solid #f8f9fa;
//     ring-offset-color: #f8f9fa;
//   }

// `;

// const CustemButton = ({ name }) => {
//   return <ShimmerButton>{name} </ShimmerButton>;
// };

// export default CustemButton;

import React from "react";
import styled, { keyframes } from "styled-components";

// Define keyframes for the shimmer animation
const shimmer = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -200% 0;
  }
`;

// Styled button with shimmer effect and hover scale
const ShimmerButton = styled.button`
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid #2d3748;
  background: linear-gradient(110deg, #000103 45%, #1e2631 55%, #000103);
  background-size: 200% 100%;
  padding: 0 1.5rem;
  font-weight: 500;
  color: #cbd5e1;
  transition: background-color 0.2s, transform 0.2s; // Added transform transition
  outline: none;
  position: relative;
  overflow: hidden;
  animation: ${shimmer} 2s linear infinite;

  &:focus {
    ring: 2px solid #cbd5e1;
    ring-offset: 2px solid #f8f9fa;
    ring-offset-color: #f8f9fa;
  }

  &:hover {
    transform: scale(1.1); // Scale up the button
  }
`;

const CustemButton = ({ name }) => {
  return <ShimmerButton>{name}</ShimmerButton>;
};

export default CustemButton;
