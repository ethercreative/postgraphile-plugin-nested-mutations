module.exports = function PostgraphileNestedMutationsPlugin(builder, options) {
  require('./src/PostgraphileNestedConnectorsPlugin.js')(builder, options);
  require('./src/PostgraphileNestedTypesPlugin')(builder, options);
  require('./src/PostgraphileNestedMutationsPlugin')(builder, options);
};
