
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SurveyForm from "@/components/surveys/SurveyForm";
import AnimatedTransition from "@/components/common/AnimatedTransition";

const Surveys = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <AnimatedTransition animation="fade-in">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Create Survey</h1>
            <p className="text-muted-foreground">Design your custom survey to display on the cart page</p>
          </div>
          
          <SurveyForm />
        </AnimatedTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Surveys;
