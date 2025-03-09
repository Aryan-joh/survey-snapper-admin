
import React from "react";
import { ArrowRight, BarChart3, LineChart, MessageSquare, Settings } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/common/Card";
import AnimatedTransition from "@/components/common/AnimatedTransition";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Seamless Cart Integration",
    description: "Beautifully embed customizable surveys directly into your Shopify cart page without disrupting the customer experience.",
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    delay: 100,
  },
  {
    title: "Real-time Data Collection",
    description: "Capture customer feedback instantly and store it securely for immediate analysis.",
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    delay: 200,
  },
  {
    title: "Interactive Dashboard",
    description: "Visualize survey results with elegant charts and graphs that make data analysis intuitive.",
    icon: <LineChart className="h-10 w-10 text-primary" />,
    delay: 300,
  },
  {
    title: "Customizable Surveys",
    description: "Create and customize surveys to match your brand and get exactly the data you need.",
    icon: <Settings className="h-10 w-10 text-primary" />,
    delay: 400,
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedTransition animation="slide-down">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Powerful Features
            </h2>
          </AnimatedTransition>
          <AnimatedTransition animation="fade-in" delay={100}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to collect and analyze customer feedback during checkout.
            </p>
          </AnimatedTransition>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <AnimatedTransition key={index} animation="scale-in" delay={feature.delay}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedTransition>
          ))}
        </div>

        <div className="mt-16 text-center">
          <AnimatedTransition animation="slide-up">
            <Button rightIcon={<ArrowRight size={16} />} asChild>
              <Link to="/dashboard">
                Explore the Dashboard
              </Link>
            </Button>
          </AnimatedTransition>
        </div>
      </div>
    </section>
  );
};

export default Features;
