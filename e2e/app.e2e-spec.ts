import { UtahHikesPage } from './app.po';

describe('utah-hikes App', () => {
  let page: UtahHikesPage;

  beforeEach(() => {
    page = new UtahHikesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
