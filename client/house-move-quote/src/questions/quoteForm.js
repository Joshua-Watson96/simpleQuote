import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_QUOTE_MUTATION } from '../utils/mutations'

// Import questions
import PickUpDropOffAddress from './Address'
import Bedroom from './Bedroom'
import Quote from '../../../../server/models/Questions';

const [createQuote] = useMutation(CREATE_QUOTE_MUTATION);

const QuoteForm = () => {
    const [quoteData, setQuoteData ] = useState({
        PickUpDropOffAddress: '',
        Bedroom: null,
    });

    const handleNext = async (data) => {
        setQuoteData((prevData) => ({...prevData, ...data}));
    };
    
    return (
        <>
        <PickUpDropOffAddress onNext={handleNext}/>
        <Bedroom onNext={handleNext} />
        </>
    )
}

export default QuoteForm;