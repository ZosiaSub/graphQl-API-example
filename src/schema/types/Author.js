import {GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
import { fakeDatabase } from '../../FakeDatabase';
import { Post } from './Post';

export const Author = new GraphQLObjectType({
    name: 'Author',
    description: 'All the details of an author on the website',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString }
    }),
    posts: {
        type: new GraphQLList(Post),
        resolve: (author) => {
            return fakeDatabase.getPostsOfAuthor(author.id);
        }
    }
})