import { Component, createSignal, For } from "solid-js";
import { generateNumbers } from "~/utils/timeUtil";
import SelectValue from "../molecules/SelectValue";
import {
  setlongSetting,
  setshortSetting,
  setworkSetting,
} from "../store/settings";

const options = [
  {
    label: "work",
    values: generateNumbers(25, 60, 5),
  },
  {
    label: "short break",
    values: generateNumbers(5, 30, 5),
  },
  {
    label: "long break",
    values: generateNumbers(15, 60, 5),
  },
];

const SelectForm: Component<{}> = (props) => {
  return (
    <div>
      <div class="flex gap-5">
        <SelectValue
          label={options[0].label}
          values={options[0].values}
          callback={setworkSetting}
        />
        <SelectValue
          label={options[1].label}
          values={options[1].values}
          callback={setshortSetting}
        />
        <SelectValue
          label={options[2].label}
          values={options[2].values}
          callback={setlongSetting}
        />
      </div>
    </div>
  );
};

export default SelectForm;
