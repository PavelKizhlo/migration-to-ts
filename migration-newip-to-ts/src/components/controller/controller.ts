import AppLoader from './appLoader';
import { CallbackVoid } from '../interfaces/types';
import { ResponseNews, ResponseSource } from '../interfaces/interfaces';

class AppController extends AppLoader {
    getSources<T extends ResponseSource>(callback: CallbackVoid<T>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews<T extends ResponseNews>(e: Event, callback: CallbackVoid<T>): void {
        let target = e.target;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target && target !== newsContainer) {
            if ((target as HTMLElement).classList.contains('source__item')) {
                const sourceId = (target as HTMLElement).getAttribute('data-source-id');
                if (newsContainer && sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = (target as HTMLElement).parentNode;
        }
    }
}

export default AppController;
