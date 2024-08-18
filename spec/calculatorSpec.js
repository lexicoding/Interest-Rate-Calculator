describe('Interest Rate Calculator', function() {
    // Test case 1
    it('should calculate interest correctly', function() {
        // Arrange
        const principal = 1000;
        const rate = 5;
        const time = 1;

        // Act
        const result = calculateInterest(principal, rate, time);

        // Assert
        expect(result.principal).toBe(1000);
        expect(result.interest).toBe(50);
        expect(result.amount).toBe(1050); // Principal + Interest
    });

    // Test case 2
    it('should handle zero interest rate', function() {
        // Arrange
        const principal = 1000;
        const rate = 0;
        const time = 1;

        // Act
        const result = calculateInterest(principal, rate, time);

        // Assert
        expect(result.principal).toBe(1000);
        expect(result.interest).toBe(0);
        expect(result.amount).toBe(1000); // Principal + Interest
    });
});
