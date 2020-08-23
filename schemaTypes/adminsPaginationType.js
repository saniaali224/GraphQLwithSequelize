const graphql = require("graphql");
const {GraphQLJSON} = require('graphql-type-json');
const adminsSchemaTypes = require('./adminSchemaTypes')
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList
} = graphql;
module.exports = new GraphQLObjectType({
    name: "adminsPaginationType",
    fields: () => ({
        admins: {type: GraphQLList(adminsSchemaTypes)},
        totaladmins: {type: GraphQLInt},
        totalPages: {type: GraphQLInt},
        currentPage: {type: GraphQLInt},
        error: {type: GraphQLJSON}
    })
});