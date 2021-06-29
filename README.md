# places-api

Create a new place:
 - a POST request to /api/places endpoint
 - the body of the request has to be JSON with three properties: name, city, and state.

Get a list of all the places in the database:
 - a GET request to /api/places

Get a filtered list by name or city
 - a GET request to /api/places with a query
 - for example of a search filtered by city, /api/places?city=tokyo

Get a specific place:
 - use the slug of the place to request for the specific place
 - a GET request to /api/places/the-slug-of-the-place-you-want
 - for example, /api/places/Great-Wall-of-China-ukpnvk