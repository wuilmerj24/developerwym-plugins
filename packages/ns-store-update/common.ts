import { Application } from '@nativescript/core';

export function getPais() {
    return Application.android.context.getResources().getConfiguration().locale.getCountry();
}
