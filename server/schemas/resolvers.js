const Quote = require('../models/Quote');

const resolvers = {
  Query: {
    getQuotes: async () => {
      try {
        const quotes = await Quote.find();
        return quotes;
      } catch (error) {
        throw new Error('Failed to fetch quotes');
      }
    },
  },
  Mutation: {
    createQuote: async (_, { input }) => {
      try {
        const newQuote = new Quote({
          ...input,
        });
        const result = await newQuote.save();
        return result;
      } catch (error) {
        throw new Error('Failed to create a new quote');
      }
    },
  },
};

module.exports = resolvers;
