import { useContext } from "react";
import { BioContext } from ".";

export const useBioCustomHook= ()=>{
  const context = useContext(BioContext);
  if(context === undefined){
    throw new Error("Component must be wrapped with UseBioCustomHook")
  }
  return context;
}