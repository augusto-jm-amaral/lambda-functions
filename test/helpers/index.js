import request from './request.json'

// global.request = request
global.RequestGenerator = class RequestGenerator {
	generate (httpMethod) {
		return Object.assign({}, request, {"httpMethod": httpMethod})
	}
}