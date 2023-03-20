import * as React from "react";
import { inIframe } from "@features/quiz/lib";

interface QuizDetailPageProps {
  questions: any[];
}

// Check if page is embedded or not in an iframe
// Source: https://stackoverflow.com/a/326076

const QuizDetailPage: React.FC<QuizDetailPageProps> = ({}) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  return <div></div>;
};

export default QuizDetailPage;
