
const DNA = require('../dna');

test('new string with any non-canonical DNA base values removed', ()=>{
    expect(DNA('ATGGGACT')).toMatch(/CTAGGGTA/);
})


