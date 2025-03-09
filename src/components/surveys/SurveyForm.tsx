
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { Plus, Trash2, MoveVertical, Check, X } from "lucide-react";

type QuestionType = "text" | "multiple" | "rating" | "dropdown";

interface Question {
  id: string;
  type: QuestionType;
  text: string;
  required: boolean;
  options?: string[];
}

const initialQuestions: Question[] = [
  {
    id: "q1",
    type: "text",
    text: "What brought you to our store today?",
    required: true
  },
  {
    id: "q2",
    type: "multiple",
    text: "How did you hear about us?",
    required: false,
    options: ["Social Media", "Friend/Family", "Search Engine", "Advertisement"]
  },
  {
    id: "q3",
    type: "rating",
    text: "How would you rate your shopping experience?",
    required: true
  }
];

const SurveyForm = () => {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [editingText, setEditingText] = useState<string>("");
  const [surveyTitle, setSurveyTitle] = useState<string>("Post-Purchase Feedback");

  const handleAddQuestion = (type: QuestionType) => {
    const newQuestion: Question = {
      id: `q${Date.now()}`,
      type,
      text: "New Question",
      required: false,
      ...(type === "multiple" || type === "dropdown" ? { options: ["Option 1"] } : {})
    };
    
    setQuestions([...questions, newQuestion]);
    setActiveQuestion(newQuestion.id);
    setEditingText(newQuestion.text);
  };

  const handleDeleteQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
    if (activeQuestion === id) {
      setActiveQuestion(null);
    }
  };

  const handleEditQuestion = (id: string) => {
    setActiveQuestion(id);
    const question = questions.find(q => q.id === id);
    if (question) {
      setEditingText(question.text);
    }
  };

  const handleSaveQuestionText = (id: string) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, text: editingText } : q
    ));
    setActiveQuestion(null);
  };

  const handleToggleRequired = (id: string) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, required: !q.required } : q
    ));
  };

  const handleAddOption = (questionId: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId && q.options 
        ? { ...q, options: [...q.options, `Option ${q.options.length + 1}`] } 
        : q
    ));
  };

  const handleDeleteOption = (questionId: string, optionIndex: number) => {
    setQuestions(questions.map(q => 
      q.id === questionId && q.options 
        ? { ...q, options: q.options.filter((_, i) => i !== optionIndex) } 
        : q
    ));
  };

  const handleEditOption = (questionId: string, optionIndex: number, value: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId && q.options 
        ? { 
            ...q, 
            options: q.options.map((opt, i) => i === optionIndex ? value : opt) 
          } 
        : q
    ));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <input
                type="text"
                value={surveyTitle}
                onChange={(e) => setSurveyTitle(e.target.value)}
                className="w-full text-lg font-semibold bg-transparent border-0 border-b border-transparent hover:border-input focus:border-input focus:outline-none focus:ring-0 p-0"
                placeholder="Survey Title"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {questions.map((question) => (
              <div 
                key={question.id}
                className="border rounded-lg p-4 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MoveVertical className="h-4 w-4 text-muted-foreground cursor-move" />
                    <span className="text-xs font-medium text-muted-foreground uppercase">
                      {question.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0"
                      onClick={() => handleToggleRequired(question.id)}
                    >
                      {question.required ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="sr-only">Required</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                      onClick={() => handleDeleteQuestion(question.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
                
                {activeQuestion === question.id ? (
                  <div className="mb-4">
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      className="w-full p-2 border rounded-md"
                      autoFocus
                    />
                    <div className="flex justify-end mt-2 gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setActiveQuestion(null)}
                      >
                        Cancel
                      </Button>
                      <Button 
                        size="sm"
                        onClick={() => handleSaveQuestionText(question.id)}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                ) : (
                  <h3 
                    className="text-base font-medium mb-4 cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleEditQuestion(question.id)}
                  >
                    {question.text}
                    {question.required && <span className="text-red-500 ml-1">*</span>}
                  </h3>
                )}
                
                {/* Question Type Preview */}
                {question.type === "text" && (
                  <div className="border border-input rounded-md p-2 bg-muted/20">
                    <input
                      type="text"
                      className="w-full bg-transparent border-0 outline-none text-muted-foreground"
                      placeholder="Text answer"
                      disabled
                    />
                  </div>
                )}
                
                {question.type === "multiple" && question.options && (
                  <div className="space-y-2">
                    {question.options.map((option, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input type="radio" disabled className="accent-primary h-4 w-4" />
                        <input
                          type="text"
                          value={option}
                          onChange={(e) => handleEditOption(question.id, index, e.target.value)}
                          className="flex-1 p-1 border border-transparent hover:border-input focus:border-input rounded-md focus:outline-none"
                        />
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-6 w-6 p-0 text-muted-foreground"
                          onClick={() => handleDeleteOption(question.id, index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                      onClick={() => handleAddOption(question.id)}
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Option
                    </Button>
                  </div>
                )}
                
                {question.type === "rating" && (
                  <div className="flex items-center gap-2 justify-center">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <span 
                        key={num}
                        className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-primary/10 cursor-pointer transition-colors"
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                )}
                
                {question.type === "dropdown" && question.options && (
                  <div className="space-y-2">
                    <select className="w-full p-2 border rounded-md bg-background">
                      <option disabled selected>Select an option</option>
                      {question.options.map((option, index) => (
                        <option key={index}>{option}</option>
                      ))}
                    </select>
                    <div className="space-y-2 mt-4">
                      {question.options.map((option, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <input
                            type="text"
                            value={option}
                            onChange={(e) => handleEditOption(question.id, index, e.target.value)}
                            className="flex-1 p-1 border rounded-md"
                          />
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0"
                            onClick={() => handleDeleteOption(question.id, index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-2"
                        onClick={() => handleAddOption(question.id)}
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Add Option
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex justify-center gap-2">
              <Button 
                variant="outline"
                onClick={() => handleAddQuestion("text")}
              >
                <Plus className="h-4 w-4 mr-2" />
                Text
              </Button>
              <Button 
                variant="outline"
                onClick={() => handleAddQuestion("multiple")}
              >
                <Plus className="h-4 w-4 mr-2" />
                Multiple Choice
              </Button>
              <Button 
                variant="outline"
                onClick={() => handleAddQuestion("rating")}
              >
                <Plus className="h-4 w-4 mr-2" />
                Rating
              </Button>
              <Button 
                variant="outline"
                onClick={() => handleAddQuestion("dropdown")}
              >
                <Plus className="h-4 w-4 mr-2" />
                Dropdown
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex justify-end gap-2">
            <Button variant="outline">
              Preview
            </Button>
            <Button>
              Save Survey
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SurveyForm;
