import { Component } from "solid-js";

interface ApplySettingsProps {
  callback: () => void;
}

const ApplySettings: Component<ApplySettingsProps> = (props) => {
  return (
    <button
      class="rounded-full bg-red-400 p-3 text-white w-28 hover:bg-red-500 transition-colors"
      onClick={() => props.callback()}
    >
      Apply
    </button>
  );
};

export default ApplySettings;
