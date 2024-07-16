import { redirect } from '@sveltejs/kit';

export async function load({cookies}){
    const auth = cookies.get('authType')

    if(auth === 'admin'){
        redirect(302,'/admin')
    }else if(auth !== 'user'){
        redirect(302,'/')
    }
}
