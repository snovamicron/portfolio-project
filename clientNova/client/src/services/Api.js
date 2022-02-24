
import axios from 'axios'
import { GetHeaderAndParamsData } from '../Utils/commonUtils'

export const GetData = async (paramData, headerData, formData, jsonText) =>{

    const { url, type } = formData
    const getParamsData = GetHeaderAndParamsData(paramData)
    const getHeaderData = GetHeaderAndParamsData(headerData)

    try {
        const response = await axios({
            method: type,
            url,
            data: jsonText,
            headers: getHeaderData,
            params: getParamsData

        })
        return response
    } catch (error) {
        console.log('Get error while calling GetData', error)
        return 'error'
    }
}