import { redirect } from '@sveltejs/kit'

export async function load({cookies}){
    const name = cookies.get('name') ?? 'User'
    return {
        name : name
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