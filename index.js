let username = 'carlos'
let age = 15
let hashobbies = false
let user = {
    name: username,
    edad: age,
    hobbies: hashobbies
}

console.log(user);

if (age >= 18) {
    console.log('Youy are an adult');
} else if (age >= 13) {
    console.log('You are a teenager');
} else {
    console.log('You are a child');
}

const names = ['pedro', 'jose', 'carlos']
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

const showUserInfo = (username, userAge) => {
    return `the username is ${username}, the user age is ${userAge} years old`
}

console.log(showUserInfo('Carlos', 19));
console.log(showUserInfo('Pepe', 29)); 
