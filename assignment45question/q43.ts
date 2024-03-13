function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`Great ${magician}`);
    }
    return greatMagicians;
}
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians: string[] = ["Harry", "Hermione", "Ron"];
let greatMagicians: string[] = make_great([...magicians]); 
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Magicians made Great:");
show_magicians(greatMagicians);
