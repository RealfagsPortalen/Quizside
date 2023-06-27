import { Card } from "@ui/Card";
import { PieChart } from "@ui/PieChart";
import { borderRadius, colors } from "@ui/design-tokens";
import Link from "next/link";
import * as React from "react";
import { CorrectSymbol } from "@ui/CorrectSymbol";
import { Button } from "@ui/Button";
import { QuestionType } from "@types";
import { getUserID } from "../../lib/user";
import { useRouter } from "next/router";

interface QuizThumbnailProps {
  title: string;
  href: string;
  questions: QuestionType[];
  attempted: boolean;
}

export const QuizThumbnail: React.FC<QuizThumbnailProps> = ({
  title,
  href,
  questions,
  attempted,
}) => {
  return (
    <Link
      href={{ pathname: href, query: { userId: getUserID(useRouter().query) } }}
    >
      <Card
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div>
          <h2>{title}</h2>
          <div css={{ display: "flex", gap: "0.5rem", padding: "1rem 0 0" }}>
            {questions.map((question) => (
              <CorrectSymbol
                variant={
                  (question.answeredCorrectly && "correct") ||
                  (question.answered && "incorrect") ||
                  "unanswered"
                }
                size={24}
              />
            ))}
          </div>
        </div>
        {attempted ? (
          <Button variant="secondary" icon="repeat">
            Prøv på nytt
          </Button>
        ) : (
          <Button variant="primary" icon="arrowRight">
            Ta quizen
          </Button>
        )}
      </Card>
    </Link>
  );
};
