var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0 Celsius");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
    test('80C != 190 Farenheit', function() {
        original.value = "80C";
        calculate();
        assert.notEqual(converted.innerHTML, "190 Farenheit");
    });
    test('18.333333333333332C < 99F', function() {
        original.value = "18.333333333333332 Celsius";
        calculate();
        assert.isAbove(converted.innerHTML, "99F" );
    })
    
});