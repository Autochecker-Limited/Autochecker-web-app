//@components/helpers/features/ModelViewerShim.tsx
"use client";
// components/helpers/features/ModelViewerShim.tsx
"use client";
import React from "react";

type ModelViewerProps = JSX.IntrinsicElements["model-viewer"];

const ModelViewerShim: React.FC<ModelViewerProps> = (props) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore  // TS can't infer custom element attributes
    return <model-viewer {...props} />;
};

export default ModelViewerShim;