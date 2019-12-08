
// const express = require('express');
//
// const app = express();
// app.all('/', (req, res) => res.send('hello1'));
// app.listen(3000);
//
// const app2 = express();
// app2.all('/', (req, res) => res.send('hello2'));
// app2.listen(8889);
export const data = {
    list: [
        {
            "img": "1.pic",
            "text": "aaaaaa0000"
        }
    ]
}

function fun1(a) {
    return new Promise((resolve, reject) => {
        if(a) {
            setTimeout(()=> {
                resolve(data);
            }, 3000)
            // resolve(data);
        } else {
            reject();
        }
    })
}

export const pro1 = fun1(true).then(
    (res) => {
       return res;
    }
);


