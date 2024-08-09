import db from '../models/index.js';

const setupDatabase = async () => {
    try {
        await db.sequelize.sync({ force: true });

        await db.EduLoan.bulkCreate([
            {
                borrowerName: 'Nidhi',
                loanAmount: 5000.00,
                interestRate: 3.5,
                termMonths: 24,
                institutionName: 'University of Example'
            },
            {
                borrowerName: 'Nisha',
                loanAmount: 7000.00,
                interestRate: 4.0,
                termMonths: 36,
                institutionName: 'College of Example'
            }
        ]);

        console.log('Database setup complete.');
    } catch (error) {
        console.error('Database setup error:', error);
    }
};

setupDatabase();
