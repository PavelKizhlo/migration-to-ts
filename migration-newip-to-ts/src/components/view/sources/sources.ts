import './sources.css';
import { SourceData, View } from '../../interfaces/interfaces';

class Sources implements View {
    draw(data: SourceData[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);
            (sourceClone.querySelector('.source__item') as HTMLElement).style.display = 'none';

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}

export default Sources;
