"use client";
import styled from "styled-components";

const BoxComponent = styled.div`
  background-color: pink;
  color: blue;
  flex: 0 0 calc(50% - 8px);
  padding: 16px;
  border: solid 1px black;
  border-radius: 10px;
`;

type BoxProps = {
  title: string,
}

const Box = ({ title }: BoxProps) => {
  return (
    <BoxComponent>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique
        maxime animi quidem, suscipit culpa quaerat ipsam fugit minima quisquam
        molestiae rerum doloremque! Voluptates commodi quam, cum distinctio
        voluptatem adipisci?
      </p>
    </BoxComponent>
  );
};
export default Box;
