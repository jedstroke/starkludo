import React from "react";

interface ButtonProps {
    label: string;
    wFull?: boolean;
    active?: boolean;
    variant: "primary" | "rounded" | "secondary";
    icon?: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, wFull = false, variant, icon, onClick, active = false }) => {
    const baseStyles =
        `${wFull ? "w-full":"auto"} flex items-center justify-center font-bold text-center transition duration-300 ease-in-out focus:outline-none`;
    const variants = {
        primary:
            `${wFull ? "w-full" : "w-auto"} bg-brown-600 text-beige-100 px-6 py-3 rounded-lg border-[2px] border-brown-700 hover:bg-brown-700`,
        rounded:
            `${wFull ? "w-full" : "w-auto"} bg-brown-600 text-beige-100 px-5 py-2 rounded-full border-[2px] border-brown-700 hover:bg-brown-700`,
        secondary:
            `${wFull ? "w-full" : "w-auto"} ${active ? "bg-[#F0E7D7]" : "bg-beige-300"} text-brown-700 px-5 py-3 rounded-lg border-[2px] border-brown-400 shadow`,
    };

    return (
        <button
            className={`${baseStyles} shadow-game ${variants[variant]}`}
            onClick={onClick}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {label}
        </button>
    );
};

export default Button;
