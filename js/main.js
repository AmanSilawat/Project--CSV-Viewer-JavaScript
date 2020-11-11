import TableCsv from './TableCsv.js';

const tableRoot = document.getElementById('csvRoot');
const csvFileInput = document.getElementById('csvFileInput')
const tableCsv = new TableCsv(tableRoot);

csvFileInput.addEventListener('change', e => {
    console.log(csvFileInput.files[0]);

    // parse to string
    Papa.parse(csvFileInput.files[0], {
        delimiter: ",",
        skipEmptyLines: true,
        complete: results => {
            tableCsv.update(results.data.slice(1), results.data[0])
        }
    })
});