export default class {
    /**
     * 
     * @param {HTMLTableElement} root  The table element which will display the csv data.
     */
    constructor(root) {
        this.root = root;
        console.log('contr...');
    }

    /**
     * Clear exising data in the table and replaces it with new data.
     * 
     * @param {string[][]} data  A 2D array of data to be used as table body
     * @param {string[]} headerColumn List of headings to be used
     */
    update(data, headerColumn = []) {
        this.clear();
        this.setHeader(headerColumn);
        this.setBody(data);
    }


    /**
     * Clears all contents of the table (includeing the header).
     */
    clear() {
        this.root.innerHTML = '';
    }

    /**
     * Set the table header.
     * 
     * @param {string} headerColumn List of heading to be used
     */
    setHeader(headerColumn) {
        this.root.insertAdjacentHTML('afterbegin', `
            <thead>
                <tr>
                    ${headerColumn.map(text => `<th>${text}</th>`).join('')}
                </tr>
            </thead>
        `);
    }

    /**
     * Sets the table body.
     * 
     * @param {string[][]} data a 2D array of data to be used as the table body
     */
    setBody(data) {
        const rowsHtml = data.map(row => {
            return `
                <tr>
                    ${row.map(text => `<td>${text}</td>`).join('')}
                </tr>
            `;
        });

        this.root.insertAdjacentHTML('beforeend', `
            <tbody>
                ${rowsHtml.join('')}
            </tbody>
        `);
    }
}