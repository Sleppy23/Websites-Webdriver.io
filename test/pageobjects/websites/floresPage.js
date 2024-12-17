const floresLogo = "#1298527157";

describe("Verify Flores website loads", () => {
  it("should verify the website title", async () => {
    await browser.url("https://www.afloresconstruction.com");
    expect(floresLogo).toBePresent();
    await browser.pause(2000);
  });
});
