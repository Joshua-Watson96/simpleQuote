const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Quote {
    _id: ID!
    pickUpAddress: String!
    dropOffAddress: String!
    numberOfBedrooms: Int!
    houseDetails: String!
    furnishingDetails: String!
    moveDate: String!
  }

  type Query {
    getQuotes: [Quote]
  }

  input QuoteInput {
    pickUpAddress: String!
    dropOffAddress: String!
    numberOfBedrooms: Int!
    houseDetails: String!
    furnishingDetails: String!
    moveDate: String!
  }

  type Mutation {
    createQuote(input: QuoteInput): Quote
  }
`;

module.exports = typeDefs;
