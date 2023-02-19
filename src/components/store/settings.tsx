import { createEffect, createSignal } from "solid-js";
import { Modes } from "~/models/modes.model";
import { LengthOptions } from "~/models/settings.model";

// Modal state
export const [settingsOpened, setsettingsOpened] = createSignal(false);

// Mode state
export const [currentMode, setcurrentMode] = createSignal(Modes.Work);
export const [workCount, setworkCount] = createSignal(0);

// Time state
export const [workOption, setWorkOption] = createSignal(25);
export const [shortBreakOption, setShortBreakOption] = createSignal(5);
export const [longBreakOption, setLongBreakOption] = createSignal(15);

// Settings state
export const [workSetting, setworkSetting] = createSignal(25);
export const [shortSetting, setshortSetting] = createSignal(5);
export const [longSetting, setlongSetting] = createSignal(15);

export const saveSettings = () => {
  setWorkOption(workSetting);
  setShortBreakOption(shortSetting);
  setLongBreakOption(longSetting);
};

export const goToNextMode = () => {
  if (currentMode() === Modes.Work) {
    setworkCount(workCount() + 1);
  }

  if (
    currentMode() === Modes.Work &&
    workCount() % 4 === 0 &&
    workCount() !== 0
  ) {
    setcurrentMode(Modes.LongBreak);
  } else if (currentMode() === Modes.Work) {
    setcurrentMode(Modes.ShortBreak);
  } else {
    setcurrentMode(Modes.Work);
  }
};

export const getSpecificSetting = (setting: Modes) => {
  switch (setting) {
    case Modes.Work:
      return workOption();
    case Modes.ShortBreak:
      return shortBreakOption();
    case Modes.LongBreak:
      return longBreakOption();
  }
};
