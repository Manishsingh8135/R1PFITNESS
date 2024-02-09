// // components/GlofoxIframe.tsx
// 'use client'
// import React, { useEffect } from 'react';

// const GlofoxIframe: React.FC = () => {
//   useEffect(() => {
//     // Dynamically load the iframe resizer script
//     const script = document.createElement('script');
//     script.src = "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.6.1/iframeResizer.min.js";
//     script.onload = () => {
//       // @ts-ignore
//       window.iFrameResize({
//         log: false,
//         checkOrigin: false,
//         tolerance: 0,
//         sizeHeight: true,
//         heightCalculationMethod: 'lowestElement',
//         minHeight: 300,
//         maxHeight: 1800,
//         sizeWidth: true,
//         widthCalculationMethod: 'bodyOffset',
//         maxWidth: 980,
//         scrolling: 'auto'
//       }, '#glofox_613baa9ab3d3686b1502dd03');
//     };
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div id="hero-form">
//       <div id="iframecontainer">
//         <link rel="stylesheet" type="text/css" href="https://lead-capture-stylesheet.s3-eu-west-1.amazonaws.com/leadcapstyles.css" />
//         <iframe
//           className="glofox_iframe" id="glofox_613baa9ab3d3686b1502dd03"
//           src="https://app.glofox.com/portal/#/branch/613baa9ab3d3686b1502dd03/lead-register/membership/620b12ebf1e714021e15a737/plan/1644892869549"
//           width="0" height="0" scrolling="yes" frameBorder="0">
//         </iframe>
//       </div>
//       <p id="poweredbyGlofox" className="text-sm mt-4">powered by <a href="https://www.glofox.com" className="font-bold">Glofox</a></p>
//     </div>
//   );
// };

// export default GlofoxIframe;
