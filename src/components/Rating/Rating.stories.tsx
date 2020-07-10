import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import Rating, {RatingValueType} from './Rating'

export default {
    title: 'Rating',
    component: Rating,
};

// export const EmptyRating = () => <Rating value={0} onClick={x=>x} />;
export const EmptyRating = () => <Rating value={0} onClick={action('on star')} />;


export const RatingChanging = () => {
    let [ratingValue,setRatingValue]=useState<RatingValueType>(4);
    return <Rating value={ratingValue} onClick={setRatingValue} />
}

