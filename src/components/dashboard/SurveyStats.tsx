
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card";
import { ArrowUpRight, BarChart, Users, Clock } from "lucide-react";
import AnimatedTransition from "@/components/common/AnimatedTransition";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    label: string;
  };
  delay?: number;
}

const StatCard = ({ title, value, description, icon, trend, delay = 0 }: StatCardProps) => (
  <AnimatedTransition animation="scale-in" delay={delay}>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        {trend && (
          <div className="flex items-center gap-1 mt-2">
            <span className={`text-xs ${trend.value >= 0 ? 'text-green-500' : 'text-red-500'} flex items-center`}>
              {trend.value >= 0 ? '+' : ''}{trend.value}%
              <ArrowUpRight className="h-3 w-3 ml-0.5" />
            </span>
            <span className="text-xs text-muted-foreground">{trend.label}</span>
          </div>
        )}
      </CardContent>
    </Card>
  </AnimatedTransition>
);

const SurveyStats = () => {
  const stats = [
    {
      title: "Total Responses",
      value: "2,856",
      description: "Survey responses collected",
      icon: <BarChart className="h-4 w-4 text-muted-foreground" />,
      trend: {
        value: 12.5,
        label: "from last month"
      },
      delay: 100
    },
    {
      title: "Completion Rate",
      value: "68%",
      description: "Surveys started vs completed",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
      trend: {
        value: 4.2,
        label: "from last month"
      },
      delay: 200
    },
    {
      title: "Average Time",
      value: "38s",
      description: "To complete survey",
      icon: <Clock className="h-4 w-4 text-muted-foreground" />,
      trend: {
        value: -2.3,
        label: "from last month"
      },
      delay: 300
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default SurveyStats;
