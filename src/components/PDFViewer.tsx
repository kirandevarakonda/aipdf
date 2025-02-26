// import React from "react";

// type Props = { pdfUrl: string };

// const PDFViewer = ({ pdfUrl }: Props) => {
//     return (
//         // <iframe
//         //     src={`https://docs.google.com/gview?url=${pdfUrl}&embedded=true`}
//         //     className="w-full h-full"
//         // ></iframe>

//         <div className="h-full">
//             <embed
//                 src={pdfUrl}
//                 type="application/pdf"
//                 width="100%"
//                 height="100%"
//                 title="Embedded PDF Viewer"
//             />
//         </div>
//     );
// };

// export default PDFViewer;

// // "use client";
// // import { Viewer, Worker } from "@react-pdf-viewer/core";
// // import "@react-pdf-viewer/core/lib/styles/index.css";
// // import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// // import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// // // type Props = { pdfUrl: string };

// // const PdfViewer = ({ pdfUrl }) => {
// //   const defaultLayoutPluginInstance = defaultLayoutPlugin();
// //   return (
// //     <div className="h-full">
// //       <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
// //         <Viewer
// //           fileUrl={pdfUrl}
// //           plugins={[defaultLayoutPluginInstance]}
// //         />
// //       </Worker>
// //     </div>
// //   );
// // };
// // export default PdfViewer;


//failed to fetch
// import React from "react";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// type Props = { pdfUrl: string };

// const PDFViewer = ({ pdfUrl }: Props) => {
//     const defaultLayoutPluginInstance = defaultLayoutPlugin();

//     return (
//         <div className="h-full flex flex-col bg-gray-100">
//             {/* Custom Top Bar */}
//             <div className="bg-blue-500 text-white p-3 font-bold text-center">
//                 Custom PDF Viewer
//             </div>

//             {/* PDF Viewer */}
//             <div className="flex-1 overflow-auto">
//                 <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
//                     <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
//                 </Worker>
//             </div>
//         </div>
//     );
// };

// export default PDFViewer;


//module nor found error
// 'use client'
// // // Core viewer
// import { Worker, Viewer } from '@react-pdf-viewer/core';

// // Plugins
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// // Import styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// // Create new plugin instance
// // const defaultLayoutPluginInstance = defaultLayoutPlugin();

// import {  GlobalWorkerOptions } from "pdfjs-dist";

// const workerUrl = GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
// // "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

// // const workerUrl = new URL(
// //     'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js',
// //     import.meta.url,
// //     ).toString();


// type Props = { pdfUrl: string };

// const PDFViewer = ({ pdfUrl }: Props) => {
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//     return (
//         <div>
//             {/* Custom Top Bar */}
//             <Worker workerUrl={workerUrl}>
//             <Viewer
//             fileUrl= {pdfUrl}
//             plugins={[
//                 // Register plugins
//                 defaultLayoutPluginInstance,
//             ]}
// />
// </Worker>
//         </div>
//     );
// };

// export default PDFViewer;

//working with default plugins
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// // Import styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// // Manually set the worker URL
// import { GlobalWorkerOptions } from 'pdfjs-dist';

// GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// type Props = { pdfUrl: string };

// const PDFViewer = ({ pdfUrl }: Props) => {
//     const defaultLayoutPluginInstance = defaultLayoutPlugin();

//     return (
//         <div className="h-full w-full">
//             <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
//                 <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]}/>
//             </Worker>
//         </div>
//     );
// };

// export default PDFViewer;

//working with plugins
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
// import '@react-pdf-viewer/scroll-mode/lib/styles/index.css';

// Set PDF worker globally
import { GlobalWorkerOptions } from 'pdfjs-dist';
GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

type Props = { pdfUrl: string };

const PDFViewer = ({ pdfUrl }: Props) => {
    // Initialize plugins
    const toolbarPluginInstance = toolbarPlugin();
    const zoomPluginInstance = zoomPlugin();
    const scrollModePluginInstance = scrollModePlugin();

    return (
        <div className="h-full w-full flex flex-col">
            {/* Toolbar */}
            <div className="p-2 bg-gray-100">
                <toolbarPluginInstance.Toolbar />
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
                <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
                    <Viewer
                        fileUrl={pdfUrl}
                        plugins={[
                            toolbarPluginInstance,
                            zoomPluginInstance,
                            scrollModePluginInstance,
                        ]}
                    />
                </Worker>
            </div>
        </div>
    );
};

export default PDFViewer;
