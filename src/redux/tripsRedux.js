/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // filter by duration
  output = output.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);

  let checker = (arr, target) => target.every(v => arr.includes(v));
  output = output.filter(trip => checker(trip.tags, filters.tags));

  // sort by cost descending (most expensive goes first)
  output = output.sort((a, b) => Number(a.cost.replace(/[^0-9.-]+/g, '')) - Number(b.cost.replace(/[^0-9.-]+/g, '')));
  output = output.reverse();

  return output;
};

export const getTripById = ({ trips }, tripId) => {
  const filtered = trips.filter(trip => (trip.id == tripId));
  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  const filtered = trips.filter(trip => (trip.country.code == countryCode));
  return filtered.length ? filtered : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
