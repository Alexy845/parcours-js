function dayOfTheYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1); // le 1er janvier de l'année de la date
    const diffInMilliseconds = date.getTime() - startOfYear.getTime(); // la différence entre la date et le 1er janvier en millisecondes
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24); // la différence en jours
    return Math.floor(diffInDays) + 1; // on arrondit le nombre de jours et on ajoute 1 car le 1er janvier compte pour le premier jour de l'année
  }
  