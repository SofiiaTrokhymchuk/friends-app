function renderUser(user){
    const femaleIcon = '<i class="fa-solid fa-venus user-info-icon"></i>';
    const maleIcon = '<i class="fa-solid fa-mars user-info-icon"></i>';
    const phoneIcon = '<i class="fa-solid fa-phone user-info-icon"></i>';
    return `
        <div class="user-container">
            <img class="user-image" src="${user.getImage()}" alt="User image">
            <div class="user-info">
                <span class="user-info__item user-name">${user.getFullName()}</span>
                <span class="user-info__item user-age">${user.getAge()}</span>
                <span class="user-info__item secondary-user-info">
                ${user.getGender() === 'female' ? femaleIcon : maleIcon} : ${user.getGender()}</span>
                <span class="user-info__item secondary-user-info">
                    <a href="tel:${user.getPhone()}">${phoneIcon} : ${user.getPhone()}</a>
                </span>
            </div>
        </div>
    `;
}

export function renderAllUsers(users){
    const usersContainer = document.getElementById('usersContainer');
    const usersList = users.reduce((acc, user) => acc + renderUser(user), "");
    usersContainer.innerHTML = usersList;
}
