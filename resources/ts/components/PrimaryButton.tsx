import React, { ButtonHTMLAttributes } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    className = '',
    disabled,
    children,
    ...props
}) => {
    return (
        <button
            {...props}
            className={`inline-flex items-center px-4 text-sm py-2 bg-customPurple border border-transparent rounded-3xl text-white uppercase tracking-widest hover:bg-customPurpleHover focus:bg-customPurpleHover active:bg-customPurpleActive focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                disabled ? "opacity-25" : ""
            } ` + className}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;