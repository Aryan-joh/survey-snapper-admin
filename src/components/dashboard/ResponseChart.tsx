
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/common/Button";

const generateDemoData = (days: number) => {
  const data = [];
  const date = new Date();
  date.setDate(date.getDate() - days);
  
  for (let i = 0; i <= days; i++) {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + i);
    
    const value = Math.floor(Math.random() * 30) + 20;
    const completionRate = Math.floor(Math.random() * 30) + 50;
    
    data.push({
      date: currentDate.toLocaleDateString("en-US", { month: 'short', day: 'numeric' }),
      responses: value,
      completionRate: completionRate,
    });
  }
  
  return data;
};

const ResponseChart = () => {
  const [timeRange, setTimeRange] = useState<"7d" | "30d" | "90d">("30d");
  const data = React.useMemo(() => {
    switch (timeRange) {
      case "7d":
        return generateDemoData(7);
      case "30d":
        return generateDemoData(30);
      case "90d":
        return generateDemoData(90);
      default:
        return [];
    }
  }, [timeRange]);

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Response Trends</CardTitle>
          <div className="flex items-center gap-2">
            <Button 
              variant={timeRange === "7d" ? "default" : "outline"} 
              size="sm"
              onClick={() => setTimeRange("7d")}
            >
              7D
            </Button>
            <Button 
              variant={timeRange === "30d" ? "default" : "outline"} 
              size="sm"
              onClick={() => setTimeRange("30d")}
            >
              30D
            </Button>
            <Button 
              variant={timeRange === "90d" ? "default" : "outline"} 
              size="sm"
              onClick={() => setTimeRange("90d")}
            >
              90D
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }} 
                tickLine={false}
                axisLine={{ stroke: '#f0f0f0' }}
                tickMargin={10}
                minTickGap={5}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                tickMargin={10}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "1px solid #f0f0f0",
                  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)"
                }}
              />
              <Line
                type="monotone"
                dataKey="responses"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="completionRate"
                stroke="#10b981"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResponseChart;
