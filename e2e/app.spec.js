const { reloadApp } = require('detox-expo-helpers')

describe('order', () => {
  beforeEach(async () => {
    await reloadApp()
    await waitFor(element(by.id("tab-home")))
      .toBeVisible()
      .withTimeout(5000)
  })
  it('App start', async () => {
    await expect(element(by.id("tab-one"))).toBeVisible()
  })
})
