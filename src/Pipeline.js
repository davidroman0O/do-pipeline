import Promise from "bluebird";

//  It's that simple
export default async a => {
  return await Promise.reduce(
    a.slice(1, a.length),
    (ac, cv) => {
      return cv(ac);
    },
    a[0]
  );
};
