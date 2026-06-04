export interface User{
    id: number;
    name: string;
    location: string;
    role: string;
}

export const getUsrAcction = async (id:number) =>{
    return{
        id,
        name: 'sebastian',
        location: 'Toronto, Canada',
        role: 'Software Engineer',
    }
}