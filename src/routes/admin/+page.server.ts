import { redirect } from '@sveltejs/kit';

export async function load({cookies}){
    const auth = cookies.get('authType')
    if(auth === 'user'){
        redirect(302,'/customer')
    }else if(auth !== 'admin'){
        redirect(302,'/')
    }
}

export const actions = {
    default : async ({cookies}) => {
        cookies.delete('authType',{path : '/'})
        cookies.delete('name',{path : '/'})
        cookies.delete('id',{path : '/'})
        throw redirect(302,'/')
    }
}