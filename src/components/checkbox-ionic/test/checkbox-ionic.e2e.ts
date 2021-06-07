import { newE2EPage } from '@stencil/core/testing';

describe('checkbox-ionic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<checkbox-ionic></checkbox-ionic>');

    const element = await page.find('checkbox-ionic');
    expect(element).toHaveClass('hydrated');
  });
});
