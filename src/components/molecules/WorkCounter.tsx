import { Component, For } from "solid-js";
import { workCount } from "../store/settings";

const WorkCounter: Component<{}> = (props) => {
  return (
    <div class="flex gap-2 h-5">
      <For each={Array.from({ length: workCount() })}>
        {() => <div class="h-5 w-5 bg-red-400 rounded-full"></div>}
      </For>
    </div>
  );
};

export default WorkCounter;
