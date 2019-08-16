import Promise from "bluebird";

/**
 *  Create a pipeline of functions from initial params
 *  The first param are your values
 *  Then functions or promises
 * @returns       a Promise which should contain `Your data`
 */
export default async function pipeline(a : any): Promise<any> {
  return Promise.reduce(a.slice(1, a.length), (ac, cv) => {
      return cv(ac);
  }, a[0]);
}
