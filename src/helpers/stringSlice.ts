export const stringSlice = (str: string) => {
  return str.length > 20 ? str.slice(0, 20) + '...' : str;
};
