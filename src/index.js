import 'babel-polyfill'
import 'source-map-support/register'

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser';
import express from 'express'
import gramps from '@gramps/gramps'
import { GraphQLSchema } from 'graphql'

const app = express()

const grampsOptions = gramps()

app.use(bodyParser.json())
app.use(
    '/graphql',
    graphqlExpress(grampsOptions),
)
app.use(
    '/graphiql',
    graphiqlExpress({
    endpointURL: '/graphql',
}))

app.listen(4000)
