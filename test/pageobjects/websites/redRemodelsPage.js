const redRemodelLogo = "#1051503516";

describe("Verify Red Remodels website loads", () => {
  it("should verify the website title", async () => {
    await browser.url("https://redremodels.com/");
    expect(redRemodelLogo).toBePresent();
    await browser.pause(2000);
  });
});
