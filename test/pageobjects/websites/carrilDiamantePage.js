const carrilDiamanteLogo = "#1337843161";

describe("verify Carrril diamante website loads", () => {
  it("should loads the websites home page", async () => {
    await browser.url("https://www.carrildiamante.com/");
    expect(carrilDiamanteLogo).toBePresent();
    await browser.pause(2000);
  });
});
