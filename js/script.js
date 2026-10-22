/* =========================================================
   CONFIGURAÇÃO — edite aqui
   ========================================================= */

// Número do WhatsApp: 55 + DDD + número, só dígitos.
const WHATSAPP_NUMERO = "5554991562053";

// Mensagem que já aparece escrita quando o cliente abre a conversa.
const WHATSAPP_MENSAGEM = "Olá, João! Vim pelo site e gostaria de um orçamento para regularizar meu imóvel.";


/* =========================================================
   Links do WhatsApp
   Todo elemento com o atributo data-whatsapp recebe o link.
   ========================================================= */
const linkWhats = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`;

document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    el.setAttribute("href", linkWhats);
});


/* =========================================================
   Menu mobile (hambúrguer)
   ========================================================= */
const header = document.getElementById("header");
const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menu-toggle");

function fecharMenu() {
    menu.classList.remove("aberto");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
}

menuToggle.addEventListener("click", () => {
    const abrir = !menu.classList.contains("aberto");
    menu.classList.toggle("aberto", abrir);
    menuToggle.setAttribute("aria-expanded", String(abrir));
    menuToggle.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
});

// Fecha o menu ao clicar em um link ou apertar Esc
menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", fecharMenu));
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharMenu();
});


/* =========================================================
   Sombra no header ao rolar + item ativo do menu
   ========================================================= */
const sections = document.querySelectorAll("main section[id]");
const menuItems = document.querySelectorAll(".nav__link");

function atualizarMenu() {
    header.classList.toggle("com-sombra", window.scrollY > 10);

    let secaoAtual = sections[0].id;
    const referencia = window.scrollY + window.innerHeight * 0.35;

    sections.forEach((section) => {
        if (section.offsetTop <= referencia) {
            secaoAtual = section.id;
        }
    });

    // Chegou no fim da página: marca a última seção
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        secaoAtual = sections[sections.length - 1].id;
    }

    menuItems.forEach((item) => {
        item.classList.toggle("ativo", item.getAttribute("href") === `#${secaoAtual}`);
    });
}

window.addEventListener("scroll", atualizarMenu, { passive: true });
window.addEventListener("resize", atualizarMenu);
atualizarMenu();


/* =========================================================
   Animação de entrada dos blocos ao rolar
   ========================================================= */
const revelar = document.querySelectorAll(".revelar");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visivel");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    // pequeno atraso em cascata para itens lado a lado
    revelar.forEach((el) => {
        const irmaos = [...el.parentElement.children].filter((c) => c.classList.contains("revelar"));
        const i = irmaos.indexOf(el);
        if (irmaos.length > 1) el.style.transitionDelay = `${i * 70}ms`;
        observer.observe(el);
    });
} else {
    revelar.forEach((el) => el.classList.add("visivel"));
}


/* =========================================================
   Ano automático no rodapé
   ========================================================= */
document.getElementById("ano").textContent = new Date().getFullYear();
