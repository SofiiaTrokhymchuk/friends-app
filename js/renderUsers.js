function renderUser(user){
    const femaleIcon = '<i class="fa-solid fa-venus"></i>';
    const maleIcon = '<i class="fa-solid fa-mars"></i>';
    const phoneIcon = '<i class="fa-solid fa-phone"></i>';
    return `
        <div class="user-container">
            <img src="${user.getImage()}" alt="User image">
            <div class="user-info">
                <span class="user-name">${user.getFullName()}</span>
                <span class="user-age">${user.getAge()}</span>
                <span class="secondary-user-info">
                ${user.getGender() === 'female' ? femaleIcon : maleIcon} : ${user.getGender()}</span>
                <span class="secondary-user-info">${phoneIcon} : ${user.getPhone()}</span>
            </div>
        </div>
    `;
}

export function renderAllUsers(users){
    const usersContainer = document.getElementById('usersContainer');
    const usersList = users.reduce((acc, user) => acc + renderUser(user), "");
    usersContainer.innerHTML = usersList;
}
