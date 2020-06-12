const user = {
    name : 'Guilherme' ,
    lastname: 'Cabrini da Silva'
};
function getUserWithFullName(user) {
    return{
        ...user,
        fullname: user.name + ' ' + user.lastName //${user.name}; $;{user.lastName};
    }
}

const UserWithFullName = getUserWithFullName(user);

console.log(UserWithFullName);


