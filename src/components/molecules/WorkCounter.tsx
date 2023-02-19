import {
  Component,
  For,
  onMount,
  startTransition,
  useTransition,
} from "solid-js";
import WorkDot from "../atoms/WorkDot";
import { workCount } from "../store/settings";

const WorkCounter: Component<{}> = (props) => {
  return (
    <div class="flex gap-2 h-5">
      <For each={Array.from({ length: workCount() })}>{() => <WorkDot />}</For>
    </div>
  );
};

export default WorkCounter;
