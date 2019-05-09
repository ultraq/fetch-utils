
fetch-utils
===========

[![Build Status](https://travis-ci.org/ultraq/fetch-utils.svg?branch=master)](https://travis-ci.org/ultraq/fetch-utils)
[![npm](https://img.shields.io/npm/v/@ultraq/fetch-utils.svg?maxAge=3600)](https://www.npmjs.com/package/@ultraq/fetch-utils)
[![License](https://img.shields.io/github/license/ultraq/fetch-utils.svg?maxAge=2592000)](https://github.com/ultraq/fetch-utils/blob/master/LICENSE.txt)

A collection of utilities for working with the Fetch API.


Installation
------------

```
npm install @ultraq/fetch-utils
```


API
---

### checkStatus(reponse)

Make sure the response from the server is an OK one, throwing an error if it
isn't.  Usually chained right after the fetch request, eg:

```javascript
fetch(/* ... */)
  .then(checkStatus)
  .then(response => {
  	// ...
  });
```

### responseAsJson(response)

Assumes a JSON response and attempts to parse and return it as a JavaScript
object.  Usually chained right after the response is deemed OK, eg:

```javascript
fetch(/* ... */)
  .then(checkStatus)
  .then(responseAsJson)
  .then(object => {
  	// ...
  });
```

### responseAsText(response)

Process the response body as a string.  Usually chained right after the response
is deemed OK, eg:

```javascript
fetch(/* ... */)
  .then(checkStatus)
  .then(responseAsText)
  .then(string => {
  	// ...
  });
```
