import {
  createContext as reactCreateContext,
  useContext,
  type Context,
  type Provider
} from "react";

export type CreateContextReturn<TValue> = [Provider<TValue>, () => TValue, Context<TValue>];

export function createContext<TValue>(
  scopeName: string,
  defaultValue?: TValue
): CreateContextReturn<TValue | undefined> {
  const Context = reactCreateContext<TValue | undefined>(defaultValue);
  Context.displayName = scopeName;

  function useCtx(): TValue {
    const value = useContext(Context);
    if (value === undefined) {
      throw new Error(`\`${scopeName}\` must be used within \`${scopeName}Provider\``);
    }
    return value;
  }

  return [Context.Provider, useCtx, Context];
}
