import { MitraisFPFrontEndPage } from './app.po';

describe('mitrais-fp-front-end App', () => {
  let page: MitraisFPFrontEndPage;

  beforeEach(() => {
    page = new MitraisFPFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
