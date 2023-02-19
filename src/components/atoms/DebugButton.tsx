import { Component } from "solid-js";
import {
  saveSettings,
  setlongSetting,
  setshortSetting,
  setworkSetting,
} from "../store/settings";

const DebugButton: Component<{}> = (props) => {
  return (
    <div
      class="w-5 h-5 absolute left-0 bottom-0"
      onClick={() => {
        setworkSetting(1 / 60);
        setshortSetting(1 / 60);
        setlongSetting(1 / 60);
        saveSettings();
      }}
    ></div>
  );
};

export default DebugButton;
