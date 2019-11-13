// @flow

import { API_URL } from "../config";

const host = API_URL || 'http://localhost:4000';

export function signIn() {
    // 
}

export async function ping() {
    try {
        return (await fetch(`${host}/ping`)).json();
    } catch (err) {
        console.error(err);
        return '';
    }
}