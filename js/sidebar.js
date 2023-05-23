
const sidebar = document.querySelector('.sidebar').children

const change = document.querySelector('.change')

const db = document.querySelectorAll('.db')

const first_list = document.querySelector('.first_list').children

const second_list = document.querySelector('.second_list').children

const third_list = document.querySelector('.third_list').children

const gear = document.querySelector('.gear')

const menu = document.querySelector('.menu')

const start = document.querySelector('#start')

const crate = document.querySelector('.crate')

const addFile = document.querySelector('.addFile')

const body = document.body
Over()
enter()


// 鼠标经过离开变换背景图
function Over() {
    for (let i = 0; i < sidebar.length - 1; i++) {

        sidebar[i].addEventListener('mouseover', function () {


            for (let j = 0; j < sidebar.length - 1; j++) {
                // console.log(sidebar[j]);
                sidebar[j].style.backgroundImage = ""

            }

            sidebar[i].style.backgroundImage = "url('./images/icon_over.png')"


        })

        sidebar[i].addEventListener('mouseout', function () {

            this.style.backgroundImage = ""
        })



    }
}

// 鼠标经过离开切换图
function enter() {

    change.addEventListener('mouseover', function () {
        this.src = "./icon/1.png"
    })

    change.addEventListener('mouseout', function () {
        this.src = "./icon/2.png"
    })
}




// 鼠标经过显示图标信息

entime()

function entime() {
    for (let i = 0; i < db.length - 1; i++) {
        let nt = null;
        sidebar[i].addEventListener('mouseover', function () {


            function fn() {
                for (let j = 0; j < db.length - 1; j++) {
                    db[j].style.display = "none"
                }
                db[i].style.display = "block"

            }
            nt = setTimeout(fn, 1000)
        })

        // 鼠标离开图标信息消失
        sidebar[i].addEventListener('mouseout', function () {
            for (let j = 0; j < db.length; j++) {
                db[j].style.display = "none"
            }
            clearTimeout(nt);
        })
    }




}


st()
function st() {
    let flag = null

    change.addEventListener('mouseover', function () {
        function sd() {
            start.style.display = 'block'
            console.log(1);
        }
        flag = setTimeout(sd, 1000)
    })




    change.addEventListener('mouseout', function () {
        start.style.display = 'none'
        clearTimeout(flag)
    })


}



// 桌面图标鼠标经过事件
list_one()
function list_one() {

    for (let i = 0; i < first_list.length; i++) {


        first_list[i].addEventListener('mouseover', function () {


            for (let j = 0; j < first_list.length - 1; j++) {
                // console.log(sidebar[j]);
                first_list[j].style.backgroundImage = ""

            }

            first_list[i].style.backgroundImage = "url('./images/icon_over.png')"

            first_list[i].style.backgroundSize = "100% 100%"

        })

        first_list[i].addEventListener('mouseout', function () {

            this.style.backgroundImage = ""
        })
    }


    for (let i = 0; i < second_list.length; i++) {


        second_list[i].addEventListener('mouseover', function () {


            for (let j = 0; j < second_list.length - 1; j++) {
                // console.log(sidebar[j]);
                second_list[j].style.backgroundImage = ""

            }

            second_list[i].style.backgroundImage = "url('./images/icon_over.png')"

            second_list[i].style.backgroundSize = "100% 100%"

        })

        second_list[i].addEventListener('mouseout', function () {

            this.style.backgroundImage = ""
        })
    }


    for (let i = 0; i < third_list.length; i++) {


        third_list[i].addEventListener('mouseover', function () {


            for (let j = 0; j < third_list.length - 1; j++) {
                // console.log(sidebar[j]);
                third_list[j].style.backgroundImage = ""

            }

            third_list[i].style.backgroundImage = "url('./images/icon_over.png')"

            third_list[i].style.backgroundSize = "100% 100%"

        })

        third_list[i].addEventListener('mouseout', function () {

            this.style.backgroundImage = ""
        })
    }
}



//二级菜单栏鼠标点击事件

let flag = 0
change.addEventListener('click', () => {
    flag++
    btn()
})


function btn() {


    if (flag == 1) {
        menu.style.visibility = 'visible'

    } if (flag == 2) {
        menu.style.visibility = 'hidden'
        flag = 0
    }


}


// let c = new Create("./icon/add_folder.png", 94, 98)
// function Create(src, width, height) {

//     this.src = src
//     this.width = width
//     this.height = height

//     this.cd = function () {

//         let box = document.createElement('div')
//         let img = document.createElement('img')
//         let div = document.createElement('div')

//         div.className = "title"
//         img.src = this.src
//         box.style.width = this.width + 'px'
//         box.style.height = this.height + 'px'
//         box.appendChild(img)
//         box.appendChild(div)
//     }
// }
// crate.addEventListener('click',)













crate.addEventListener('click', function () {
    let box = document.createElement('div')
    let img = document.createElement('img')
    let input = document.createElement('input')


    img.src = "./icon/icon10.png"
    input.value = "新建文件夹"
    input.className = "title"
    box.appendChild(img)
    box.appendChild(input)
    addFile.appendChild(box)


    let geth = setInterval(() => {
        input.focus()
    }, 1500)



    input.addEventListener('keypress', function (e) {
        console.log(e.keyCode);
        if (e.keyCode === 13) {

            this.blur()
            clearInterval(geth)
        }

    })




})




