function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}
let formattedString: string = city_country("Lahore", "Pakistan");
console.log(formattedString); 
