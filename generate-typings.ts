import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { join } from 'path'

const definitionsFactory = new GraphQLDefinitionsFactory()
definitionsFactory.generate({
  typePaths: ['./libs/**/*.gql', './apps/**/*.gql'],
  path: join(process.cwd(), 'libs/models/src/lib/models.ts'),
  outputAs: 'class',
  watch: true,
})
