// tslint:disable:no-expression-statement
import test from 'ava';
import Promise from "bluebird";

import https from "https";

import Pipeline from '../index';

test('Fetch json and manipulate it', async t => {

	const promiseData = () => new Promise((res, rej) => {
		https.get("https://jsonplaceholder.typicode.com/todos", (response) => {
			let blocs = '';
			response.on('data', (d) => {
				blocs += d;
			});
			response.on('end', () => {
				res(JSON.parse(blocs));
			});
			response.on('error', (e) => {
				rej(e);
			})
		})
	});

	const data = await Pipeline([
		await promiseData(),
		values => values.filter(o => o.completed)
	]);

	if (
		Array.isArray(data) &&
		data.findIndex(obj => !obj.completed) == -1
	) {
		t.pass();
	} else {
		t.fail();
	}
});

test('Pipeline simple text manipulation', async t => {

	const ES5Pipeline = require('../index');

    const capitalize = str => str[0].toUpperCase() + str.substring(1);
    const splitOnSpaces = str => str.trim().split(" ");
    const getLastOfArr = arr => arr.pop();
    const toUpper = values => values.toUpperCase();
    const wait = async (values) => {
        await Promise.delay(500);
        return values;
    };
    const data = await ES5Pipeline([
        "david roman",
        capitalize,
        wait,
        splitOnSpaces,
        getLastOfArr,
        toUpper
    ]);

    t.deepEqual(data, "ROMAN");
});

test('Pipeline in a pipeline in a pipeline', async t => {
	const data = await Pipeline([
		1,
		v => Pipeline([
			{ a: v, b: 2 },
			({ a, b }) => a + b,
			v => Pipeline([
				{ a: v, b: 5 },
				({ a, b }) => a * b
			])
		])
	]);
	t.log(data);
	t.deepEqual(data, 15);
});

test('Pipeline multiple paths', async t => {

	let random = Math.random();

	let data = await Pipeline([
		random,
		v => v > 0.5 ? Pipeline([
			v,
			v => v + 0.5
		]) : Pipeline([
			v,
			v => v - 0.5
		])
	]);

	t.deepEqual(data, (random > 0.5 ? random + 0.5 : random - 0.5));
});
