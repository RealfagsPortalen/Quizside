import { Card } from "@ui/Card";
import { PieChart } from "@ui/PieChart";
import { borderRadius, colors } from "@ui/design-tokens";
import Link from "next/link";
import * as React from "react";
import { CorrectSymbol } from "@ui/CorrectSymbol";
import { Button } from "@ui/Button";
import { topic, topics } from "../../mockData";
import { QuestionType } from "@types";
import { LatexText } from "@ui/LatexText";
import { Icon } from "@ui/Icon/Icon";

interface QuestionListProps {
  topics: topics;
}

const Question: React.FC<{
  question: QuestionType;
  topicNumber: number;
  questionNumber: number;
}> = ({ question, topicNumber, questionNumber }) => {
  const [open, setOpen] = React.useState(false);
  const [showSolution, setShowSolution] = React.useState(false);
  return (
    <Card>
      <div css={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <a
          onClick={() => setOpen(!open)}
          css={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>{`Oppgave ${topicNumber}.${questionNumber}`}</h3>{" "}
          <div
            css={{
              transform: open ? "rotate(90deg)" : "rotate(-90deg)",
            }}
          >
            <Icon icon="chevronRight" />
          </div>
        </a>
        {open && (
          <>
            <h4>
              <LatexText latex={question.questionText} />
            </h4>
            <a
              css={{ textDecoration: "underline" }}
              onClick={() => setShowSolution(!showSolution)}
            >
              {showSolution ? "Skjul løsningsforslag" : "Vis løsningsforslag"}
            </a>
            {showSolution && (
              <p>
                <LatexText
                  latex={
                    question.answerOptions.find(({ isCorrect }) => isCorrect)
                      ?.optionText || "Ingen løsningsforslag"
                  }
                />
              </p>
            )}
          </>
        )}
      </div>
    </Card>
  );
};

const Topic: React.FC<{ topic: topic; topicNumber: number }> = ({
  topic,
  topicNumber,
}) => {
  let questionNumber = 1;
  return (
    <div css={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <h2>{topic.title}</h2>
      {topic.quizzes.map(({ questions }, i) =>
        questions.map((question, i) => (
          <Question
            question={question}
            topicNumber={topicNumber}
            questionNumber={questionNumber++}
            key={i}
          />
        ))
      )}
    </div>
  );
};

export const QuestionList: React.FC<QuestionListProps> = ({ topics }) => {
  return (
    <div>
      {topics.map((topic, i) => (
        <Topic key={i} topic={topic} topicNumber={i + 1} />
      ))}
    </div>
  );
};
