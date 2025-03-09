
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { Edit, Eye, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

interface Survey {
  id: string;
  title: string;
  status: "active" | "draft" | "archived";
  responses: number;
  lastUpdated: string;
}

const mockSurveys: Survey[] = [
  {
    id: "1",
    title: "Post-Purchase Satisfaction",
    status: "active",
    responses: 1245,
    lastUpdated: "2 days ago"
  },
  {
    id: "2",
    title: "Product Feedback",
    status: "active",
    responses: 856,
    lastUpdated: "5 days ago"
  },
  {
    id: "3",
    title: "Customer Demographics",
    status: "draft",
    responses: 0,
    lastUpdated: "1 week ago"
  },
  {
    id: "4",
    title: "Shopping Experience",
    status: "archived",
    responses: 755,
    lastUpdated: "2 weeks ago"
  }
];

const SurveyList = () => {
  const getStatusColor = (status: Survey["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Recent Surveys</CardTitle>
          <Button size="sm" variant="outline" asChild>
            <Link to="/surveys">View All</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left pb-3 pl-4 text-sm font-medium text-muted-foreground">Title</th>
                <th className="text-left pb-3 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left pb-3 text-sm font-medium text-muted-foreground">Responses</th>
                <th className="text-left pb-3 text-sm font-medium text-muted-foreground">Updated</th>
                <th className="text-right pb-3 pr-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockSurveys.map((survey) => (
                <tr key={survey.id} className="border-b last:border-b-0 hover:bg-muted/50 transition-colors">
                  <td className="py-4 pl-4 text-sm">{survey.title}</td>
                  <td className="py-4 text-sm">
                    <span className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(survey.status)}`}>
                      {survey.status.charAt(0).toUpperCase() + survey.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 text-sm">{survey.responses.toLocaleString()}</td>
                  <td className="py-4 text-sm text-muted-foreground">{survey.lastUpdated}</td>
                  <td className="py-4 pr-4 text-sm text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default SurveyList;
