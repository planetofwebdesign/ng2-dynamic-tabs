import { ITab } from './tab.model';

export class TabConfig implements ITab {

    constructor(
        public id: number,
        public title: string,
        public contentRef: any,
        public active: boolean = false
    ) { }
}
