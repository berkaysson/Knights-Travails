import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  height: auto;
`;

const VisitWrapper = styled.span`
  position: absolute;
  color: yellow;
`;

const SvgPath = styled.path`
  fill: #404040;
  stroke: #919391;
  strokelinecap: round;
  strokelinejoin: round;
  strokewidth: 5;

  ${(props) =>
    props.status === "end" &&
    css`
      fill: #fff;
    `}

  ${(props) =>
    props.status === "visited" &&
    css`
      fill: #ff1;
    `}
`;

const Knight = ({ status, visitDistance }) => {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1"
        viewBox="0 0 64.868 90.399"
      >
        <g transform="translate(-276.88 -198.1)">
          <SvgPath
            status={status}
            d="M322 219.38l17.25 16.12L331 245l-18.25-6.25s10.2 5.7 19 14.5c8.88 8.88 7.05 25.68 3.87 32.75H286c19.5-24-16.69-47.59-3.75-70 12.6-21.82 32.88-18.44 45.12-2.37-1.87 1.87-3.65 4.02-5.37 5.75z"
          ></SvgPath>
        </g>
      </svg>
      <VisitWrapper>{visitDistance}</VisitWrapper>
    </Wrapper>
  );
};

export default Knight;
