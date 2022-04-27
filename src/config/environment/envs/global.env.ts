const { 
    SWAGGER_PASS,
    MONGO_URI,
    JWT_SECRET 
} = process.env


export default () => ({
    SWAGGER_PASS,
    MONGO_URI,
    JWT_SECRET 
})