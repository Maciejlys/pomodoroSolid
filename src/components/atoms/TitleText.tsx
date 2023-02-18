import { Component } from "solid-js";

const TitleText: Component<{ text: string }> = (props) => {
  return <h1 class="text-4xl font-bold text-center">{props.text}</h1>;
};

export default TitleText;
