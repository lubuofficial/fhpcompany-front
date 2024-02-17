// // import { useState, useEffect } from 'react';
// // import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: 13.6416,
//   lng: 100.6523
// };

// const position = {
//   lat: 13.6416,
//   lng: 100.6523
// };

// const GoogleMapsComponent = () => {
//   const [redPinIcon, setRedPinIcon] = useState(null);

//   useEffect(() => {
//     // Create the red marker icon
//     const createRedPinIcon = () => {
//       setRedPinIcon({
//         url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
//         scaledSize: new window.google.maps.Size(30, 30), // Adjust the size as needed
//       });
//     };

//     // Check if the Google Maps library is available
//     if (window.google && window.google.maps) {
//       createRedPinIcon();
//     } else {
//       // If not available, listen for the library to load
//       const waitForGoogleMaps = () => {
//         if (window.google && window.google.maps) {
//           createRedPinIcon();
//         } else {
//           setTimeout(waitForGoogleMaps, 200); // Check again after 200ms
//         }
//       };
//       waitForGoogleMaps();
//     }
//   }, []);

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyAKUfS4Oi-6B12e9Gf27tefLZXoc9QMTFk">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={15}
//       >
//         {redPinIcon && <Marker position={position} icon={redPinIcon} />}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default GoogleMapsComponent;





// AIzaSyAKUfS4Oi-6B12e9Gf27tefLZXoc9QMTFk