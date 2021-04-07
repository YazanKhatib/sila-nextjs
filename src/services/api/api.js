import axios from 'axios';

export const URL = 'http://90.153.255.46:8888';

class API {
    
    // URL
    url = URL;

    // Lang
    lang = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : 'en';

    // API Config
    config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With' : 'XMLHttpRequest',
            'platform' : 'web'
        }
    }

    /**
     * Others APIs
     * @param {}
     */
    articles() {

        var endpoints = {};

        endpoints.articles = ( query, name='article' ) => axios.get( `${this.url}/${name}`, { params: query, headers: this.config.headers } )

        endpoints.article = ( id, name=`article/${id}` ) => axios.get( `${this.url}/${name}`, { params: {}, headers: this.config.headers } )

        return endpoints

    }

    /**
     * Others APIs
     * @param {}
     */
    partners() {

        var endpoints = {};

        endpoints.partners = ( query, name='partner' ) => axios.get( `${this.url}/${name}`, { params: query, headers: this.config.headers } )

        return endpoints

    }

}

export default API