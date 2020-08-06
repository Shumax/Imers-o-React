
const BASE_URL = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://devsflix-by-shumax.herokuapp.com';

export default {
	BASE_URL
};