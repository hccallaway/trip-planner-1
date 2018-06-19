const mapboxgl = require('mapbox-gl');

function buildMarker(markerType, longLat) {
  let markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  if (markerType === 'activity') {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  } else if (markerType === 'hotel') {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
  } else if (markerType === 'restaurant') {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
  }
}

module.exports = buildMarker;
