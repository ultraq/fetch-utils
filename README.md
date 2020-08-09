
fetch-utils
===========

[![Build Status](https://travis-ci.com/ultraq/fetch-utils.svg?branch=master)](https://travis-ci.com/ultraq/fetch-utils)
[![Coverage Status](https://coveralls.io/repos/github/ultraq/fetch-utils/badge.svg?branch=master)](https://coveralls.io/github/ultraq/fetch-utils?branch=master)
[![npm](https://img.shields.io/npm/v/@ultraq/fetch-utils.svg?maxAge=3600)](https://www.npmjs.com/package/@ultraq/fetch-utils)
[![Bundlephobia minified size](https://img.shields.io/bundlephobia/min/@ultraq/fetch-utils)](https://bundlephobia.com/result?p=@ultraq/fetch-utils)

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
