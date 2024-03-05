import { Observable, EventData, Page, Device } from '@nativescript/core';
import { DemoSharedLocaldb } from '@demo/shared';
import { Localdb } from '@arepa/localdb';

let localdb: Localdb;
export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
  localdb = new Localdb();
}

export function creardb() {
  localdb
    .createDB('test', '1.0.0')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function deletedb() {
  localdb
    .deleteDB('test')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function existedb() {
  localdb
    .existDB('test')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function createtable() {
  localdb
    .createTable('test')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function getAll() {
  localdb
    .getAll(['test'])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function getId() {
  localdb
    .filter('test', '018e0b2a-bad5-7449-8e26-440e34a385f2')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}
export function update() {
  localdb
    .update('test', '018e0f09-ee63-795e-9a0f-d0fd133e6551', [
      {
        nombre: 'name',
        apellido: 'lastname',
      },
    ])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function insert() {
  const d_array = [
    {
      nombre: 'name',
      apellido: 'lastname',
    },
    {
      nombre: 'name',
      apellido: 'lastname',
    },
  ];
  localdb
    .insert('test', d_array)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function deleteAll() {
  localdb
    .deleteAll('test')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function deleteid() {
  localdb
    .delete('test', '018e0f53-81a1-7ebd-9fa3-0ec483adb1d1')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

export class DemoModel extends DemoSharedLocaldb {}
