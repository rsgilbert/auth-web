fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
        "email": "test1@mail.com",
        "password": "test1"
    })
}).then(r => console.log(r))