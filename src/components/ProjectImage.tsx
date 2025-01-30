"use client";
import { CSSProperties } from "react";

interface ProjectImageProps {
  type: "ecommerce" | "healthcare" | "realestate";
  className?: string;
}

const gradients = {
  ecommerce: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
  healthcare: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
  realestate: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
};

const icons: Record<string, string> = {
  ecommerce: "🛍️",
  healthcare: "🏥",
  realestate: "🏠",
};

const ProjectImage = ({ type, className = "" }: ProjectImageProps) => {
  const style: CSSProperties = {
    background: gradients[type],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
  };

  return (
    <div className={`w-full h-full ${className}`} style={style}>
      <span role="img" aria-label={type}>
        {icons[type]}
      </span>
    </div>
  );
};

export default ProjectImage;
