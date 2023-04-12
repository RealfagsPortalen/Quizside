import * as React from "react";

interface PieChartProps {
  radius?: number;
  width?: number;
  completedPercentage: number;
  attemptedPercentage: number;
}

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function drawArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  var start = polarToCartesian(x, y, radius, Math.min(endAngle, 359));
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

export const PieChart: React.FC<PieChartProps> = ({
  radius = 100,
  width = 40,
  attemptedPercentage,
  completedPercentage,
}) => {
  const attemptedCoords = polarToCartesian(
    radius,
    radius,
    radius,
    360 * attemptedPercentage
  );
  const completedCoords = polarToCartesian(
    radius,
    radius,
    radius,
    360 * completedPercentage
  );
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`-${width} -${width} ${radius * 2 + width * 2} ${
          radius * 2 + width * 2
        }`}
      >
        <circle
          cx={radius}
          cy={0}
          r={width / 2}
          fill="var(--color-success-300)"
        />
        <path
          d={drawArc(radius, radius, radius, 0, 360 * attemptedPercentage)}
          fill="none"
          stroke="var(--color-error-300)"
          strokeWidth={width}
        />
        <circle
          cx={attemptedCoords.x}
          cy={attemptedCoords.y}
          r={width / 2}
          fill="var(--color-error-300)"
        />
        <path
          d={drawArc(radius, radius, radius, 0, 360 * completedPercentage)}
          fill="none"
          stroke="var(--color-success-300)"
          strokeWidth={width}
        />
        <circle
          cx={completedCoords.x}
          cy={completedCoords.y}
          r={width / 2}
          fill="var(--color-success-300)"
        />
      </svg>
    </div>
  );
};
