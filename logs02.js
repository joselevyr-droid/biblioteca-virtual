const uploadInput = document.getElementById('upload-avatar');
const avatar = document.getElementById('avatar-principal');
uploadInput.addEventListener('change', function(event){
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(e){
            avatar.src = e.target.result;
            localStorage.setItem("avatar", e.target.result);
        };
        reader.readAsDataURL(file);
    }
});
const avatarSalvo = localStorage.getItem("avatar");
if(avatarSalvo){
    avatar.src = avatarSalvo;
}