const containerBtn = document.querySelector('.toggle-btn');//container dari button
const button = document.querySelector('.btn')//button yang bergeser

//3.
let temaAwal=localStorage.getItem('dark') //mengakses local storage dari dark
let geserAwal=localStorage.getItem('button')//mengakses local storage dari btn geser
//4.
changeTheme(+temaAwal) ? true : false

if(geserAwal === 'right'){
    button.classList.add('btn-active')//jika geser awalnya right/dark maka tambah class btn active agar kekanan
}
//1. 
function changeTheme(isDark){
    if(isDark){
        document.body.classList.add('dark')//jika didalam body tidak ada class body maka tambah class bernama dark
        localStorage.setItem('dark',1)//untuk menyimpan kedalam storage bahwa darl mode maka bernilai 1
        localStorage.setItem('button','right')//untuk menyimpan kedlam storage jika daark mode maka btn bergeser kekanan
    }else{
        document.body.classList.remove('dark')//jika didalam body ada class body maka hapus class bernama dark
        localStorage.setItem('dark',0)//untuk menyimpann kedalam storage bahwa saat light mode akan bernilai 0
        localStorage.setItem('button','left')//untuk menyimpan kedalam storage jika light mode maka btn bergeser kekiri
    }
}
//2. 
containerBtn.addEventListener('click',()=>{
    button.classList.toggle('btn-active')//untuk mentoggle btn yang bergeser kekanan dan kekiri
    changeTheme(!document.body.classList.contains('dark'))//menjalankan fungsi dari change theme
})
