// const HomePage = require('../pageobjects/flores/homePage.js');
// import floresHomePage from '../pageobjects/flores/floresPage.js';

const floresLogo = "#1298527157";
const forwardLogo = "#1090325509";
const redRemodelLogo = "#1051503516";
const cdcTitleLogo = "#1276536885";
const carrilDiamanteLogo = "#1337843161";
const americasBestLogo = "#1371784515";
const goldenEagleLawnCareLogo = "#1359157006";
const pgiLogo = "#1276536885";
const jrConstructionLogo = "#1829253137";
const cruzControlWeldingLogo = "#1359157006";

describe("Verify Flores website loads", () => {
  it("should verify the website title", async () => {
    await browser.url("https://www.afloresconstruction.com");
    expect(floresLogo).toBePresent();
    await browser.pause(2000);
  });
});

describe("Verify Forward Freight llc website loads", () => {
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

describe("verify Carriers Dispatch Services website loads", () => {
  it("should verofy the website title", async () => {
    await browser.url("https://www.carrierdispatchservices.com/");
    expect(cdcTitleLogo).toBePresent();
    await browser.pause(2000);
  });
});

describe("verify Carrril diamante website loads", () => {
  it("should loads the websites home page", async () => {
    await browser.url("https://www.carrildiamante.com/");
    expect(carrilDiamanteLogo).toBePresent();
    await browser.pause(2000);
  });
});

// This is a website that is not working, the url is not able to be found

describe("Verify that Americas Best website loads", () => {
  it("should load website home page", async () => {
    await broswer.url("http://www.americasbesthi.com/");
    expect(americasBestLogo).toBePresent();
  });
});

describe("Verify Golden Eagle Lawn Care website loads", () => {
  it("Should load websites home page", async () => {
    await browser.url("https://www.goldeneaglelawncare.com/");
    expect(goldenEagleLawnCareLogo).toBePresent();
    await browser.pause(2000);
  });
});

describe("Verify PGI website loads", () => {
  it("Should load websites home page", async () => {
    await browser.url("https://www.pginsurancetaxes.com/");
    expect(pgiLogo).toBePresent();
    await browser.pause(2000);
  });
});

describe("Verify JR Construction website loads", () => {
  it("Should load home page", async () => {
    await browser.url("https://www.jrconstructionusa.com/");
    expect(jrConstructionLogo).toBePresent();
    await browser.url(2000);
  });
});

describe("Verify that Cruz Control Welding website loads", () => {
  it("Should load website home page", async () => {
    await browser.url("https://www.cruzcontrolwelding.com/");
    expect(cruzControlWeldingLogo).toBePresent();
    await browser.url(2000);
  });
});
