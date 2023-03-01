function multipleObject(object) {

	for (let key in object) {
		if ( (typeof object[key] == 'number') ) {
			object[key] *= 2;
		}
	}
}