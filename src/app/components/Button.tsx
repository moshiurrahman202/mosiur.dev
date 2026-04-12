"use client";

import React from "react";
import Link from "next/link"; // Link ইম্পোর্ট করুন

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  className?: string; // অতিরিক্ত স্টাইলের জন্য
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  target,
  className = "",
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    e.currentTarget.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "translate(0,0)";
  };

  const baseStyle = `px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] active:scale-95 inline-block text-center ${className}`;

  // যদি href থাকে
  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal) {
      return (
        <Link
          href={href}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={baseStyle}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={baseStyle}
      >
        {children}
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