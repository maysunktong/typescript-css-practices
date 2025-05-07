"use client";
import styled from "styled-components";
import Box from "./story";

const StoryBoxComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 12px;
`;

const StoryBox = () => {
  return (
    <StoryBoxComponent>
      <Box title="Story 1" />
      <Box title="Story 2" />
      <Box title="Story 3" />
      <Box title="Story 4" />
    </StoryBoxComponent>
  );
};
export default StoryBox;
