const wixPatterns = require('@wix/patterns');
const { WixPatternsProvider } = require('@wix/patterns/provider');

describe('require-entry', () => {
  it('requires entry', () => {
    expect(wixPatterns.Table).toBeTruthy();
    expect(WixPatternsProvider).toBeTruthy();
  });
});
