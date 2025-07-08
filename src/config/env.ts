import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config()


const env = Joi.object({
    DATABASE_URL: Joi.string().uri().required(),
    PORT: Joi.number().default(3000),
    API_PREFIX: Joi.string().default('/api/v1'),
}).unknown();

const { error, value } = env.validate(process.env);

if (error) {
    throw new Error(`Error en las variables de entorno: ${error.message}`);
}

export default value;
