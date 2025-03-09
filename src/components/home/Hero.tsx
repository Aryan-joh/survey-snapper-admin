
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/common/Button";
import AnimatedTransition from "@/components/common/AnimatedTransition";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-1/3 w-[800px] h-[800px] rounded-full border border-primary/10 -z-10 animate-spin-slow" />
      <div className="absolute top-40 right-1/4 w-[600px] h-[600px] rounded-full border border-primary/10 -z-10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-16 md:py-24">
          <AnimatedTransition animation="slide-down" delay={100}>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
              Introducing SurveySnapper
            </span>
          </AnimatedTransition>
          
          <AnimatedTransition animation="slide-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Capture valuable customer insights at checkout
            </h1>
          </AnimatedTransition>
          
          <AnimatedTransition animation="fade-in" delay={400}>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl text-balance">
              Seamlessly collect feedback from your customers directly in the shopping cart, and gain actionable insights through beautiful analytics.
            </p>
          </AnimatedTransition>
          
          <AnimatedTransition animation="scale-in" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" rightIcon={<ArrowRight size={16} />} asChild>
                <Link to="/dashboard">
                  View Dashboard
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/surveys">
                  Configure Surveys
                </Link>
              </Button>
            </div>
          </AnimatedTransition>
        </div>
      </div>
    </section>
  );
};

export default Hero;
