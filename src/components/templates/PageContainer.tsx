import { Component, JSX } from "solid-js";

interface PageContainerProps {
  children: JSX.Element;
}

const PageContainer: Component<PageContainerProps> = (props) => {
  return (
    <div class="mx-auto w-full md:w-3/4 h-screen text-white flex flex-col gap-16 items-center justify-center">
      {props.children}
    </div>
  );
};

export default PageContainer;
