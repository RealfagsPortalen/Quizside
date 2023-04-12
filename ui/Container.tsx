import * as React from "react";
import styled from "@emotion/styled";

export const Container = ({
  tag = "div",
  children,
  className,
}: {
  tag?: string;
  children: React.ReactNode;
  className?: any;
}) => {
  const Div = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 5% 10%;
  `;

  const Wrapper = Div.withComponent(tag as any);
  return <Wrapper css={className}>{children}</Wrapper>;
};
