const nome = prompt("Digite seu nome:");
const idade = prompt("Digite sua idade:");

if (idade < 21) {
    const msg = `"Olá ${nome}, você tem ${idade} idade boa pra mamar viadinho!"`;
    alert(msg);
} else {
    const msg = `"Olá ${nome}, você tem ${idade} anos!"`;
    alert(msg);
}

