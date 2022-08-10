import {GraphQLSchema, GraphQLObjectType, GraphQLString} from 'graphql';

import posts from './queries/posts';
import post from './queries/post';
import author from './queries/author';

import addPost from './mutations/addPost';
import addComment from './mutations/addComment';


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQuery',
        fields: {
            ...posts,
            ...post,
            ...author,
            hello: {
                type: GraphQLString,
                resolve: () => {
                    return 'Hello there'
                }
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'RootMutation',
        fields: () => ({
            ...addPost,
            ...addComment
        })
    })
});

export default schema;