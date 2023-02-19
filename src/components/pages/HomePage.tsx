import { Component } from "solid-js";
import SettingsButton from "../atoms/SettingsButton";
import TitleText from "../atoms/TitleText";
import ButtonGroup from "../molecules/ButtonGroup";
import Settings from "../organizms/Settings";
import Timer from "../organizms/Timer";
import PageContainer from "../templates/PageContainer";

import WorkCounter from "../molecules/WorkCounter";

const HomePage: Component<{}> = (props) => {
  return (
    <PageContainer>
      <TitleText text="pomodoro"></TitleText>
      <ButtonGroup />
      <Timer />
      <SettingsButton />
      <Settings />
      <WorkCounter />
    </PageContainer>
  );
};

export default HomePage;
