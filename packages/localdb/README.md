# @arepa/localdb

```javascript
ns install @arepa/localdb
```
##### localdb NoSQL works locally on the device, simple and easy to use. You can store any object.

## Usage
## Methods
| Method | Params | Descriptions |
| ------ | ------ | ------------ |
| createDB | dbname: string, version?: string | Create json database local. Return Promise |
| deleteDB | dbname: string | Delete database local. Return Promise |
| existDB | dbname: string | Check database exist. Return Promise |
| createTable | table:string | Create a new table. Return Promise |
| insert | table: string, data: Array<any> | Save data on table, Return Promise |
| getAll | table: Array<string> | Get all data from table. Return Promise |
| filter | table: string, id: string | Get row by id. Return Promise |
| update | table: string, id: string, data_update: Array<any> | Update data by id. Return Promise |
| deleteAll | table: string | Delete all rows table. Return Promise |
| delete | table: string, id: string | Delete row by id. Return Promise |
| 

#Examples

```javascript 
localdb = new Localdb();

//create db
localdb.createDB('test', '1.0.0')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

//delete db
localdb
    .deleteDB('test')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

//check exist db
localdb
    .existDB('test')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

//create table
localdb
    .createTable('test')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

//get all rows table
localdb
    .getAll(['test'])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

//filter by id
localdb
    .filter('test', id)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

//update data by id
localdb
    .update('test', 'id', [
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

//save data on table
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

//delete all rows table
localdb
    .deleteAll('test')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });


//delete row by id
localdb
    .delete('test', id)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
```

## License

Apache License Version 2.0
