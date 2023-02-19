import { Component, createSignal, For, JSX } from "solid-js";
import OptionButton from "../atoms/OptionButton";
import { Modes } from "../../models/modes.model";
import { currentMode, setcurrentMode } from "../store/settings";

const ButtonGroup: Component<{}> = (props) => {
  const [labels, setlabels] = createSignal(Object.values(Modes));
  const minWidth = () => labels().length * 100 * 1.3;

  return (
    <div
      class="bg-slate-900 p-2 shadow-xl rounded-md sm:rounded-full flex flex-col sm:flex-row sm:h-16 z-10"
      style={{ "min-width": `${minWidth()}px` }}
    >
      <For each={labels()}>
        {(label, i) => (
          <OptionButton
            label={label}
            isActive={currentMode() === label}
            callback={setcurrentMode}
          />
        )}
      </For>
    </div>
  );
};

export default ButtonGroup;
