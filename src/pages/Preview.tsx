
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import AnimatedTransition from "@/components/common/AnimatedTransition";

const CartPreview = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="border rounded-lg overflow-hidden max-w-lg mx-auto bg-white shadow-md">
      <div className="border-b p-4 bg-gray-50">
        <h3 className="text-lg font-semibold">Shopping Cart</h3>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4 pb-4 border-b">
            <div className="h-16 w-16 rounded bg-gray-100 flex items-center justify-center">
              <span className="text-xs text-gray-500">Product</span>
            </div>
            <div className="flex-1">
              <h4 className="font-medium">Sample Product</h4>
              <p className="text-sm text-muted-foreground">Variant: Large</p>
            </div>
            <div className="text-right">
              <div className="font-medium">$59.99</div>
              <div className="text-sm text-muted-foreground">Qty: 1</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 pb-4 border-b">
            <div className="h-16 w-16 rounded bg-gray-100 flex items-center justify-center">
              <span className="text-xs text-gray-500">Product</span>
            </div>
            <div className="flex-1">
              <h4 className="font-medium">Another Product</h4>
              <p className="text-sm text-muted-foreground">Variant: Medium</p>
            </div>
            <div className="text-right">
              <div className="font-medium">$29.99</div>
              <div className="text-sm text-muted-foreground">Qty: 2</div>
            </div>
          </div>
          
          <div className="pt-2">
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">$119.97</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-medium">$5.99</span>
            </div>
            <div className="flex justify-between py-2 border-t mt-2">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">$125.96</span>
            </div>
          </div>
        </div>
        
        {/* Survey Form */}
        <div className="mt-8 pt-6 border-t">
          <div className="mb-4">
            <h3 className="text-lg font-medium">Quick Survey</h3>
            <p className="text-sm text-muted-foreground">Help us improve your shopping experience</p>
          </div>
          
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-1">Thank you!</h3>
              <p className="text-sm text-muted-foreground text-center">
                Your feedback is greatly appreciated and will help us improve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    How did you hear about us?
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="" disabled selected>Select an option</option>
                    <option value="social">Social Media</option>
                    <option value="search">Search Engine</option>
                    <option value="friend">Friend/Family</option>
                    <option value="ad">Advertisement</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    How would you rate your shopping experience?
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex items-center justify-between">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div key={num} className="flex flex-col items-center">
                        <button
                          type="button"
                          className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-primary/10 focus:bg-primary/20 focus:border-primary transition-colors"
                        >
                          {num}
                        </button>
                        <span className="text-xs mt-1 text-muted-foreground">
                          {num === 1 ? "Poor" : num === 5 ? "Excellent" : ""}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Any additional comments?
                  </label>
                  <textarea 
                    className="w-full p-2 border rounded-md min-h-[80px]"
                    placeholder="Your feedback matters to us..."
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button type="submit">
                  Submit Feedback
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
      
      <div className="border-t p-4 bg-gray-50">
        <Button className="w-full">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

const Preview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <AnimatedTransition animation="fade-in">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Preview</h1>
            <p className="text-muted-foreground">See how your survey appears on the cart page</p>
          </div>
          
          <CartPreview />
        </AnimatedTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Preview;
