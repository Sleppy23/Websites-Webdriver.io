const pgiLogo = "#1276536885";

describe("Verify PGI website loads", () => {
  it("Should load websites home page", async () => {
    await browser.url("https://www.pginsurancetaxes.com/");
    expect(pgiLogo).toBePresent();
    await browser.pause(2000);
  });
});
