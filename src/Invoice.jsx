import React from "react";

const Invoice = () => {
  const employeeName = "Praveen Kumar";
  const company = "Accenture";
  const employeeId = "ACN-0452";
  const month = "June 2024";
  const accountNumber = "XXXXXX4532";

  const calculateSalary = (salary) => {
    const calculations = {
      basic: salary,
      td: (salary * 12) / 100,
      da: (salary * 11) / 100,
      hra: (salary * 8) / 100,
      pf: (salary * 13) / 100,
    };
    
    calculations.gross = calculations.basic + calculations.td + calculations.da + calculations.hra;
    calculations.totalSalary = calculations.gross - calculations.pf;
    
    return calculations;
  };

  const salaryData = calculateSalary(60000);
  const formattedDate = new Date().toLocaleDateString();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.companyInfo}>
          <h2>{company}</h2>
          <p>123 Business Street</p>
          <p>Financial City, FC 456789</p>
        </div>
        <div style={styles.invoiceTitle}>
          <h1>Salary Invoice</h1>
          <p>Date: {formattedDate}</p>
          <p>Payment Month: {month}</p>
        </div>
      </header>

      <div style={styles.employeeInfo}>
        <div>
          <h3>Employee Details</h3>
          <p>Name: {employeeName}</p>
          <p>Employee ID: {employeeId}</p>
        </div>
        <div>
          <h3>Payment Details</h3>
          <p>Account Number: {accountNumber}</p>
          <p>IFSC Code: XYZB0000123</p>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Component</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(salaryData).map(([key, value]) => (
            <tr key={key} style={styles.tr}>
              <td style={styles.td}>{key.toUpperCase()}</td>
              <td style={styles.td}>{getComponentDescription(key)}</td>
              <td style={{ ...styles.td, textAlign: 'right' }}>
                {value.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.totalSection}>
        <h3>Net Salary: ₹{salaryData.totalSalary.toLocaleString('en-IN')}</h3>
        <p style={styles.note}>*This is computer generated statement</p>
      </div>
    </div>
  );
};

const getComponentDescription = (component) => {
  const descriptions = {
    basic: "Basic Salary",
    td: "Travel Allowance (12%)",
    da: "Dearness Allowance (11%)",
    hra: "House Rent Allowance (8%)",
    pf: "Provident Fund (13%)",
    gross: "Gross Salary",
    totalSalary: "Net Payable Amount",
  };
  return descriptions[component] || component;
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '30px',
    backgroundColor: '#fff',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '2px solid #333',
    paddingBottom: '20px',
    marginBottom: '20px',
  },
  companyInfo: {
    textAlign: 'left',
  },
  invoiceTitle: {
    textAlign: 'right',
  },
  employeeInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  th: {
    backgroundColor: '#333',
    color: 'white',
    padding: '12px',
    textAlign: 'left',
  },
  tr: {
    borderBottom: '1px solid #ddd',
    '&:nth-child(even)': {
      backgroundColor: '#f8f9fa',
    },
  },
  td: {
    padding: '12px',
    textAlign: 'left',
  },
  totalSection: {
    textAlign: 'right',
    borderTop: '2px solid #333',
    paddingTop: '20px',
  },
  note: {
    fontSize: '0.9em',
    color: '#666',
    marginTop: '10px',
  },
};

export default Invoice;