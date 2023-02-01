
import getEnvVars from "../environment";
const { apiUrl } = getEnvVars();

export const getHoliyday = () => {
    let xhr = new XMLHttpRequest();
    let holidayArr=[]
    
    //공휴일 api
    let url = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo'; /*URL*/
    let queryParams = '?' + encodeURIComponent('serviceKey') + '='+ apiUrl; /*Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('0'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20'); /**/
    queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent('2023'); /**/
    // queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent('02'); /**/
    queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /**/
    xhr.open('GET', url + queryParams);
    
    xhr.onreadystatechange = function () {
        //////return이 즉시호출함수에서 안됨
        if (this.readyState == 4) {
                let dataAndTag = this.responseText;
                holidayArr.push(...JSON.parse(dataAndTag).response.body.items.item)
                console.log(holidayArr)
                // return holidayArr
            }
            // xhr.send('');
        };
}


