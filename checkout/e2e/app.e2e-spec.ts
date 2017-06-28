import { CheckoutPage } from './app.po';

describe('checkout App', function() {
  let page: CheckoutPage;

  beforeEach(() => {
    page = new CheckoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
