import { use } from "react";
import { BioContext } from "./Toggle";
 

export const ToggleCustom = () => {
  const context = use(BioContext);

  if (!context) {
    throw new Error("Component must be wrapped with ThemeHookProvider");
  }

  return context;
};