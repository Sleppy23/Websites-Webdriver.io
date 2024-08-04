// const HomePage = require('../pageobjects/flores/homePage.js');
// import floresHomePage from '../pageobjects/flores/floresPage.js';

const floresLogo = "#1298527157";
const forwardLogo = "#1090325509";
const redRemodelLogo = "#1051503516";

describe("Verify Flores website loads", () => {
  it("should verify the website title", async () => {
    await browser.url("https://www.afloresconstruction.com");
    expect(floresLogo).toBePresent();
    await browser.pause(2000);
  });
});

describe("Verify Forward Freight llc website loads ", () => {
  it("should verify the website title", async () => {
    await browser.url("https://www.forwardfreightllc.com");
    expect(forwardLogo).toBePresent();
    await browser.pause(2000);
  });
});

describe("Verify Red Remodels website loads", () => {
  it("should verify the website title", async () => {
    await browser.url("https://redremodels.com/");
    expect(redRemodelLogo).toBePresent();
    await browser.pause(2000);
  });
});

// describe('verify ')
