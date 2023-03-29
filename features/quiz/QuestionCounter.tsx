export const QuestionCounter: React.FC<{
  questionNumber: number;
  questionCount: number;
}> = ({ questionCount, questionNumber }) => (
  <div>
    <span>
      Question {questionNumber + 1} av {questionCount}
    </span>
  </div>
);
