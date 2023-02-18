import { Component } from "solid-js";
import { setsettingsOpened } from "../store/settings";
import { IoSettings } from "solid-icons/io";

const SettingsButton: Component<{}> = () => {
  return (
    <IoSettings
      class="w-10 h-10 cursor-pointer fill-gray-500 hover:fill-white transition-colors duration-300"
      onclick={() => setsettingsOpened(true)}
    />
  );
};

export default SettingsButton;
