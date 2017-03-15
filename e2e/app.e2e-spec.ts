import { BrightChenMing.Github.IoPage } from './app.po';

describe('bright-chen-ming.github.io App', () => {
  let page: BrightChenMing.Github.IoPage;

  beforeEach(() => {
    page = new BrightChenMing.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
