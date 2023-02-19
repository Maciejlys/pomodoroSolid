import { Component, createEffect } from "solid-js";

interface OptionButtonProps {
  label: string;
  isActive?: boolean;
  callback: (value: string) => void;
}

const OptionButton: Component<OptionButtonProps> = (props) => {
  return (
    <a
      class="rounded-md sm:rounded-full flex-1 flex py-2 px-4 cursor-pointer justify-center items-center font-bold transition-colors"
      classList={{
        "bg-red-400 text-slate-900": props.isActive,
        "text-gray-400 hover:text-white": !props.isActive,
      }}
      onClick={() => props.callback(props.label)}
    >
      {props.label}
    </a>
  );
};

export default OptionButton;
