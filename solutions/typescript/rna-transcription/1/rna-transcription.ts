const DNA = new Map([
    ['G', 'C'],
    ['C', 'G'],
    ['T', 'A'],
    ['A', 'U'],
]);

export function toRna(dna: string) {
    const splitDna = dna.split('');

    let rna = '';

    for (const nucleotide of splitDna) {
        const equivalent = (DNA.get(nucleotide));

        if (equivalent) {
            rna += equivalent;
        } else {
            throw new Error('Invalid input DNA.');
        }
    }

    console.log(rna);

    return rna;
}
