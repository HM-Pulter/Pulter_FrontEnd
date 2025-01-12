import Plant from "../../assets/intro/Plant.svg?react";
import { IntroContainer, Title } from "./style";
import { TEXT } from "@/constants/text";

const INTRO: React.FC = () => {
  return (
    <>
      <Plant />
      <IntroContainer>
        <Title>{TEXT.title}</Title>
      </IntroContainer>
    </>
  );
};

export default INTRO;
