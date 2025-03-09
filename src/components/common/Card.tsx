
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
}

export const Card = ({ children, className, glass = false }: CardProps) => {
  return (
    <div 
      className={cn(
        "rounded-xl border shadow-sm overflow-hidden transition-all",
        glass ? "glass-morphism" : "bg-card",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string 
}) => {
  return (
    <div 
      className={cn("p-6 flex flex-col space-y-1.5", className)}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string 
}) => {
  return (
    <h3 
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string 
}) => {
  return (
    <p 
      className={cn("text-sm text-muted-foreground", className)}
    >
      {children}
    </p>
  );
};

export const CardContent = ({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string 
}) => {
  return (
    <div className={cn("p-6 pt-0", className)}>
      {children}
    </div>
  );
};

export const CardFooter = ({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string 
}) => {
  return (
    <div 
      className={cn("flex items-center p-6 pt-0", className)}
    >
      {children}
    </div>
  );
};

export default Card;
