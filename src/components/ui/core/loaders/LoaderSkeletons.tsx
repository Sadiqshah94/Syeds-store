import React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonLoaderProps {
  variant?: "circle" | "square" | "rectangle";
  height?: string;
  width?: string;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = "rectangle",
  height = "50px",
  width = "100px",
  className = "",
}) => {
  return (
    <Skeleton
      className={cn(
        "bg-gray-200",
        variant === "circle" && "rounded-full",
        variant === "square" && "rounded-md",
        variant === "rectangle" && "rounded-lg",
        className
      )}
      style={{ height, width }}
    />
  );
};

export default SkeletonLoader;
