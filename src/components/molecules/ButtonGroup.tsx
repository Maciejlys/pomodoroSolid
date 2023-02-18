import { Component, createSignal, For, JSX } from "solid-js";
import OptionButton from "../atoms/OptionButton";
import { Modes } from "../models/modes.model";

interface ButtonGroupProps {
  onChange: (value: string) => void;
  currentMode: Modes;
}

const ButtonGroup: Component<ButtonGroupProps> = (props) => {
  const [labels, setlabels] = createSignal(Object.values(Modes));
  const minWidth = () => labels().length * 100 * 1.3;

  return (
    <div
      class="bg-slate-900 p-2 rounded-md sm:rounded-full flex flex-col sm:flex-row sm:h-16 shadow-md z-10"
      style={{ "min-width": `${minWidth()}px` }}
    >
      <For each={labels()}>
        {(label, i) => (
          <OptionButton
            label={label}
            isActive={props.currentMode === label}
            callback={props.onChange}
          />
        )}
      </For>
    </div>
  );
};

export default ButtonGroup;
