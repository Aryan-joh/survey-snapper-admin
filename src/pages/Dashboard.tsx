
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SurveyStats from "@/components/dashboard/SurveyStats";
import ResponseChart from "@/components/dashboard/ResponseChart";
import SurveyList from "@/components/dashboard/SurveyList";
import AnimatedTransition from "@/components/common/AnimatedTransition";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <AnimatedTransition animation="fade-in">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Monitor your survey performance and responses</p>
          </div>
          
          <div className="space-y-6">
            <SurveyStats />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ResponseChart />
              <SurveyList />
            </div>
          </div>
        </AnimatedTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
