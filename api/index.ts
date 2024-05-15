export const callApi = async (cate: any, num: any) => {
	try {
		const data = await fetch(
			`https://pixabay.com/api/?key=39241470-931065f679600f7ee29e3f931&category=${cate}&page=${num}`
		).then((res) => res.json());

		return data;
	} catch (error) {
		return error;
	}
};
export const checkApi = async (search: any) => {
	try {
		const data = await fetch(
			`https://pixabay.com/api/?key=39241470-931065f679600f7ee29e3f931&q=${search}&image_type=photo`
		).then((res) => res.json());

		return data;
	} catch (error) {
		return error;
	}
};
export const getImage = async (id: any) => {
	try {
		const data = await fetch(
			`https://pixabay.com/api/?key=39241470-931065f679600f7ee29e3f931&id=${id}`
		).then((res) => res.json());
		return data;
	} catch (error) {
		return error;
	}
};
