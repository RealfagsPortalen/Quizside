import { Card } from "@ui/Card";
import { PieChart } from "@ui/PieChart";
import { borderRadius, colors } from "@ui/design-tokens";
import Link from "next/link";
import * as React from "react";
import { CorrectSymbol } from "@ui/CorrectSymbol";
import { Button } from "@ui/Button";
import { topic, topics } from "../../mockData";
import { QuestionType, TopicType } from "@types";
import { LatexText } from "@ui/LatexText";
import { Icon } from "@ui/Icon/Icon";

const Question: React.FC<{
  question: QuestionType;
  topicNumber: number;
  questionNumber: number;
}> = ({ question, topicNumber, questionNumber }) => {
  const [open, setOpen] = React.useState(false);
  const [showSolution, setShowSolution] = React.useState(false);
  return (
    <div
      css={{
        borderRadius: "10px",
        backgroundColor: colors.secondary[100],
        padding: "0.5rem",
      }}
    >
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
              <LatexText latex={question.question} />
            </h4>
            <a
              css={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => setShowSolution(!showSolution)}
            >
              {showSolution ? "Skjul løsningsforslag" : "Vis løsningsforslag"}
            </a>
            {showSolution && (
              <p>
                <LatexText latex={question.solution} />
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Topic: React.FC<{ topic: TopicType; topicNumber: number }> = ({
  topic,
  topicNumber,
}) => {
  let questionNumber = 1;
  return (
    <div css={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <h3>
        {topicNumber}. {topic.name}
      </h3>
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

export const QuestionList: React.FC<{
  topics: TopicType[];
  chapterName: string;
}> = ({ topics, chapterName }) => {
  return (
    <div>
      <div css={{ maxWidth: "26.25rem", paddingBottom: "2rem" }}>
        <h2
          css={{
            background:
              "linear-gradient(to right, currentColor 0%, currentColor 70%, transparent 70%, transparent 100%) repeat-x left bottom",
            backgroundSize: "15px 1px",
            marginBottom: "0.5rem",
          }}
        >
          Alle oppgaver i {chapterName.toLowerCase()}
        </h2>
        <p>
          Her kan du velge oppgavene individuelt. Dette er ikke en quiz, så det
          er ingen svaralternativer.
        </p>
      </div>
      {topics.map((topic, i) => (
        <Topic key={i} topic={topic} topicNumber={i + 1} />
      ))}
    </div>
  );
};
