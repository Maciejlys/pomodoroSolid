import { Component, createEffect, createSignal, JSXElement } from "solid-js";
import { Modes } from "~/models/modes.model";
import { formatTimeLeft } from "~/utils/timeUtil";
import {
  currentMode,
  getSpecificSetting,
  goToNextMode,
  setcurrentMode,
} from "../store/settings";

type TimerState = "Paused" | "Running";

const OuterCircle: Component<{ children: JSXElement }> = (props) => (
  <div
    class="aspect-square w-3/4 md:w-4/5 lg:w-2/5 rounded-full  flex justify-center items-center bg-gradient-to-tl from-[rgb(44,56,107)] to-[rgb(21,26,50)]"
    style={{ "box-shadow": "-50px -50px 100px rgba(66, 75, 125, 0.8)" }}
  >
    {props.children}
  </div>
);

const InnerCircle: Component<{ children: JSXElement; callback: () => void }> = (
  props
) => (
  <div
    class="w-[90%] h-[90%] relative rounded-full bg-[rgb(21,26,50)] outline-2 flex items-center justify-center cursor-pointer"
    onClick={props.callback}
  >
    {props.children}
  </div>
);

const TimerBar: Component<{ timeLeft: number }> = (props) => (
  <svg
    class="absolute fill-none stroke-none"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <svg class="base-timer__circle">
      <circle
        transform="rotate(-90 50 50)"
        class="stroke-red-400 stroke-[3px] transition-all duration-500 ease-in-out"
        stroke-dasharray={`${props.timeLeft} 283`}
        cx="50"
        cy="50"
        r="45"
      />
    </svg>
  </svg>
);

const Timer: Component<{}> = (props) => {
  const [timerState, settimerState] = createSignal<TimerState>("Paused");
  const [timer, settimer] = createSignal<number>(0);
  let timerInterval: NodeJS.Timeout;

  createEffect(() => {
    clearInterval(timerInterval);
    settimerState("Paused");
    settimer(getSpecificSetting(currentMode()) * 60);
  }, [currentMode]);

  const handleTimer = () => {
    timerState() === "Paused" ? startTimer() : stopTimer();
  };

  const stopTimer = () => {
    settimerState("Paused");
  };

  const startTimer = () => {
    settimerState("Running");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      settimer((prev) => {
        if (prev <= 0) {
          settimerState("Paused");
          goToNextMode();
          return getSpecificSetting(currentMode()) * 60;
        } else if (timerState() === "Paused") {
          return prev;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const getPercentage = () =>
    (timer() / (getSpecificSetting(currentMode()) * 60)) * 283;

  return (
    <OuterCircle>
      <InnerCircle callback={handleTimer}>
        <TimerBar timeLeft={getPercentage()} />
        <div class="flex flex-col justify-center items-center">
          <div class="text-xl sm:text-4xl md:text-6xl xl:text-8xl font-bold font-mono">
            {formatTimeLeft(timer())}
          </div>
          <div
            class={`text-2xl font-bold ${
              timerState() == "Paused" ? "animate-pulse" : ""
            } transition-all`}
          >
            {timerState()}
          </div>
        </div>
      </InnerCircle>
    </OuterCircle>
  );
};

export default Timer;
