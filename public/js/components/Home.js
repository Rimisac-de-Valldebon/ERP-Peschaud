import React, { useState, useEffect } from 'react';

const Home = () => {
    const [tables, setTables] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTables();
    }, []);

    const fetchTables = async () => {
        try {
            const response = await fetch('/api/tables');
            if (!response.ok) {
                throw new Error('Failed to fetch tables');
            }
            const data = await response.json();
            setTables(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="tables-container">
            {tables.map((table, index) => (
                <div key={table._id} className="table-wrapper">
                    <h2>{table.title}</h2>
                    <table className="data-table">
                        <tbody>
                            {table.data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => {
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