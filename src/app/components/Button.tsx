"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  target,
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    e.currentTarget.style.transform = `translate(${x * 0.2}px, ${
      y * 0.2
    }px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translate(0,0)";
  };

const baseStyle =
  "px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] active:scale-95";

  if (href) {
    return (
      <a href={href} target={target}>
        <button
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={baseStyle}
        >
          {children}
        </button>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={baseStyle}
    >
      {children}
    </button>
  );
};

export default Button;