
console.log("Environment:", process.env.NODE_ENV);

type configApi = {
    port: string | number,
    baseUrl: string
};

export const config : configApi = {

    port: process.env.API_PORT || 3000,
    baseUrl: process.env.API_URL || 'localhost',

}

