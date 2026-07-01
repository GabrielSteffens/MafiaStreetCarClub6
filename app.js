/**
 * MAFIA - STREET CAR CLUB
 * Script Principal - Painel de Gestão Premium
 */

// Mapeamentos para traduções visuais rápidas na interface
const rankTranslations = {
  "Boss": "Chefe (Boss)",
  "Underboss": "Subchefe (Underboss)",
  "Caporegime": "Caporegime",
  "Soldier": "Soldado (Soldier)",
  "Associate": "Associado (Associate)"
};

const statusTranslations = {
  "Active": "Ativo",
  "Inactive": "Inativo",
  "Pending": "Pendente",
  "Approved": "Aprovado",
  "Rejected": "Rejeitado"
};

const threatTranslations = {
  "Low": "Baixo",
  "Medium": "Médio",
  "High": "Alto",
  "Critical": "Crítico",
  "Baixo": "Baixo",
  "Médio": "Médio",
  "Alto": "Alto",
  "Crítico": "Crítico"
};

const transTypeTranslations = {
  "Income": "Receita",
  "Expense": "Despesa",
  "Donation": "Doação",
  "Payroll": "Folha de Pagamento",
  "Operation Cost": "Custo de Operação"
};

// ==================== CONJUNTOS DE DADOS INICIAIS DE FÁBRICA ====================
const defaultState = {
  settings: {
    clubName: "MAFIA - STREET CAR CLUB",
    adminName: "Vito Scaletta",
    adminAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  members: [
    {
      id: "MEM-001",
      fullName: "Vito Scaletta",
      nickname: "O Motorista",
      phone: "555-0144",
      discord: "vito#1945",
      email: "vito@streetcarclub.com",
      dob: "1925-05-02",
      address: "Greenfield Lane, 205, Empire Bay",
      rank: "Caporegime",
      recruiter: "Leo Galante",
      joinDate: "2024-01-15",
      trust: 95,
      status: "Active",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      notes: "Coordenador geral do clube. Piloto de elite, gerencia transportes logísticos e comunicações táticas do sindicato.",
      lastActivity: "2026-07-01 16:30",
      documents: [
        { name: "Carteira_Habilitacao_Falsa.pdf", size: "1.2 MB", icon: "fa-file-pdf" },
        { name: "Registro_Veiculo_Lassiter.pdf", size: "450 KB", icon: "fa-file-signature" }
      ],
      vehicles: [
        { model: "Lassiter Series 75", plate: "MAFIA-01", color: "Preto", photo: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=300" },
        { model: "Smith Coupe", plate: "DRFT-88", color: "Vermelho Carmesim", photo: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=300" }
      ],
      warnings: [
        { id: "WRN-102", title: "Velocidade na Casa Segura", date: "2026-04-12", text: "Excesso de velocidade reportado perto do esconderijo discreto. Instruído a manter discrição.", level: "Low", admin: "Leo Galante" }
      ],
      history: [
        { time: "2026-07-01 16:30", desc: "Atualizou os dados do veículo <strong>Smith Coupe</strong>." },
        { time: "2026-06-28 10:15", desc: "Presidiu reunião do sindicato referente a <strong>Finanças de Territórios</strong>." },
        { time: "2026-06-14 23:45", desc: "Designado para coordenar a <strong>Operação Colarinho de Ouro</strong>." }
      ]
    },
    {
      id: "MEM-002",
      fullName: "Joe Barbaro",
      nickname: "O Executor",
      phone: "555-0182",
      discord: "barbaro_joe",
      email: "joe@streetcarclub.com",
      dob: "1924-11-30",
      address: "Rua Little Italy, 15, Empire Bay",
      rank: "Soldier",
      recruiter: "Vito Scaletta",
      joinDate: "2024-01-18",
      trust: 90,
      status: "Active",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      notes: "Extremamente agressivo e confiável em combate urbano. Piloto de apoio em fugas. Às vezes chama atenção excessiva.",
      lastActivity: "2026-07-01 15:45",
      documents: [
        { name: "Porte_Armas_Classe_A.pdf", size: "2.1 MB", icon: "fa-file-shield" }
      ],
      vehicles: [
        { model: "Shubert Beverly", plate: "JOE-CAR", color: "Azul Escuro", photo: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=300" }
      ],
      warnings: [],
      history: [
        { time: "2026-07-01 15:45", desc: "Registrou saída com carro oficial na garagem principal." },
        { time: "2026-06-30 19:20", desc: "Concluiu escolta tática do alvo <strong>Frank Colletti</strong>." }
      ]
    },
    {
      id: "MEM-003",
      fullName: "Leo Galante",
      nickname: "O Conselheiro",
      phone: "555-0010",
      discord: "galante_leo",
      email: "leo@streetcarclub.com",
      dob: "1887-03-12",
      address: "Mansão Highbrook, Estrada 1, Empire Bay",
      rank: "Underboss",
      recruiter: "Frank Vinciguerra",
      joinDate: "2020-05-10",
      trust: 100,
      status: "Active",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      notes: "Membro sênior e estrategista chefe do sindicato. Estabelece contatos políticos e comerciais de alto escalão do clube.",
      lastActivity: "2026-06-30 11:30",
      documents: [
        { name: "Escrituras_Imoveis_Sede.pdf", size: "4.8 MB", icon: "fa-file-invoice" }
      ],
      vehicles: [
        { model: "Lassiter V16 Roadster", plate: "LEO-01", color: "Preto e Prata", photo: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=300" }
      ],
      warnings: [],
      history: [
        { time: "2026-06-30 11:30", desc: "Aprovou a liberação de recursos para <strong>Folha de Payouts Semana 26</strong>." }
      ]
    },
    {
      id: "MEM-004",
      fullName: "Henry Tomasino",
      nickname: "O Terno",
      phone: "555-0156",
      discord: "henry_t",
      email: "henry@streetcarclub.com",
      dob: "1930-08-01",
      address: "Apto Oyster Bay, Bloco 4, Empire Bay",
      rank: "Soldier",
      recruiter: "Vito Scaletta",
      joinDate: "2025-02-20",
      trust: 75,
      status: "Inactive",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
      notes: "Agente tático operacional refinado. Status inativo temporariamente devido à alta vigilância policial no seu setor.",
      lastActivity: "2026-06-25 18:22",
      documents: [],
      vehicles: [
        { model: "Jefferson Provincial", plate: "SUIT-V8", color: "Verde Escuro", photo: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=300" }
      ],
      warnings: [
        { id: "WRN-101", title: "Contato Policial Ocultado", date: "2026-06-24", text: "Deixou de registrar interrogatório de rotina em barreira policial em menos de 2 horas do ocorrido.", level: "High", admin: "Vito Scaletta" }
      ],
      history: [
        { time: "2026-06-25 18:22", desc: "Solicitou afastamento por segurança (inativo temporário)." }
      ]
    }
  ],
  recruitment: [
    {
      id: "REC-001",
      fullName: "Martin Brown",
      nickname: "Marty",
      phone: "555-0111",
      discord: "marty_rodas",
      age: 20,
      recruiter: "Joe Barbaro",
      meetDate: "2026-07-03",
      meetTime: "14:00",
      location: "Garagem das Docas (Leste)",
      vehicleUsed: { model: "Smith Coupe", color: "Vermelho", plate: "DRFT-88" },
      mission: "Transportar velas de ignição especiais e peças de motor modificadas do porto até a sede sem atrair viaturas.",
      materials: ["Rádio", "Veículo", "Chaves"],
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300",
      status: "Pending"
    },
    {
      id: "REC-002",
      fullName: "Jimmy Santorelli",
      nickname: "Garoto Jimmy",
      phone: "555-0177",
      discord: "jimmy_garoto",
      age: 22,
      recruiter: "Vito Scaletta",
      meetDate: "2026-06-25",
      meetTime: "10:30",
      location: "Restaurante Hunter's Point",
      vehicleUsed: { model: "Lassiter V16", color: "Preto", plate: "MAFIA-01" },
      mission: "Fazer levantamento fotográfico e reconhecimento de câmeras de segurança nos fundos do Southport.",
      materials: ["Rádio", "Dinheiro", "Documentos"],
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300",
      status: "Approved"
    }
  ],
  operations: [
    {
      id: "OP-001",
      title: "Operação Colarinho de Ouro",
      targetName: "Frank Colletti",
      targetAlias: "O Canário",
      targetPhone: "555-4029",
      targetAge: 52,
      targetLocation: "Aeroporto Central Terminal 2",
      targetPhoto: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=300",
      reason: "Suspeita de vazamento de livros contábeis para federais. Alvo está preparando fuga em avião particular.",
      threatLevel: "Critical",
      assignedTeam: ["Vito Scaletta", "Joe Barbaro"],
      assignedVehicles: ["Smith Coupe (DRFT-88)", "Shubert Beverly (JOE-CAR)"],
      assignedEquipment: ["Metralhadora Thompson", "Pistola Pesada", "Rádios Transceptores", "Coletes Balísticos"],
      status: "Active",
      timeline: [
        { time: "2026-07-01 10:00", text: "Operação tática autorizada pelo Subchefe Leo Galante." },
        { time: "2026-07-01 12:30", text: "Vito Scaletta montou vigília externa nos portões do hangar." },
        { time: "2026-07-01 17:00", text: "Alvo avistado no saguão de embarque. Equipes em alerta de interceptação." }
      ]
    },
    {
      id: "OP-002",
      title: "Operação Limpeza Geral",
      targetName: "Derek Pappalardo",
      targetAlias: "Mestre das Docas",
      targetPhone: "555-9081",
      targetAge: 48,
      targetLocation: "Galpão Southport 3",
      targetPhoto: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=300",
      reason: "Extorquindo cargas de peças importadas do clube nos portões. Requer intervenção direta.",
      threatLevel: "High",
      assignedTeam: ["Joe Barbaro"],
      assignedVehicles: ["Shubert Beverly (JOE-CAR)"],
      assignedEquipment: ["Pistola Pesada", "Ferramenta de Arrombamento"],
      status: "Planning",
      timeline: [
        { time: "2026-06-29 09:00", text: "Logísticas de rotina do alvo registradas pelo batedor das docas." }
      ]
    }
  ],
  transactions: [
    { date: "2026-07-01", type: "Income", desc: "Receita Oficina Tuning Southport", member: "Vito Scaletta", amount: 15400 },
    { date: "2026-06-30", type: "Expense", desc: "Propina Policial das Docas", member: "Joe Barbaro", amount: 3500 },
    { date: "2026-06-28", type: "Donation", desc: "Contribuição Família Leo Galante", member: "Leo Galante", amount: 25000 },
    { date: "2026-06-25", type: "Payroll", desc: "Pagamento Guarda de Escolta", member: "Vito Scaletta", amount: 8000 },
    { date: "2026-06-24", type: "Operation Cost", desc: "Custo Armamentos e Munições", member: "Joe Barbaro", amount: 6200 }
  ],
  vehicles: [
    { model: "Lassiter Series 75", plate: "MAFIA-01", color: "Preto Obsidiana", owner: "Vito Scaletta", status: "Operacional", photo: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=300", notes: "Modelo executivo de luxo. Placas balísticas instaladas no cofre do motor." },
    { model: "Smith Coupe", plate: "DRFT-88", color: "Vermelho Carmesim", owner: "Vito Scaletta", status: "Operacional", photo: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=300", notes: "Motor V8 Supercharger, pneus esportivos slick e suspensão rebaixada." },
    { model: "Shubert Beverly", plate: "JOE-CAR", color: "Azul Escuro", owner: "Joe Barbaro", status: "Operacional", photo: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=300", notes: "Injeção de nitro, suspensão traseira ajustada para arrancadas." },
    { model: "Lassiter V16 Roadster", plate: "LEO-01", color: "Preto e Prata", owner: "Leo Galante", status: "Operacional", photo: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=300", notes: "Carro clássico extremamente raro. Mantido em perfeitas condições na sede." }
  ],
  equipment: [
    { name: "Submetralhadora Thompson M1A1", category: "Armas", quantity: 6, assigned: "Vito Scaletta", status: "Novo", photo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=300" },
    { name: "Pistola Semi-automática M1911", category: "Armas", quantity: 12, assigned: "Cofre Central", status: "Bom", photo: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&q=80&w=300" },
    { name: "Colete de Kevlar Pesado", category: "Defesa", quantity: 8, assigned: "Cofre Central", status: "Novo", photo: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=300" },
    { name: "Rádio Transceptor de Longo Alcance", category: "Comunicação", quantity: 15, assigned: "Marty", status: "Bom", photo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=300" }
  ],
  properties: [
    { name: "Esconderijo Greenfield", address: "Greenfield Lane, 205, Empire Bay", type: "Casa Segura", security: "Portas Reforçadas", guards: "Nenhum", storage: "Arsenal oculto e 3 vagas de fuga", photo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400" },
    { name: "Galpão Portuário Hoboken 4", address: "Área Industrial das Docas, Empire Bay", type: "Galpão", security: "Padrão", guards: "3 Soldados", storage: "Estoque de bebidas e peças importadas", photo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400" },
    { name: "Sede Central Little Italy", address: "Avenida Little Italy, 12, Empire Bay", type: "Sede do Clube", security: "Máxima Proteção", guards: "5 Soldados", storage: "Cofre de depósitos e documentos fiscais", photo: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=400" }
  ],
  meetings: [
    { title: "Partilha de Divisas de Territórios", date: "2026-07-05", time: "20:00", location: "Sala de Reuniões da Sede", participants: "Vito, Joe, Salieri, Henry", attendance: "Scheduled", notes: "Análise dos relatórios de taxas das docas e postos de combustível." },
    { title: "Rotas de Fuga Operação Colarinho", date: "2026-06-28", time: "18:00", location: "Mona Lisa Lounge", participants: "Vito, Joe, Leo", attendance: "Completed", notes: "Definição de veículos de reserva posicionados na via de acesso ao aeroporto." }
  ],
  activities: [
    { time: "2026-07-01 17:22", type: "Membro", text: "Vito Scaletta registrou uma advertência para Henry Tomasino." },
    { time: "2026-07-01 15:45", type: "Sistema", text: "Joe Barbaro editou dados cadastrais no dossiê pessoal." },
    { time: "2026-07-01 10:00", type: "Operação", text: "Operação Colarinho de Ouro ativada e equipes mobilizadas." },
    { time: "2026-07-01 09:12", type: "Financeiro", text: "Registrado depósito de receita de $15,400 das oficinas Southport." }
  ]
};

// Objeto de Estado da Aplicação
let state = {};

// ==================== UTILITÁRIOS DO ESTADO ====================
function loadState() {
  const localData = localStorage.getItem("mafia_dashboard_state_v1");
  if (localData) {
    try {
      state = JSON.parse(localData);
    } catch (e) {
      console.error("Erro ao ler localStorage, reiniciando dados de fábrica...", e);
      state = JSON.parse(JSON.stringify(defaultState));
      saveState();
    }
  } else {
    state = JSON.parse(JSON.stringify(defaultState));
    saveState();
  }
}

function saveState() {
  localStorage.setItem("mafia_dashboard_state_v1", JSON.stringify(state));
}

function logActivity(text, type = "Sistema") {
  const now = new Date();
  const timeStr = now.toISOString().slice(0, 10) + " " + now.toTimeString().slice(0, 5);
  state.activities.unshift({ time: timeStr, type, text });
  
  if (state.activities.length > 50) state.activities.pop();
  
  saveState();
}

// ==================== INICIALIZAÇÕES DO DOM ====================
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  initClock();
  initSidebarNavigation();
  initModals();
  initPhotoUploads();
  
  // Listeners de envio de formulários
  initFormSubmissions();
  
  // Listeners para filtros e buscas de membros
  const memberSearch = document.getElementById("member-search");
  const memberRank = document.getElementById("member-filter-rank");
  const memberStatus = document.getElementById("member-filter-status");
  if (memberSearch) memberSearch.addEventListener("input", renderMembersList);
  if (memberRank) memberRank.addEventListener("change", renderMembersList);
  if (memberStatus) memberStatus.addEventListener("change", renderMembersList);

  // Botão de salvar configurações
  const btnSaveSettings = document.getElementById("btn-save-settings");
  if (btnSaveSettings) btnSaveSettings.addEventListener("click", saveSettings);
  
  // Botão de reset de fábrica
  const btnResetData = document.getElementById("btn-reset-data");
  if (btnResetData) btnResetData.addEventListener("click", resetDatabase);

  // Botão de limpar histórico
  const btnClearActivities = document.getElementById("btn-clear-activities");
  if (btnClearActivities) {
    btnClearActivities.addEventListener("click", () => {
      state.activities = [];
      logActivity("Histórico de auditoria geral limpo pelo administrador.", "Sistema");
      renderActivities();
      showToast("Histórico limpo com sucesso", "success");
    });
  }

  // Listeners para os relatórios
  const reportCards = document.querySelectorAll(".report-type-card");
  reportCards.forEach(card => {
    card.addEventListener("click", () => {
      reportCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      renderReportPreview(card.getAttribute("data-report-type"));
    });
  });

  // Botões de exportação de relatórios
  const btnPdf = document.getElementById("btn-export-pdf");
  const btnExcel = document.getElementById("btn-export-excel");
  if (btnPdf) btnPdf.addEventListener("click", () => showToast("Compilando relatórios e exportando para PDF...", "success"));
  if (btnExcel) btnExcel.addEventListener("click", () => showToast("Exportando planilhas para arquivos XLS...", "success"));

  // Aplicar dados visuais iniciais na interface
  applySettingsUI();

  // Iniciar na aba Painel (Dashboard)
  renderModule("dashboard");
});

// Relógio do topo
function initClock() {
  const clockNode = document.getElementById("current-time");
  setInterval(() => {
    const d = new Date();
    if (clockNode) {
      clockNode.innerText = d.toTimeString().slice(0, 8);
    }
  }, 1000);
}

// Navegação entre módulos (Rotas SPA)
function initSidebarNavigation() {
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      menuItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      
      const moduleName = item.getAttribute("data-module");
      renderModule(moduleName);
    });
  });
}

function renderModule(moduleName) {
  // Ocultar painéis
  document.querySelectorAll(".module-panel").forEach(panel => {
    panel.classList.remove("active");
  });
  
  // Mostrar ativo
  const targetPanel = document.getElementById(`module-${moduleName}`);
  if (targetPanel) {
    targetPanel.classList.add("active");
  }
  
  // Alterar título no cabeçalho
  const headerTitle = document.getElementById("module-title");
  if (headerTitle) {
    const nameMap = {
      dashboard: "Painel Geral",
      members: "Dossiê de Membros",
      recruitment: "Funil de Recrutamento",
      operations: "Centro de Operações Táticas",
      treasury: "Livro Caixa da Tesouraria",
      vehicles: "Frota de Veículos",
      equipment: "Arsenal do Armaria",
      properties: "Propriedades do Sindicato",
      meetings: "Reuniões do Conselho",
      activities: "Histórico de Atividades",
      reports: "Exportação de Relatórios",
      settings: "Parâmetros do Sistema"
    };
    headerTitle.innerText = nameMap[moduleName] || moduleName;
  }
  
  // Atualizar contadores
  updateTopbarTotals();

  // Renderizadores dinâmicos
  switch(moduleName) {
    case "dashboard":
      renderDashboard();
      break;
    case "members":
      renderMembersList();
      break;
    case "recruitment":
      renderRecruitment();
      break;
    case "operations":
      renderOperations();
      break;
    case "treasury":
      renderTreasury();
      break;
    case "vehicles":
      renderVehicles();
      break;
    case "equipment":
      renderEquipment();
      break;
    case "properties":
      renderProperties();
      break;
    case "meetings":
      renderMeetings();
      break;
    case "activities":
      renderActivities();
      break;
    case "reports":
      renderReportPreview("members");
      break;
  }
}

function updateTopbarTotals() {
  // Saldo total dinâmico
  const totalBalance = state.transactions.reduce((acc, t) => {
    if (t.type === "Income" || t.type === "Donation") return acc + t.amount;
    return acc - t.amount;
  }, 324500); 
  
  const formattedBalance = "$" + totalBalance.toLocaleString();
  const topbarTreasury = document.getElementById("topbar-treasury-val");
  const dashTreasury = document.getElementById("dash-treasury-balance");
  const treasuryBalanceVal = document.getElementById("treasury-balance-val");
  
  if (topbarTreasury) topbarTreasury.innerText = formattedBalance;
  if (dashTreasury) dashTreasury.innerText = formattedBalance;
  if (treasuryBalanceVal) treasuryBalanceVal.innerText = formattedBalance;
  
  // Operações ativas
  const activeOps = state.operations.filter(o => o.status === "Active").length;
  const topbarOps = document.getElementById("topbar-ops-val");
  const dashOps = document.getElementById("dash-active-operations");
  if (topbarOps) topbarOps.innerText = activeOps;
  if (dashOps) dashOps.innerText = activeOps;
  
  // Total de Membros / Ativos
  const totalMem = state.members.length;
  const activeMem = state.members.filter(m => m.status === "Active").length;
  const dashTotalMem = document.getElementById("dash-total-members");
  const dashActiveMem = document.getElementById("dash-active-members");
  if (dashTotalMem) dashTotalMem.innerText = totalMem;
  if (dashActiveMem) dashActiveMem.innerText = activeMem;
  
  // Recrutas pendentes
  const pendingRec = state.recruitment.filter(r => r.status === "Pending").length;
  const dashRec = document.getElementById("dash-pending-recruit");
  if (dashRec) dashRec.innerText = pendingRec;

  // Frota
  const dashVehicles = document.getElementById("dash-total-vehicles");
  if (dashVehicles) dashVehicles.innerText = state.vehicles.length;
}

// ==================== TOAST NOTIFICAÇÕES ====================
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "fa-check-circle";
  if (type === "error") icon = "fa-exclamation-triangle";
  
  toast.innerHTML = `
    <i class="fas ${icon}"></i>
    <div class="toast-message">${message}</div>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = "slideInRight 0.3s reverse forwards";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// ==================== CONTROLE DE FOTOS ENVIADAS ====================
let tempUploadedImage = {}; 

function initPhotoUploads() {
  const uploadBoxes = [
    { boxId: "m-photo-upload-box", inputId: "m-photo-input", previewId: "m-photo-preview", formKey: "new-member" },
    { boxId: "r-photo-upload-box", inputId: "r-photo-input", previewId: "r-photo-preview", formKey: "new-recruit" },
    { boxId: "o-photo-upload-box", inputId: "o-photo-input", previewId: "o-photo-preview", formKey: "new-operation" },
    { boxId: "v-photo-upload-box", inputId: "v-photo-input", previewId: "v-photo-preview", formKey: "new-vehicle" },
    { boxId: "e-photo-upload-box", inputId: "e-photo-input", previewId: "e-photo-preview", formKey: "new-equipment" },
    { boxId: "p-photo-upload-box", inputId: "p-photo-input", previewId: "p-photo-preview", formKey: "new-property" }
  ];

  uploadBoxes.forEach(({ boxId, inputId, previewId, formKey }) => {
    const box = document.getElementById(boxId);
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    
    if (!box || !input || !preview) return;
    
    box.addEventListener("click", () => input.click());
    
    box.addEventListener("dragover", (e) => {
      e.preventDefault();
      box.classList.add("dragover");
    });
    box.addEventListener("dragleave", () => {
      box.classList.remove("dragover");
    });
    box.addEventListener("drop", (e) => {
      e.preventDefault();
      box.classList.remove("dragover");
      if (e.dataTransfer.files.length) {
        processImageFile(e.dataTransfer.files[0], preview, formKey, box);
      }
    });
    
    input.addEventListener("change", (e) => {
      if (input.files.length) {
        processImageFile(input.files[0], preview, formKey, box);
      }
    });
  });
}

function processImageFile(file, previewImg, formKey, box) {
  if (!file.type.startsWith("image/")) {
    showToast("Arquivo inválido. Escolha uma imagem.", "error");
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    previewImg.src = e.target.result;
    previewImg.style.display = "block";
    
    const icon = box.querySelector(".photo-upload-icon");
    const text = box.querySelector(".photo-upload-text");
    if (icon) icon.style.display = "none";
    if (text) text.style.display = "none";
    
    tempUploadedImage[formKey] = e.target.result;
    showToast("Imagem carregada e pronta para dossiê.", "success");
  };
  reader.readAsDataURL(file);
}

function clearPhotoUpload(formKey) {
  tempUploadedImage[formKey] = null;
  const boxId = formKey === "new-member" ? "m-photo-upload-box" : 
                formKey === "new-recruit" ? "r-photo-upload-box" :
                formKey === "new-operation" ? "o-photo-upload-box" :
                formKey === "new-vehicle" ? "v-photo-upload-box" :
                formKey === "new-equipment" ? "e-photo-upload-box" : "p-photo-upload-box";
                
  const box = document.getElementById(boxId);
  if (!box) return;
  const preview = box.querySelector(".photo-upload-preview");
  const icon = box.querySelector(".photo-upload-icon");
  const text = box.querySelector(".photo-upload-text");
  const input = box.querySelector(".photo-upload-file-input");
  
  if (preview) {
    preview.src = "";
    preview.style.display = "none";
  }
  if (icon) icon.style.display = "block";
  if (text) text.style.display = "block";
  if (input) input.value = "";
}

// ==================== MODALS TABS & ROWS ====================
function initModals() {
  const triggers = [
    { btnId: "btn-open-new-member", modalId: "modal-new-member" },
    { btnId: "btn-open-new-recruit", modalId: "modal-new-recruit" },
    { btnId: "btn-open-new-operation", modalId: "modal-new-operation" },
    { btnId: "btn-open-new-transaction", modalId: "modal-new-transaction" },
    { btnId: "btn-open-new-vehicle", modalId: "modal-new-vehicle" },
    { btnId: "btn-open-new-equipment", modalId: "modal-new-equipment" },
    { btnId: "btn-open-new-meeting", modalId: "modal-new-meeting" },
    { btnId: "btn-open-new-property", modalId: "modal-new-property" }
  ];
  
  triggers.forEach(({ btnId, modalId }) => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener("click", () => openModal(modalId));
    }
  });
  
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      closeModal(btn.getAttribute("data-close-modal"));
    });
  });
  
  const statusToggle = document.getElementById("m-status-toggle");
  const statusText = document.getElementById("m-status-text");
  if (statusToggle && statusText) {
    statusToggle.addEventListener("change", () => {
      if (statusToggle.checked) {
        statusText.innerText = "Ativo";
        statusText.style.color = "#4CAF50";
      } else {
        statusText.innerText = "Inativo";
        statusText.style.color = "#F44336";
      }
    });
  }
  
  const btnAddVehRow = document.getElementById("btn-m-add-vehicle-row");
  if (btnAddVehRow) {
    btnAddVehRow.addEventListener("click", addFormVehicleRow);
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    const formKey = modalId.replace("modal-", "");
    clearPhotoUpload(formKey);
    
    if (modalId === "modal-new-member") {
      const container = document.getElementById("m-form-vehicles-container");
      if (container) {
        container.innerHTML = ""; 
        addFormVehicleRow(); 
      }
    }
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    const form = modal.querySelector("form");
    if (form) form.reset();
  }
}

function addFormVehicleRow() {
  const container = document.getElementById("m-form-vehicles-container");
  if (!container) return;
  
  const row = document.createElement("div");
  row.className = "form-vehicle-row";
  row.innerHTML = `
    <div class="form-control-wrapper">
      <label class="form-label" style="font-size: 0.65rem;">Modelo</label>
      <input type="text" class="form-input form-veh-model" style="padding: 6px 10px; font-size: 0.8rem;" placeholder="Ex: Lassiter V16" required>
    </div>
    <div class="form-control-wrapper">
      <label class="form-label" style="font-size: 0.65rem;">Placa</label>
      <input type="text" class="form-input form-veh-plate" style="padding: 6px 10px; font-size: 0.8rem;" placeholder="ABC-123" required>
    </div>
    <div class="form-control-wrapper">
      <label class="form-label" style="font-size: 0.65rem;">Cor</label>
      <input type="text" class="form-input form-veh-color" style="padding: 6px 10px; font-size: 0.8rem;" placeholder="Preto" required>
    </div>
    <div class="form-control-wrapper">
      <label class="form-label" style="font-size: 0.65rem;">Foto URL</label>
      <input type="text" class="form-input form-veh-photo" style="padding: 6px 10px; font-size: 0.8rem;" value="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=200">
    </div>
    <button type="button" class="btn btn-danger btn-sm" onclick="this.parentElement.remove()" style="padding: 8px 10px; height: 33px;"><i class="fas fa-trash"></i></button>
  `;
  container.appendChild(row);
}

// ==================== RENDERS DOS MÓDULOS ====================

// 1. RENDERS DO PAINEL GERAL (DASHBOARD)
let dashboardChart = null;

function renderDashboard() {
  updateTopbarTotals();

  // Histórico na aba Dashboard
  const activitiesNode = document.getElementById("dashboard-recent-activities");
  if (activitiesNode) {
    activitiesNode.innerHTML = "";
    if (state.activities.length === 0) {
      activitiesNode.innerHTML = "<p style='color: var(--text-muted); font-size: 0.8rem;'>Nenhuma atividade recente.</p>";
    } else {
      state.activities.slice(0, 5).forEach(act => {
        const div = document.createElement("div");
        div.className = "timeline-event";
        div.innerHTML = `
          <div class="timeline-time">${act.time}</div>
          <div class="timeline-desc">[${act.type}] ${act.text}</div>
        `;
        activitiesNode.appendChild(div);
      });
    }
  }

  // Gráfico de fluxo de caixa
  const ctx = document.getElementById("dashboard-main-chart");
  if (ctx) {
    if (dashboardChart) dashboardChart.destroy();
    
    const incomeData = [24000, 32000, 18000, 42000, 39000, 58200];
    const expenseData = [15000, 22000, 12000, 26000, 21000, 23700];
    
    dashboardChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [
          {
            label: 'Receitas / Entradas ($)',
            data: incomeData,
            borderColor: '#B71C1C',
            backgroundColor: 'rgba(183, 28, 28, 0.15)',
            borderWidth: 2,
            tension: 0.3,
            fill: true
          },
          {
            label: 'Despesas ($)',
            data: expenseData,
            borderColor: '#424242',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#ffffff',
              font: { family: 'Plus Jakarta Sans', size: 11 }
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#a0a0ab' }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#a0a0ab' }
          }
        }
      }
    });
  }
}

// 2. RENDERS DOS MEMBROS
let activeMemberId = "MEM-001";

function renderMembersList() {
  const container = document.getElementById("members-list-container");
  if (!container) return;
  
  container.innerHTML = "";
  
  const query = document.getElementById("member-search").value.toLowerCase();
  const filterRank = document.getElementById("member-filter-rank").value;
  const filterStatus = document.getElementById("member-filter-status").value;
  
  const filtered = state.members.filter(m => {
    const matchName = m.fullName.toLowerCase().includes(query) || (m.nickname && m.nickname.toLowerCase().includes(query));
    const matchRank = filterRank === "" || m.rank === filterRank;
    const matchStatus = filterStatus === "" || m.status === filterStatus;
    return matchName && matchRank && matchStatus;
  });
  
  if (filtered.length === 0) {
    container.innerHTML = "<p style='color: var(--text-muted); font-size: 0.8rem; text-align: center; padding: 20px;'>Nenhum membro corresponde aos filtros.</p>";
    return;
  }
  
  filtered.forEach(m => {
    const item = document.createElement("div");
    item.className = `member-list-item ${m.id === activeMemberId ? 'active' : ''}`;
    item.innerHTML = `
      <img src="${m.photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100'}" alt="${m.fullName}" class="member-item-avatar">
      <div class="member-item-details">
        <div class="member-item-name">
          ${m.fullName}
          <span class="profile-hero-badge ${m.status === 'Active' ? 'badge-active' : 'badge-inactive'}" style="position: static; transform: none; font-size: 0.55rem; padding: 2px 6px;">${statusTranslations[m.status]}</span>
        </div>
        <div class="member-item-rank">${rankTranslations[m.rank]}</div>
        <div class="member-item-meta">
          <span class="member-item-id">${m.id}</span>
          <span style="font-size: 0.65rem; color: var(--text-muted);">${m.nickname || ''}</span>
        </div>
      </div>
    `;
    item.addEventListener("click", () => {
      activeMemberId = m.id;
      renderMembersList();
    });
    container.appendChild(item);
  });
  
  renderMemberDetail();
}

function renderMemberDetail() {
  const container = document.getElementById("member-detail-container");
  if (!container) return;
  
  const m = state.members.find(member => member.id === activeMemberId);
  if (!m) {
    container.innerHTML = `
      <div class="premium-card" style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <i class="fas fa-users-cog" style="font-size: 3rem; margin-bottom: 15px;"></i>
        <p>Nenhum dossiê selecionado.</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = `
    <div class="profile-hero-card">
      <div class="profile-hero-photo-wrapper">
        <img src="${m.photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=300'}" class="profile-hero-photo" alt="${m.fullName}">
        <div class="profile-hero-badge ${m.status === 'Active' ? 'badge-active' : 'badge-inactive'}">${statusTranslations[m.status]}</div>
      </div>
      
      <div class="profile-hero-info">
        <div class="profile-hero-rank">${rankTranslations[m.rank]}</div>
        <div class="profile-hero-name">${m.fullName}</div>
        <div class="profile-hero-nickname">"${m.nickname || 'Sem apelido'}"</div>
        
        <div class="profile-hero-grid">
          <div class="profile-hero-stat">
            <span class="profile-hero-stat-label">ID de Registro</span>
            <span class="profile-hero-stat-value">${m.id}</span>
          </div>
          <div class="profile-hero-stat">
            <span class="profile-hero-stat-label">Data de Entrada</span>
            <span class="profile-hero-stat-value">${m.joinDate || 'N/A'}</span>
          </div>
          <div class="profile-hero-stat">
            <span class="profile-hero-stat-label">Recrutado por</span>
            <span class="profile-hero-stat-value">${m.recruiter || 'Nenhum'}</span>
          </div>
          <div class="profile-hero-stat">
            <span class="profile-hero-stat-label">Lealdade</span>
            <span class="profile-hero-stat-value" style="color: ${m.trust >= 80 ? '#4CAF50' : m.trust >= 50 ? '#FF9800' : '#F44336'};">${m.trust}%</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Tab Controls -->
    <div class="tab-container">
      <nav class="tab-nav">
        <button class="tab-button active" onclick="switchMemberTab(event, 'tab-info')">Informações</button>
        <button class="tab-button" onclick="switchMemberTab(event, 'tab-vehicles')">Veículos</button>
        <button class="tab-button" onclick="switchMemberTab(event, 'tab-history')">Histórico</button>
        <button class="tab-button" onclick="switchMemberTab(event, 'tab-warnings')">Avisos (${m.warnings ? m.warnings.length : 0})</button>
      </nav>
      
      <!-- 1. INFO TAB -->
      <div id="tab-info" class="tab-panel active" style="margin-top: 15px;">
        <div class="info-section-grid">
          <div class="premium-card">
            <h4 class="info-box-title"><i class="fas fa-id-card"></i> Dados Pessoais</h4>
            <div class="info-grid-fields">
              <div class="info-field">
                <span class="info-label">Nome Completo</span>
                <span class="info-value">${m.fullName}</span>
              </div>
              <div class="info-field">
                <span class="info-label">Apelido</span>
                <span class="info-value">${m.nickname || 'N/A'}</span>
              </div>
              <div class="info-field">
                <span class="info-label">Nascimento</span>
                <span class="info-value">${m.dob || 'N/A'}</span>
              </div>
              <div class="info-field">
                <span class="info-label">Nacionalidade</span>
                <span class="info-value">ítalo-americano</span>
              </div>
            </div>
            
            <h4 class="info-box-title" style="margin-top: 20px;"><i class="fas fa-phone"></i> Canais de Contato</h4>
            <div class="info-grid-fields">
              <div class="info-field">
                <span class="info-label">Telefone</span>
                <span class="info-value">${m.phone || 'N/A'}</span>
              </div>
              <div class="info-field">
                <span class="info-label">Discord</span>
                <span class="info-value">${m.discord || 'N/A'}</span>
              </div>
              <div class="info-field form-group-full">
                <span class="info-label">Residência Atual</span>
                <span class="info-value">${m.address || 'N/A'}</span>
              </div>
            </div>
          </div>
          
          <div class="premium-card">
            <h4 class="info-box-title"><i class="fas fa-file-signature"></i> Arquivos do Dossiê</h4>
            <div class="document-grid" id="member-docs-grid">
              <!-- Arquivos -->
            </div>
            
            <h4 class="info-box-title" style="margin-top: 25px;"><i class="fas fa-align-left"></i> Observações Táticas</h4>
            <p style="font-size: 0.8rem; line-height: 1.5; color: var(--text-secondary);">${m.notes || 'Nenhuma observação cadastrada no dossiê.'}</p>
          </div>
        </div>
      </div>
      
      <!-- 2. VEHICLES TAB -->
      <div id="tab-vehicles" class="tab-panel" style="margin-top: 15px;">
        <div class="vehicles-grid" id="member-vehicles-grid">
          <!-- Veículos do membro -->
        </div>
      </div>
      
      <!-- 3. HISTORY TIMELINE TAB -->
      <div id="tab-history" class="tab-panel" style="margin-top: 15px;">
        <div class="premium-card">
          <div class="timeline-log" id="member-history-timeline">
            <!-- Histórico -->
          </div>
        </div>
      </div>
      
      <!-- 4. WARNINGS TAB -->
      <div id="tab-warnings" class="tab-panel" style="margin-top: 15px;">
        <div class="warnings-list" id="member-warnings-list">
          <!-- Avisos -->
        </div>
      </div>
    </div>
  `;
  
  // Renderização de documentos
  const docsGrid = document.getElementById("member-docs-grid");
  if (docsGrid) {
    docsGrid.innerHTML = "";
    if (!m.documents || m.documents.length === 0) {
      docsGrid.innerHTML = "<p style='color: var(--text-muted); font-size: 0.75rem;'>Nenhum arquivo anexado.</p>";
    } else {
      m.documents.forEach(doc => {
        const item = document.createElement("div");
        item.className = "document-item";
        item.innerHTML = `
          <i class="fas ${doc.icon || 'fa-file'}"></i>
          <span class="document-name" title="${doc.name}">${doc.name}</span>
          <span class="document-size">${doc.size}</span>
        `;
        docsGrid.appendChild(item);
      });
    }
  }

  // Renderização de carros
  const vehGrid = document.getElementById("member-vehicles-grid");
  if (vehGrid) {
    vehGrid.innerHTML = "";
    if (!m.vehicles || m.vehicles.length === 0) {
      vehGrid.innerHTML = "<p style='color: var(--text-muted); font-size: 0.8rem;'>Nenhum veículo próprio registrado para este membro.</p>";
    } else {
      m.vehicles.forEach(v => {
        const card = document.createElement("div");
        card.className = "vehicle-card";
        card.innerHTML = `
          <img src="${v.photo || 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=200'}" alt="${v.model}" class="vehicle-photo">
          <div class="vehicle-info">
            <h5 class="vehicle-model">${v.model}</h5>
            <div class="vehicle-details">
              <span class="vehicle-plate">${v.plate}</span>
              <span class="vehicle-color"><span class="color-dot" style="background-color: ${v.color.toLowerCase()};"></span> ${v.color}</span>
            </div>
          </div>
        `;
        vehGrid.appendChild(card);
      });
    }
  }
  
  // Renderização de histórico pessoal
  const historyTimeline = document.getElementById("member-history-timeline");
  if (historyTimeline) {
    historyTimeline.innerHTML = "";
    if (!m.history || m.history.length === 0) {
      historyTimeline.innerHTML = "<p style='color: var(--text-muted); font-size: 0.8rem;'>Sem histórico de atividades registradas.</p>";
    } else {
      m.history.forEach(evt => {
        const ev = document.createElement("div");
        ev.className = "timeline-event";
        ev.innerHTML = `
          <div class="timeline-time">${evt.time}</div>
          <div class="timeline-desc">${evt.desc}</div>
        `;
        historyTimeline.appendChild(ev);
      });
    }
  }
  
  // Renderização de avisos
  const warnList = document.getElementById("member-warnings-list");
  if (warnList) {
    warnList.innerHTML = "";
    if (!m.warnings || m.warnings.length === 0) {
      warnList.innerHTML = "<p style='color: var(--text-muted); font-size: 0.8rem;'>Dossiê sem avisos administrativos.</p>";
    } else {
      m.warnings.forEach(w => {
        const item = document.createElement("div");
        item.className = "warning-item";
        item.innerHTML = `
          <div class="warning-header">
            <span class="warning-title">${w.title}</span>
            <span class="warning-date">${w.date}</span>
          </div>
          <p class="warning-text">${w.text}</p>
          <div class="warning-meta">Ameaça: ${threatTranslations[w.level]} | Log por: ${w.admin}</div>
        `;
        warnList.appendChild(item);
      });
    }
  }
}

// Navegação de abas no dossiê
window.switchMemberTab = function(event, tabId) {
  const panel = event.target.closest(".tab-container");
  if (!panel) return;
  
  panel.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
  panel.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  
  event.target.classList.add("active");
  const target = document.getElementById(tabId);
  if (target) target.classList.add("active");
}

// 3. RENDERS DO RECRUTAMENTO
function renderRecruitment() {
  const grid = document.getElementById("recruitment-grid-container");
  if (!grid) return;
  
  grid.innerHTML = "";
  
  if (state.recruitment.length === 0) {
    grid.innerHTML = "<p style='color: var(--text-muted); font-size: 0.8rem; grid-column: span 3; text-align: center; padding: 40px;'>Nenhuma ficha de recrutamento registrada.</p>";
    return;
  }
  
  state.recruitment.forEach(r => {
    const card = document.createElement("div");
    card.className = "recruitment-card";
    
    let statusClass = "badge-pending";
    if (r.status === "Approved") statusClass = "badge-active";
    if (r.status === "Rejected") statusClass = "badge-inactive";
    
    let materialsHtml = "";
    r.materials.forEach(m => {
      materialsHtml += `<span class="material-tag checked">${m}</span>`;
    });
    
    card.innerHTML = `
      <div class="candidate-photo-header">
        <img src="${r.photo || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=250'}" class="candidate-photo" alt="${r.fullName}">
        <span class="candidate-status-tag ${statusClass}">${statusTranslations[r.status] || r.status}</span>
      </div>
      <div class="recruitment-body">
        <h4 class="candidate-name-title">${r.fullName}</h4>
        <div class="candidate-nickname-subtitle">"${r.nickname || 'Sem apelido'}" | Idade: ${r.age || 'N/A'}</div>
        
        <div class="candidate-detail-item">
          <span class="candidate-detail-label">Recrutador:</span>
          <span class="candidate-detail-val">${r.recruiter || 'Nenhum'}</span>
        </div>
        <div class="candidate-detail-item">
          <span class="candidate-detail-label">Reunião:</span>
          <span class="candidate-detail-val">${r.meetDate} às ${r.meetTime}</span>
        </div>
        <div class="candidate-detail-item">
          <span class="candidate-detail-label">Local:</span>
          <span class="candidate-detail-val">${r.location}</span>
        </div>
        <div class="candidate-detail-item">
          <span class="candidate-detail-label">Contato:</span>
          <span class="candidate-detail-val">${r.phone || 'N/A'} | ${r.discord || 'N/A'}</span>
        </div>
        <div class="candidate-detail-item">
          <span class="candidate-detail-label">Veículo Usado:</span>
          <span class="candidate-detail-val">${r.vehicleUsed.color} ${r.vehicleUsed.model} [${r.vehicleUsed.plate}]</span>
        </div>
        
        <div class="candidate-materials-label">Equipamento Fornecido</div>
        <div class="candidate-materials-tags">
          ${materialsHtml || '<span class="material-tag">Nenhum</span>'}
        </div>
        
        <div class="candidate-materials-label">Missão Avaliativa</div>
        <div class="candidate-mission-box">
          "${r.mission}"
        </div>
        
        ${r.status === "Pending" ? `
          <div class="candidate-actions">
            <button class="btn btn-success btn-sm" onclick="transitionRecruit('${r.id}', 'Approved')"><i class="fas fa-check"></i> Aprovar</button>
            <button class="btn btn-danger btn-sm" onclick="transitionRecruit('${r.id}', 'Rejected')"><i class="fas fa-times"></i> Rejeitar</button>
          </div>
        ` : `
          <div class="candidate-actions">
            <button class="btn btn-secondary btn-sm" disabled style="width: 100%;"><i class="fas fa-lock"></i> Decisão Registrada</button>
          </div>
        `}
      </div>
    `;
    grid.appendChild(card);
  });
}

// Transição do Recruta para Membro
window.transitionRecruit = function(recruitId, newStatus) {
  const r = state.recruitment.find(cand => cand.id === recruitId);
  if (!r) return;
  
  r.status = newStatus;
  logActivity(`Status de recrutamento de ${r.fullName} alterado para: ${statusTranslations[newStatus] || newStatus}`, "Membro");
  
  if (newStatus === "Approved") {
    const newId = "MEM-0" + (state.members.length + 1);
    const newMember = {
      id: newId,
      fullName: r.fullName,
      nickname: r.nickname || "Recruta",
      phone: r.phone,
      discord: r.discord,
      email: r.fullName.toLowerCase().replace(" ", "") + "@streetcarclub.com",
      dob: "2000-01-01",
      address: r.location,
      rank: "Associate",
      recruiter: r.recruiter,
      joinDate: new Date().toISOString().slice(0, 10),
      trust: 50,
      status: "Active",
      photo: r.photo,
      notes: "Promovido a membro ativo após conclusão da missão: " + r.mission,
      lastActivity: new Date().toISOString().slice(0, 16).replace("T", " "),
      documents: [],
      vehicles: [
        { model: r.vehicleUsed.model, plate: r.vehicleUsed.plate, color: r.vehicleUsed.color, photo: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=200" }
      ],
      warnings: [],
      history: [
        { time: new Date().toISOString().slice(0, 16).replace("T", " "), desc: "Ingressou no sindicato após aprovação no recrutamento." }
      ]
    };
    state.members.push(newMember);
    showToast(`${r.fullName} agora é membro! Registro: ${newId}`, "success");
    
    state.vehicles.push({
      model: r.vehicleUsed.model,
      plate: r.vehicleUsed.plate,
      color: r.vehicleUsed.color,
      owner: r.fullName,
      status: "Operacional",
      photo: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=200",
      notes: "Veículo oficial inserido a partir da ficha de recruta aprovado."
    });
  } else {
    showToast(`Dossier arquivado como rejeitado.`, "error");
  }
  
  saveState();
  renderRecruitment();
}

// 4. RENDERS DE OPERAÇÕES TÁTICAS
function renderOperations() {
  const container = document.getElementById("operations-grid-container");
  if (!container) return;
  
  container.innerHTML = "";
  
  if (state.operations.length === 0) {
    container.innerHTML = "<p style='color: var(--text-muted); font-size: 0.8rem; grid-column: span 3; text-align: center; padding: 40px;'>Nenhuma operação tática em andamento.</p>";
    return;
  }
  
  state.operations.forEach(op => {
    const card = document.createElement("div");
    card.className = "operation-card";
    
    let threatClass = "threat-low";
    if (op.threatLevel === "Medium" || op.threatLevel === "Médio") threatClass = "threat-medium";
    if (op.threatLevel === "High" || op.threatLevel === "Alto") threatClass = "threat-high";
    if (op.threatLevel === "Critical" || op.threatLevel === "Crítico") threatClass = "threat-critical";
    
    let avatarsHtml = "";
    op.assignedTeam.forEach(member => {
      const match = state.members.find(m => m.fullName.includes(member) || (m.nickname && m.nickname.includes(member)));
      const url = match ? match.photo : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=50";
      avatarsHtml += `<img src="${url}" class="op-team-avatar" title="${member}">`;
    });
    
    card.innerHTML = `
      <div class="operation-card-header">
        <h4 class="operation-title-sub">${op.title}</h4>
        <span class="threat-badge ${threatClass}">${threatTranslations[op.threatLevel]}</span>
      </div>
      
      <div class="op-target-block">
        <img src="${op.targetPhoto || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100'}" class="op-target-photo" alt="${op.targetName}">
        <div class="op-target-info">
          <div class="op-target-name">${op.targetName}</div>
          <div class="op-target-alias">"${op.targetAlias || 'Sem vulgo'}" | Idade: ${op.targetAge}</div>
          <div style="font-size: 0.65rem; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Último paradeiro: ${op.targetLocation}</div>
        </div>
      </div>
      
      <div class="candidate-detail-item" style="margin-top: 10px;">
        <span class="candidate-detail-label">Equipe Operacional:</span>
        <div class="op-team-avatars">${avatarsHtml}</div>
      </div>
      
      <div class="candidate-detail-item">
        <span class="candidate-detail-label">Status da Operação:</span>
        <span class="profile-hero-badge ${op.status === 'Active' ? 'badge-active' : op.status === 'Completed' ? 'badge-active' : op.status === 'Planning' ? 'badge-pending' : 'badge-inactive'}" style="position: static; transform: none; font-size: 0.65rem; padding: 2px 6px;">${op.status === 'Active' ? 'Ativa' : op.status === 'Completed' ? 'Concluída' : op.status === 'Planning' ? 'Planejamento' : 'Cancelada'}</span>
      </div>
      
      <div class="candidate-materials-label">Motivos da Ação / Vigilância</div>
      <p style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.4; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 4px; border: 1px solid var(--border-color); margin-bottom: 12px;">
        "${op.reason}"
      </p>
      
      <div class="candidate-materials-label">Timeline da Operação</div>
      <div class="timeline-log" style="max-height: 80px; overflow-y: auto; font-size: 0.7rem; margin-bottom: 15px;">
        ${op.timeline.map(t => `<div style="margin-bottom: 4px;"><strong>${t.time}</strong> - ${t.text}</div>`).join("")}
      </div>
      
      <div class="candidate-actions">
        ${op.status !== "Completed" && op.status !== "Cancelled" ? `
          <button class="btn btn-success btn-sm" onclick="changeOpStatus('${op.id}', 'Completed')"><i class="fas fa-check-circle"></i> Concluir</button>
          <button class="btn btn-danger btn-sm" onclick="changeOpStatus('${op.id}', 'Cancelled')"><i class="fas fa-ban"></i> Cancelar</button>
        ` : `
          <button class="btn btn-secondary btn-sm" disabled style="width: 100%;"><i class="fas fa-archive"></i> Operação Arquivada</button>
        `}
      </div>
    `;
    container.appendChild(card);
  });
}

window.changeOpStatus = function(opId, nextStatus) {
  const op = state.operations.find(o => o.id === opId);
  if (!op) return;
  
  op.status = nextStatus;
  const now = new Date();
  const timeStr = now.toISOString().slice(0, 10) + " " + now.toTimeString().slice(0, 5);
  
  const labelMap = { Completed: "Concluída", Cancelled: "Cancelada" };
  op.timeline.unshift({ time: timeStr, text: `Status da operação alterado para: ${labelMap[nextStatus]}.` });
  
  logActivity(`Operação ${op.title} arquivada como: ${labelMap[nextStatus]}.`, "Operação");
  showToast(`Operação ${op.title} atualizada!`, "success");
  
  saveState();
  renderOperations();
}

// 5. RENDERS DA TESOURARIA
let treasuryChart = null;

function renderTreasury() {
  const tableBody = document.getElementById("treasury-transactions-body");
  if (!tableBody) return;
  
  tableBody.innerHTML = "";
  
  const sorted = [...state.transactions].sort((a,b) => new Date(b.date) - new Date(a.date));
  
  sorted.forEach(t => {
    const tr = document.createElement("tr");
    
    let badgeClass = "badge-pending";
    if (t.type === "Income" || t.type === "Donation") badgeClass = "badge-active";
    if (t.type === "Expense" || t.type === "Operation Cost" || t.type === "Payroll") badgeClass = "badge-inactive";
    
    tr.innerHTML = `
      <td>${t.date}</td>
      <td><span class="profile-hero-badge ${badgeClass}" style="position: static; transform: none; font-size: 0.6rem; padding: 2px 8px;">${transTypeTranslations[t.type] || t.type}</span></td>
      <td style="color: var(--text-primary); font-weight: 600;">${t.desc}</td>
      <td>${t.member}</td>
      <td style="font-family: var(--font-display); font-weight: 700; color: ${t.type === 'Income' || t.type === 'Donation' ? '#4CAF50' : '#F44336'};">
        ${t.type === 'Income' || t.type === 'Donation' ? '+' : '-'}$${t.amount.toLocaleString()}
      </td>
    `;
    tableBody.appendChild(tr);
  });
  
  const ctx = document.getElementById("treasury-pie-chart");
  if (ctx) {
    if (treasuryChart) treasuryChart.destroy();
    
    let income = 0;
    let payroll = 0;
    let opCosts = 0;
    let expenses = 0;
    
    state.transactions.forEach(t => {
      if (t.type === "Income" || t.type === "Donation") income += t.amount;
      else if (t.type === "Payroll") payroll += t.amount;
      else if (t.type === "Operation Cost") opCosts += t.amount;
      else expenses += t.amount;
    });
    
    treasuryChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Receitas / Depósitos', 'Salários de Guardas', 'Logísticas Operacionais', 'Despesas Gerais'],
        datasets: [{
          data: [income, payroll, opCosts, expenses],
          backgroundColor: ['#B71C1C', '#880E4F', '#D32F2F', '#424242'],
          borderColor: '#14141a',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: '#ffffff',
              font: { family: 'Plus Jakarta Sans', size: 10 }
            }
          }
        }
      }
    });
  }
  
  const totalInc = state.transactions.filter(t => t.type === "Income" || t.type === "Donation").reduce((acc, t) => acc + t.amount, 0);
  const totalExp = state.transactions.filter(t => t.type !== "Income" && t.type !== "Donation").reduce((acc, t) => acc + t.amount, 0);
  
  const formattedInc = "$" + totalInc.toLocaleString();
  const formattedExp = "$" + totalExp.toLocaleString();
  
  const incNode = document.getElementById("treasury-income-val");
  const expNode = document.getElementById("treasury-expenses-val");
  if (incNode) incNode.innerText = formattedInc;
  if (expNode) expNode.innerText = formattedExp;
  
  updateTopbarTotals();
}

// 6. RENDERS DE VEÍCULOS
function renderVehicles() {
  const container = document.getElementById("vehicles-grid-container");
  if (!container) return;
  
  container.innerHTML = "";
  
  if (state.vehicles.length === 0) {
    container.innerHTML = "<p style='color: var(--text-muted); font-size: 0.8rem; text-align: center; padding: 40px; grid-column: span 4;'>Nenhum veículo registrado na frota geral.</p>";
    return;
  }
  
  state.vehicles.forEach((v, index) => {
    const card = document.createElement("div");
    card.className = "vehicle-card";
    
    let statusClass = "badge-active";
    if (v.status === "Danificado") statusClass = "badge-pending";
    if (v.status === "Apreendido") statusClass = "badge-inactive";
    
    card.innerHTML = `
      <div style="position: relative;">
        <img src="${v.photo || 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=300'}" alt="${v.model}" class="vehicle-photo" style="height: 140px;">
        <span class="candidate-status-tag ${statusClass}" style="top: 8px; right: 8px;">${v.status}</span>
      </div>
      <div class="vehicle-info">
        <h4 class="vehicle-model" style="font-size: 1rem; color: var(--text-primary);">${v.model}</h4>
        <div class="candidate-nickname-subtitle" style="margin-bottom: 8px; font-size: 0.75rem;">Responsável: ${v.owner || 'Uso Comum / Frota'}</div>
        
        <div class="vehicle-details" style="margin-bottom: 10px;">
          <span class="vehicle-plate">${v.plate}</span>
          <span class="vehicle-color"><span class="color-dot" style="background-color: ${v.color.toLowerCase()};"></span> ${v.color}</span>
        </div>
        
        <p style="font-size: 0.75rem; color: var(--text-muted); line-height: 1.4; border-top: 1px solid var(--border-color); padding-top: 8px; margin-bottom: 12px;">
          ${v.notes || 'Sem observações cadastradas.'}
        </p>
        
        <div class="candidate-actions">
          <button class="btn btn-secondary btn-sm" onclick="editVehicleNotes(${index})"><i class="fas fa-edit"></i> Notas</button>
          <button class="btn btn-danger btn-sm" onclick="deleteVehicle(${index})"><i class="fas fa-trash"></i> Excluir</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

window.deleteVehicle = function(index) {
  const v = state.vehicles[index];
  if (!v) return;
  
  if (confirm(`Remover veículo: ${v.model} [${v.plate}] dos registros gerais?`)) {
    logActivity(`Veículo ${v.model} [${v.plate}] excluído do pátio do clube.`, "Sistema");
    state.vehicles.splice(index, 1);
    saveState();
    renderVehicles();
    showToast("Registro do veículo apagado", "error");
  }
}

window.editVehicleNotes = function(index) {
  const v = state.vehicles[index];
  if (!v) return;
  
  const newNotes = prompt(`Alterar observações de ${v.model} [${v.plate}]:`, v.notes);
  if (newNotes !== null) {
    v.notes = newNotes;
    logActivity(`Observações atualizadas para o veículo ${v.model} [${v.plate}].`, "Sistema");
    saveState();
    renderVehicles();
    showToast("Ficha do carro atualizada", "success");
  }
}

// 7. RENDERS DE EQUIPAMENTOS DO ARMARIA
function renderEquipment() {
  const container = document.getElementById("equipment-grid-container");
  if (!container) return;
  
  container.innerHTML = "";
  
  if (state.equipment.length === 0) {
    container.innerHTML = "<p style='color: var(--text-muted); font-size: 0.8rem; text-align: center; padding: 40px; grid-column: span 4;'>Nenhum item estocado no armaria.</p>";
    return;
  }
  
  state.equipment.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "equipment-card";
    
    let statusClass = "badge-active";
    if (item.status === "Manutenção Necessária") statusClass = "badge-inactive";
    if (item.status === "Bom") statusClass = "badge-pending";
    
    card.innerHTML = `
      <div class="equipment-photo-header">
        <img src="${item.photo || 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=200'}" alt="${item.name}" class="equipment-photo">
        <span class="equipment-badge-qty">${item.quantity} unidades</span>
        <span class="candidate-status-tag ${statusClass}" style="top: 8px; right: 8px;">${item.status}</span>
      </div>
      <div class="equipment-body">
        <h4 class="equipment-name-title">${item.name}</h4>
        <div class="equipment-category">${item.category}</div>
        
        <div class="candidate-detail-item" style="font-size: 0.75rem;">
          <span class="candidate-detail-label">Custodiado por:</span>
          <span class="candidate-detail-val">${item.assigned || 'Cofre Central'}</span>
        </div>
        
        <div class="candidate-actions" style="margin-top: 15px;">
          <button class="btn btn-secondary btn-sm" onclick="adjustEquipmentQty(${index}, 1)"><i class="fas fa-plus"></i></button>
          <button class="btn btn-secondary btn-sm" onclick="adjustEquipmentQty(${index}, -1)"><i class="fas fa-minus"></i></button>
          <button class="btn btn-danger btn-sm" onclick="deleteEquipment(${index})"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

window.adjustEquipmentQty = function(index, delta) {
  const item = state.equipment[index];
  if (!item) return;
  
  item.quantity = Math.max(0, item.quantity + delta);
  logActivity(`Ajustado estoque de ${item.name} para: ${item.quantity} unidades.`, "Sistema");
  saveState();
  renderEquipment();
}

window.deleteEquipment = function(index) {
  const item = state.equipment[index];
  if (!item) return;
  
  if (confirm(`Remover item ${item.name} do armaria?`)) {
    logActivity(`Armamento ${item.name} removido do inventário permanente.`, "Sistema");
    state.equipment.splice(index, 1);
    saveState();
    renderEquipment();
    showToast("Item excluído do armaria", "error");
  }
}

// 8. RENDERS DE PROPRIEDADES REAL ESTATE
function renderProperties() {
  const container = document.getElementById("properties-grid-container");
  if (!container) return;
  
  container.innerHTML = "";
  
  state.properties.forEach(p => {
    const card = document.createElement("div");
    card.className = "property-card";
    
    card.innerHTML = `
      <div class="property-photo-wrapper">
        <img src="${p.photo || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=300'}" alt="${p.name}" class="property-photo">
        <span class="property-info-badge">${p.type}</span>
      </div>
      <div class="property-body">
        <h4 class="property-name">${p.name}</h4>
        <div class="property-address"><i class="fas fa-map-marker-alt"></i> ${p.address}</div>
        
        <div class="property-details">
          <div class="property-detail-row">
            <span style="color: var(--text-muted);">Segurança do Local:</span>
            <span style="color: var(--accent-color-hover); font-weight: 600;">${p.security}</span>
          </div>
          <div class="property-detail-row">
            <span style="color: var(--text-muted);">Guardas designados:</span>
            <span style="color: var(--text-primary);">${p.guards || 'Nenhum'}</span>
          </div>
          <div class="property-detail-row" style="margin-top: 6px; flex-direction: column; border-top: 1px solid var(--border-color); padding-top: 4px;">
            <span style="color: var(--text-muted); font-size: 0.65rem; text-transform: uppercase;">Itens Estocados no Local:</span>
            <span style="color: var(--text-secondary); margin-top: 2px;">${p.storage || 'Nenhum'}</span>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// 9. RENDERS DE REUNIÕES
function renderMeetings() {
  const body = document.getElementById("meetings-table-body");
  if (!body) return;
  
  body.innerHTML = "";
  
  state.meetings.forEach((mt, idx) => {
    const tr = document.createElement("tr");
    
    let badgeClass = "badge-pending";
    if (mt.attendance === "Completed") badgeClass = "badge-active";
    if (mt.attendance === "Cancelled") badgeClass = "badge-inactive";
    
    tr.innerHTML = `
      <td style="color: var(--text-primary); font-weight: 700;">${mt.title}</td>
      <td>${mt.date} às ${mt.time}</td>
      <td>${mt.location}</td>
      <td>${mt.participants}</td>
      <td>
        <span class="profile-hero-badge ${badgeClass}" style="position: static; transform: none; font-size: 0.6rem; padding: 2px 8px; cursor: pointer;" onclick="toggleMeetingAttendance(${idx})">
          ${mt.attendance === 'Completed' ? 'Concluída' : mt.attendance === 'Cancelled' ? 'Cancelada' : 'Agendada'}
        </span>
      </td>
      <td style="font-size: 0.8rem; max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${mt.notes}">${mt.notes}</td>
    `;
    body.appendChild(tr);
  });
}

window.toggleMeetingAttendance = function(idx) {
  const mt = state.meetings[idx];
  if (!mt) return;
  
  mt.attendance = mt.attendance === "Scheduled" ? "Completed" : 
                  mt.attendance === "Completed" ? "Cancelled" : "Scheduled";
                  
  logActivity(`Status da reunião '${mt.title}' atualizado para ${mt.attendance}.`, "Sistema");
  saveState();
  renderMeetings();
  showToast(`Reunião: ${mt.attendance === 'Completed' ? 'Concluída' : mt.attendance === 'Cancelled' ? 'Cancelada' : 'Agendada'}`, "success");
}

// 10. RENDERS DO LOG DE ATIVIDADES GERAIS
function renderActivities() {
  const container = document.getElementById("activities-timeline-container");
  if (!container) return;
  
  container.innerHTML = "";
  
  if (state.activities.length === 0) {
    container.innerHTML = "<p style='color: var(--text-muted); font-size: 0.8rem;'>Sem histórico de atividades registrado.</p>";
    return;
  }
  
  state.activities.forEach(act => {
    const div = document.createElement("div");
    div.className = "timeline-event";
    div.innerHTML = `
      <div class="timeline-time">${act.time}</div>
      <div class="timeline-desc"><strong>[${act.type}]</strong> ${act.text}</div>
    `;
    container.appendChild(div);
  });
}

// 11. RENDERS DO MÓDULO DE RELATÓRIOS (PREVIEW)
function renderReportPreview(type) {
  const titleNode = document.getElementById("report-preview-title");
  const bodyNode = document.getElementById("report-preview-body");
  const dateNode = document.getElementById("report-date-meta");
  
  if (!titleNode || !bodyNode) return;
  
  const now = new Date();
  if (dateNode) dateNode.innerText = now.toLocaleDateString();

  switch(type) {
    case "members":
      titleNode.innerText = "Dossiê Resumido dos Membros";
      bodyNode.innerHTML = `
        <h4 style="color: var(--text-primary); margin-bottom: 10px;">Sumário Executivo - Efetivo do Clube</h4>
        <p style="margin-bottom: 15px;">Dossiê detalhado dos condutores habilitados, níveis de cargo e confiança dentro do sindicato.</p>
        
        <table class="custom-table" style="font-size: 0.75rem;">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome Completo</th>
              <th>Cargo</th>
              <th>Lealdade</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            ${state.members.map(m => `
              <tr>
                <td>${m.id}</td>
                <td><strong>${m.fullName}</strong></td>
                <td>${rankTranslations[m.rank]}</td>
                <td style="color: #4CAF50;">${m.trust}%</td>
                <td>${statusTranslations[m.status]}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
        
        <p style="margin-top: 20px; font-size: 0.75rem; color: var(--text-muted);">
          * Documento de circulação confidencial - Destinado apenas para a mesa do Chefe e Subchefe. O descarte deve ser por trituração.
        </p>
      `;
      break;
      
    case "operations":
      titleNode.innerText = "Análise Geral de Operações Táticas";
      bodyNode.innerHTML = `
        <h4 style="color: var(--text-primary); margin-bottom: 10px;">Relatório de Ações Táticas Urbanas</h4>
        <p style="margin-bottom: 15px;">Listagem dos alvos do sindicato, localização, ameaças e equipes designadas.</p>
        
        <div style="display: flex; flex-direction: column; gap: 15px;">
          ${state.operations.map(op => `
            <div style="background-color: var(--bg-secondary); padding: 12px; border: 1px solid var(--border-color); border-radius: 6px;">
              <div style="display: flex; justify-content: space-between; font-weight: 700; margin-bottom: 4px;">
                <span>${op.title}</span>
                <span style="color: var(--accent-color-hover); font-size: 0.7rem;">Ameaça: ${threatTranslations[op.threatLevel]}</span>
              </div>
              <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 4px;">Alvo: ${op.targetName} | Estado: <strong>${op.status === 'Active' ? 'Ativa' : op.status === 'Completed' ? 'Concluída' : op.status === 'Planning' ? 'Planejamento' : 'Cancelada'}</strong></div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Equipe Designada: ${op.assignedTeam.join(", ")}</div>
            </div>
          `).join("")}
        </div>
      `;
      break;
      
    case "treasury":
      titleNode.innerText = "Balancete de Entradas e Despesas";
      bodyNode.innerHTML = `
        <h4 style="color: var(--text-primary); margin-bottom: 10px;">Livro Razão Geral - Auditoria Monetária</h4>
        <p style="margin-bottom: 15px;">Demonstração dos últimos lançamentos de entrada e saída financeira do caixa central do clube.</p>
        
        <table class="custom-table" style="font-size: 0.75rem;">
          <thead>
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th>Membro</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            ${state.transactions.slice(0, 5).map(t => `
              <tr>
                <td>${t.date}</td>
                <td>${t.desc}</td>
                <td>${t.member}</td>
                <td style="color: ${t.type === 'Income' || t.type === 'Donation' ? '#4CAF50' : '#F44336'}; font-weight: 700;">
                  ${t.type === 'Income' || t.type === 'Donation' ? '+' : '-'}$${t.amount.toLocaleString()}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
        
        <div style="margin-top: 15px; text-align: right; font-weight: 700;">
          Patrimônio Total do Cofre: ${document.getElementById("topbar-treasury-val").innerText}
        </div>
      `;
      break;
      
    case "recruitment":
      titleNode.innerText = "Fila de Candidatos em Triagem";
      bodyNode.innerHTML = `
        <h4 style="color: var(--text-primary); margin-bottom: 10px;">Avaliações de Recrutamento Ativas</h4>
        <p style="margin-bottom: 15px;">Monitoramento de missões de teste atribuídas a candidatos pleiteando espaço no clube.</p>
        
        <table class="custom-table" style="font-size: 0.75rem;">
          <thead>
            <tr>
              <th>Candidato</th>
              <th>Idade</th>
              <th>Recrutador</th>
              <th>Decisão</th>
            </tr>
          </thead>
          <tbody>
            ${state.recruitment.map(r => `
              <tr>
                <td><strong>${r.fullName}</strong></td>
                <td>${r.age} anos</td>
                <td>${r.recruiter}</td>
                <td style="font-weight: 700; color: ${r.status === 'Approved' ? '#4CAF50' : r.status === 'Pending' ? '#FF9800' : '#F44336'}">${statusTranslations[r.status] || r.status}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `;
      break;
      
    case "equipment":
      titleNode.innerText = "Auditoria de Armamento Permanente";
      bodyNode.innerHTML = `
        <h4 style="color: var(--text-primary); margin-bottom: 10px;">Inventário Físico do Arsenal de Armaria</h4>
        <p style="margin-bottom: 15px;">Controle de armamentos de defesa, rádios de comunicação interna e coletes à prova de balas.</p>
        
        <table class="custom-table" style="font-size: 0.75rem;">
          <thead>
            <tr>
              <th>Equipamento</th>
              <th>Categoria</th>
              <th>Estoque</th>
              <th>Custodiante</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            ${state.equipment.map(e => `
              <tr>
                <td><strong>${e.name}</strong></td>
                <td>${e.category}</td>
                <td>${e.quantity} un.</td>
                <td>${e.assigned}</td>
                <td>${e.status}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `;
      break;
  }
}

// ==================== ENVIO DE FORMULÁRIOS ====================
function initFormSubmissions() {
  
  // 1. FORMULÁRIO NOVO MEMBRO
  const formMember = document.getElementById("form-new-member");
  if (formMember) {
    formMember.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("m-full-name").value;
      const nick = document.getElementById("m-nickname").value;
      const phone = document.getElementById("m-phone").value;
      const disc = document.getElementById("m-discord").value;
      const email = document.getElementById("m-email").value;
      const dob = document.getElementById("m-dob").value;
      const address = document.getElementById("m-address").value;
      const rank = document.getElementById("m-rank").value;
      const recruiter = document.getElementById("m-recruiter").value || "Vito Scaletta";
      const joinDate = document.getElementById("m-join-date").value || new Date().toISOString().slice(0,10);
      const trust = parseInt(document.getElementById("m-trust").value) || 50;
      const isActive = document.getElementById("m-status-toggle").checked;
      const notes = document.getElementById("m-notes").value;
      const equipmentStr = document.getElementById("m-equipment").value;
      
      const vehicles = [];
      const vehicleRows = document.querySelectorAll("#m-form-vehicles-container .form-vehicle-row");
      vehicleRows.forEach(row => {
        const vModel = row.querySelector(".form-veh-model").value;
        const vPlate = row.querySelector(".form-veh-plate").value;
        const vColor = row.querySelector(".form-veh-color").value;
        const vPhoto = row.querySelector(".form-veh-photo").value || "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=200";
        if (vModel && vPlate) {
          vehicles.push({ model: vModel, plate: vPlate, color: vColor, photo: vPhoto });
          
          state.vehicles.push({
            model: vModel,
            plate: vPlate,
            color: vColor,
            owner: name,
            status: "Operacional",
            photo: vPhoto,
            notes: "Veículo cadastrado na criação do dossiê do membro."
          });
        }
      });
      
      const newId = "MEM-0" + (state.members.length + 1);
      
      const newMember = {
        id: newId,
        fullName: name,
        nickname: nick,
        phone,
        discord: disc,
        email,
        dob,
        address,
        rank,
        recruiter,
        joinDate,
        trust,
        status: isActive ? "Active" : "Inactive",
        photo: tempUploadedImage["new-member"] || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=300",
        notes,
        lastActivity: new Date().toISOString().slice(0, 16).replace("T", " "),
        documents: [],
        vehicles,
        warnings: [],
        history: [
          { time: new Date().toISOString().slice(0, 16).replace("T", " "), desc: "Dossiê inicializado na categoria: <strong>" + rankTranslations[rank] + "</strong>." }
        ]
      };
      
      if (equipmentStr) {
        logActivity(`Designou o arsenal '${equipmentStr}' para o membro ${name}`, "Sistema");
      }
      
      state.members.push(newMember);
      logActivity(`Membro cadastrado: ${name} (${newId})`, "Membro");
      saveState();
      
      closeModal("modal-new-member");
      renderMembersList();
      showToast(`Membro registrado com sucesso sob dossiê ${newId}`, "success");
    });
  }
  
  // 2. FORMULÁRIO NOVO RECRUTA
  const formRecruit = document.getElementById("form-new-recruit");
  if (formRecruit) {
    formRecruit.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("r-full-name").value;
      const nick = document.getElementById("r-nickname").value;
      const phone = document.getElementById("r-phone").value;
      const disc = document.getElementById("r-discord").value;
      const age = parseInt(document.getElementById("r-age").value) || 25;
      const recruiter = document.getElementById("r-recruiter").value || "Vito Scaletta";
      const mDate = document.getElementById("r-meet-date").value || new Date().toISOString().slice(0,10);
      const mTime = document.getElementById("r-meet-time").value || "12:00";
      const mLoc = document.getElementById("r-meet-loc").value || "Sede Principal";
      
      const vModel = document.getElementById("r-vehicle-model").value || "Smith Coupe";
      const vColor = document.getElementById("r-vehicle-color").value || "Preto";
      const vPlate = document.getElementById("r-vehicle-plate").value || "DRFT-88";
      
      const mission = document.getElementById("r-mission").value;
      
      const materials = [];
      document.querySelectorAll(".r-materials-check:checked").forEach(chk => {
        materials.push(chk.value);
      });
      const customMat = document.getElementById("r-custom-material").value;
      if (customMat) materials.push(customMat);
      
      const newId = "REC-0" + (state.recruitment.length + 1);
      
      const newCandidate = {
        id: newId,
        fullName: name,
        nickname: nick,
        phone,
        discord: disc,
        age,
        recruiter,
        meetDate: mDate,
        meetTime: mTime,
        location: mLoc,
        vehicleUsed: { model: vModel, color: vColor, plate: vPlate },
        mission,
        materials,
        photo: tempUploadedImage["new-recruit"] || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=250",
        status: "Pending"
      };
      
      state.recruitment.push(newCandidate);
      logActivity(`Candidato em recrutamento criado: ${name} (${newId})`, "Membro");
      saveState();
      
      closeModal("modal-new-recruit");
      renderRecruitment();
      showToast(`Candidato ${name} sob avaliação física cadastrada.`, "success");
    });
  }
  
  // 3. FORMULÁRIO DE LANÇAR OPERAÇÃO
  const formOp = document.getElementById("form-new-operation");
  if (formOp) {
    formOp.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const tName = document.getElementById("o-target-name").value;
      const tAlias = document.getElementById("o-target-alias").value;
      const tPhone = document.getElementById("o-target-phone").value;
      const tAge = parseInt(document.getElementById("o-target-age").value) || 30;
      const tLoc = document.getElementById("o-target-location").value || "Desconhecido";
      
      const title = document.getElementById("o-title").value;
      const threat = document.getElementById("o-threat-level").value;
      const reason = document.getElementById("o-reason").value;
      
      const team = document.getElementById("o-members").value.split(",").map(item => item.trim());
      const vehicles = document.getElementById("o-vehicles").value.split(",").map(item => item.trim());
      const equipment = document.getElementById("o-equipment").value.split(",").map(item => item.trim());
      
      const newId = "OP-0" + (state.operations.length + 1);
      const now = new Date();
      const timeStr = now.toISOString().slice(0, 10) + " " + now.toTimeString().slice(0, 5);
      
      const newOp = {
        id: newId,
        title,
        targetName: tName,
        targetAlias: tAlias,
        targetPhone: tPhone,
        targetAge: tAge,
        targetLocation: tLoc,
        targetPhoto: tempUploadedImage["new-operation"] || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=250",
        reason,
        threatLevel: threat,
        assignedTeam: team.filter(Boolean),
        assignedVehicles: vehicles.filter(Boolean),
        assignedEquipment: equipment.filter(Boolean),
        status: "Active",
        timeline: [
          { time: timeStr, text: "Operação autorizada e dossiê do alvo cadastrado no sistema." },
          { time: timeStr, text: "Unidades designadas para o ataque: " + team.join(", ") }
        ]
      };
      
      state.operations.push(newOp);
      logActivity(`Iniciou a Operação: ${title} contra o alvo ${tName}`, "Operação");
      saveState();
      
      closeModal("modal-new-operation");
      renderOperations();
      showToast(`Operação ${title} iniciada com sucesso!`, "success");
    });
  }
  
  // 4. FORMULÁRIO DE LANÇAMENTO FINANCEIRO
  const formTrans = document.getElementById("form-new-transaction");
  if (formTrans) {
    formTrans.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const type = document.getElementById("t-type").value;
      const desc = document.getElementById("t-desc").value;
      const member = document.getElementById("t-member").value || "Vito Scaletta";
      const amount = parseInt(document.getElementById("t-amount").value) || 0;
      
      const today = new Date().toISOString().slice(0,10);
      
      state.transactions.unshift({ date: today, type, desc, member, amount });
      logActivity(`Transação financeira registrada [${transTypeTranslations[type]}]: ${desc} por $${amount}`, "Financial");
      saveState();
      
      closeModal("modal-new-transaction");
      renderTreasury();
      showToast("Lançamento financeiro concluído", "success");
    });
  }
  
  // 5. REGISTRAR VEÍCULO
  const formVehicle = document.getElementById("form-new-vehicle");
  if (formVehicle) {
    formVehicle.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const model = document.getElementById("v-model").value;
      const plate = document.getElementById("v-plate").value;
      const color = document.getElementById("v-color").value;
      const owner = document.getElementById("v-owner").value || "Frota Comum";
      const status = document.getElementById("v-status").value;
      const notes = document.getElementById("v-notes").value;
      
      const newVeh = {
        model,
        plate,
        color,
        owner,
        status,
        photo: tempUploadedImage["new-vehicle"] || "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=300",
        notes
      };
      
      state.vehicles.push(newVeh);
      logActivity(`Registrou o veículo ${model} [${plate}] no cadastro do clube.`, "System");
      saveState();
      
      closeModal("modal-new-vehicle");
      renderVehicles();
      showToast("Veículo registrado com sucesso", "success");
    });
  }
  
  // 6. ADICIONAR EQUIPAMENTO
  const formEquip = document.getElementById("form-new-equipment");
  if (formEquip) {
    formEquip.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("e-name").value;
      const category = document.getElementById("e-category").value;
      const quantity = parseInt(document.getElementById("e-quantity").value) || 1;
      const assigned = document.getElementById("e-assigned").value || "Cofre Central";
      const status = document.getElementById("e-status").value;
      
      const newEquip = {
        name,
        category,
        quantity,
        assigned,
        status,
        photo: tempUploadedImage["new-equipment"] || "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=200"
      };
      
      state.equipment.push(newEquip);
      logActivity(`Armaria adicionou item ${name}: ${quantity} unidades.`, "System");
      saveState();
      
      closeModal("modal-new-equipment");
      renderEquipment();
      showToast("Equipamento registrado com sucesso", "success");
    });
  }
  
  // 7. AGENDAR REUNIÃO
  const formMeeting = document.getElementById("form-new-meeting");
  if (formMeeting) {
    formMeeting.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const title = document.getElementById("mt-title").value;
      const date = document.getElementById("mt-date").value;
      const time = document.getElementById("mt-time").value;
      const location = document.getElementById("mt-location").value;
      const participants = document.getElementById("mt-participants").value || "Todos os membros ativos";
      const notes = document.getElementById("mt-notes").value;
      
      state.meetings.push({
        title,
        date,
        time,
        location,
        participants,
        attendance: "Scheduled",
        notes
      });
      
      logActivity(`Agendou reunião do sindicato: ${title}`, "System");
      saveState();
      
      closeModal("modal-new-meeting");
      renderMeetings();
      showToast("Reunião agendada com sucesso", "success");
    });
  }
  
  // 8. REGISTRAR PROPRIEDADE (IMOVEL)
  const formProp = document.getElementById("form-new-property");
  if (formProp) {
    formProp.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("p-name").value;
      const address = document.getElementById("p-address").value;
      const type = document.getElementById("p-type").value;
      const security = document.getElementById("p-security").value;
      const guards = document.getElementById("p-guards").value;
      const storage = document.getElementById("p-storage").value;
      
      const newProp = {
        name,
        address,
        type,
        security,
        guards,
        storage,
        photo: tempUploadedImage["new-property"] || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400"
      };
      
      state.properties.push(newProp);
      logActivity(`Registrou novo imóvel seguro do sindicato: ${name}`, "System");
      saveState();
      
      closeModal("modal-new-property");
      renderProperties();
      showToast("Imóvel registrado com sucesso", "success");
    });
  }
}

// ==================== CONFIGURAÇÕES E SALVAMENTO ====================
function saveSettings() {
  const clubName = document.getElementById("setting-club-name").value;
  const adminName = document.getElementById("setting-admin-name").value;
  const adminAvatar = document.getElementById("setting-admin-avatar").value;
  
  if (clubName && adminName) {
    state.settings.clubName = clubName;
    state.settings.adminName = adminName;
    state.settings.adminAvatar = adminAvatar;
    
    logActivity("Atualizou os parâmetros visuais e identidade do sindicato.", "System");
    saveState();
    applySettingsUI();
    showToast("Configurações salvas", "success");
  } else {
    showToast("Os campos não podem ser vazios", "error");
  }
}

function applySettingsUI() {
  const subNode = document.querySelector(".brand-subtitle");
  if (subNode && state.settings.clubName) {
    subNode.innerText = state.settings.clubName.replace("MAFIA - ", "");
  }
  
  const adminMiniAvatar = document.getElementById("admin-mini-avatar");
  const adminMiniName = document.getElementById("admin-mini-name");
  
  if (adminMiniAvatar && state.settings.adminAvatar) adminMiniAvatar.src = state.settings.adminAvatar;
  if (adminMiniName && state.settings.adminName) adminMiniName.innerText = state.settings.adminName;
}

function resetDatabase() {
  if (confirm("Deseja realmente apagar todas as alterações e restaurar os dados originais simulados? Isso apagará as fichas criadas.")) {
    state = JSON.parse(JSON.stringify(defaultState));
    saveState();
    applySettingsUI();
    renderModule("dashboard");
    showToast("Banco de dados restaurado", "error");
  }
}
