const ACCESS_TOKEN = 'pk.eyJ1IjoibHV0cmluZGUiLCJhIjoiY2wzbTZqdGhuMDFsZjNjcGE0emJtZWlnbyJ9.vVCzS9YnqtD0W16mslEHOA';

const forwardGeocoding = async function (address) {
	let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
			+address + 'country=BR&.json?access_token='
			+ ACCESS_TOKEN + '&limit=1';

	const response = await fetch(url, {
		method: 'GET',
		redirect: 'follow'
	})

	const body = JSON.parse(await response.text())
	
	if (body.features.length != 0) {
		let longitude = body.features[0].center[0]
		let latitude = body.features[0].center[1]

		return {
			latitude,
			longitude
		}
	}

	return null
}

export { forwardGeocoding }