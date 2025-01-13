import React from 'react';

const Home = () => {
    // Sample data for the tables
    const tables = [
        {
            title: "Table 1",
            data: [
                ["Header 1", "Value 1", "Value 2", "Value 3"],
                ["Row 1", "Data 1", "Data 2", "Data 3"],
                ["Row 2", "Data 4", "Data 5", "Data 6"],
                ["Row 3", "Data 7", "Data 8", "Data 9"]
            ]
        },
        {
            title: "Table 2",
            data: [
                ["Header 1", "Value 1", "Value 2", "Value 3"],
                ["Row 1", "Data 1", "Data 2", "Data 3"],
                ["Row 2", "Data 4", "Data 5", "Data 6"],
                ["Row 3", "Data 7", "Data 8", "Data 9"]
            ]
        },
        {
            title: "Table 3",
            data: [
                ["Header 1", "Value 1", "Value 2", "Value 3"],
                ["Row 1", "Data 1", "Data 2", "Data 3"],
                ["Row 2", "Data 4", "Data 5", "Data 6"],
                ["Row 3", "Data 7", "Data 8", "Data 9"]
            ]
        }
    ];

    return (
        <div className="tables-container">
            {tables.map((table, index) => (
                <div key={index} className="table-wrapper">
                    <h2>{table.title}</h2>
                    <table className="data-table">
                        <tbody>
                            {table.data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => {
                                        // Make first row and first column bold
                                        const isBold = rowIndex === 0 || cellIndex === 0;
                                        return (
                                            <td 
                                                key={cellIndex}
                                                className={isBold ? 'bold-cell' : ''}
                                            >
                                                {cell}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default Home; 