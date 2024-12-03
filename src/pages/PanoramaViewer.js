// import React, { useEffect, useRef } from "react";
// import { ImagePanorama, Viewer } from "panolens";

// const PanoramaViewer = () => {
//     const containerRef = useRef();

//     useEffect(() => {
//         const panorama = new ImagePanorama("/360.jpeg");
//         const viewer = new Viewer({
//             container: containerRef.current,
//         });
//         viewer.add(panorama);

//         return () => {
//             viewer.dispose();
//         };
//     }, []);

//     return (
//         <div
//             ref={containerRef}
//             style={{
//                 width: "100%",
//                 height: "500px",
//                 border: "1px solid #ddd",
//                 borderRadius: "8px",
//             }}
//         />
//     );
// };

// export default PanoramaViewer;
