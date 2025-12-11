import * as wixPatterns from '@wix/patterns';
import * as wixPatternsProvider  from '@wix/patterns/provider';

describe('require-entry', () => {
  it('requires entry', () => {
    expect(wixPatterns.Table).toBeTruthy();
    expect(wixPatternsProvider.WixPatternsProvider).toBeTruthy();
  });
});
