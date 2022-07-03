import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data) => this.view.drawNews(data))
        );
        this.controller.getSources((data) => this.view.drawSources(data));
        this.sortSources();
    }

    private sortSources(): void {
        setTimeout(this.showSorted.bind(this), 350);
        const alphabet = document.querySelector('.alphabet') as HTMLElement;

        alphabet.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;

            if (target.className === 'letter') {
                alphabet.querySelectorAll('.letter').forEach((letter) => {
                    letter.classList.remove('pressed');
                });
                target.classList.add('pressed');
                this.showSorted(target.innerHTML);
            }
        });
    }

    private showSorted(letter = 'A') {
        let sourceCounter = 0;
        const sourcePlaceholder = document.querySelector('.sources-placeholder') as HTMLElement;

        document.querySelectorAll('.source__item').forEach((item) => {
            const sourceId = (item as HTMLElement).dataset.sourceId as string;
            const firstLetter = sourceId[0].toUpperCase();

            if (firstLetter !== letter) {
                (item as HTMLElement).style.display = 'none';
            } else {
                (item as HTMLElement).style.display = 'block';
                sourceCounter += 1;
            }
        });

        if (sourceCounter) {
            sourcePlaceholder.style.display = 'none';
        } else {
            sourcePlaceholder.style.display = 'block';
        }
    }
}

export default App;
