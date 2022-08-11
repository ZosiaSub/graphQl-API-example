import { graphql } from 'graphql';
import schema from './schema';

const source = `
    {
        posts {
            title,
            author {
                name
            }
        }
    }
`;
graphql({schema, source}).then((result) => {
    console.log('RESULT', JSON.stringify(result, null, 2));
}).catch((error) => console.log(error));




