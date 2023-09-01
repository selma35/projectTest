let names =['ahmed' , 'ali', 'm7md', 'mazen']

let ages = ['22', '18', '20', '25']

let container = document.createElement('div')
document.body.appendChild(container)
container.style.textAlign='center'



function element(names ,ages){
    // element
    let cord =document.createElement('div')
    let title =document.createElement('h2')
    let age = document.createElement('p')
    let img = document.createElement('img')
    


    // content
    img.src='img/11.png'
    let head =document.createTextNode(names)
    let agecreate =document.createTextNode(ages)


    title.appendChild(head)
    
    age.appendChild(agecreate)


    cord.appendChild(title)
    cord.appendChild(age)
    cord.appendChild(img)
    container.appendChild(cord)

    // style

    cord.style.width='200px'
    img.style.width='100%'
    cord.style.background='#666'
    cord.style.display='inline-block'
    cord.style.padding='10px'
    cord.style.margin='2px'
    cord.style.color='#fff'
}
for(let i=0; i<4; i++){
    element(names[i] , ages[i] )
}
