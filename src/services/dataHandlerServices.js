
/** QueryString To Object */
export const queryStrToObj = str => {

    let perPage = 10;
    let current = 1;
    let keyword = null;

    if(str){

        let queryString = str.slice(1).split('&');

        queryString.forEach( item => {

            let key = item.split('=')[0];
            let val = item.split('=')[1];

            switch(key){

                case 'page':
                    current = val;
                    break;
                case 'keyword':
                    keyword = val;
                    break;
                case 'perPage':
                    perPage = val;
                    break;
                default:
                    break;
            }
        });
    }

    return {
        current : current,
        perPage : perPage,
        keyword : keyword
    }
}


/** Creating an array of numbers for pager buttons */
export const pagerHandler = ( current , last  ) => {

    let pagerNumsArray = [];
    let start = 1;
    let end  = 1;

    if( (current > 0 && current < 3) || ( current >= 3 && current < 5) ){
        
        end = last < 5 ? last : 5;
    } else if ( current >= 5 ){

        start = current - 2;
        end  =  current + 2;

        if( last < (current + 2)){
            end = last;
            start = last - 4 ;
        }
    }

    for( let i = start ; i <= end ; i++ ){
        pagerNumsArray.push(i)
    }

    return pagerNumsArray;
}

/** Converts formObject to postData  */
export const formObjToPostData = obj => {

    let postData = {};

    Object.keys(obj).forEach(item => {
        // if(obj[item].value){
        // }
        postData[item] = obj[item].value;

    }); 

    return postData;
}

/** Converts formObject to formData  ( file upload ) */
export const formObjToformtData = obj => {

    let postData = new FormData();

    Object.keys(obj).forEach(item => {
        if(obj[item].value){
            postData.append(item , obj[item].value);
        }
    }); 

    return postData;
}

