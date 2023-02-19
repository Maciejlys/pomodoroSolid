import { Component, createEffect, createSignal, For } from "solid-js";
import { Title } from "solid-start";
import SettingsButton from "../atoms/SettingsButton";
import TitleText from "../atoms/TitleText";
import { Modes } from "../../models/modes.model";
import ButtonGroup from "../molecules/ButtonGroup";
import Settings from "../organizms/Settings";
import Timer from "../organizms/Timer";
import PageContainer from "../templates/PageContainer";
import { workCount } from "../store/settings";
import WorkCounter from "../molecules/WorkCounter";
import DebugButton from "../atoms/DebugButton";

const HomePage: Component<{}> = (props) => {
  return (
    <PageContainer>
      <TitleText text="pomodoro"></TitleText>
      <ButtonGroup />
      <Timer />
      <SettingsButton />
      <Settings />
      <WorkCounter />
      <DebugButton />
    </PageContainer>
  );
};

export default HomePage;
