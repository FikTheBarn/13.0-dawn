    document.addEventListener('DOMContentLoaded', function() {
    var variantInfo250g = document.getElementById('250g-info');
    var variantInfo1000g = document.getElementById('1000g-info');
    var radioButtons = document.querySelectorAll('input[type="radio"]');

      function renderCup() {
return `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 335.908 243.039" style="margin-bottom: -4px; margin-left: 4px;">
<g id="noun-cup-1346320_1_" data-name="noun-cup-1346320(1)" transform="translate(-182.002 -158.481)">
<path id="Path_43886" data-name="Path 43886" d="M516.88,231.84C511.841,204.4,486.642,184.8,456.4,182V169.68a11.231,11.231,0,0,0-11.2-11.2h-252a11.231,11.231,0,0,0-11.2,11.2v94.641c0,75.6,61.6,137.2,137.2,137.2a137.364,137.364,0,0,0,129.92-92.961,32.9,32.9,0,0,0,7.84-1.121c39.758-7.277,66.641-41.438,59.918-75.6ZM434,264.32a114.8,114.8,0,0,1-229.6,0V180.879H434Zm20.719,20.719a129.1,129.1,0,0,0,1.68-20.719V204.4c19.6,2.238,35.281,14.559,38.641,31.359,3.922,21.844-14,43.684-40.32,49.281Z"/>
</g>
</svg>`;
                          }

    function updateVariantInfo() {
      var selectedOption = Array.from(radioButtons).find(function(radioButton) {
        return radioButton.checked && (radioButton.value.includes('250g') || radioButton.value.includes('1000g'));
      });

      if (selectedOption) {
        var selectedValue = selectedOption.value;
        var cupIcon = renderCup();
        if (selectedValue.includes('250g')) {
          variantInfo250g.innerHTML = '{% for variant in product.variants %}{% if variant.title == "250g" %}{{ 18 | times: variant.price | divided_by: 250 | money_with_currency }} ' + cupIcon + ' {{ "|" }} {{ 4 | times: variant.price | money_with_currency }} per kg {% endif %}{% endfor %}';
          variantInfo1000g.innerHTML = ''; // Clear the other info
        } else if (selectedValue.includes('1000g')) {
          variantInfo1000g.innerHTML = '{% for variant in product.variants %}{% if variant.title == "1000g" %}{{ 18 | times: variant.price | divided_by: 1000 | money_with_currency }} ' + cupIcon + ' {{ "|" }} {{ variant.price | money_with_currency }} per kg {% endif %}{% endfor %}';
          variantInfo250g.innerHTML = ''; // Clear the other info
        }
      }
    }

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', updateVariantInfo);
    });

    // Initial update
    updateVariantInfo();
  });