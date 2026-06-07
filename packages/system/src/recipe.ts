import { cx } from "@zed-ui/utils";

export type RecipeVariantMap = Record<string, Record<string, string | undefined>>;

export type RecipeOptions<TVariants extends RecipeVariantMap> = {
  base?: string;
  variants?: TVariants;
  compoundVariants?: Array<
    Partial<{ [K in keyof TVariants]: keyof TVariants[K] }> & { className: string }
  >;
};

export function recipe<TVariants extends RecipeVariantMap>(options: RecipeOptions<TVariants>) {
  const { base, variants = {} as TVariants, compoundVariants = [] } = options;

  return function resolve(props: Partial<{ [K in keyof TVariants]: keyof TVariants[K] }>): string {
    const classes: Array<string | undefined> = [base];

    for (const [key, value] of Object.entries(props)) {
      if (value === undefined) continue;
      const variantGroup = variants[key as keyof TVariants];
      if (variantGroup) {
        classes.push(variantGroup[value as string]);
      }
    }

    for (const compound of compoundVariants) {
      const { className, ...conditions } = compound;
      const matches = Object.entries(conditions).every(
        ([key, expected]) => props[key] === expected
      );
      if (matches) {
        classes.push(className);
      }
    }

    return cx(...classes);
  };
}
