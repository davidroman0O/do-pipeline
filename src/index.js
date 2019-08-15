/**
 * This function runs your pipeline
 * @param array The first one is for values, then for functions
 * @returns Whatever your want to return
 */
import Promise from "bluebird";

//  It's that simple
export default async a => {
  return Promise.reduce(
    a.slice(1, a.length),
    (ac, cv) => {
      return cv(ac);
    },
    a[0]
  );
};
