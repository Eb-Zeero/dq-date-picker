import { newE2EPage } from '@stencil/core/testing';

describe('dq-date-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<dq-date-picker></dq-date-picker>');
    const element = await page.find('dq-date-picker');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<dq-date-picker></dq-date-picker>');
    const component = await page.find('dq-date-picker');
    const element = await page.find('dq-date-picker >>> div');
    expect(element.textContent).toEqual("Hello, World! I'm Private");

    component.setProperty('name', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual("Hello, World! I'm James");

  });
});
