const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  pickUpAddress: {
    type: String,
    required: true,
  },

  dropOffAddress: {
    type: String,
    required: true,
  },
  numberOfBedrooms: {
    type: Number,
    required: true,
  },
  houseDetails: {
    type: String,
    enum: ['SingleStorey', 'DoubleStorey', 'ThreeOrMore', 'StorageFacility', 'Apartment'],
    required: true,
  },
  furnishingDetails: {
    type: String,
    enum: ['10OrLessItems', 'BigStuffOnly', 'EntireHouseContents'],
    required: true,
  },
  moveDate: {
    type: Date,
    required: true,
  },
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
