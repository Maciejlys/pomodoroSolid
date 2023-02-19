import { Component, createSignal, onMount } from "solid-js";
import createTween from "~/utils/createTween";

const WorkDot: Component = () => {
  const [opacity, setopacity] = createSignal(0);
  const [translate, settranslate] = createSignal(10);
  const tweenedOpacity = createTween(opacity, { duration: 2000 });
  const tweenedTranslate = createTween(translate, { duration: 2000 });

  onMount(() => {
    setopacity(100);
    settranslate(0);
  });

  return (
    <div
      class={`h-5 w-5 bg-red-400 rounded-full transition-all duration-1000 ease-in-out opacity-${tweenedOpacity()} translate-y-${tweenedTranslate()}`}
    ></div>
  );
};

export default WorkDot;
