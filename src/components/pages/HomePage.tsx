import { Component, createEffect, createSignal } from "solid-js";
import { Title } from "solid-start";
import SettingsButton from "../atoms/SettingsButton";
import TitleText from "../atoms/TitleText";
import { Modes } from "../models/modes.model";
import ButtonGroup from "../molecules/ButtonGroup";
import Settings from "../organizms/Settings";
import Timer from "../organizms/Timer";
import PageContainer from "../templates/PageContainer";

const HomePage: Component<{}> = (props) => {
  const [currentMode, setcurrentMode] = createSignal(Modes.Work);

  return (
    <PageContainer>
      <TitleText text="pomodoro"></TitleText>
      <ButtonGroup currentMode={currentMode()} onChange={setcurrentMode} />
      <Timer />
      <SettingsButton />
      <Settings />
    </PageContainer>
  );
};

export default HomePage;
