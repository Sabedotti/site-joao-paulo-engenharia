# Site – João Sabedotti, Engenheiro Civil

Site estático (HTML + CSS + JS puro, sem dependências). É só abrir o `index.html` no navegador.

## Estrutura

```
index.html          → conteúdo de todas as seções
css/style.css       → visual (cores e fontes nas variáveis do topo)
js/script.js        → número do WhatsApp, menu mobile, animações
assets/icons/       → ícones otimizados (192px) e logos (640px)
assets/img/         → fotos em .jpg e .webp
fonts/              → Bebas Neue (não está em uso no layout atual)
```

## O que editar antes de publicar

| O quê | Onde |
|---|---|
| Número do WhatsApp e mensagem automática | `js/script.js` → `WHATSAPP_NUMERO` e `WHATSAPP_MENSAGEM` |
| Telefone exibido na tela | `index.html` → seção `#contato` |
| E-mail | `index.html` → seção `#contato` (texto e `mailto:`) |
| Nº do CREA | `index.html` → `<footer>` |
| Texto do “Sobre” | `index.html` → seção `#sobre` |
| Cores | `css/style.css` → bloco `:root` no topo |

Todos os botões de WhatsApp têm o atributo `data-whatsapp` e recebem o link automaticamente
pelo `script.js`, então o número só precisa ser trocado em um lugar.

## Imagens

Os ícones originais tinham até 26.000 px de largura (vários MB cada). Os que estão em
`assets/icons/` foram reduzidos para 192 px (exibidos a ~40–48 px, então continuam nítidos
em telas retina). Se for adicionar ícones novos, exporte em ~192 px.

As fotos estão em `.webp` (mais leve) com `.jpg` de reserva, usando `<picture>`.

## Seções

1. **Início** – título, subtítulo, botão de WhatsApp e faixa azul com 3 benefícios
2. **Serviços** – 6 cartões
3. **Sobre** – foto, texto e 3 diferenciais
4. **Como funciona** – 5 etapas (vira linha do tempo vertical no celular)
5. **Contato** – cartão azul com dados e botão
