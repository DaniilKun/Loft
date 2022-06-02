import axios from 'axios'

export const APIGetProducts = async () => {
	const { data } = await axios.get('/products')
	return data
}
