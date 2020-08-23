const graphql = require("graphql");
const graphqldate = require('graphql-iso-date');
const { GraphQLJSON } = require('graphql-type-json');
const adminActivitySchemaTypes = require('./adminActivitySchemaType')
const adminController = require('../controllers/adminController');
const GraphQLLong =require('graphql-type-long')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList
} = graphql;
const {
    GraphQLDateTime
} = graphqldate;


module.exports = new GraphQLObjectType({
    name: "Admin",
    fields: () => ({
        Id: {type: GraphQLInt},
        Email: {type: new GraphQLNonNull(GraphQLString)},
        Password: {type: new GraphQLNonNull(GraphQLString)},
        RoleId: {type: new GraphQLNonNull(GraphQLInt)},
        Name: {type: GraphQLString},
        Status: {type: GraphQLString},
        CreatedDate: {type: GraphQLDateTime},
        CreatedIp: {type: GraphQLLong},
        CreatedBy: {type: GraphQLInt},
        
        error: {type: GraphQLJSON},
        Activity:{
            type: new GraphQLList(adminActivitySchemaTypes),
            resolve: async (parent, args) => {
                return await adminController.adminActivity(parent.Id && parent.Id)
            }
        },
    })
});