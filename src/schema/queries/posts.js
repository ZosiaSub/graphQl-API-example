import { GraphQLList } from 'graphql';
import { Post } from '../types/Post';
import { fakeDatabase } from '../../FakeDatabase';

export default {
    posts: {
        type: new GraphQLList(Post),
        description: 'Get a list of all blog posts',
        args: {},
        resolve: () => {
            return fakeDatabase.getBlogPosts();
        }

    }
}