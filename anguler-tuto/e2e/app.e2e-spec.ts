import { AggularTutoPage } from './app.po';

describe('aggular-tuto App', function() {
  let page: AggularTutoPage;

  beforeEach(() => {
    page = new AggularTutoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
