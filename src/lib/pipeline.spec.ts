// tslint:disable:no-expression-statement
import test from 'ava';
import Promise from "bluebird";

import Pipeline from './pipeline';

test('getABC', async t => {


    const capitalize = str => str[0].toUpperCase() + str.substring(1);
    const splitOnSpaces = str => str.trim().split(" ");
    const getLastOfArr = arr => arr.pop();
    const toUpper = values => values.toUpperCase();
    const wait = async (values) => {
        await Promise.delay(500);
        return values;
    };
    const data = await Pipeline([
        "david roman",
        capitalize,
        wait,
        splitOnSpaces,
        getLastOfArr,
        toUpper
    ]);

    t.deepEqual(data, "ROMAN");
});
