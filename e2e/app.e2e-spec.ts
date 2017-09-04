import { MtsTelemedicinePage } from './app.po';

describe('mts-telemedicine App', () => {
  let page: MtsTelemedicinePage;

  beforeEach(() => {
    page = new MtsTelemedicinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
