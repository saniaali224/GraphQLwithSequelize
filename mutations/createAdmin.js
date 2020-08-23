const graphql = require("graphql");
const graphqldate = require('graphql-iso-date');
const {
    GraphQLString,
    GraphQLInt
} = graphql;
const {
    GraphQLDateTime
} = graphqldate;
const AdminType = require('../schemaTypes/adminSchemaTypes');
const AdminController = require('../controllers/adminController');
const GraphQLLong =require('graphql-type-long')
const createAdmin = {
    type: AdminType,
    args: {
        Email: {type: GraphQLString},
        Password: {type: GraphQLString},
        RoleId: {type: GraphQLInt},
        Name: {type: GraphQLString},
        Status: {type: GraphQLString},
        CreatedDate: {type: GraphQLDateTime},
        CreatedIp: {type: GraphQLLong},
        CreatedBy: {type: GraphQLInt}
    },
    resolve: async (parentValue, args) => {
        return await AdminController.create(args);
    }
};
module.exports = createAdmin;
