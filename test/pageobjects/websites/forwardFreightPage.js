const forwardLogo = "#1090325509";

describe("Verify Forward Freight llc website loads", () => {
  it("should verify the website title", async () => {
    await browser.url("https://www.forwardfreightllc.com");
    expect(forwardLogo).toBePresent();
    await browser.pause(2000);
  });
});
