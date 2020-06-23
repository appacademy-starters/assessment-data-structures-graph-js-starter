// This test is similar to `01-are-they-connected-spec.js`, but it DOES NOT use
// random names.  This is intended to ease testing during development.
// Code that passes these tests _should_ pass `01-are-they-connected-spec.js`.
// Beware of edge cases!
// You will be evaluated on `01-are-they-connected-spec.js`, not this one.

const { expect } = require('chai');
const names = Array.from(require('./names'));

let areTheyConnected = () => {
  throw new Error('Could not load areTheyConnected');
};

try {
  ({ areTheyConnected } = require('../01-are-they-connected'));
} catch (e) {}

function randomNamesIndex() {
  return Math.floor(Math.random() * names.length);
}

const adjacencyList = {
  'carrie':  ['humza', 'jun'],
  'farrah':  ['humza'],
  'humza':   ['carrie', 'farrah', 'jun', 'silla'],
  'jun':     ['carrie', 'silla'],
  'ophelia': ['travis'],
  'silla':   ['humza', 'yervand'],
  'travis':  ['ophelia'],
  'victor':  [],
  'yervand': ['silla'],
};

describe('areTheyConnected()', () => {
  context('returns false when', () => {
    it('the list of people for startName is empty', () => {
      const startName = 'victor';
      const endName = 'yervand';

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.false;
    });

    it('the entry for startName points a long path that never finds endName', () => {
      const startName = 'carrie';
      const endName = 'travis';

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.false;
    });
  });

  context('returns true when', () => {
    it('startName === endName', () => {
      const startName = 'farrah';
      const endName = 'farrah';

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.true;
    });

    it('it finds the path startName -> endName', () => {
      const startName = 'carrie';
      const endName = 'humza';

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.true;
    });

    it('it finds the path startName -> endName despite a cycle', () => {
      const startName = 'carrie';
      const endName = 'yervand';

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.true;
    });

    it('it finds the path startName -> other -> endName', () => {
      const startName = 'carrie';
      const endName = 'yervand';
      const otherName = 'farrah';
      const localAdjacencyList = {
        [startName]: [otherName],
        [otherName]: [endName],
        [endName]: [otherName, startName]
      };

      const result = areTheyConnected(localAdjacencyList, startName, endName);

      expect(result).to.be.true;
    });

    it('it finds the path startName -> other -> endName despite of a cycle', () => {
      const startName = 'carrie';
      const endName = 'yervand';
      const otherName = 'farrah';
      const localAdjacencyList = {
        [startName]: [otherName],
        [otherName]: [startName, endName],
        [endName]: [otherName, startName]
      };

      const result = areTheyConnected(localAdjacencyList, startName, endName);

      expect(result).to.be.true;
    });

    it('it finds the path startName -> other -> another -> endName', () => {
      const startName = 'carrie';
      const endName = 'yervand';
      const otherName = 'farrah';
      const anotherName = 'tim';
      const localAdjacencyList = {
        [startName]: [otherName],
        [otherName]: [anotherName],
        [anotherName]: [endName],
        [endName]: [otherName, startName]
      };

      const result = areTheyConnected(localAdjacencyList, startName, endName);

      expect(result).to.be.true;
    });

    it('it finds the path startName -> other -> another -> endName despite many cycles', () => {
      const startName = 'carrie';
      const endName = 'yervand';
      const otherName = 'farrah';
      const anotherName = 'tim';
      const localAdjacencyList = {
        [startName]: [otherName],
        [otherName]: [startName, anotherName],
        [anotherName]: [startName, otherName, endName],
        [endName]: [otherName, startName]
      };

      const result = areTheyConnected(localAdjacencyList, startName, endName);

      expect(result).to.be.true;
    });
  });
});
