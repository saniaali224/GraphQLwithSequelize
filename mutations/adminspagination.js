const graphql = require("graphql");
const {
    GraphQLString,
    GraphQLInt
} = graphql;
const AdminsType = require('../schemaTypes/adminsPaginationType');
const adminsController = require('../controllers/adminController');
const getAlladmins = {
    type: AdminsType,
    args: {
        
        page:{type: GraphQLInt},
        limit:{type: GraphQLInt},
        Status: {type: GraphQLString},
    },
    resolve: async (parentValue, args) => {
        // console.log(await adminsController.getAllpagination(args));
        
        return await adminsController.getAllpagination(args);
    }
};
module.exports = getAlladmins ;
