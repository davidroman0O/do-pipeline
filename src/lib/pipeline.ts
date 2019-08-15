import Promise from "bluebird";
/**
 * A pipeline reducer
 *
 * @returns       a Promise which should contain `Your data`
 */
export default async function pipeline(a : any): Promise<any> {
  return Promise.reduce(a.slice(1, a.length), (ac, cv) => {
      return cv(ac);
  }, a[0]);
}
