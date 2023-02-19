import { Component, For } from "solid-js";

interface SelectValueProps {
  callback: (value: number) => void;
  values: number[];
  label: string;
}

const SelectValue: Component<SelectValueProps> = (props) => {
  return (
    <div class="grid flex-1 gap-1 text-gray-400">
      <label>{props.label}</label>
      <select
        id="countries"
        class="bg-gray-50 border h-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
        onChange={(e: any) => props.callback(e.target.value)}
      >
        <For each={props.values}>
          {(value) => <option value={value}>{value}</option>}
        </For>
      </select>
    </div>
  );
};

export default SelectValue;
