import {checkStatus, responseAsJson, responseAsText} from './fetch-utils.js';

import {Response} from 'node-fetch';

/**
 * Tests for the fetch utilities.
 */
describe('fetch-utils', function() {

	describe('#checkStatus', function() {

		test('Responses returned when OK', function() {
			let response = new Response(JSON.stringify({}));
			expect(checkStatus(response)).toBe(response);
		});

		test('Error thrown when not OK', function() {
			const status = 500;
			const statusText = 'Boo!';
			let response = new Response(JSON.stringify({}), {
				status,
				statusText
			});
			try {
				expect.assertions(2);
				checkStatus(response);
			}
			catch (error) {
				expect(error.message).toBe(`${status} - ${statusText}`);
				expect(error.response).toBe(response);
			}
		});

		test('When redirect end up at correct place', function() {
			const status = 200;
			const statusText = 'Boo!';
			const url = 'http://test.com';
			let response = new Response(JSON.stringify({}), {
				status,
				statusText,
				redirected: true,
				url
			});
			try {
				checkStatus(response);
			}
			catch (error) {
				expect(error.message).toBe(`${status} - ${statusText}`);
				expect(error.response).toBe(response);
				expect(error.redirectingSoIgnore).toBe(true);

				expect(window.location.href).toBe(url);
			}
		});
	});

	describe('#responseAsJson', function() {

		test('JSON responses returned', async function() {
			const responseBody = {
				message: 'Hello!'
			};
			let result = await responseAsJson(new Response(JSON.stringify(responseBody)));
			expect(result).toEqual(responseBody);
		});

		test('Empty responses returned as `null`', async function() {
			let result = await responseAsJson(new Response(''));
			expect(result).toBeNull();
		});
	});

	describe('#responseAsText', function() {

		test('Text responses returned', async function() {
			const responseBody = 'Hello!';
			let result = await responseAsText(new Response(responseBody));
			expect(result).toEqual(responseBody);
		});
	});
});
