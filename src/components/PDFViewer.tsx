import React from "react";

type Props = { pdfUrl: string };

const PDFViewer = ({ pdfUrl }: Props) => {
    return (
        // <iframe
        //     src={`https://docs.google.com/gview?url=${pdfUrl}&embedded=true`}
        //     className="w-full h-full"
        // ></iframe>

        <div className="h-full">
            <embed
                src={pdfUrl}
                type="application/pdf"
                width="100%"
                height="100%"
                title="Embedded PDF Viewer"
            />
        </div>
    );
};

export default PDFViewer;

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


// // Core viewer
// import { Viewer } from '@react-pdf-viewer/core';

// // Plugins
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// // Import styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// // Create new plugin instance
// const defaultLayoutPluginInstance = defaultLayoutPlugin();


// type Props = { pdfUrl: string };

// const PDFViewer = ({ pdfUrl }: Props) => {

//     return (
//         <div>
//             {/* Custom Top Bar */}
//             <Viewer
//             fileUrl= {pdfUrl}
//             plugins={[
//                 // Register plugins
//                 defaultLayoutPluginInstance,
//             ]}
// />
//         </div>
//     );
// };

// export default PDFViewer;

//pdfjs
// import "react-pdf/dist/Page/TextLayer.css";
// import "react-pdf/dist/Page/AnnotationLayer.css";
// import { useState } from "react";
// import { Document, Page } from "react-pdf";
// import { PdfProps } from "../../types";
// import { pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// type Props = { pdfUrl: string };

// export default function PDFViewer({ pdfUrl }: Props) {
//   const [numPages, setNumPages] = useState<number>();
//   const [pageNumber, setPageNumber] = useState<number>(1);

//   function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
//     setNumPages(numPages);
//   }

//   function nextPage() {
//     setPageNumber((v) => ++v);
//   }

//   function prevPage() {
//     setPageNumber((v) => --v);
//   }

//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <button onClick={prevPage} disabled={pageNumber <= 1}>
//         Previous
//       </button>
//       <button onClick={nextPage} disabled={pageNumber >= (numPages ?? -1)}>
//         Next
//       </button>
//       <Document
//         file={pdfUrl}
//         onLoadSuccess={onDocumentLoadSuccess}
//         className="my-react-pdf"
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }
