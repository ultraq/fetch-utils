/* 
 * Copyright 2019, Emanuel Rabina (http://www.ultraq.net.nz/)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Make sure the response from the server is an OK one, throwing an error if it
 * isn't.
 * 
 * @param {Response} response
 * @return {Response}
 */
export function checkStatus(response) {
	if (!response.ok) {
		throw new Error(`${response.code} - ${response.statusText}`);
	}
	return response;
}

/**
 * Assumes a JSON response and attempts to parse and return it as a JavaScript
 * object.
 * 
 * @param {Response} response
 * @return {Promise} A promise of the parsed JSON response, or `null` if the
 *   response could not be parsed.
 */
export function responseAsJson(response) {
	return response.text().then(responseAsText => JSON.parse(responseAsText || null));
}

/**
 * Process the response body as a string.
 * 
 * @param {Response} response
 * @return {Promise} A promise of the response body.
 */
export function responseAsText(response) {
	return response.text();
}
