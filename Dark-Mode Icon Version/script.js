const toggleBtn = document.querySelector('.toggle-btn');//element button
const iconBtn = document.querySelector('.icon-toggle')//elemet icon

let temaAwal = localStorage.getItem('dark');// 1 untuk tema dark 0 untuk tema light
changeTheme(+temaAwal)

function changeTheme(isDark){
    if(isDark){//jika body tidak memiliki class yang bernama dark
        document.body.classList.add('dark')//saat tidk ada class dark, tambah class dark

        iconBtn.classList.replace("fa-moon","fa-sun")//ganti moon menjadi sun

        //menyimpan tema di browser agar tidak reload tema
        localStorage.setItem('dark',1)
    }else{
        document.body.classList.remove('dark')//jika ada hilangkan dark, ini untuk mengubah ke light mode

        iconBtn.classList.replace("fa-sun","fa-moon")//ganti icon sun ke moon 
        localStorage.setItem('dark',0)
    }
}

toggleBtn.addEventListener('click',()=>{
    changeTheme(!document.body.classList.contains('dark'))
})