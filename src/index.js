import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  type Beer {
    _id: Int,
    name: String,
    brewery: String,
    alcohol: Float,
    style: String,
    breweryLogoURL: String,
    description: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book],
    beers: [Beer]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const beers = [
  {
      "_id": 2,
      "name": "Beer For Dealing With Your Family",
      "brewery": "Off Color Brewing",
      "alcohol": 12,
      "style": "Malt Liquor",
      "breweryLogoURL": "http://images.squarespace-cdn.com/content/v1/52f7da5be4b04c51e901a9b6/1596685731558-YM8AH72177XVZ6KBZKLX/OCB_Script_Logo.png?format=1000w",
      "description": "It's literally malt liquor. It'll get you drunk!"
  },
  {
      "_id": 4,
      "name": "Well Fed Sheep",
      "brewery": "Off Color Brewing",
      "alcohol": 9.5,
      "style": "Scotch Style Ale",
      "breweryLogoURL": "http://images.squarespace-cdn.com/content/v1/52f7da5be4b04c51e901a9b6/1596685731558-YM8AH72177XVZ6KBZKLX/OCB_Script_Logo.png?format=1000w",
      "description": "A rich malt, light caramel, and biscuit profile (from as much malt as our brewhouse could hold) is accentuated by a slight alcoholic presence, while distinct honey notes compliment the dry finish. Pale copper on color with only enough hops to balance the huge malt profile."
  },
  {
      "_id": 5,
      "name": "Tropical Freak",
      "brewery": "Marz Brewing",
      "alcohol": 6,
      "style": "Sour Ale",
      "breweryLogoURL": "https://marz.beer/wp-content/uploads/2019/05/download.png",
      "description": "loads of mango and strawberry alongside our house lacto culture to set you up for some nice cabana time"
  },
  {
      "_id": 6,
      "name": "Pumpkin Chai",
      "brewery": "Saugatuck Brewing Company",
      "alcohol": 6,
      "style": "Pumpkin / Yam Beer",
      "breweryLogoURL": "https://images.getbento.com/accounts/34290715f5f307dbcf732116ed8bbcd5/media/images/77358logow2.png",
      "description": "An ale brewed with herbal chai tea and pumpkin. Aromas of chai tea and subtle pumpkin notes on the nose; Flavors of chai and pumpkin make this fall seasonal stand out from typical fall beers. Perfect for a brisk autumn day."
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    beers: () => beers,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);