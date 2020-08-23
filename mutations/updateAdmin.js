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
const updateAdmin = {
    type: AdminType,
    args: {
        Id: {type: GraphQLInt},
        Password: {type: GraphQLString},
        RoleId: {type: GraphQLInt},
        Name: {type: GraphQLString},
        Status: {type: GraphQLString},
    
    },
    resolve: async (parentValue, args) => {
        return await AdminController.update(args);
    }
};
module.exports = updateAdmin;
