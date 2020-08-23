const graphql = require("graphql");
const {
    GraphQLInt
} = graphql;
const adminTypes = require('../schemaTypes/adminSchemaTypes');
const adminController = require('../controllers/adminController');
const getOneadmin = {
    type: adminTypes,
    args: {
        Id: {type: GraphQLInt}
    },
    resolve: async (parent, args) => {
        return await adminController.getOneById(args);
    } 
};
module.exports = getOneadmin;
