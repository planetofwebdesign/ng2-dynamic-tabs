import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import 'rxjs/Rx';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { TabComponent } from '../../components/tab/tab.component';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  private contentSbj = new BehaviorSubject<any>(null);
  content = this.contentSbj.asObservable();
  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
    this.contentSbj.next(tab.contentRef);
  }

}
