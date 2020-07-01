/*******************************************************************************
 * In this assessment, you will implement the areTheyConnected function to
 * search a graph using its adjacency list to determine if one node is
 * "connected" to another.
 *
 * For example, consider the following adjacency list:
 *
 * ```js
 * const adjacencyList = {
 *   'carrie':  ['humza', 'jun'],
 *   'farrah':  ['humza'],
 *   'humza':   ['carrie', 'farrah', 'jun', 'silla'],
 *   'jun':     ['carrie', 'silla'],
 *   'ophelia': ['travis'],
 *   'silla':   ['humza', 'yervand'],
 *   'travis':  ['ophelia'],
 *   'ursula':  ['travis'],
 *   'victor':  [],
 *   'yervand': ['silla']
 * };
 * ```
 *
 * Your function will take a starting name and an ending name. Your function
 * will search the graph to determine if you could get from one name to another.
 *
 * In this function, as is not usually in real life, these interpersonal
 * relationships are a one-way street. Look at the entry for "ursula". You can
 * find a path between "ursula" and "ophelia" using "ursula" -> "travis" ->
 * "ophelia". However, if you were asked to start at "ophelia" and try to get to
 * "ursula", that would fail because it goes "ophelia" -> "travis" -> _DEAD
 * END_.
 *
 * Given a start name, an end name, and the adjacency list from above, the
 * following table shows the result and a possible (not necessarily unique) path
 * that it could find to determine if two names are connected.
 *
 * | Start name | End name | Result | Example path found by a search    |
 * |------------|----------|------- |-----------------------------------|
 * | carrie     | carrie   | true   | carrie (it's the same node)       |
 * | carrie     | humza    | true   | carrie -> humza                   |
 * | carrie     | yervand  | true   | carrie -> jun -> silla -> yervand |
 * | ophelia    | ursula   | FALSE  | ophelia -> travis -> FAIL         |
 * | travis     | carrie   | FALSE  | travis -> ophelia -> FAIL         |
 * | ursula     | ophelia  | true   | ursula -> travis -> ophelia       |
 * | victor     | humza    | FALSE  | victory -> FAIL                   |
 *
 * -----------------------------------------------------------------------------
 *
 * @param {Object} adjacencyList - An object that has at least one key, that
 * being the value of startName. The values of all keys in the adjacencyList are
 * guaranteed to be arrays.
 *
 * @param {string} startName - The name (node) at which you'll start your
 * search.
 *
 * @param {string} endName - The name (node) you're trying to find when starting
 * your search from startName.
 */

function areTheyConnected(adjacencyList, startName, endName) {
  throw new Error('Replace this with your implementation');
}



/*******************************************************************************
 * Do not change the code after this line.
 */
try {
  exports.areTheyConnected = areTheyConnected;
} catch(e) {
  module.exports = null;
}
