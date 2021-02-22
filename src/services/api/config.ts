type configApi = {
    port?: string | number,
    baseUrl: string
};

export const config : configApi = {

    //port: process.env.API_PORT || 3000,
    baseUrl: 'https://6031a627081a01001754724f.mockapi.io/api/v1/',

}

