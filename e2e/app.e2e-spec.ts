import { OccfPage } from './app.po';

describe('occf App', () => {
  let page: OccfPage;

  beforeEach(() => {
    page = new OccfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
