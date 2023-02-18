import { Component, createSignal } from "solid-js";

type TimerState = "Paused" | "Running";

const Timer: Component<{}> = (props) => {
  const [timerState, settimerState] = createSignal<TimerState>("Paused");
  return (
    <div
      class="aspect-square w-3/4 md:w-4/5 lg:w-2/5 rounded-full bg-transparent"
      style={{ "box-shadow": "0 0 50px rgba(0, 0, 0, 0.3)" }}
    ></div>
  );
};

export default Timer;
