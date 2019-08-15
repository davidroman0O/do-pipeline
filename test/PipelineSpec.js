import { expect } from 'chai';
import Pipeline from '../src/Pipeline';

import Promise from "bluebird";

describe('Pipeline', () => {

  describe('Pipeline(array)', () => {

    it('should return "ROMAN" ', async () => {

        const capitalize = str => str[0].toUpperCase() + str.substring(1);
        const splitOnSpaces = str => str.trim().split(" ");
        const getLastOfArr = arr => arr.pop();
        const toUpper = values => values.toUpperCase();
        const wait = async values => {
          await Promise.delay(500);
          return values;
        };

        let data = await Pipeline([
            "david roman",
            capitalize,
            wait,
            splitOnSpaces,
            getLastOfArr,
            toUpper
        ]);

        expect(data).to.be.equal('ROMAN');
    });


  });

});
