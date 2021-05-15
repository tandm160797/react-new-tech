import axios from 'axios';

const axiosOptions = {
	baseURL: process.env.baseURL,
	headers: {
		'Content-Type': 'application/json'
	}
};

const axiosClient = axios.create(axiosOptions);

axiosClient.interceptors.request.use(
	function (req) {
		return req;
	},
	function (err) {
		return Promise.reject(err);
	}
);

axiosClient.interceptors.response.use(
	(res) => {
		const { data } = res;
		if (data) {
			return data;
		}
		return res;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export default axiosClient;
