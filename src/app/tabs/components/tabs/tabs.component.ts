import { ITab } from '../tab/tab.model';
import { AfterContentInit, Component, ContentChildren, QueryList, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import 'rxjs/Rx';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { TabComponent } from '../../components/tab/tab.component';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChild('container') container: any;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  private contentSbj = new BehaviorSubject<any>(null);
  content = this.contentSbj.asObservable();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {

    this.tabs.toArray().forEach((eachTab: ITab) => eachTab.active = false);
    tab.active = true;
    const factory = this.componentFactoryResolver.resolveComponentFactory(tab.contentRef);
    this.vc.clear();
    this.vc.createComponent(factory);
  }
}
