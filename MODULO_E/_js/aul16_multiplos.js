
function f_contar(){
    let inic=document.getElementById('txtini')   
    let con=document.getElementById('txtcon')
    let pas=document.getElementById('txtpas')  
    let dv2=document.getElementById('dv2')

    if (inic.value.length ==0 || con.value.length==0||pas.value.length==0) {
        window.alert('Erro')
    } else{

            dv2.innerHTML='Resultado'

            let i=Number(inic.value)
            let f=Number(con.value)
            let p=Number(pas.value)
            let resu=0

            
            
            

            for (let c = i ; resu<f ; c++ ){
               
                resu=c*p 

                dv2.innerHTML+=` (${resu})`               
            }

                       
         
    }

   
}