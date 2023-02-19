import { Component, JSXElement } from "solid-js";

const SectionTitle: Component<{ children: JSXElement }> = (props) => {
  return <h2 class="uppercase tracking-[0.15em]">{props.children}</h2>;
};

export default SectionTitle;
