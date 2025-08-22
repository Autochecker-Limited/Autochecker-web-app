import React from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "model-viewer": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            > & {
                src?: string;
                alt?: string;

                "camera-controls"?: boolean;
                "auto-rotate"?: boolean;
                ar?: boolean | string;

                "auto-rotate-delay"?: number | string;
                "rotation-per-second"?: string;
                exposure?: number | string;
                "shadow-intensity"?: number | string;

                poster?: string;
                "ar-modes"?: string;
                "environment-image"?: string;
                "interaction-prompt"?: string;
                "disable-zoom"?: boolean;

                style?: React.CSSProperties;

                [key: string]: unknown;
            };
        }

        export class Element {
        }
    }
}

export {}; // <- keeps this file as a module
