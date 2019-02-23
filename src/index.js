/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
	preferences.forEach(function(item, i, arr){
		if(i == preferences[preferences[preferences[i]-1]-1]-1){
			count++;	
		}
	})
	return Math.trunc(count / 3);
};