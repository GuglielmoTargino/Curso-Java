
function f_contar(){
    let inic=document.getElementById('txtini')   
    let con=document.getElementById('txtcon')
    let pas=document.getElementById('txtpas')  
    let dv2=document.getElementById('dv2')

    if (inic.value.length ==0 || con.value.length==0||pas.value.length==0) {
        window.alert('Erro')
    } else{

            dv2.innerHTML='contando'

            let i=Number(inic.value)
            let f=Number(con.value)
            let p=Number(pas.value)

            for (let c = i; c <= f; c+=p){
                dv2.innerHTML +=`${c} `
               
1               
            }

                       
         
    }

   
}