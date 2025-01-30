import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/Offer.ts';
import {AuthorizationStatus, Cities} from '../const.ts';
import {Place} from '../types/Place';
import {Review} from '../types/Review';
import {PostReview} from '../types/PostReview';

export const changeCity = createAction<Cities>('city/change');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const loadOffer = createAction<Place>('data/loadOffer');

export const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');

export const loadOfferComments = createAction<Review[]>('data/loadOfferComments');

export const loadNearbyOffers = createAction<Offer[]>('data/loadOffersNearby');

export const postComment = createAction<PostReview>('data/postComment');

export const setError = (message: string) => ({
    type: 'SET_ERROR',
    payload: message,
  });
  export const fillOffers = createAction<Offer[]>('offers/fill');