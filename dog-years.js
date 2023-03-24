function dogYears(planet, seconds) {
    const orbites = {
      earth: 1.0,
      mercury: 0.2408467,
      venus: 0.61519726,
      mars: 1.8808158,
      jupiter: 11.862615,
      saturn: 29.447498,
      uranus: 84.016846,
      neptune: 164.79132,
    };

    const earthYears = ageInSeconds / 31557600;
    const dogYearsOnEarth = earthYears * 7;
    const dogYearsOnPlanet = dogYearsOnEarth / orbitalPeriods[planet];

    return Math.round(dogYearsOnPlanet * 100) / 100;
}
  