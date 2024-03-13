function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
const magicianNames: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
show_magicians(magicianNames);
