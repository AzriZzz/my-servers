import { MyServersPage } from './app.po';

describe('my-servers App', () => {
  let page: MyServersPage;

  beforeEach(() => {
    page = new MyServersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
