import {
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';
import { fakeDatabase } from '../../FakeDatabase';
import { Author } from './Author';
import { Comment } from './Comment';

export const Post = new GraphQLObjectType({
    name: 'Post',
    description: 'All the details of a post',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        author: { type: GraphQLString },
        comments: {
            type: new GraphQLList(Comment),
            resolve: (post) => {
                return fakeDatabase.getCommentsForPost(post.id);
            }
        }
    })
});

export const PostInputType = new GraphQLInputObjectType({
    name: 'PostInput',
    fields: {
        title: { type: new GraphQLNonNull(GraphQLString)},
        content: { type: new GraphQLNonNull(GraphQLString)},
        author: { type: new GraphQLNonNull(GraphQLString)},
    }
})