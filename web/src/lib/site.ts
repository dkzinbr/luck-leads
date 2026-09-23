export const site = {
  name: "Luck's Style",
  tagline: "Barbearia · Vila Talarico",
  since: 2017,
  hours: "10:00 – 19:00",
  phoneDisplay: "(11) 97094-1300",
  phoneRaw: "5511970941300",
  email: "barbearialucksstyle@gmail.com",
  instagram: "barbearialucksstyle",
  addressLine: "Av. Waldemar Carlos Pereira, 1886",
  neighborhood: "Vila Talarico · Vila Matilde",
  city: "São Paulo / SP",
  cep: "03533-003",
  booking: "https://bfpro.com.br/lucks-style",
  maps: "https://www.google.com/maps/search/?api=1&query=Av.+Waldemar+Carlos+Pereira,+1886+Vila+Talarico+S%C3%A3o+Paulo",
  mapsEmbed:
    "https://www.google.com/maps?q=Barbearia+Luck%27s+Style,+Av.+Waldemar+Carlos+Pereira,+1886,+Vila+Talarico,+S%C3%A3o+Paulo&hl=pt-BR&z=17&output=embed",
  instagramUrl: "https://www.instagram.com/barbearialucksstyle",
} as const;

export const wa = (text: string) =>
  `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`;

export const waDefault = wa(
  "Olá! Vim pelo site da Barbearia Luck's Style e gostaria de agendar.",
);

export const nav = [
  { href: "#casa", label: "A casa" },
  { href: "#equipe", label: "Equipe" },
  { href: "#cortes", label: "Cortes" },
  { href: "#clube", label: "Clube" },
  { href: "#produtos", label: "Produtos" },
  { href: "#visita", label: "Visita" },
] as const;

export const principles = [
  {
    n: "01",
    title: "Técnica",
    body: "Corte e barba com acabamento de quem faz isso todos os dias, desde 2017.",
  },
  {
    n: "02",
    title: "Presença",
    body: "Sente na cadeira e deixe o resto com a equipe. O tempo na Luck's é seu.",
  },
  {
    n: "03",
    title: "Continuidade",
    body: "Clube de assinatura para o visual não depender de sorte no calendário.",
  },
  {
    n: "04",
    title: "Casa completa",
    body: "Serviço na cadeira, produto para levar, agendamento no celular.",
  },
] as const;

export const team = [
  {
    name: "Lucas Paulo",
    role: "Fundador · CEO",
    bio: "Quem abriu a casa e ainda atende na cadeira. A Luck's Style carrega o nome e o padrão dele.",
    photo: "/team/lucas.jpg",
  },
  {
    name: "Gabriel Choque",
    role: "Barbeiro · Líder",
    bio: "Conduz a operação na sala e o ritmo do atendimento no dia a dia.",
    photo: "/team/gabriel.jpg",
  },
  {
    name: "TH Santos",
    role: "Barbeiro",
    bio: "Parte da equipe fixa. Agendamento direto pelo app, com preferência de profissional.",
    photo: "/team/th.jpg",
  },
  {
    name: "Marques Alexandre",
    role: "Barbeiro",
    bio: "Fecha o time da matriz. Cliente escolhe o barbeiro ou deixa a casa indicar.",
    photo: "/team/marques.jpg",
  },
] as const;

export const cuts = [
  { src: "/cuts/corte-1.jpg", alt: "High top com degradê", label: "High top · degradê" },
  { src: "/cuts/corte-2.jpg", alt: "Fade baixo texturizado", label: "Fade baixo · textura" },
  { src: "/cuts/corte-3.jpg", alt: "Cacho com fade e barba", label: "Cacho · fade" },
  { src: "/cuts/corte-4.jpg", alt: "Social clássico com taper", label: "Social · taper" },
] as const;

