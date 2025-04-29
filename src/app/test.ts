
export const test = () => {
  import("./external-deps").then(({ useExternalDeps }) => useExternalDeps());

  return true;
};
