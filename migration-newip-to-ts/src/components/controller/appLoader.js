import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '16762e38ae944c428856d81441dcd040', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
