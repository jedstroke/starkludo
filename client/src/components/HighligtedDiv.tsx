import React, { CSSProperties, ReactNode } from "react";

interface Props {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    hightlighed?: boolean
}

const HighlightedDiv = ({ className, style, children, hightlighed }: Props) => {
    return (
        <div
            className={`${className}  ${hightlighed ? "brightness-[1.2]" : "brightness-[0.7]"} hover:brightness-[1.2] transition-all duration-300`}
            style={{
                ...style,
                // filter: hightlighed ? "brightness(1.2)" : "brightness(0.7)",
                transition: "filter 0.3s ease",
                cursor: 'pointer'
            }}
        >
            {children}
        </div>
    );
};

export default HighlightedDiv;
