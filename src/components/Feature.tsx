import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeatureProps {
  url: string;
  title: string;
}

export default function Feature({ url, title }: FeatureProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };

  return (
    <Card className="cursor-pointer transition-colors hover:bg-secondary/50" onClick={handleClick}>
      <CardContent className="p-6">
        <Button variant="ghost" className="h-auto p-0 text-lg font-semibold">
          {title}
        </Button>
      </CardContent>
    </Card>
  );
}