export const plans = [
  {
    name: "Essencial · 2 cortes",
    days: "Ter · Qua · Qui",
    price: "R$ 79,99",
    body: "O fim do cabelo desatualizado. Dois cortes por mês no meio da semana, com desconto exclusivo.",
    featured: false,
  },
  {
    name: "Primer · 4 cortes",
    days: "Ter · Qua · Qui",
    price: "R$ 119,99",
    body: "Visual alinhado toda semana. Quatro cortes por mês — o melhor custo-benefício para estar sempre na régua.",
    featured: false,
  },
  {
    name: "Black · 4 cortes",
    days: "Todos os dias",
    price: "R$ 169,90",
    body: "Liberdade de agenda. Quatro cortes por mês, em qualquer dia da semana, no horário da casa.",
    featured: false,
  },
  {
    name: "Cavalheiro Smart",
    days: "Ter · Qua · Qui · 4× corte + 4× barba",
    price: "R$ 229,90",
    body: "O cuidado semanal completo. Quatro combos de cabelo e barba, válidos de terça a quinta.",
    featured: false,
  },
  {
    name: "VIP · 4 cortes e barbas",
    days: "Todos os dias",
    price: "R$ 269,90",
    body: "A experiência completa. Quatro combos de cabelo e barba, com agenda liberada para todos os dias.",
    featured: true,
  },
] as const;

export const products = [
  { cat: "Marca própria", name: "Pomada Luck's Style Matte", price: "R$ 25,00", body: "Fixação fosca para o degradê sair da cadeira e durar o dia." },
  { cat: "Marca própria", name: "Pomada Luck's Style Clear", price: "R$ 25,00", body: "Brilho controlado. Para quem prefere shine." },
  { cat: "Barba", name: "Balm Garden", price: "R$ 54,00", body: "Hidratação e alinhamento dos fios depois do desenho na navalha." },
  { cat: "Barba", name: "Creme pós-barba Garden", price: "R$ 48,00", body: "Acalma a pele. Fecha o rito do atendimento em casa." },
  { cat: "Barba", name: "Óleo para barba", price: "R$ 30,00", body: "Nutrição rápida, sem pesar. Uso diário entre uma visita e outra." },
  { cat: "Cabelo", name: "Shampoo Menthol Garden", price: "R$ 45,00", body: "Limpeza com frescor. Couro cabeludo acordado." },
  { cat: "Cabelo", name: "Shampoo esfoliante Garden", price: "R$ 55,00", body: "Reset do couro. Para quem usa pomada todo dia." },
  { cat: "Cabelo", name: "Cera modeladora Nevou Garden", price: "R$ 30,00", body: "Textura e controle para penteados estruturados." },
  { cat: "Cabelo", name: "Spray de brilho Garden", price: "R$ 85,00", body: "Acabamento de vitrine. O produto-topo da linha capilar." },
  { cat: "Finalizador", name: "Leave-in Garden", price: "R$ 40,00", body: "Proteção e maciez entre a lavagem e o pente." },
  { cat: "Finalizador", name: "Gelatina Garden", price: "R$ 45,00", body: "Definição com movimento. Cacho e ondulado no padrão da casa." },
  { cat: "Cachos", name: "Modeladora Curls Garden", price: "R$ 60,00", body: "Desenhada para cacho. Complementa o corte de quem não usa só máquina." },
] as const;

export const faq = [
  {
    q: "Como agendo?",
    a: "Pelo app, com nome e telefone. Escolha o barbeiro ou deixe a casa indicar. Quem preferir, chama no WhatsApp.",
  },
  {
    q: "Preciso de conta para cortar?",
    a: "Não. Conta completa vale para clube, fidelidade, produtos e histórico. O corte avulso não exige cadastro longo.",
  },
  {
    q: "O clube vale em qualquer dia?",
    a: "Depende do plano. Essencial, Primer e Cavalheiro Smart: terça a quinta. Black e VIP: todos os dias da semana.",
  },
  {
    q: "Tem produto para levar?",
    a: "Sim. Pomadas Luck's Style e linha Garden — barba, cabelo e finalizadores — no mesmo app do agendamento.",
  },
] as const;

export const paths = [
  { n: "01", title: "App", body: "Nome e telefone bastam. Preferência de barbeiro ou escolha automática." },
  { n: "02", title: "WhatsApp", body: "(11) 97094-1300. Quem ainda prefere conversar, conversa." },
  { n: "03", title: "Instagram", body: "@barbearialucksstyle. O feed traz o corte; o site fecha o horário." },
] as const;
