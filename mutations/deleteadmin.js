const graphql = require("graphql");
const {
    GraphQLInt
} = graphql;
const adminType = require('../schemaTypes/adminSchemaTypes');
const adminController = require('../controllers/adminController');
const Deleteadmin = {
    type:adminType ,
    args: {
        Id: {type: GraphQLInt}
    },
    resolve: async (parent, args) => {
        return await adminController.Deleteadmin(args); 
    }
};
module.exports = Deleteadmin;
