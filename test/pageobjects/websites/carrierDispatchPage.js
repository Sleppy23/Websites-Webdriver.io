const cdcTitleLogo = "#1276536885";

describe("verify Carriers Dispatch Services website loads", () => {
  it("should verofy the website title", async () => {
    await browser.url("https://www.carrierdispatchservices.com/");
    expect(cdcTitleLogo).toBePresent();
    await browser.pause(2000);
  });
});
