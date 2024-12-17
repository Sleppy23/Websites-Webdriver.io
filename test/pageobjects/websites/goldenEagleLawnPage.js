const goldenEagleLawnCareLogo = "#1359157006";

describe("Verify Golden Eagle Lawn Care website loads", () => {
  it("Should load websites home page", async () => {
    await browser.url("https://www.goldeneaglelawncare.com/");
    expect(goldenEagleLawnCareLogo).toBePresent();
    await browser.pause(2000);
  });
});
