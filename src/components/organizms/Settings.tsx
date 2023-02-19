import { Component, JSXElement, Show } from "solid-js";
import TitleText from "../atoms/TitleText";
import {
  saveSettings,
  setsettingsOpened,
  settingsOpened,
} from "../store/settings";
import { ImCross } from "solid-icons/im";
import ApplySettings from "../atoms/ApplySettings";
import SectionTitle from "../atoms/SectionTitle";
import SelectForm from "./SelectForm";

const Header: Component<{}> = (props) => {
  return (
    <div class="flex justify-between items-center border-b border-b-gray-200 p-8">
      <TitleText text="Settings" />
      <button onClick={() => setsettingsOpened(false)}>
        <ImCross />
      </button>
    </div>
  );
};

const Section: Component<{ children: JSXElement }> = (props) => {
  return (
    <div class="border-b py-3 border-b-gray-200 grid gap-3 pb-6">
      {props.children}
    </div>
  );
};

const Content: Component<{}> = (props) => {
  return (
    <div class="grid px-8">
      <Section>
        <SectionTitle>time (minutes)</SectionTitle>
        <SelectForm />
      </Section>
    </div>
  );
};

const Settings: Component<{}> = (props) => {
  const handleSubmit = () => {
    saveSettings();
    setsettingsOpened(false);
  };

  return (
    <Show when={settingsOpened()}>
      <div
        class="absolute z-10 w-full h-screen bg-black opacity-50 transition-colors duration-500"
        onClick={() => setsettingsOpened(false)}
      />
      <div class="absolute bg-white text-black rounded-2xl w-4/5 lg:w-1/3 z-20 transition-all duration-1000 ease-in-out">
        <Header />
        <Content />
        <div class="flex justify-center translate-y-5">
          <ApplySettings callback={handleSubmit} />
        </div>
      </div>
    </Show>
  );
};

export default Settings;
