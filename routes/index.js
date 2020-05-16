const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const fighterRoutes = require('./fighterRoutes');
const fightRoutes = require('./fightRoutes');

module.exports = (app) => {
	app.use('/api/user', userRoutes);
    app.use('/api/users', userRoutes);
    //app.use('/api/fighters', fighterRoutes);
    app.use('/api/fighter', fighterRoutes);
    app.use('/api/fights', fightRoutes);
    app.use('/api/auth', authRoutes);
  };