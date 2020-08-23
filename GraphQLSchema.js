const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLSchema
} = graphql;

const createAdmin = require('./mutations/createAdmin');

const adminspagination = require('./mutations/adminspagination');
const updateadmin = require('./mutations/updateAdmin');
const deleteadmin = require('./mutations/deleteadmin');

const singleadminbyId = require('./queries/Singleadminbyid');

const RootQuery = new GraphQLObjectType({
    name: "Queries",
    fields: {
        
       
        singleadminbyId,
    
        
    }
});

//mutation query
const mutation = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        adminspagination: adminspagination,
        createAdmin: createAdmin,
        updateadmin: updateadmin,
        deleteadmin: deleteadmin,
           
    }
});
const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
});
//console.log(schema._typeMap.Author);

module.exports = schema;