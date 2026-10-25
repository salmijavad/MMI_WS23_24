const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI');

describe('celsiusToFahrenheit()', function () {

    it('converts 0°C to 32°F', function () {
        expect(apiTemperature.celsiusToFahrenheit(0)).to.equal(32);
    });

    it('converts 100°C to 212°F', function () {
        expect(apiTemperature.celsiusToFahrenheit(100)).to.equal(212);
    });

    it('converts -40°C to -40°F', function () {
        expect(apiTemperature.celsiusToFahrenheit(-40)).to.equal(-40);
    });

    it('converts 37°C to approximately 98.6°F', function () {
        expect(apiTemperature.celsiusToFahrenheit(37)).to.be.closeTo(98.6, 0.01);
    });
});

describe('fahrenheitToCelcius()', function () {

    it('converts 32°F to 0°C', function () {
        expect(apiTemperature.fahrenheitToCelcius(32)).to.equal(0);
    });

    it('converts 212°F to 100°C', function () {
        expect(apiTemperature.fahrenheitToCelcius(212)).to.equal(100);
    });

    it('converts -40°F to -40°C', function () {
        expect(apiTemperature.fahrenheitToCelcius(-40)).to.equal(-40);
    });

    it('converts 98.6°F to approximately 37°C', function () {
        expect(apiTemperature.fahrenheitToCelcius(98.6)).to.be.closeTo(37, 0.01);
    });
});
