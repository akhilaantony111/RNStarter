//Get,post,put fetch methods are written as common
export const Headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}
const get = (url) => {
    return fetch(url,
        {
            method: 'GET',
            headers: Headers,
            credentials: 'include',
        });

}
const post = (url, data) => {
    return fetch(url,
        {
            method: 'POST',
            headers: Headers,
            body: JSON.stringify(
                data
            ),
            credentials: 'include'
        })

}

const put = (url, data) => {
    return fetch(url,
        {
            method: 'PUT',
            headers: Headers,
            body: JSON.stringify(
                data
            ),
            credentials: 'include'
        }
    )
}

export const apiMethod = {
    get, post, put
}
