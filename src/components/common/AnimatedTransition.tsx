
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimationVariant = 
  | "fade-in" 
  | "scale-in" 
  | "slide-up" 
  | "slide-down";

interface AnimatedTransitionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationVariant;
  delay?: number;
}

export const AnimatedTransition = ({
  children,
  className,
  animation = "fade-in",
  delay = 0,
}: AnimatedTransitionProps) => {
  const style = delay ? { animationDelay: `${delay}ms` } : {};

  return (
    <div 
      className={cn(`animate-${animation}`, className)} 
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimatedTransition;
