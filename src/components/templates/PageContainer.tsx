import { Component, JSX } from "solid-js";

interface PageContainerProps {
  children: JSX.Element;
}

const PageContainer: Component<PageContainerProps> = (props) => {
  return (
    <div class="bg-[rgb(21,26,50)]">
      <div class="mx-auto w-full md:w-3/4 h-screen text-white flex flex-col gap-16 items-center justify-center bg-[rgb(30, 33, 64)]">
        {props.children}
      </div>
    </div>
  );
};

export default PageContainer;
