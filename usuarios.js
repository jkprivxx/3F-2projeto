import { getCSS, tickfont } from "./comum.js";

async function quantidadeDeUsuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json();
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const infos = [
        {
            x:nomeDasRedes,
            y:quantidadeDeUsuarios,
            type: 'bar', 
            marker: {
                color: getCSS('--cor-de-fundo')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title:{
            text:'Redes sociais com mais usuarios no mundo',
            x: 0,
            font:{
                color: getCSS('--cor-primaria'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
        xaxis:{
            tickfont: tickfont,
            title: {
                text: 'nome das redes sociais',
                font: {
                    color: getCSS ('--cor-de-fundo')
            }
            }
        },
        yaxis: {
            tickfont:tickfont,
            title:{
                text:'Milhoes de usuarios ativos',
                font:{
                    color: getCSS(--cor-de-fundo)
                }
            }
        }
    }

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, infos, layout);

}

quantidadeDeUsuarios();
