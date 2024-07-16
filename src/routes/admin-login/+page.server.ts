import { redirect } from '@sveltejs/kit';

export async function load({ fetch,cookies }) {
	const auth =  cookies.get('authType')
	if (auth !== ''){
		return {
			code : 400
		}
	}
	return {
		code :200 
	}

}

export const actions = {
	default: async ({ request, locals,cookies }) => {
		const formData = await request.formData();

		const id = (formData.get("user-id") ?? "").toString();
		const password = (formData.get("password") ?? "").toString();

		const response = await locals.pb
			.collection("employees")
			.authWithPassword(id, password);
		cookies.delete('authType',{path : '/'})
		cookies.delete('name',{path : '/'})
		cookies.delete('id',{path : '/'})

		
		cookies.set('authType','admin',{
			path : "/",
			httpOnly : true,
		})
		cookies.set('name',response.record.name,{
			path: '/',
			httpOnly : true
		})
		cookies.set('id',response.record.id,{
			path: '/',
			httpOnly : true
		})
		redirect(302,'/admin')
	}
};
