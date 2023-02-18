import { Component, Show } from "solid-js";
import TitleText from "../atoms/TitleText";
import { setsettingsOpened, settingsOpened } from "../store/settings";
import { ImCross } from "solid-icons/im";
import ApplySettings from "../atoms/ApplySettings";

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

const Content: Component<{}> = (props) => {
  return <div class="grid p-8 mb-6">xd</div>;
};

const Settings: Component<{}> = (props) => {
  const handleSubmit = () => {
    setsettingsOpened(false);
  };
  return (
    <Show when={settingsOpened()}>
      <div
        class="absolute z-10 w-full h-screen bg-black opacity-50"
        onClick={() => setsettingsOpened(false)}
      />
      <div class="absolute bg-white text-black rounded-lg w-1/3 z-20">
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
