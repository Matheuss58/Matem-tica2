const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

// Defina suas datas de objetivo aqui (substitua com suas datas reais)
const tempos = [
    new Date("2025-12-31T23:59:59"), // Objetivo 1
    new Date("2025-11-30T23:59:59"), // Objetivo 2
    new Date("2025-10-31T23:59:59"), // Objetivo 3
    new Date("2025-09-30T23:59:59")  // Objetivo 4
];

function atualizaCronometro() {
    const agora = new Date();
    
    contadores.forEach((contador, index) => {
        const tempoObjetivo = tempos[index];
        const tempoRestante = tempoObjetivo - agora;
        
        if (tempoRestante <= 0) {
            contador.innerHTML = `
                <div class="contador-coluna">
                    <div class="contador-numero">0</div>
                    <div class="contador-legenda">dias</div>
                </div>
                <div class="contador-coluna">
                    <div class="contador-numero">0</div>
                    <div class="contador-legenda">horas</div>
                </div>
                <div class="contador-coluna">
                    <div class="contador-numero">0</div>
                    <div class="contador-legenda">min</div>
                </div>
                <div class="contador-coluna">
                    <div class="contador-numero">0</div>
                    <div class="contador-legenda">seg</div>
                </div>`;
            return;
        }
        
        const segundos = Math.floor(tempoRestante / 1000) % 60;
        const minutos = Math.floor(tempoRestante / (1000 * 60)) % 60;
        const horas = Math.floor(tempoRestante / (1000 * 60 * 60)) % 24;
        const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
        
        contador.innerHTML = `
            <div class="contador-coluna">
                <div class="contador-numero">${dias}</div>
                <div class="contador-legenda">dias</div>
            </div>
            <div class="contador-coluna">
                <div class="contador-numero">${horas}</div>
                <div class="contador-legenda">horas</div>
            </div>
            <div class="contador-coluna">
                <div class="contador-numero">${minutos}</div>
                <div class="contador-legenda">min</div>
            </div>
            <div class="contador-coluna">
                <div class="contador-numero">${segundos}</div>
                <div class="contador-legenda">seg</div>
            </div>`;
    });
}

// Atualiza a cada segundo
setInterval(atualizaCronometro, 1000);

// Inicializa imediatamente
atualizaCronometro();

// Sistema de abas (mantenha este código também)
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function() {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
}