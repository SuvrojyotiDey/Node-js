import mongoose from 'mongoose';
import config from '../config/config';

export default {
    connect: async () => {
        const connectionUrl = config.DATABASE_URL as string;
        try {
            await mongoose.connect(connectionUrl, {
                family: 4
            });
            return mongoose.connection;
        } catch (err) {
            throw err;
        }
    }
};
