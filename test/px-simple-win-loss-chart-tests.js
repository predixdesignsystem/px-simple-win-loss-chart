document.addEventListener("WebComponentsReady", function() {
  runTests();
});

function getElem(comp, tag) {
  return comp.shadowRoot ? comp.shadowRoot.querySelector(tag) : comp.querySelector(tag);
}

function getAllElems(comp, tag) {
  return comp.shadowRoot ? comp.shadowRoot.querySelectorAll(tag) : comp.querySelectorAll(tag);
}

function runTests() {
  suite('Custom Automation Tests for px-simple-bar-chart', function() {
    var fixture1,
        fixture2,
        fixture3,
        fixture4;

    suiteSetup(function(done) {
      fixture1 = document.getElementById("fixture1");
      fixture2 = document.getElementById("fixture2");
      fixture3 = document.getElementById("fixture3");
      fixture4 = document.getElementById("fixture4");
      setTimeout(function() {
        done();
      }, 1000);
    });

    test('fixture1 exists', function() {
      var rect = getElem(fixture1, 'rect');
      assert.equal(getComputedStyle(rect).visibility,"visible");
    });

    test('fixture1 SVG element has default width', function() {
      var svg = getElem(fixture1, 'svg');
      assert.equal(getComputedStyle(svg).width,"300px");
    });

    test('fixture1 SVG element has default height', function() {
      var svg = getElem(fixture1, 'svg');
      assert.equal(getComputedStyle(svg).height,"50px");
    });

    test('fixture2 height is 200', function() {
      var svg = getElem(fixture2, 'svg');
      assert.equal(getComputedStyle(svg).height,"200px");
    });

    test('fixture3 SVG element has default width', function() {
      var svg = getElem(fixture3, 'svg');
      assert.equal(getComputedStyle(svg).width,"299px");
    });

    test('fixture3 count all rectangle in chart equals the data array', function() {
      var rect = getAllElems(fixture3, 'rect');
      assert.equal(rect.length,"7");
    });


    test('fixture4 SVG element has assigned width', function() {
      var svg = getElem(fixture4, 'svg');
      assert.equal(getComputedStyle(svg).width,"299px");
    });

    test('fixture4 SVG element has assigned height', function() {
      var svg = getElem(fixture4, 'svg');
      assert.equal(getComputedStyle(svg).height,"200px");
    });

    test('fixture4 test for resize chart by height', function() {
      document.getElementById('fixture_dimensions').style.height = '270px';
      window.dispatchEvent(new Event('resize'));

      setTimeout(function() {
        var svg = getElem(fixture4, 'svg');
        assert.equal(getComputedStyle(svg).height,"270px");
      }, 1000);
    });

    test('fixture4 test for resize chart by width', function(done) {
      document.getElementById('fixture_dimensions').style.width = '400px';
      window.dispatchEvent(new Event('resize'));

      setTimeout(function() {
        var svg = getElem(fixture4, 'svg');
        assert.equal(getComputedStyle(svg).width,"403px");
        done();
      }, 1000);

    });
  });
}