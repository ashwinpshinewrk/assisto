import { redirect } from '@sveltejs/kit'


export async function load({fetch,parent}){

}

export const actions =  {
    default : async ({request,locals,cookies}) => {
        const data = await request.formData()
        const car = (data.get('car') ?? 'coupe').toString()
        const date = new Date( Date.parse((data.get('date') ?? '').toString()))
        const time = (data.get('time') ?? '10').toString()
        const service = (data.get('service') ?? 'full').toString()
        if(date.toString() === ''){
            console.log('Please enter a date')
             throw redirect(302,'/customer/appoiment')
        }
        const user_id = cookies.get('id') ?? ''
        const appoiment = {
            "field" : user_id,
            "carType" : car,
            "date" : date.toISOString(),
            "time" : time,
            "completed"  : false

        }

        const resp = await locals.pb.collection('appointment').create(appoiment)
        if(resp){
            console.log('fuck')
            redirect(302,'/customer')
            
        }
    }
}