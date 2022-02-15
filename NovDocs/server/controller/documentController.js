import documnetSchema from "../schema/documnetSchema.js";

export const getDocumnet = async(id)=>{
    if( id === null ) return 

    const documnet = await documnetSchema.findById(id)

    if(documnet) return documnet

    return await documnetSchema.create({ _id:id, data:""})
}

export const saveDocumnet = async (id, data)=>{
    await documnetSchema.findByIdAndUpdate(id, { data })
}