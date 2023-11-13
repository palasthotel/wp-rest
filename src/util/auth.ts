
export const authorizationHeaders = (username: string, password: string) => {
    const credentials = `${username}:${password}`;
    const base64Encoded = (typeof btoa == "function") ? btoa(credentials): Buffer.from(`${username}:${password}`).toString('base64');
    return {
        'Authorization': 'Basic '+base64Encoded,
    }
}