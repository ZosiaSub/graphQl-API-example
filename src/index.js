import { graphql } from 'graphql';
import schema from './schema';

const query = '{ hello }';

graphql({ schema, query }).then((result) => {
    console.log(result);
}).catch(err => {

    throw err;

})



