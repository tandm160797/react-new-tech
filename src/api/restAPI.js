import axiosClient from '$api/axiosClient';

const restAPI = {
	index(params) {
		const url = '/rest';
		return axiosClient.get(url, { params });
	},

	create(data) {
		const url = '/rest';
		return axiosClient.post(url, data);
	},

	show(id) {
		const url = `/rest/${id}`;
		return axiosClient.get(url);
	},

	update(data) {
		const url = `/rest/${id}`;
		return axiosClient.put(url, data);
	},

	destroy(id) {
		const url = `/rest/${id}`;
		return axiosClient.delete(url);
	}
};

export default restAPI;
