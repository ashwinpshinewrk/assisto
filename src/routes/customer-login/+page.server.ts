import { redirect } from '@sveltejs/kit';

export async function load({ fetch }) {}

export const actions = {
	default: async ({ request, locals,cookies }) => {
		const formData = await request.formData();

		const email = (formData.get("email") ?? "").toString();
		const password = (formData.get("password") ?? "").toString();

		const response = await locals.pb
			.collection("users")
			.authWithPassword(email, password);
            cookies.delete('authType',{path : '/'})
            cookies.delete('name',{path : '/'})
            cookies.delete('id',{path : '/'})
    
            
            cookies.set('authType','user',{
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
        redirect(302,'/customer')
	},
};
