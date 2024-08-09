const EduLoanModel = (sequelize, DataTypes) => {
    const EduLoan = sequelize.define('EduLoan', {
        borrowerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        loanAmount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        interestRate: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        termMonths: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        institutionName: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return EduLoan;
};

export default EduLoanModel;
