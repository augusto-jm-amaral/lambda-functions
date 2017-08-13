import test from 'ava'
import lambdaTester from 'lambda-tester'

import { users } from './../../index.js'

const requestGenerator = new RequestGenerator()

test('GET hello', async t => {

	const request = requestGenerator.generate('GET')

	await lambdaTester( users )
		.event(request)
		.expectResult( (result) => t.is(result.statusCode, 200) )
})

test('POST hello', async t => {

	const request = requestGenerator.generate('POST')

	await lambdaTester( users )
		.event(request)
		.expectResult( (result) => t.is(result.statusCode, 201) )
})

test('PUT hello', async t => {

	const request = requestGenerator.generate('PUT')

	await lambdaTester( users )
		.event(request)
		.expectResult( (result) => t.is(result.statusCode, 200) )
})

test('DELETE hello', async t => {

	const request = requestGenerator.generate('DELETE')

	await lambdaTester( users )
		.event(request)
		.expectResult( (result) => t.is(result.statusCode, 204) )
})
