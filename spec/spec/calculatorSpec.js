// spec/calculatorSpec.js
describe('Interest Rate Calculator', function() {
    beforeAll(() => {
        console.log('calculateInterest:', window.calculateInterest);
    });

    it('should calculate interest correctly', function() {
        // Arrange
        const principal = 1000;
        const rate = 5;
        const time = 1;

        // Act
        const result = window.calculateInterest(principal, rate, time);

        // Assert
        expect(result.principal).toBe(1000);
        expect(result.interest).toBe(50);
        expect(result.amount).toBe(1050); // Principal + Interest
    });
});
