
const CheckValidJson = (text)=>{
    if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))){
        return true
    }else{
        return false
    }

}

const CheckValidation = (paramData, headerData, formData, jsonText, setErrorMsg)=>{

    if(!formData.url){
        setErrorMsg('Request URL is missing !')
        return false
    }

    if(!jsonText){
        return true
    }

    if(!CheckValidJson(jsonText)){
        setErrorMsg('Text is not valid JSON !')
        return false
    }

}


export const GetHeaderAndParamsData = (objArr) => {
    let obj = {}
    objArr.forEach(data => {
        console.log(data.hasOwnProperty('checked'));
        if(data.hasOwnProperty('checked') && data.checked){
            obj = { ...obj, [data.key]: data.value}
        }
    })

    return obj
}

export default CheckValidation