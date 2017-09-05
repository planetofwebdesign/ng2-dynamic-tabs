import { Ng2DynamicTabsPage } from './app.po';

describe('ng2-dynamic-tabs App', () => {
  let page: Ng2DynamicTabsPage;

  beforeEach(() => {
    page = new Ng2DynamicTabsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
