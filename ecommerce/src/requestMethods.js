import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDI5Zjk5NDc1ZDI2Mjc2YTBmMzA5MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTc2MTM3MSwiZXhwIjoxNjY2MDIwNTcxfQ.-iFR0GzN7KXNIVQcak9uaEMdkw6DejiSHeg1ikApayU";
// const TOKEN = "sk_test_51Lr3RuSD0hEm67ofN4tTsPSm0SdWJV9JL8uIF7TOIf5uT0eXaO5Ttfuq3PuU4Vfb4iaTaH9o9ReWD66jbozaHmzx00ry4VTbO8";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    // header: {token:`Bearer ${TOKEN}`},
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`},
});

