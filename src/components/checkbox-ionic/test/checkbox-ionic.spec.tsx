import { newSpecPage } from '@stencil/core/testing';
import { CheckboxIonic } from '../checkbox-ionic';

describe('checkbox-ionic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckboxIonic],
      html: `<checkbox-ionic></checkbox-ionic>`,
    });
    expect(page.root).toEqualHtml(`
      <checkbox-ionic>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkbox-ionic>
    `);
  });
});
