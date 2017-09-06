import { ITab } from './tab.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() tabConfig: ITab;

  constructor() { }

  ngOnInit() {

  }

  get title(): string {
    return this.tabConfig.title;
  }

  set title(title: string) {
    this.tabConfig.title = title;
  }

  get id(): number {
    return this.tabConfig.id;
  }

  set id(id: number) {
    this.tabConfig.id = id;
  }
  get active(): boolean {
    return this.tabConfig.active;
  }

  set active(active: boolean) {
    this.tabConfig.active = active;
  }

  get contentRef() {
    return this.tabConfig.contentRef;
  }

  set contentRef(contentRef: any) {
    this.tabConfig.contentRef = contentRef;
  }


}
