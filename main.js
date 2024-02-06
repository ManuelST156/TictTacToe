//variables
let Turno='X';
let cronometro=0;
let tiempo;
let Tablero=[[0,1,2],
            [3,4,5],
            [6,7,8]
];
let Empate=false;
let verificar=true;
let Stop=1;


//para mostrar
let mostrarTurno=document.getElementById('Turno');
let mostrarGanador=document.getElementById('Ganador');
let mostrarTiempo=document.getElementById('Tiempo');

function juego(fil,col,id)
{   
    console.log(cronometro);
    if(cronometro==0)//if para iniciar el cronometro cuando se presione el boton de numeros y no haya iniciado
    {
        cronometrar();
    }
    
    console.log(verificar);
    
   
        if(Turno=='X')
        {
            Tablero[fil][col]='X';
            console.log(Tablero);
            mostrarJugada=document.getElementById(id);
            mostrarJugada.innerHTML=Tablero[fil][col];
            mostrarJugada.disabled=true;
            Turno='O';
            mostrarTurno.innerHTML=`Turno: ${Turno}`;;
            verificar=Comprobar();
            
    
    
        }
        else if(Turno=='O')
        {
            Tablero[fil][col]='O';
            mostrarJugada=document.getElementById(id);
            mostrarJugada.innerHTML=Tablero[fil][col];
            mostrarJugada.disabled=true;
            Turno='X';
            mostrarTurno.innerHTML=`Turno: ${Turno}`;
            verificar=Comprobar();

        }
        
        
    if(verificar==false)
    {
        
       
        if(Turno=='X'&& Empate!=true)
        {
            mostrarGanador.innerHTML='Ganador Jugador O';
            desactivar();
            Stop=0;


        }
        else if(Turno=='O'&& Empate!=true)
        {
            mostrarGanador.innerHTML='Ganador Jugador X';
            desactivar();
            Stop=0;
        }
        else
        {
            mostrarGanador.innerHTML='Empate';
            desactivar();
            Stop=0;
            
        }
    }
    
   
    
   
}

function Comprobar()
{

    for(let i=0; i<3;i++)
    {
        
        //Comprobar filas y columnas

        
        if(Tablero[i][0] ==Tablero[i][1] && Tablero[i][0]==Tablero[i][2]||Tablero[0][i]==Tablero[1][i]&&Tablero[1][i]==Tablero[2][i] )   
        {
            
            return false;
        }
        //Comprobar diagonales
        else if(Tablero[0][0]==Tablero[1][1] &&Tablero[0][0]== Tablero[2][2]||Tablero[0][2]==Tablero[1][1]&&Tablero[0][2]==Tablero[2][0])
        {
            
            return false;
        }
        else{
            
        }
        
        
    }
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            
            if(Tablero[i][j]!='X' && Tablero[i][j]!='O')
            {
                
                return true;
            }
            
            
        } 
    }
    Empate=true;
    return false;
}

function desactivar(){
    mostrarJugada=document.getElementById(0);
    mostrarJugada.disabled=true;
    mostrarJugada=document.getElementById(1);
    mostrarJugada.disabled=true;
    mostrarJugada=document.getElementById(2);
    mostrarJugada.disabled=true;
    mostrarJugada=document.getElementById(3);
    mostrarJugada.disabled=true;
    mostrarJugada=document.getElementById(4);
    mostrarJugada.disabled=true;
    mostrarJugada=document.getElementById(5);
    mostrarJugada.disabled=true;
    mostrarJugada=document.getElementById(6);
    mostrarJugada.disabled=true;
    mostrarJugada=document.getElementById(7);
    mostrarJugada.disabled=true;
    mostrarJugada=document.getElementById(8);
    mostrarJugada.disabled=true;
}

function cronometrar()
{
    tiempo=setInterval(()=>{
        cronometro++;
        mostrarTiempo.innerHTML= `Tiempo: ${cronometro} seg.`;
        if(Stop==0)
        {
            console.log(stop);
        clearInterval(tiempo); //Funcion para parar el contador  de set interval cuando timer llegue a 0
        }
    },1000);
}

