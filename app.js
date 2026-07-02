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
  "Rejected": "Rejeitado",
  "Archived": "Excluído"
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
    { name: "Esconderijo Greenfield", address: "Greenfield Lane, 205, Empire Bay", type: "Casa Segura", security: "Portas Reforçadas", guards: "Nenhum", storage: "Arsenal oculto e 3 vagas de fuga", photo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400", coords: { x: 38.5, y: 35.2 } },
    { name: "Galpão Portuário Hoboken 4", address: "Área Industrial das Docas, Empire Bay", type: "Galpão", security: "Padrão", guards: "3 Soldados", storage: "Estoque de bebidas e peças importadas", photo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400", coords: { x: 62.1, y: 72.8 } },
    { name: "Sede Central Little Italy", address: "Avenida Little Italy, 12, Empire Bay", type: "Sede do Clube", security: "Máxima Proteção", guards: "5 Soldados", storage: "Cofre de depósitos e documentos fiscais", photo: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=400", coords: { x: 50.5, y: 48.0 } }
  ],
  actions: [
    { id: "ACT-001", type: "Roubo de Carga", cost: 1500, revenue: 15000, profit: 13500, date: "2026-07-01", participants: ["Vito Scaletta", "Joe Barbaro"], materials: [{ name: "Lockpick", quantity: 3, unitCost: 100 }, { name: "Kit de Reparo", quantity: 4, unitCost: 300 }] },
    { id: "ACT-002", type: "Corrida Clandestina", cost: 500, revenue: 5000, profit: 4500, date: "2026-06-29", participants: ["Joe Barbaro"], materials: [{ name: "Galão de Combustível", quantity: 10, unitCost: 50 }] },
    { id: "ACT-003", type: "Contrabando", cost: 3000, revenue: 22000, profit: 19000, date: "2026-06-25", participants: ["Vito Scaletta", "Leo Galante"], materials: [{ name: "Explosivo C4", quantity: 2, unitCost: 1500 }] }
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

// ==================== CONFIGURAÇÃO SUPABASE ====================
const SUPABASE_URL = "https://vxzybulfpazbgqtpbjso.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_UaACdpLNOxW3qX1vA2Tr5w_bMgUpw2G";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Objeto de Estado da Aplicação
let state = {
  settings: {},
  members: [],
  vehicles: [],
  equipment: [],
  properties: [],
  actions: [],
  operations: [],
  recruitment: [],
  meetings: [],
  activities: [],
  transactions: []
};

// ==================== UTILITÁRIOS DO ESTADO ====================
// Helper mapping functions to translate JS camelCase to Postgres snake_case and vice-versa
function mapMemberToDb(m) {
  if (!m) return null;
  return {
    id: m.id,
    full_name: m.fullName,
    nickname: m.nickname,
    phone: m.phone,
    discord: m.discord,
    email: m.email,
    dob: m.dob,
    address: m.address,
    rank: m.rank,
    recruiter: m.recruiter,
    join_date: m.joinDate,
    trust: m.trust,
    status: m.status,
    photo: m.photo,
    notes: m.notes,
    last_activity: m.lastActivity,
    documents: m.documents,
    vehicles: m.vehicles,
    warnings: m.warnings,
    history: m.history
  };
}

function mapMemberFromDb(m) {
  if (!m) return null;
  return {
    id: m.id,
    fullName: m.full_name,
    nickname: m.nickname,
    phone: m.phone,
    discord: m.discord,
    email: m.email,
    dob: m.dob,
    address: m.address,
    rank: m.rank,
    recruiter: m.recruiter,
    joinDate: m.join_date,
    trust: m.trust,
    status: m.status,
    photo: m.photo,
    notes: m.notes,
    lastActivity: m.last_activity,
    documents: m.documents || [],
    vehicles: m.vehicles || [],
    warnings: m.warnings || [],
    history: m.history || []
  };
}

function mapOperationToDb(op) {
  if (!op) return null;
  return {
    id: op.id,
    title: op.title,
    target_name: op.targetName,
    target_alias: op.targetAlias,
    target_phone: op.targetPhone,
    target_age: op.targetAge,
    target_location: op.targetLocation,
    target_photo: op.targetPhoto,
    reason: op.reason,
    threat_level: op.threatLevel,
    assigned_team: op.assignedTeam,
    assigned_vehicles: op.assignedVehicles,
    assigned_equipment: op.assignedEquipment,
    status: op.status,
    timeline: op.timeline,
    media: op.media
  };
}

function mapOperationFromDb(op) {
  if (!op) return null;
  return {
    id: op.id,
    title: op.title,
    targetName: op.target_name,
    targetAlias: op.target_alias,
    targetPhone: op.target_phone,
    targetAge: op.target_age,
    targetLocation: op.target_location,
    targetPhoto: op.target_photo,
    reason: op.reason,
    threatLevel: op.threat_level,
    assignedTeam: op.assigned_team || [],
    assignedVehicles: op.assigned_vehicles || [],
    assignedEquipment: op.assigned_equipment || [],
    status: op.status,
    timeline: op.timeline || [],
    media: op.media || []
  };
}

function mapRecruitToDb(r) {
  if (!r) return null;
  return {
    id: r.id,
    full_name: r.fullName,
    nickname: r.nickname,
    phone: r.phone,
    discord: r.discord,
    email: r.email,
    dob: r.dob,
    address: r.address,
    trust: r.trust,
    status: r.status,
    photo: r.photo,
    notes: r.notes,
    applied_date: r.appliedDate,
    stage: r.stage,
    physical_eval: r.physicalEval,
    history: r.history
  };
}

function mapRecruitFromDb(r) {
  if (!r) return null;
  return {
    id: r.id,
    fullName: r.full_name,
    nickname: r.nickname,
    phone: r.phone,
    discord: r.discord,
    email: r.email,
    dob: r.dob,
    address: r.address,
    trust: r.trust,
    status: r.status,
    photo: r.photo,
    notes: r.notes,
    appliedDate: r.applied_date,
    stage: r.stage,
    physicalEval: r.physical_eval || {},
    history: r.history || []
  };
}

const emptyState = {
  settings: {
    clubName: "MAFIA - STREET CAR CLUB",
    adminName: "Vito Scaletta",
    adminAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  members: [],
  vehicles: [],
  equipment: [],
  properties: [],
  actions: [],
  operations: [],
  recruitment: [],
  meetings: [],
  activities: [],
  transactions: []
};

// ==================== UTILITÁRIOS DO ESTADO ====================
async function loadState() {
  // 1. Tenta carregar do localStorage primeiro para servir de cache inicial / migração
  const localData = localStorage.getItem("mafia_dashboard_state_v1");
  let localState = null;
  if (localData) {
    try {
      localState = JSON.parse(localData);
    } catch (e) {
      console.error("Erro ao ler localStorage", e);
    }
  }

  try {
    const [
      resSettings,
      resMembers,
      resVehicles,
      resEquipment,
      resProperties,
      resActions,
      resOperations,
      resRecruitment,
      resMeetings,
      resActivities,
      resTransactions
    ] = await Promise.all([
      supabaseClient.from("settings").select("*").eq("id", 1).maybeSingle(),
      supabaseClient.from("members").select("*"),
      supabaseClient.from("vehicles").select("*"),
      supabaseClient.from("equipment").select("*"),
      supabaseClient.from("properties").select("*"),
      supabaseClient.from("actions").select("*"),
      supabaseClient.from("operations").select("*"),
      supabaseClient.from("recruitment").select("*"),
      supabaseClient.from("meetings").select("*"),
      supabaseClient.from("activities").select("*").order("id", { ascending: false }).limit(50),
      supabaseClient.from("transactions").select("*")
    ]);

    if (resSettings.error) console.error("Supabase settings error:", JSON.stringify(resSettings.error));
    if (resMembers.error) console.error("Supabase members error:", JSON.stringify(resMembers.error));
    if (resVehicles.error) console.error("Supabase vehicles error:", JSON.stringify(resVehicles.error));
    if (resEquipment.error) console.error("Supabase equipment error:", JSON.stringify(resEquipment.error));
    if (resProperties.error) console.error("Supabase properties error:", JSON.stringify(resProperties.error));
    if (resActions.error) console.error("Supabase actions error:", JSON.stringify(resActions.error));
    if (resOperations.error) console.error("Supabase operations error:", JSON.stringify(resOperations.error));
    if (resRecruitment.error) console.error("Supabase recruitment error:", JSON.stringify(resRecruitment.error));
    if (resMeetings.error) console.error("Supabase meetings error:", JSON.stringify(resMeetings.error));
    if (resActivities.error) console.error("Supabase activities error:", JSON.stringify(resActivities.error));
    if (resTransactions.error) console.error("Supabase transactions error:", JSON.stringify(resTransactions.error));

    const settings = resSettings.data;
    const members = resMembers.data;
    const vehicles = resVehicles.data;
    const equipment = resEquipment.data;
    const properties = resProperties.data;
    const actions = resActions.data;
    const operations = resOperations.data;
    const recruitment = resRecruitment.data;
    const meetings = resMeetings.data;
    const activities = resActivities.data;
    const transactions = resTransactions.data;

    // 2. Se as configurações existem no Supabase e não houve erro nas configurações
    if (settings && !resSettings.error) {
      state.settings = {
        clubName: settings.club_name,
        adminName: settings.admin_name,
        adminAvatar: settings.admin_avatar
      };
      
      // Usa dados do banco apenas se a consulta não retornou erro. Caso contrário, mantém o local ou limpo
      state.members = (!resMembers.error && members) ? members.map(mapMemberFromDb) : (localState?.members || []);
      state.vehicles = (!resVehicles.error && vehicles) ? vehicles : (localState?.vehicles || []);
      state.equipment = (!resEquipment.error && equipment) ? equipment : (localState?.equipment || []);
      state.properties = (!resProperties.error && properties) ? properties : (localState?.properties || []);
      state.actions = (!resActions.error && actions) ? actions : (localState?.actions || []);
      state.operations = (!resOperations.error && operations) ? operations.map(mapOperationFromDb) : (localState?.operations || []);
      state.recruitment = (!resRecruitment.error && recruitment) ? recruitment.map(mapRecruitFromDb) : (localState?.recruitment || []);
      state.meetings = (!resMeetings.error && meetings) ? meetings : (localState?.meetings || []);
      state.activities = (!resActivities.error && activities) ? activities : (localState?.activities || []);
      
      state.transactions = (!resTransactions.error && transactions) 
        ? transactions.map(t => ({ date: t.date, type: t.type, desc: t.desc_text, member: t.member, amount: Number(t.amount) }))
        : (localState?.transactions || []);
    } else {
      // 3. Se o banco está totalmente vazio (sem nem a linha de settings cadastrada):
      // Se o usuário já tinha dados salvos localmente, usamos eles (migração para a nuvem!)
      // Caso contrário, usamos o estado vazio absoluto (emptyState)
      if (localState && localState.settings && localState.settings.clubName) {
        state = localState;
      } else {
        state = JSON.parse(JSON.stringify(emptyState));
      }
      
      // Apenas inicializa o banco se as permissões de gravação estiverem ativas
      if (!resSettings.error) {
        await saveState();
      }
    }
  } catch (err) {
    console.error("Erro ao ler dados do Supabase, revertendo para localStorage/fábrica...", err);
    if (localState) {
      state = localState;
    } else {
      state = JSON.parse(JSON.stringify(emptyState));
    }
  }
}

async function saveState(onlyTable = null) {
  localStorage.setItem("mafia_dashboard_state_v1", JSON.stringify(state));

  try {
    if (!onlyTable || onlyTable === "settings") {
      const { error } = await supabaseClient.from("settings").upsert({
        id: 1,
        club_name: state.settings.clubName,
        admin_name: state.settings.adminName,
        admin_avatar: state.settings.adminAvatar
      });
      if (error) console.error("Supabase upsert settings error:", error);
    }

    if (!onlyTable || onlyTable === "members") {
      const dbMembers = state.members.map(mapMemberToDb);
      const { error } = await supabaseClient.from("members").upsert(dbMembers);
      if (error) console.error("Supabase upsert members error:", error);
    }

    if (!onlyTable || onlyTable === "vehicles") {
      const { error } = await supabaseClient.from("vehicles").upsert(state.vehicles);
      if (error) console.error("Supabase upsert vehicles error:", error);
    }

    if (!onlyTable || onlyTable === "equipment") {
      const { error } = await supabaseClient.from("equipment").upsert(state.equipment);
      if (error) console.error("Supabase upsert equipment error:", error);
    }

    if (!onlyTable || onlyTable === "properties") {
      const { error } = await supabaseClient.from("properties").upsert(state.properties);
      if (error) console.error("Supabase upsert properties error:", error);
    }

    if (!onlyTable || onlyTable === "actions") {
      const { error } = await supabaseClient.from("actions").upsert(state.actions);
      if (error) console.error("Supabase upsert actions error:", error);
    }

    if (!onlyTable || onlyTable === "operations") {
      const dbOps = state.operations.map(mapOperationToDb);
      const { error } = await supabaseClient.from("operations").upsert(dbOps);
      if (error) console.error("Supabase upsert operations error:", error);
    }

    if (!onlyTable || onlyTable === "recruitment") {
      const dbRecruits = state.recruitment.map(mapRecruitToDb);
      const { error } = await supabaseClient.from("recruitment").upsert(dbRecruits);
      if (error) console.error("Supabase upsert recruitment error:", error);
    }

    if (!onlyTable || onlyTable === "meetings") {
      state.meetings.forEach((m, idx) => {
        if (!m.id) m.id = "MT-" + idx + "-" + Date.now().toString().slice(-4);
      });
      const { error } = await supabaseClient.from("meetings").upsert(state.meetings);
      if (error) console.error("Supabase upsert meetings error:", error);
    }

    if (!onlyTable || onlyTable === "activities") {
      if (state.activities.length > 0) {
        const latest = state.activities[0];
        const { error } = await supabaseClient.from("activities").insert({
          time: latest.time,
          type: latest.type,
          text: latest.text
        });
        if (error) console.error("Supabase insert activities error:", error);
      }
    }

    if (!onlyTable || onlyTable === "transactions") {
      const formattedTrans = state.transactions.map(t => ({
        date: t.date,
        type: t.type,
        desc_text: t.desc,
        member: t.member,
        amount: t.amount
      }));
      const { error } = await supabaseClient.from("transactions").upsert(formattedTrans);
      if (error) console.error("Supabase upsert transactions error:", error);
    }
  } catch (err) {
    console.error("Falha ao salvar no Supabase:", err);
  }
}

function logActivity(text, type = "Sistema") {
  const now = new Date();
  const timeStr = now.toISOString().slice(0, 10) + " " + now.toTimeString().slice(0, 5);
  state.activities.unshift({ time: timeStr, type, text });

  if (state.activities.length > 50) state.activities.pop();

  saveState("activities");
}

// ==================== INICIALIZAÇÕES DO DOM ====================
document.addEventListener("DOMContentLoaded", async () => {
  // ── Pré-carregamento do mapa satélite ──────────────────────────────────
  // Força o browser a baixar e cachear a imagem imediatamente,
  // antes do usuário abrir qualquer modal ou módulo do mapa.
  const _mapPreloadImg = new Image();
  _mapPreloadImg.src = "GTAV_SATELLITE_2048x2048.png";
  _mapPreloadImg.onload = () => {
    // Ao terminar de carregar, aplica o transform inicial nos containers
    // para ativar o contexto de compositing GPU antes do primeiro uso.
    applyMapScale("tactical-map-scrollable", 1.0);
    applyMapScale("map-picker-scrollable", 1.0);
  };
  // ───────────────────────────────────────────────────────────────────────

  await loadState();
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

  // Inicializar interações avançadas de arrastar/zoom nos mapas
  initMapsDraggableAndWheelZoom();

  // Inicializar clique vs arrasto do seletor de mapa no cadastro
  const pickerImg = document.getElementById("map-picker-img");
  if (pickerImg) {
    let downX = 0;
    let downY = 0;
    pickerImg.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return;
      downX = e.clientX;
      downY = e.clientY;
    });
    pickerImg.addEventListener("mouseup", (e) => {
      if (e.button !== 0) return;
      // Registrar coordenadas apenas se o mouse não se deslocou mais de 5px (indicativo de clique rápido)
      if (Math.abs(e.clientX - downX) < 5 && Math.abs(e.clientY - downY) < 5) {
        pickPropertyCoords(e);
      }
    });
  }

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
      actions: "Registro de Ações",
      treasury: "Livro Caixa da Tesouraria",
      vehicles: "Frota de Veículos",
      equipment: "Arsenal do Armaria",
      properties: "Propriedades do Sindicato",
      meetings: "Reuniões do Conselho",
      activities: "Histórico de Atividades",
      reports: "Exportação de Relatórios",
      calculator: "Calculadora de Custos e Fórmulas",
      settings: "Parâmetros do Sistema"
    };
    headerTitle.innerText = nameMap[moduleName] || moduleName;
  }

  // Atualizar contadores
  updateTopbarTotals();

  // Renderizadores dinâmicos
  switch (moduleName) {
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
    case "actions":
      renderActions();
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
    case "calculator":
      renderCalculator();
      break;
  }
}

function updateTopbarTotals() {
  // Saldo total dinâmico
  const totalBalance = state.transactions.reduce((acc, t) => {
    if (t.type === "Income" || t.type === "Donation") return acc + t.amount;
    return acc - t.amount;
  }, 0);

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

  // Total de Membros / Ativos (excluindo arquivados do total operacional)
  const totalMem = state.members.filter(m => m.status !== "Archived").length;
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
    { btnId: "btn-open-new-recruit", modalId: "modal-new-recruit" },
    { btnId: "btn-open-new-transaction", modalId: "modal-new-transaction" },
    { btnId: "btn-open-new-vehicle", modalId: "modal-new-vehicle" },
    { btnId: "btn-open-new-equipment", modalId: "modal-new-equipment" },
    { btnId: "btn-open-new-meeting", modalId: "modal-new-meeting" },
    { btnId: "btn-open-new-property", modalId: "modal-new-property" }
  ];

  triggers.forEach(({ btnId, modalId }) => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener("click", () => {
        openModal(modalId);
        // Resetar zoom do mapa picker ao abrir modal de propriedade
        if (modalId === "modal-new-property") {
          pickerZoom = 1.0;
          applyMapScale("map-picker-scrollable", 1.0);
          const lbl = document.getElementById("picker-zoom-label");
          if (lbl) lbl.innerText = "100%";
          const wrapper = document.querySelector(".map-picker-wrapper");
          if (wrapper) { wrapper.scrollLeft = 0; wrapper.scrollTop = 0; }
        }
      });
    }
  });

  const btnNewMember = document.getElementById("btn-open-new-member");
  if (btnNewMember) {
    btnNewMember.addEventListener("click", () => {
      editingMemberId = null;
      const modalTitle = document.querySelector('#modal-new-member .modal-title');
      if (modalTitle) modalTitle.innerHTML = '<i class="fas fa-users-cog"></i> + Registrar Novo Membro no Sindicato';
      openModal('modal-new-member');
    });
  }

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

    if (modalId === "modal-new-member" && !editingMemberId) {
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
    if (modalId === "modal-new-member") {
      editingMemberId = null;
    }
    if (modalId === "modal-new-property") {
      const pin = document.getElementById("map-picker-pin");
      if (pin) pin.style.display = "none";
      zoomMapPicker(1.0);
    }
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
let editingMemberId = null;

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
    const matchStatus = filterStatus === "" ? (m.status !== "Archived") : m.status === filterStatus;
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

  const memberActions = (state.actions || []).filter(act => act.participants && act.participants.includes(m.fullName));

  container.innerHTML = `
    <div class="profile-hero-card">
      <div class="profile-hero-photo-wrapper">
        <img src="${m.photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=300'}" class="profile-hero-photo" alt="${m.fullName}">
        <div class="profile-hero-badge ${m.status === 'Active' ? 'badge-active' : 'badge-inactive'}">${statusTranslations[m.status]}</div>
      </div>
      
      <div class="profile-hero-info">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; gap: 10px; flex-wrap: wrap;">
          <div class="profile-hero-rank">${rankTranslations[m.rank]}</div>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary btn-sm" onclick="toggleMemberStatus('${m.id}')" style="padding: 6px 12px; font-size: 0.75rem;">
              <i class="fas ${m.status === 'Active' ? 'fa-user-slash' : m.status === 'Archived' ? 'fa-undo' : 'fa-user-check'}"></i> 
              ${m.status === 'Active' ? 'Desativar' : m.status === 'Archived' ? 'Restaurar' : 'Ativar'}
            </button>
            <button class="btn btn-primary btn-sm" onclick="editMemberDossier('${m.id}')" style="padding: 6px 12px; font-size: 0.75rem; background: linear-gradient(135deg, #b71c1c 0%, #5f0909 100%);"><i class="fas fa-edit"></i> Editar</button>
            <button class="btn btn-danger btn-sm" onclick="deleteMemberDossier('${m.id}')" style="padding: 6px 12px; font-size: 0.75rem; background: #c62828;">
              <i class="fas ${m.status === 'Archived' ? 'fa-trash-alt' : 'fa-archive'}"></i> 
              ${m.status === 'Archived' ? 'Excluir Definitivamente' : 'Excluir'}
            </button>
          </div>
        </div>
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
          <div class="profile-hero-stat">
            <span class="profile-hero-stat-label">Advertências</span>
            <span class="profile-hero-stat-value" style="color: ${m.warnings && m.warnings.length > 0 ? '#F44336' : 'var(--text-secondary)'};">${m.warnings ? m.warnings.length : 0}</span>
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
        <button class="tab-button" onclick="switchMemberTab(event, 'tab-member-actions')">Ações (${memberActions.length})</button>
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
        <!-- Botão/Formulário para Aplicar Nova Advertência -->
        <div class="premium-card" style="margin-bottom: 15px; border: 1px dashed rgba(183, 28, 28, 0.4); background: rgba(183, 28, 28, 0.02);">
          <div style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;" onclick="toggleAddWarningForm()">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-color-hover);"><i class="fas fa-exclamation-triangle"></i> Aplicar Nova Advertência / Punição</span>
            <i class="fas fa-chevron-down" id="add-warning-chevron" style="transition: transform 0.2s;"></i>
          </div>
          <div id="add-warning-form-container" style="display: none; margin-top: 15px; border-top: 1px solid var(--border-color); padding-top: 15px;">
            <form id="form-add-warning" onsubmit="submitAddWarning(event, '${m.id}')">
              <div class="form-group-grid" style="grid-template-columns: 2fr 1fr; gap: 10px; margin-bottom: 10px;">
                <div class="form-control-wrapper">
                  <label class="form-label" style="font-size: 0.65rem;">Infração / Título *</label>
                  <input type="text" class="form-input" id="w-title-input" required placeholder="Ex: Direção perigosa perto de esconderijo" style="padding: 6px 10px; font-size: 0.8rem; background: rgba(0,0,0,0.3);">
                </div>
                <div class="form-control-wrapper">
                  <label class="form-label" style="font-size: 0.65rem;">Gravidade *</label>
                  <select class="form-select" id="w-level-input" style="padding: 6px 10px; font-size: 0.8rem; background: rgba(0,0,0,0.3);">
                    <option value="Low">Baixo</option>
                    <option value="Medium">Médio</option>
                    <option value="High">Alto</option>
                    <option value="Critical">Crítico</option>
                  </select>
                </div>
              </div>
              <div class="form-control-wrapper" style="margin-bottom: 12px;">
                <label class="form-label" style="font-size: 0.65rem;">Descrição do Ocorrido / Motivo *</label>
                <textarea class="form-textarea" id="w-reason-input" required placeholder="Descreva de forma concisa o motivo desta advertência oficial." style="padding: 6px 10px; font-size: 0.8rem; height: 60px; background: rgba(0,0,0,0.3);"></textarea>
              </div>
              <div style="text-align: right;">
                <button type="submit" class="btn btn-danger btn-sm" style="padding: 6px 12px; font-size: 0.75rem; background: #c62828;"><i class="fas fa-gavel"></i> Registrar Ocorrência</button>
              </div>
            </form>
          </div>
        </div>

        <div class="warnings-list" id="member-warnings-list">
          <!-- Avisos -->
        </div>
      </div>

      <!-- 5. ACTIONS TAB -->
      <div id="tab-member-actions" class="tab-panel" style="margin-top: 15px;">
        <div class="premium-card" style="padding: 15px;">
          <h4 class="info-box-title" style="margin-bottom: 15px;"><i class="fas fa-tasks"></i> Histórico de Ações de Campo</h4>
          <div class="custom-table-container">
            <table class="custom-table" style="font-size: 0.75rem; width: 100%;">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Tipo de Ação</th>
                  <th>Material Gasto</th>
                  <th>Valor Ganho</th>
                  <th>Lucro Líquido</th>
                </tr>
              </thead>
              <tbody>
                ${memberActions.length === 0 ? `
                  <tr>
                    <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 25px;">Nenhuma ação registrada para este membro.</td>
                  </tr>
                ` : memberActions.map(act => `
                  <tr>
                    <td>${act.date}</td>
                    <td><strong>${act.type}</strong></td>
                    <td style="color: #F44336; font-family: monospace;">-$${act.cost.toLocaleString('pt-BR')}</td>
                    <td style="color: #4CAF50; font-family: monospace;">+$${act.revenue.toLocaleString('pt-BR')}</td>
                    <td style="font-weight: 700; color: ${act.profit >= 0 ? '#4CAF50' : '#F44336'}; font-family: monospace;">$${act.profit.toLocaleString('pt-BR')}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
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

window.editMemberDossier = function (memberId) {
  const m = state.members.find(member => member.id === memberId);
  if (!m) return;

  editingMemberId = memberId;

  // Alterar título do modal
  const modalTitle = document.querySelector('#modal-new-member .modal-title');
  if (modalTitle) modalTitle.innerHTML = '<i class="fas fa-users-cog"></i> Editar Dossiê de Membro';

  // Abrir o modal
  openModal('modal-new-member');

  // Preencher dados cadastrais básicos
  document.getElementById("m-full-name").value = m.fullName || "";
  document.getElementById("m-nickname").value = m.nickname || "";
  document.getElementById("m-phone").value = m.phone || "";
  document.getElementById("m-discord").value = m.discord || "";
  document.getElementById("m-email").value = m.email || "";
  document.getElementById("m-dob").value = m.dob || "";
  document.getElementById("m-address").value = m.address || "";
  document.getElementById("m-rank").value = m.rank || "Associate";
  document.getElementById("m-recruiter").value = m.recruiter || "";
  document.getElementById("m-join-date").value = m.joinDate || "";
  document.getElementById("m-trust").value = m.trust || 50;

  // Status toggle
  const toggle = document.getElementById("m-status-toggle");
  if (toggle) {
    toggle.checked = (m.status === "Active");
    toggle.dispatchEvent(new Event("change"));
  }

  // Observações e Equipamentos
  document.getElementById("m-notes").value = m.notes || "";
  document.getElementById("m-equipment").value = m.equipment || "";

  // Foto de perfil
  const preview = document.getElementById("m-photo-preview");
  const box = document.getElementById("m-photo-upload-box");
  if (preview && box) {
    if (m.photo) {
      preview.src = m.photo;
      preview.style.display = "block";
      const icon = box.querySelector(".photo-upload-icon");
      const text = box.querySelector(".photo-upload-text");
      if (icon) icon.style.display = "none";
      if (text) text.style.display = "none";
      tempUploadedImage["new-member"] = m.photo;
    } else {
      preview.src = "";
      preview.style.display = "none";
      const icon = box.querySelector(".photo-upload-icon");
      const text = box.querySelector(".photo-upload-text");
      if (icon) icon.style.display = "block";
      if (text) text.style.display = "block";
      tempUploadedImage["new-member"] = null;
    }
  }

  // Veículos
  const container = document.getElementById("m-form-vehicles-container");
  if (container) {
    container.innerHTML = "";
    if (m.vehicles && m.vehicles.length > 0) {
      m.vehicles.forEach(v => {
        const row = document.createElement("div");
        row.className = "form-vehicle-row";
        row.innerHTML = `
          <div class="form-control-wrapper">
            <label class="form-label" style="font-size: 0.65rem;">Modelo</label>
            <input type="text" class="form-input form-veh-model" style="padding: 6px 10px; font-size: 0.8rem;" value="${v.model}" required>
          </div>
          <div class="form-control-wrapper">
            <label class="form-label" style="font-size: 0.65rem;">Placa</label>
            <input type="text" class="form-input form-veh-plate" style="padding: 6px 10px; font-size: 0.8rem;" value="${v.plate}" required>
          </div>
          <div class="form-control-wrapper">
            <label class="form-label" style="font-size: 0.65rem;">Cor</label>
            <input type="text" class="form-input form-veh-color" style="padding: 6px 10px; font-size: 0.8rem;" value="${v.color}" required>
          </div>
          <div class="form-control-wrapper">
            <label class="form-label" style="font-size: 0.65rem;">Foto URL</label>
            <input type="text" class="form-input form-veh-photo" style="padding: 6px 10px; font-size: 0.8rem;" value="${v.photo || ''}">
          </div>
          <button type="button" class="btn btn-danger btn-sm" onclick="this.parentElement.remove()" style="padding: 8px 10px; height: 33px;"><i class="fas fa-trash"></i></button>
        `;
        container.appendChild(row);
      });
    } else {
      addFormVehicleRow();
    }
  }
}

window.toggleMemberStatus = function (memberId) {
  const m = state.members.find(member => member.id === memberId);
  if (!m) return;

  const oldStatus = m.status;
  if (oldStatus === "Archived" || oldStatus === "Inactive") {
    m.status = "Active";
  } else {
    m.status = "Inactive";
  }
  m.lastActivity = new Date().toISOString().slice(0, 16).replace("T", " ");

  const statusLabel = m.status === "Active" ? "Ativo" : "Inativo";
  m.history.unshift({
    time: new Date().toISOString().slice(0, 16).replace("T", " "),
    desc: `Status de matrícula alterado para: <strong>${statusLabel}</strong>.`
  });

  logActivity(`Status de filiação de ${m.fullName} modificado para ${statusLabel}`, "Membro");
  saveState();
  renderMembersList();
  showToast(`Status de ${m.fullName} alterado para ${statusLabel}`, "success");
}

window.deleteMemberDossier = async function (memberId) {
  const m = state.members.find(member => member.id === memberId);
  if (!m) return;

  if (m.status === "Archived") {
    // Exclusão definitiva
    if (confirm(`Tem certeza que deseja EXCLUIR DEFINITIVAMENTE o dossiê de ${m.fullName}? Esta ação é irreversível.`)) {
      const idx = state.members.findIndex(member => member.id === memberId);
      if (idx !== -1) {
        state.members.splice(idx, 1);

        try {
          await supabaseClient.from("members").delete().eq("id", memberId);
          // Remover veículos da frota global pertencentes ao membro excluído no banco
          const orphanPlates = state.vehicles.filter(v => v.owner === m.fullName).map(v => v.plate);
          for (let pl of orphanPlates) {
            await supabaseClient.from("vehicles").delete().eq("plate", pl);
          }
        } catch (err) {
          console.error("Erro ao excluir do Supabase:", err);
        }

        // Remover veículos da frota global pertencentes ao membro excluído localmente
        state.vehicles = state.vehicles.filter(v => v.owner !== m.fullName);

        // Se for o membro ativo, focar em outro membro não excluído
        const remaining = state.members.filter(member => member.status !== "Archived");
        if (activeMemberId === memberId) {
          activeMemberId = remaining.length > 0 ? remaining[0].id : null;
        }

        logActivity(`Dossiê de ${m.fullName} excluído definitivamente do sindicato.`, "Membro");
        saveState("activities");
        renderMembersList();
        showToast(`Dossiê de ${m.fullName} removido definitivamente`, "error");
      }
    }
  } else {
    // Soft-delete (Arquivar para a lista de Excluídos)
    if (confirm(`Deseja mover o dossiê de ${m.fullName} para a lista de Excluídos?`)) {
      m.status = "Archived";
      m.lastActivity = new Date().toISOString().slice(0, 16).replace("T", " ");
      m.history.unshift({
        time: new Date().toISOString().slice(0, 16).replace("T", " "),
        desc: "Dossiê arquivado na lista de excluídos."
      });

      logActivity(`Dossiê de ${m.fullName} arquivado na lixeira do sindicato.`, "Membro");
      saveState("members");

      // Selecionar outro membro operacional
      const remaining = state.members.filter(member => member.status !== "Archived");
      if (activeMemberId === memberId) {
        activeMemberId = remaining.length > 0 ? remaining[0].id : null;
      }

      renderMembersList();
      showToast(`Dossiê de ${m.fullName} arquivado`, "error");
    }
  }
}

// Navegação de abas no dossiê
window.switchMemberTab = function (event, tabId) {
  const panel = event.target.closest(".tab-container");
  if (!panel) return;

  panel.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
  panel.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));

  event.target.classList.add("active");
  const target = document.getElementById(tabId);
  if (target) target.classList.add("active");
}

window.toggleAddWarningForm = function () {
  const container = document.getElementById("add-warning-form-container");
  const chevron = document.getElementById("add-warning-chevron");
  if (container && chevron) {
    if (container.style.display === "none") {
      container.style.display = "block";
      chevron.style.transform = "rotate(180deg)";
    } else {
      container.style.display = "none";
      chevron.style.transform = "rotate(0deg)";
    }
  }
}

window.submitAddWarning = function (event, memberId) {
  event.preventDefault();

  const m = state.members.find(member => member.id === memberId);
  if (!m) return;

  const title = document.getElementById("w-title-input").value;
  const level = document.getElementById("w-level-input").value;
  const text = document.getElementById("w-reason-input").value;

  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10);

  const newWarning = {
    id: "WRN-" + (m.warnings ? m.warnings.length + 101 : 101),
    title,
    date: dateStr,
    text,
    level,
    admin: state.settings.adminName || "Vito Scaletta"
  };

  if (!m.warnings) m.warnings = [];
  m.warnings.push(newWarning);

  // Deduzir alguns pontos de lealdade caso a advertência seja crítica/alta
  let trustPenalty = 0;
  if (level === "Critical") trustPenalty = 20;
  else if (level === "High") trustPenalty = 10;
  else if (level === "Medium") trustPenalty = 5;

  m.trust = Math.max(0, m.trust - trustPenalty);
  m.lastActivity = now.toISOString().slice(0, 16).replace("T", " ");

  const threatLabels = { Low: "Baixo", Medium: "Médio", High: "Alto", Critical: "Crítico" };
  m.history.unshift({
    time: now.toISOString().slice(0, 16).replace("T", " "),
    desc: `Recebeu advertência oficial: <strong>${title}</strong> (${threatLabels[level]}).`
  });

  logActivity(`Advertência aplicada a ${m.fullName}: ${title} [${threatLabels[level]}]`, "Membro");
  saveState();

  // Re-renderizar o dossiê mantendo a aba Avisos aberta
  renderMembersList();

  // Reabrir a aba de avisos
  const tabBtn = document.querySelector(".tab-button[onclick*='tab-warnings']");
  if (tabBtn) {
    tabBtn.click();
  }

  showToast(`Advertência registrada para ${m.fullName}`, "error");
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
window.transitionRecruit = function (recruitId, newStatus) {
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

  const filterEl = document.getElementById("operation-filter-status");
  const filterStatus = filterEl ? filterEl.value : "Active";

  const filteredOps = state.operations.filter(op => {
    if (filterStatus === "Archived") {
      return op.status === "Completed" || op.status === "Cancelled";
    } else {
      return op.status !== "Completed" && op.status !== "Cancelled";
    }
  });

  if (filteredOps.length === 0) {
    container.innerHTML = `<p style='color: var(--text-muted); font-size: 0.8rem; grid-column: span 3; text-align: center; padding: 40px;'>${filterStatus === 'Archived' ? 'Nenhuma operação arquivada.' : 'Nenhuma operação tática em andamento.'}</p>`;
    return;
  }

  filteredOps.forEach(op => {
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

    const threatLabel = threatTranslations[op.threatLevel] || op.threatLevel;
    const statusLabel = op.status === 'Active' ? 'Ativa' : op.status === 'Completed' ? 'Concluída' : op.status === 'Planning' ? 'Planejamento' : op.status === 'Cancelled' ? 'Cancelada' : op.status;
    const statusClass = op.status === 'Active' ? 'badge-active' : op.status === 'Completed' ? 'badge-active' : op.status === 'Planning' ? 'badge-pending' : 'badge-inactive';

    let row1Buttons = "";
    let row2Buttons = "";

    if (op.status !== "Completed" && op.status !== "Cancelled") {
      row1Buttons = `
        <button class="btn btn-secondary btn-sm" onclick="viewOperation('${op.id}')" style="flex: 1; padding: 4px 8px; font-size: 0.7rem; background: #37474f; border-color: #546e7a; color: #90caf9;"><i class="fas fa-eye"></i> Detalhes</button>
        <button class="btn btn-secondary btn-sm" onclick="editOperation('${op.id}')" style="flex: 1; padding: 4px 8px; font-size: 0.7rem; background: var(--accent-color); border-color: var(--accent-color-hover); color: #fff;"><i class="fas fa-edit"></i> Editar</button>
      `;
      row2Buttons = `
        <button class="btn btn-success btn-sm" onclick="changeOpStatus('${op.id}', 'Completed')" style="flex: 1; padding: 4px 8px; font-size: 0.7rem;"><i class="fas fa-check-circle"></i> Concluir</button>
        <button class="btn btn-danger btn-sm" onclick="changeOpStatus('${op.id}', 'Cancelled')" style="flex: 1; padding: 4px 8px; font-size: 0.7rem;"><i class="fas fa-ban"></i> Cancelar</button>
      `;
    } else {
      row1Buttons = `
        <button class="btn btn-secondary btn-sm" onclick="viewOperation('${op.id}')" style="flex: 1; padding: 4px 8px; font-size: 0.7rem; background: #37474f; border-color: #546e7a; color: #90caf9;"><i class="fas fa-eye"></i> Detalhes</button>
        <button class="btn btn-secondary btn-sm" onclick="editOperation('${op.id}')" style="flex: 1; padding: 4px 8px; font-size: 0.7rem; background: var(--accent-color); border-color: var(--accent-color-hover); color: #fff;"><i class="fas fa-edit"></i> Editar</button>
      `;
      row2Buttons = `
        <button class="btn btn-secondary btn-sm" onclick="restoreOperation('${op.id}')" style="flex: 1; padding: 4px 8px; font-size: 0.7rem; background: #00897b; border-color: #00796b; color: #fff;"><i class="fas fa-undo"></i> Restaurar</button>
        <button class="btn btn-secondary btn-sm" onclick="deleteOperation('${op.id}')" style="flex: 1; padding: 4px 8px; font-size: 0.7rem; background: #c62828; border-color: #b71c1c; color: #fff;"><i class="fas fa-trash-alt"></i> Excluir</button>
      `;
    }

    card.innerHTML = `
      <div class="operation-card-header">
        <h4 class="operation-title-sub">${op.title}</h4>
        <span class="threat-badge ${threatClass}">${threatLabel}</span>
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
        <span class="profile-hero-badge ${statusClass}" style="position: static; transform: none; font-size: 0.65rem; padding: 2px 6px;">${statusLabel}</span>
      </div>
      
      <div class="candidate-materials-label">Motivos da Ação / Vigilância</div>
      <p style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.4; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 4px; border: 1px solid var(--border-color); margin-bottom: 12px; height: 40px; overflow-y: auto;">
        "${op.reason}"
      </p>
      
      <div class="candidate-materials-label">Timeline da Operação</div>
      <div class="timeline-log" style="max-height: 80px; overflow-y: auto; font-size: 0.7rem; margin-bottom: 15px;">
        ${op.timeline.map(t => `<div style="margin-bottom: 4px;"><strong>${t.time}</strong> - ${t.text}</div>`).join("")}
      </div>
      
      <div class="candidate-actions" style="display: flex; flex-direction: column; gap: 6px;">
        <div style="display: flex; gap: 6px;">
          ${row1Buttons}
        </div>
        <div style="display: flex; gap: 6px;">
          ${row2Buttons}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

window.changeOpStatus = function (opId, nextStatus) {
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

  const sorted = [...state.transactions].sort((a, b) => new Date(b.date) - new Date(a.date));

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

window.deleteVehicle = async function (index) {
  const v = state.vehicles[index];
  if (!v) return;

  if (confirm(`Remover veículo: ${v.model} [${v.plate}] dos registros gerais?`)) {
    try {
      await supabaseClient.from("vehicles").delete().eq("plate", v.plate);
    } catch (err) {
      console.error("Erro ao excluir veículo no Supabase:", err);
    }
    logActivity(`Veículo ${v.model} [${v.plate}] excluído do pátio do clube.`, "Sistema");
    state.vehicles.splice(index, 1);
    saveState("vehicles");
    renderVehicles();
    showToast("Registro do veículo apagado", "error");
  }
}

window.editVehicleNotes = function (index) {
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

window.adjustEquipmentQty = function (index, delta) {
  const item = state.equipment[index];
  if (!item) return;

  item.quantity = Math.max(0, item.quantity + delta);
  logActivity(`Ajustado estoque de ${item.name} para: ${item.quantity} unidades.`, "Sistema");
  saveState();
  renderEquipment();
}

window.deleteEquipment = async function (index) {
  const item = state.equipment[index];
  if (!item) return;

  if (confirm(`Remover item ${item.name} do armaria?`)) {
    try {
      await supabaseClient.from("equipment").delete().eq("name", item.name);
    } catch (err) {
      console.error("Erro ao excluir equipamento no Supabase:", err);
    }
    logActivity(`Armamento ${item.name} removido do inventário permanente.`, "Sistema");
    state.equipment.splice(index, 1);
    saveState("equipment");
    renderEquipment();
    showToast("Item excluído do armaria", "error");
  }
}

// 8. RENDERS DE PROPRIEDADES REAL ESTATE
function renderProperties() {
  const container = document.getElementById("properties-grid-container");
  if (!container) return;

  container.innerHTML = "";

  const pinsContainer = document.getElementById("tactical-map-pins");
  if (pinsContainer) pinsContainer.innerHTML = "";

  state.properties.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "property-card";
    card.id = `property-card-${index}`;
    card.style.cursor = "pointer";
    card.style.transition = "all 0.2s ease";

    card.addEventListener("click", () => {
      focusMapPin(index);
    });

    const coords = p.coords || { x: 50, y: 50 };

    card.innerHTML = `
      <div class="property-photo-wrapper" style="position: relative;">
        <img src="${p.photo || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=300'}" alt="${p.name}" class="property-photo" style="height: 110px; width: 100%; object-fit: cover; border-bottom: 1px solid var(--border-color);">
        <span class="property-info-badge" style="position: absolute; top: 8px; left: 8px; background: var(--accent-gradient); border-radius: 4px; padding: 2px 6px; font-size: 0.65rem; font-weight: 700; text-transform: uppercase;">${p.type}</span>
      </div>
      <div class="property-body" style="padding: 12px;">
        <h4 class="property-name" style="font-family: var(--font-display); font-weight: 700; font-size: 0.95rem; margin-bottom: 4px;">${p.name}</h4>
        <div class="property-address" style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 8px;"><i class="fas fa-map-marker-alt" style="color: var(--accent-color-hover);"></i> ${p.address}</div>
        
        <div class="property-details" style="font-size: 0.75rem; display: flex; flex-direction: column; gap: 4px;">
          <div class="property-detail-row" style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-muted);">Segurança:</span>
            <span style="color: var(--accent-color-hover); font-weight: 600;">${p.security}</span>
          </div>
          <div class="property-detail-row" style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-muted);">Guardas:</span>
            <span style="color: var(--text-primary); font-weight: 500;">${p.guards || 'Nenhum'}</span>
          </div>
          <div class="property-detail-row" style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-muted);">Coordenadas GPS:</span>
            <span style="color: #4CAF50; font-weight: 600; font-family: monospace;">X: ${coords.x.toFixed(1)}, Y: ${coords.y.toFixed(1)}</span>
          </div>
          <div class="property-detail-row" style="margin-top: 6px; flex-direction: column; border-top: 1px solid var(--border-color); padding-top: 6px;">
            <span style="color: var(--text-muted); font-size: 0.6rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Estoque do Imóvel:</span>
            <span style="color: var(--text-secondary); margin-top: 2px;">${p.storage || 'Nenhum'}</span>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);

    if (pinsContainer) {
      let icon = "fa-building";
      if (p.type === "Casa Segura") icon = "fa-home";
      else if (p.type === "Galpão") icon = "fa-warehouse";
      else if (p.type === "Sede do Clube") icon = "fa-shield-alt";
      else if (p.type.includes("Fachada")) icon = "fa-dollar-sign";

      const blip = document.createElement("div");
      blip.className = "map-blip";
      blip.id = `map-blip-${index}`;
      blip.style.left = `${coords.x}%`;
      blip.style.top = `${coords.y}%`;

      blip.innerHTML = `
        <i class="fas ${icon}"></i>
        <div class="map-blip-tooltip">
          <div style="font-weight: 800; color: #fff;">${p.name}</div>
          <div style="font-size: 0.65rem; color: var(--text-secondary); margin-top: 2px;">${p.type} | Seg: ${p.security}</div>
        </div>
      `;

      blip.addEventListener("click", (e) => {
        e.stopPropagation();
        focusPropertyCard(index);
      });

      pinsContainer.appendChild(blip);
    }
  });
}

window.focusPropertyCard = function (index) {
  document.querySelectorAll(".property-card").forEach(c => {
    c.style.borderColor = "var(--border-color)";
    c.style.background = "";
  });
  document.querySelectorAll(".map-blip").forEach(b => {
    b.classList.remove("pulse");
  });

  const card = document.getElementById(`property-card-${index}`);
  if (card) {
    card.style.borderColor = "var(--accent-color-hover)";
    card.style.background = "rgba(183, 28, 28, 0.03)";
    card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  const blip = document.getElementById(`map-blip-${index}`);
  if (blip) {
    blip.classList.add("pulse");
  }
}

window.focusMapPin = function (index) {
  focusPropertyCard(index);
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

window.toggleMeetingAttendance = function (idx) {
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

  switch (type) {
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
      const joinDate = document.getElementById("m-join-date").value || new Date().toISOString().slice(0, 10);
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
        }
      });

      if (editingMemberId) {
        // Modo Edição
        const memberIndex = state.members.findIndex(m => m.id === editingMemberId);
        if (memberIndex !== -1) {
          const m = state.members[memberIndex];
          const oldName = m.fullName;

          m.fullName = name;
          m.nickname = nick;
          m.phone = phone;
          m.discord = disc;
          m.email = email;
          m.dob = dob;
          m.address = address;
          m.rank = rank;
          m.recruiter = recruiter;
          m.joinDate = joinDate;
          m.trust = trust;
          m.status = isActive ? "Active" : "Inactive";
          if (tempUploadedImage["new-member"]) {
            m.photo = tempUploadedImage["new-member"];
          }
          m.notes = notes;
          m.equipment = equipmentStr;
          m.vehicles = vehicles;
          m.lastActivity = new Date().toISOString().slice(0, 16).replace("T", " ");

          m.history.unshift({
            time: new Date().toISOString().slice(0, 16).replace("T", " "),
            desc: "Dossiê atualizado pelo administrador."
          });

          // Sincronizar a frota de veículos
          state.vehicles = state.vehicles.filter(v => v.owner !== name && v.owner !== oldName);
          vehicles.forEach(v => {
            state.vehicles.push({
              model: v.model,
              plate: v.plate,
              color: v.color,
              owner: name,
              status: "Operacional",
              photo: v.photo,
              notes: "Veículo atualizado no dossiê de " + name
            });
          });

          logActivity(`Dossiê do membro ${name} (${editingMemberId}) atualizado`, "Membro");
          saveState();
          closeModal("modal-new-member");
          editingMemberId = null;
          renderMembersList();
          showToast(`Dossiê ${name} atualizado com sucesso!`, "success");
          return;
        }
      }

      // Modo Criação
      const newId = "MEM-0" + (state.members.length + 1);

      // Sincronizar veículos novos na frota
      vehicles.forEach(v => {
        state.vehicles.push({
          model: v.model,
          plate: v.plate,
          color: v.color,
          owner: name,
          status: "Operacional",
          photo: v.photo,
          notes: "Veículo cadastrado na criação do dossiê do membro."
        });
      });

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
        equipment: equipmentStr,
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
      const mDate = document.getElementById("r-meet-date").value || new Date().toISOString().slice(0, 10);
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

      if (editingOperationId) {
        // Modo Edição
        const opIndex = state.operations.findIndex(o => o.id === editingOperationId);
        if (opIndex !== -1) {
          const oldOp = state.operations[opIndex];
          state.operations[opIndex] = {
            ...oldOp,
            title,
            targetName: tName,
            targetAlias: tAlias,
            targetPhone: tPhone,
            targetAge: tAge,
            targetLocation: tLoc,
            targetPhoto: tempUploadedImage["new-operation"] || oldOp.targetPhoto,
            reason,
            threatLevel: threat,
            assignedTeam: team.filter(Boolean),
            assignedVehicles: vehicles.filter(Boolean),
            assignedEquipment: equipment.filter(Boolean),
            media: [...opMediaList]
          };
          logActivity(`Editou a Operação: ${title} contra o alvo ${tName}`, "Operação");
          saveState();
          showToast(`Operação ${title} atualizada com sucesso!`, "success");
        }
        editingOperationId = null;
      } else {
        // Modo Criação
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
          media: [...opMediaList],
          timeline: [
            { time: timeStr, text: "Operação autorizada e dossiê do alvo cadastrado no sistema." },
            { time: timeStr, text: "Unidades designadas para o ataque: " + team.join(", ") }
          ]
        };

        state.operations.push(newOp);
        logActivity(`Iniciou a Operação: ${title} contra o alvo ${tName}`, "Operação");
        saveState();
        showToast(`Operação ${title} iniciada com sucesso!`, "success");
      }

      opMediaList = [];
      closeModal("modal-new-operation");
      renderOperations();
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

      const today = new Date().toISOString().slice(0, 10);

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

      const xVal = parseFloat(document.getElementById("p-coords-x").value);
      const yVal = parseFloat(document.getElementById("p-coords-y").value);

      if (isNaN(xVal) || isNaN(yVal)) {
        showToast("Por favor, marque a localização do GPS no mapa antes de salvar.", "error");
        return;
      }

      const newProp = {
        name,
        address,
        type,
        security,
        guards,
        storage,
        photo: tempUploadedImage["new-property"] || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400",
        coords: { x: xVal, y: yVal }
      };

      state.properties.push(newProp);
      logActivity(`Registrou novo imóvel seguro do sindicato: ${name}`, "System");
      saveState();

      closeModal("modal-new-property");
      renderProperties();
      showToast("Imóvel registrado com sucesso", "success");
    });
  }

  // 9. REGISTRAR AÇÃO
  const formAction = document.getElementById("form-new-action");
  if (formAction) {
    formAction.addEventListener("submit", (e) => {
      e.preventDefault();

      const type = document.getElementById("act-type").value;
      const revenue = parseFloat(document.getElementById("act-revenue").value) || 0;
      const date = document.getElementById("act-date").value;

      const checkboxes = document.querySelectorAll('input[name="act-member"]:checked');
      const selectedParticipants = Array.from(checkboxes).map(cb => cb.value);

      if (selectedParticipants.length === 0) {
        showToast("Selecione pelo menos um participante para registrar a ação.", "error");
        return;
      }

      // Sum up materials cost and collect them in an array
      const materials = [];
      let totalCost = 0;
      const rows = document.querySelectorAll("#act-materials-rows .material-row");
      rows.forEach(row => {
        const mName = row.querySelector(".material-name").value.trim();
        const mQty = parseFloat(row.querySelector(".material-qty").value) || 0;
        const mUnit = parseFloat(row.querySelector(".material-unit-cost").value) || 0;
        if (mName && mQty > 0) {
          materials.push({ name: mName, quantity: mQty, unitCost: mUnit });
          totalCost += mQty * mUnit;
        }
      });

      if (editingActionId) {
        // Modo Edição
        const actIndex = state.actions.findIndex(act => act.id === editingActionId);
        if (actIndex !== -1) {
          state.actions[actIndex] = {
            id: editingActionId,
            type,
            revenue,
            cost: totalCost,
            profit: revenue - totalCost,
            date,
            participants: selectedParticipants,
            materials: materials,
            media: [...actionMediaList],
            status: state.actions[actIndex].status || "Active"
          };
          logActivity(`Editou ação de campo: ${type} (${selectedParticipants.join(", ")})`, "Operação");
          saveState();
          showToast("Ação atualizada com sucesso", "success");
        }
        editingActionId = null;
      } else {
        // Modo Criação
        const newAct = {
          id: "ACT-" + Date.now().toString().slice(-6),
          type,
          revenue,
          cost: totalCost,
          profit: revenue - totalCost,
          date,
          participants: selectedParticipants,
          materials: materials,
          media: [...actionMediaList],
          status: "Active"
        };
        if (!state.actions) state.actions = [];
        state.actions.push(newAct);
        logActivity(`Registrou ação de campo: ${type} (${selectedParticipants.join(", ")})`, "Operação");
        saveState();
        showToast("Ação de campo registrada com sucesso", "success");
      }

      actionMediaList = [];
      closeModal("modal-new-action");
      renderActions();
    });
  }
}

window.pickPropertyCoords = function (event) {
  // The image is scaled via CSS transform; we must account for pickerZoom and scroll offset.
  const scrollable = document.getElementById("map-picker-scrollable");
  const wrapper = scrollable ? scrollable.closest(".map-picker-wrapper") : event.currentTarget;
  if (!wrapper) return;

  // Get click position relative to the visible viewport of the wrapper
  const wrapperRect = wrapper.getBoundingClientRect();
  const clickXInWrapper = event.clientX - wrapperRect.left + wrapper.scrollLeft;
  const clickYInWrapper = event.clientY - wrapperRect.top + wrapper.scrollTop;

  // Convert from scaled-pixel space to percentage of original 2048x2048 image
  const mapSize = 2048; // native image size in px
  const xPct = (clickXInWrapper / (mapSize * pickerZoom)) * 100;
  const yPct = (clickYInWrapper / (mapSize * pickerZoom)) * 100;

  document.getElementById("p-coords-x").value = xPct.toFixed(2);
  document.getElementById("p-coords-y").value = yPct.toFixed(2);

  // Place pin in the scrollable (pre-scaled) coordinate space
  const pin = document.getElementById("map-picker-pin");
  if (pin) {
    pin.style.left = xPct.toFixed(2) + "%";
    pin.style.top = yPct.toFixed(2) + "%";
    pin.style.display = "block";
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

// ==================== CALCULATOR ENGINE AND EXCEL FORMULAS ====================
let calcExpression = "";

window.pressCalcKey = function (key) {
  const screen = document.getElementById("calc-screen");
  if (!screen) return;

  if (key === "C") {
    calcExpression = "";
    screen.innerText = "0";
  } else if (key === "Backspace") {
    calcExpression = calcExpression.slice(0, -1);
    screen.innerText = calcExpression || "0";
  } else if (key === "=") {
    try {
      if (calcExpression) {
        // Evaluate using safe math expressions logic
        const cleanExpr = calcExpression.replace(/[^0-9+\-*/().]/g, "");
        const result = new Function(`return ${cleanExpr}`)();
        screen.innerText = result.toLocaleString('pt-BR', { maximumFractionDigits: 4 });
        calcExpression = String(result);
      }
    } catch (e) {
      screen.innerText = "Erro";
      calcExpression = "";
    }
  } else {
    if (screen.innerText === "0" && !isNaN(key)) {
      calcExpression = key;
    } else {
      calcExpression += key;
    }
    screen.innerText = calcExpression;
  }
}

// Keyboard support for pocket calculator
document.addEventListener("keydown", (e) => {
  const activeModule = document.querySelector(".module-panel.active");
  if (!activeModule || activeModule.id !== "module-calculator") return;

  if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") {
    return;
  }

  const validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", ".", "=", "Enter", "Backspace", "Escape"];
  if (validKeys.includes(e.key)) {
    e.preventDefault();
    if (e.key === "Enter") pressCalcKey("=");
    else if (e.key === "Escape") pressCalcKey("C");
    else pressCalcKey(e.key);
  }
});

window.switchCalcTab = function (event, tabId) {
  const panel = event.target.closest(".tab-container");
  if (!panel) return;

  panel.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
  panel.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));

  event.target.classList.add("active");
  const target = document.getElementById(tabId);
  if (target) target.classList.add("active");
}

// 1. Profit Split (Excel style sum & pct multiplier)
window.calcProfitSplit = function () {
  const gross = parseFloat(document.getElementById("split-gross").value) || 0;
  const costs = parseFloat(document.getElementById("split-costs").value) || 0;

  const net = Math.max(0, gross - costs);
  document.getElementById("result-split-net").innerText = "$" + net.toLocaleString('pt-BR', { maximumFractionDigits: 2 });

  const pctBoss = parseFloat(document.getElementById("split-pct-boss").value) || 0;
  const pctUnderboss = parseFloat(document.getElementById("split-pct-underboss").value) || 0;
  const pctCapo = parseFloat(document.getElementById("split-pct-capo").value) || 0;
  const pctSoldier = parseFloat(document.getElementById("split-pct-soldier").value) || 0;

  const valBoss = net * (pctBoss / 100);
  const valUnderboss = net * (pctUnderboss / 100);
  const valCapo = net * (pctCapo / 100);
  const valSoldier = net * (pctSoldier / 100);

  document.getElementById("result-split-boss").innerText = "$" + valBoss.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
  document.getElementById("result-split-underboss").innerText = "$" + valUnderboss.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
  document.getElementById("result-split-capo").innerText = "$" + valCapo.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
  document.getElementById("result-split-soldier").innerText = "$" + valSoldier.toLocaleString('pt-BR', { maximumFractionDigits: 2 });

  document.getElementById("excel-formula-split-text").innerText =
    `=(SOMA(${gross}; -${costs})) * ${pctBoss}%  [Exemplo para o Boss]`;
}

// 2. Loans & Amortization (Excel style PMT)
window.calcLoanPMT = function () {
  const principal = parseFloat(document.getElementById("loan-principal").value) || 0;
  const ratePerMonth = (parseFloat(document.getElementById("loan-rate").value) || 0) / 100;
  const months = parseInt(document.getElementById("loan-months").value) || 1;

  let pmt = 0;
  if (ratePerMonth === 0) {
    pmt = principal / months;
  } else {
    pmt = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, months)) / (Math.pow(1 + ratePerMonth, months) - 1);
  }

  const totalPaid = pmt * months;
  const totalInterest = Math.max(0, totalPaid - principal);

  document.getElementById("result-loan-pmt").innerText = "$" + pmt.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById("result-loan-total").innerText = "$" + totalPaid.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById("result-loan-interest").innerText = "$" + totalInterest.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  document.getElementById("excel-formula-loan-text").innerText =
    `=PGTO(${ratePerMonth * 100}%; ${months}; -${principal})`;
}

// 3. Contraband Forecast (Excel style SUMPRODUCT)
let contrabandData = [
  { item: "Pneus Semi-Slick (Lote)", quantity: 12, price: 1500 },
  { item: "Turbinas Turbonetics (un)", quantity: 8, price: 2400 },
  { item: "Kits Nitro NOS (Lote)", quantity: 5, price: 3800 },
  { item: "Combustível Metanol (Galão)", quantity: 20, price: 600 }
];

function renderForecastTable() {
  const tbody = document.getElementById("forecast-table-body");
  if (!tbody) return;

  tbody.innerHTML = "";
  contrabandData.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="font-weight: 600;">${row.item}</td>
      <td>
        <input type="number" class="form-input" style="padding: 4px 8px; font-size: 0.75rem; width: 70px; background: rgba(0,0,0,0.3);" value="${row.quantity}" oninput="updateForecastQty(${index}, this.value)">
      </td>
      <td>
        <input type="number" class="form-input" style="padding: 4px 8px; font-size: 0.75rem; width: 90px; background: rgba(0,0,0,0.3);" value="${row.price}" oninput="updateForecastPrice(${index}, this.value)">
      </td>
      <td style="text-align: right; font-weight: 700; color: var(--text-primary);" id="forecast-row-total-${index}">
        $${(row.quantity * row.price).toLocaleString()}
      </td>
    `;
    tbody.appendChild(tr);
  });

  calcContrabandForecast();
}

window.updateForecastQty = function (index, value) {
  contrabandData[index].quantity = parseInt(value) || 0;
  document.getElementById(`forecast-row-total-${index}`).innerText = "$" + (contrabandData[index].quantity * contrabandData[index].price).toLocaleString();
  calcContrabandForecast();
}

window.updateForecastPrice = function (index, value) {
  contrabandData[index].price = parseFloat(value) || 0;
  document.getElementById(`forecast-row-total-${index}`).innerText = "$" + (contrabandData[index].quantity * contrabandData[index].price).toLocaleString();
  calcContrabandForecast();
}

window.calcContrabandForecast = function () {
  const total = contrabandData.reduce((acc, row) => acc + (row.quantity * row.price), 0);
  document.getElementById("result-forecast-total").innerText = "$" + total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const qArray = contrabandData.map(d => d.quantity).join(";");
  const pArray = contrabandData.map(d => d.price).join(";");
  document.getElementById("excel-formula-forecast-text").innerText =
    `=SOMARPRODUTO({${qArray}}; {${pArray}})`;
}

function renderCalculator() {
  calcProfitSplit();
  calcLoanPMT();
  renderForecastTable();
}

// ==================== FLOATING POCKET CALCULATOR ENGINE ====================
let floatCalcExpression = "";

window.toggleFloatingCalculator = function () {
  const panel = document.getElementById("floating-calculator");
  if (panel) {
    panel.classList.toggle("active");
  }
}

window.pressFloatCalcKey = function (key) {
  const screen = document.getElementById("float-calc-screen");
  if (!screen) return;

  if (key === "C") {
    floatCalcExpression = "";
    screen.innerText = "0";
  } else if (key === "Backspace") {
    floatCalcExpression = floatCalcExpression.slice(0, -1);
    screen.innerText = floatCalcExpression || "0";
  } else if (key === "=") {
    try {
      if (floatCalcExpression) {
        const cleanExpr = floatCalcExpression.replace(/[^0-9+\-*/().]/g, "");
        const result = new Function(`return ${cleanExpr}`)();
        screen.innerText = result.toLocaleString('pt-BR', { maximumFractionDigits: 4 });
        floatCalcExpression = String(result);
      }
    } catch (e) {
      screen.innerText = "Erro";
      floatCalcExpression = "";
    }
  } else {
    if (screen.innerText === "0" && !isNaN(key)) {
      floatCalcExpression = key;
    } else {
      floatCalcExpression += key;
    }
    screen.innerText = floatCalcExpression;
  }
}

// Keyboard support for floating calculator (only when it is active)
document.addEventListener("keydown", (e) => {
  const panel = document.getElementById("floating-calculator");
  if (!panel || !panel.classList.contains("active")) return;

  if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") {
    return;
  }

  const validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", ".", "=", "Enter", "Backspace", "Escape"];
  if (validKeys.includes(e.key)) {
    e.preventDefault();
    if (e.key === "Enter") pressFloatCalcKey("=");
    else if (e.key === "Escape") pressFloatCalcKey("C");
    else pressFloatCalcKey(e.key);
  }
});

// ==================== MAPS DRAG-PAN & INFINITE ZOOM ENGINE ====================
let tacticalZoom = 1.0;
let pickerZoom = 1.0;
let isMapFullscreen = false;
let editingActionId = null;

window.zoomTacticalMap = function (amountOrScale) {
  const label = document.getElementById("tactical-zoom-label");

  if (amountOrScale === 1) {
    tacticalZoom = Math.min(10.0, tacticalZoom + 0.15);
  } else if (amountOrScale === -1) {
    tacticalZoom = Math.max(0.5, tacticalZoom - 0.15);
  } else {
    tacticalZoom = amountOrScale;
  }

  applyMapScale("tactical-map-scrollable", tacticalZoom);
  if (label) label.innerText = Math.round(tacticalZoom * 100) + "%";
}

window.zoomMapPicker = function (amountOrScale) {
  const label = document.getElementById("picker-zoom-label");

  if (amountOrScale === 1) {
    pickerZoom = Math.min(10.0, pickerZoom + 0.15);
  } else if (amountOrScale === -1) {
    pickerZoom = Math.max(0.5, pickerZoom - 0.15);
  } else {
    pickerZoom = amountOrScale;
  }

  applyMapScale("map-picker-scrollable", pickerZoom);
  if (label) label.innerText = Math.round(pickerZoom * 100) + "%";
}

// GPU-accelerated scale via CSS transform (zero layout reflow)
function applyMapScale(scrollableId, scale) {
  const el = document.getElementById(scrollableId);
  if (!el) return;
  el.style.transform = "scale(" + scale + ")";
}

window.toggleTacticalMapFullscreen = function () {
  const container = document.getElementById("tactical-map-container");
  const icon = document.getElementById("fullscreen-map-icon");
  if (container && icon) {
    isMapFullscreen = !isMapFullscreen;
    if (isMapFullscreen) {
      container.classList.add("fullscreen");
      container.style.height = "100vh";
      icon.className = "fas fa-compress";
    } else {
      container.classList.remove("fullscreen");
      container.style.height = "500px";
      icon.className = "fas fa-expand";
    }
  }
}

function initMapsDraggableAndWheelZoom() {
  makeMapInteractive("tactical-map-container", "zoomTacticalMap");
  makeMapInteractive("map-picker-wrapper", "zoomMapPicker");
}

function makeMapInteractive(parentId, zoomFnName) {
  const parent = document.getElementById(parentId);
  if (!parent) return;

  let isDown = false;
  let startX, startY, scrollLeft, scrollTop;
  let wheelRafPending = false;
  let wheelDeltaAccum = 0;

  parent.style.cursor = "grab";
  // Enable smooth scrolling inside the container
  parent.style.overflow = "auto";
  parent.style.userSelect = "none";
  parent.style.webkitUserSelect = "none";

  // ── Drag-to-pan ──────────────────────────────────────────
  parent.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    if (e.target.closest(".map-zoom-controls") || e.target.closest(".map-blip") || e.target.closest("#map-picker-pin")) return;

    isDown = true;
    parent.style.cursor = "grabbing";
    startX = e.clientX;
    startY = e.clientY;
    scrollLeft = parent.scrollLeft;
    scrollTop = parent.scrollTop;
    e.preventDefault();
  }, { passive: false });

  parent.addEventListener("mouseleave", () => { isDown = false; parent.style.cursor = "grab"; });
  parent.addEventListener("mouseup", () => { isDown = false; parent.style.cursor = "grab"; });

  parent.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    parent.scrollLeft = scrollLeft - dx;
    parent.scrollTop = scrollTop - dy;
  });

  // ── Wheel-to-zoom — throttled with rAF ───────────────────
  parent.addEventListener("wheel", (e) => {
    e.preventDefault();
    wheelDeltaAccum += e.deltaY;

    if (!wheelRafPending) {
      wheelRafPending = true;
      requestAnimationFrame(() => {
        if (wheelDeltaAccum < 0) {
          window[zoomFnName](1);
        } else {
          window[zoomFnName](-1);
        }
        wheelDeltaAccum = 0;
        wheelRafPending = false;
      });
    }
  }, { passive: false });

  // ── Touch support (pinch-to-zoom + pan) ──────────────────
  let lastTouchDist = null;
  parent.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
      lastTouchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    } else if (e.touches.length === 1) {
      isDown = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      scrollLeft = parent.scrollLeft;
      scrollTop = parent.scrollTop;
    }
  }, { passive: true });

  parent.addEventListener("touchmove", (e) => {
    if (e.touches.length === 2 && lastTouchDist !== null) {
      e.preventDefault();
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const delta = dist - lastTouchDist;
      if (Math.abs(delta) > 5) {
        window[zoomFnName](delta > 0 ? 1 : -1);
        lastTouchDist = dist;
      }
    } else if (e.touches.length === 1 && isDown) {
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      parent.scrollLeft = scrollLeft - dx;
      parent.scrollTop = scrollTop - dy;
    }
  }, { passive: false });

  parent.addEventListener("touchend", () => { isDown = false; lastTouchDist = null; });
}

// ==================== RENDERING ACTIONS MODULE ====================
const defaultMaterialCosts = {
  "Lockpick": 100,
  "Kit de Reparo": 300,
  "Munição de Pistola (un.)": 5,
  "Munição de Fuzil (un.)": 15,
  "Explosivo C4": 1500,
  "Galão de Combustível": 50,
  "Máscara / Disfarce": 30,
  "Kit Médico de Emergência": 200
};

window.autoFillMaterialCost = function (input) {
  const row = input.closest(".material-row");
  if (!row) return;
  const name = input.value.trim();
  const costInput = row.querySelector(".material-unit-cost");
  if (costInput && defaultMaterialCosts[name] !== undefined) {
    costInput.value = defaultMaterialCosts[name];
  }
  calcActionModalProfit();
}

window.addActionMaterialRow = function (name = "", qty = 1, unitCost = 0) {
  const container = document.getElementById("act-materials-rows");
  if (!container) return;

  const row = document.createElement("div");
  row.className = "material-row";
  row.style.display = "grid";
  row.style.gridTemplateColumns = "2.5fr 1fr 1.5fr auto";
  row.style.gap = "8px";
  row.style.alignItems = "center";
  row.style.marginBottom = "4px";

  row.innerHTML = `
    <input type="text" class="form-input material-name" required placeholder="Item / Material" list="materials-list-autocomplete" value="${name}" onchange="autoFillMaterialCost(this)" style="padding: 6px 8px; font-size: 0.75rem; background: rgba(0,0,0,0.3);">
    <input type="number" class="form-input material-qty" required min="1" placeholder="Qtd" value="${qty}" oninput="calcActionModalProfit()" style="padding: 6px 8px; font-size: 0.75rem; background: rgba(0,0,0,0.3);">
    <input type="number" class="form-input material-unit-cost" required min="0" placeholder="Unitário ($)" value="${unitCost}" oninput="calcActionModalProfit()" style="padding: 6px 8px; font-size: 0.75rem; background: rgba(0,0,0,0.3);">
    <button type="button" class="btn btn-danger" onclick="this.closest('.material-row').remove(); calcActionModalProfit();" style="padding: 6px; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; background: #c62828; color: #fff; cursor: pointer; border: none; border-radius: 4px;"><i class="fas fa-trash"></i></button>
  `;
  container.appendChild(row);
  calcActionModalProfit();
}

window.calcActionModalProfit = function () {
  const rev = parseFloat(document.getElementById("act-revenue").value) || 0;

  let totalCost = 0;
  const rows = document.querySelectorAll("#act-materials-rows .material-row");
  rows.forEach(row => {
    const qty = parseFloat(row.querySelector(".material-qty").value) || 0;
    const unit = parseFloat(row.querySelector(".material-unit-cost").value) || 0;
    totalCost += qty * unit;
  });

  const profit = rev - totalCost;

  const costEl = document.getElementById("act-cost-display");
  const profitEl = document.getElementById("act-profit-display");

  if (costEl) costEl.value = "$" + totalCost.toLocaleString('pt-BR');
  if (profitEl) {
    profitEl.value = "$" + profit.toLocaleString('pt-BR');
    if (profit >= 0) {
      profitEl.style.color = "#4CAF50";
    } else {
      profitEl.style.color = "#F44336";
    }
  }
}

window.renderActions = function () {
  const tableBody = document.getElementById("actions-table-body");
  if (!tableBody) return;

  if (!state.actions) state.actions = [];

  const filterEl = document.getElementById("action-filter-status");
  const filterStatus = filterEl ? filterEl.value : "Active";

  // Update totals (only for active actions)
  let totalRevenue = 0;
  let totalCost = 0;
  let totalProfit = 0;

  state.actions.forEach(act => {
    if (act.status !== "Archived") {
      totalRevenue += act.revenue;
      totalCost += act.cost;
      totalProfit += act.profit;
    }
  });

  const profitEl = document.getElementById("actions-total-profit");
  const revEl = document.getElementById("actions-total-revenue");
  const countEl = document.getElementById("actions-total-count");

  if (profitEl) {
    profitEl.innerText = "$" + totalProfit.toLocaleString('pt-BR');
    profitEl.style.color = totalProfit >= 0 ? "#4CAF50" : "#F44336";
  }
  if (revEl) revEl.innerText = "$" + totalRevenue.toLocaleString('pt-BR');
  
  const activeCount = state.actions.filter(act => act.status !== "Archived").length;
  if (countEl) countEl.innerText = activeCount;

  // Filter actions based on status
  const filteredActions = state.actions.filter(act => {
    if (filterStatus === "Archived") {
      return act.status === "Archived";
    } else {
      return act.status !== "Archived";
    }
  });

  // Render table rows
  tableBody.innerHTML = "";
  if (filteredActions.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 30px;">
          <i class="fas fa-tasks" style="font-size: 2rem; margin-bottom: 10px; color: var(--border-color);"></i>
          <p>${filterStatus === 'Archived' ? 'Nenhuma ação arquivada.' : 'Nenhuma ação registrada no histórico.'}</p>
        </td>
      </tr>
    `;
    return;
  }

  // Sort actions by date descending
  const sortedActions = [...filteredActions].sort((a, b) => new Date(b.date) - new Date(a.date));

  sortedActions.forEach(act => {
    const row = document.createElement("tr");

    // Formatar data
    const dateFormatted = act.date ? act.date.split("-").reverse().join("/") : "N/A";

    // List materials details
    let materialsText = "";
    if (act.materials && act.materials.length > 0) {
      materialsText = act.materials.map(m => `${m.quantity}x ${m.name}`).join(", ");
    } else {
      materialsText = "Nenhum material";
    }

    let actionButtons = "";
    if (filterStatus === "Archived") {
      actionButtons = `
        <button class="btn btn-secondary btn-sm" onclick="viewAction('${act.id}')" style="padding: 4px 8px; font-size: 0.7rem; background: #37474f; border-color: #546e7a; color: #90caf9; cursor: pointer;" title="Visualizar Detalhes">
          <i class="fas fa-eye"></i>
        </button>
        <button class="btn btn-secondary btn-sm" onclick="editAction('${act.id}')" style="padding: 4px 8px; font-size: 0.7rem; background: var(--accent-color); border-color: var(--accent-color-hover); color: #fff; cursor: pointer;" title="Editar Ação">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn btn-secondary btn-sm" onclick="restoreAction('${act.id}')" style="padding: 4px 8px; font-size: 0.7rem; background: #00897b; border-color: #00796b; color: #fff; cursor: pointer;" title="Restaurar Ação">
          <i class="fas fa-undo"></i>
        </button>
        <button class="btn btn-secondary btn-sm" onclick="deleteAction('${act.id}')" style="padding: 4px 8px; font-size: 0.7rem; background: #c62828; border-color: #b71c1c; color: #fff; cursor: pointer;" title="Excluir Registro Definitivamente">
          <i class="fas fa-trash-alt"></i>
        </button>
      `;
    } else {
      actionButtons = `
        <button class="btn btn-secondary btn-sm" onclick="viewAction('${act.id}')" style="padding: 4px 8px; font-size: 0.7rem; background: #37474f; border-color: #546e7a; color: #90caf9; cursor: pointer;" title="Visualizar Detalhes">
          <i class="fas fa-eye"></i>
        </button>
        <button class="btn btn-secondary btn-sm" onclick="editAction('${act.id}')" style="padding: 4px 8px; font-size: 0.7rem; background: var(--accent-color); border-color: var(--accent-color-hover); color: #fff; cursor: pointer;" title="Editar Ação">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn btn-secondary btn-sm" onclick="archiveAction('${act.id}')" style="padding: 4px 8px; font-size: 0.7rem; background: #e65100; border-color: #ef6c00; color: #fff; cursor: pointer;" title="Arquivar Ação">
          <i class="fas fa-archive"></i>
        </button>
      `;
    }

    row.innerHTML = `
      <td>${dateFormatted}</td>
      <td><strong>${act.type}</strong></td>
      <td style="color: #F44336; font-family: monospace;" title="${materialsText}">
        -$${act.cost.toLocaleString('pt-BR')}
        <span style="display: block; font-size: 0.65rem; color: var(--text-muted); font-weight: normal; max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${materialsText}</span>
      </td>
      <td style="color: #4CAF50; font-family: monospace;">+$${act.revenue.toLocaleString('pt-BR')}</td>
      <td style="font-weight: 700; color: ${act.profit >= 0 ? '#4CAF50' : '#F44336'}; font-family: monospace;">$${act.profit.toLocaleString('pt-BR')}</td>
      <td>
        <div style="display: flex; flex-wrap: wrap; gap: 4px;">
          ${act.participants.map(p => `<span class="badge" style="background: rgba(255,255,255,0.08); border: 1px solid var(--border-color); font-size: 0.65rem; padding: 2px 6px;">${p}</span>`).join("")}
        </div>
      </td>
      <td>
        <div style="display: flex; gap: 4px;">
          ${actionButtons}
        </div>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

window.deleteAction = async function (id) {
  if (confirm("Tem certeza que deseja excluir esta ação permanentemente do histórico? Isso não pode ser desfeito.")) {
    const actionIndex = state.actions.findIndex(act => act.id === id);
    if (actionIndex !== -1) {
      const act = state.actions[actionIndex];
      state.actions.splice(actionIndex, 1);
      try {
        await supabaseClient.from("actions").delete().eq("id", id);
      } catch (err) {
        console.error("Erro ao deletar ação no Supabase:", err);
      }
      logActivity("Excluiu ação de campo definitivamente: " + act.type + " de " + act.date, "Operação");
      saveState("activities");
      renderActions();
      showToast("Ação excluída com sucesso", "success");
    }
  }
}

window.viewAction = function (id) {
  const act = state.actions.find(a => a.id === id);
  if (!act) return;

  const dateFormatted = act.date ? act.date.split("-").reverse().join("/") : "N/A";
  const profitColor = act.profit >= 0 ? "#4CAF50" : "#F44336";

  // Materials list
  let materialsHTML = "";
  if (act.materials && act.materials.length > 0) {
    materialsHTML = act.materials.map(m => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 10px; background: rgba(255,255,255,0.04); border-radius: 4px; margin-bottom: 4px;">
        <span style="font-size: 0.8rem;">${m.name}</span>
        <span style="font-size: 0.75rem; color: var(--text-muted);">${m.quantity}x</span>
        <span style="font-size: 0.8rem; color: #F44336; font-family: monospace;">-$${(m.quantity * m.unitCost).toLocaleString('pt-BR')}</span>
      </div>`).join("");
  } else {
    materialsHTML = `<p style="color: var(--text-muted); font-size: 0.8rem; margin: 0;">Nenhum material registrado.</p>`;
  }

  // Participants
  const participantsHTML = act.participants.map(p =>
    `<span class="badge" style="background: rgba(255,255,255,0.08); border: 1px solid var(--border-color); font-size: 0.75rem; padding: 4px 10px; border-radius: 20px;">${p}</span>`
  ).join("");

  document.getElementById("view-act-id").innerText = act.id;
  document.getElementById("view-act-date").innerText = dateFormatted;
  document.getElementById("view-act-type").innerText = act.type;
  document.getElementById("view-act-revenue").innerText = "$" + act.revenue.toLocaleString('pt-BR');
  document.getElementById("view-act-cost").innerText = "-$" + act.cost.toLocaleString('pt-BR');
  document.getElementById("view-act-profit").innerText = "$" + act.profit.toLocaleString('pt-BR');
  document.getElementById("view-act-profit").style.color = profitColor;
  document.getElementById("view-act-materials").innerHTML = materialsHTML;
  document.getElementById("view-act-participants").innerHTML = participantsHTML;

  // Render Action Media Section
  const mediaSection = document.getElementById("view-act-media-section");
  const mediaGrid = document.getElementById("view-act-media-grid");
  if (mediaSection && mediaGrid) {
    mediaGrid.innerHTML = "";
    if (act.media && act.media.length > 0) {
      mediaSection.style.display = "block";
      act.media.forEach(m => {
        const item = document.createElement("div");
        if (m.type === "image") {
          item.innerHTML = `
            <div style="position: relative; border-radius: 6px; overflow: hidden; border: 1px solid var(--border-color); background: rgba(0,0,0,0.2);">
              <img src="${m.url}" style="width: 100%; display: block; cursor: pointer; transition: transform 0.2s;" onclick="window.openMediaLightbox('${m.url}', 'image')" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
              <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.6); padding: 4px; font-size: 0.6rem; color: var(--text-muted); text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${m.name || 'Imagem'}</div>
            </div>
          `;
        } else {
          item.innerHTML = `
            <div style="border-radius: 6px; overflow: hidden; border: 1px solid var(--border-color); background: rgba(0,0,0,0.2); padding: 6px; display: flex; flex-direction: column; gap: 4px;">
              <div style="font-size: 0.65rem; color: var(--text-muted); display: flex; align-items: center; gap: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                <i class="fas fa-video" style="color: #90caf9;"></i> ${m.name}
              </div>
              <div style="cursor: pointer; position: relative;" onclick="window.openMediaLightbox('${m.url}', 'video')">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: #fff; z-index: 10;"><i class="fas fa-play-circle"></i></div>
                ${window.getVideoEmbedHTML(m.url)}
              </div>
            </div>
          `;
        }
        mediaGrid.appendChild(item);
      });
    } else {
      mediaSection.style.display = "none";
    }
  }

  openModal("modal-view-action");
}

window.editAction = function (id) {
  const act = state.actions.find(a => a.id === id);
  if (!act) return;

  editingActionId = id;
  
  // Load Action Media
  actionMediaList = act.media ? [...act.media] : [];
  window.renderActionMediaList();

  // Set modal texts
  const title = document.getElementById("modal-action-title");
  const submitBtn = document.getElementById("btn-submit-action");
  if (title) title.innerHTML = `<i class="fas fa-edit"></i> Editar Ação Realizada`;
  if (submitBtn) submitBtn.innerText = "Salvar Alterações";

  // Fill inputs
  document.getElementById("act-type").value = act.type;
  document.getElementById("act-revenue").value = act.revenue;
  document.getElementById("act-date").value = act.date;

  // Load materials rows
  const rowsContainer = document.getElementById("act-materials-rows");
  if (rowsContainer) {
    rowsContainer.innerHTML = "";
    if (act.materials && act.materials.length > 0) {
      act.materials.forEach(m => {
        addActionMaterialRow(m.name, m.quantity, m.unitCost);
      });
    } else {
      addActionMaterialRow("", 1, 0);
    }
  }

  // Load participants checkboxes (display active members + checked current participants)
  const container = document.getElementById("act-participants-checkboxes");
  if (container) {
    container.innerHTML = "";

    const activeNames = state.members.filter(m => m.status === "Active").map(m => m.fullName);
    const allNames = Array.from(new Set([...activeNames, ...act.participants]));

    if (allNames.length === 0) {
      container.innerHTML = "<p style='color: var(--text-muted); font-size: 0.75rem; margin: 0;'>Nenhum membro participante disponível.</p>";
    } else {
      allNames.forEach(name => {
        const isChecked = act.participants.includes(name);
        const label = document.createElement("label");
        label.style.display = "flex";
        label.style.alignItems = "center";
        label.style.gap = "8px";
        label.style.fontSize = "0.75rem";
        label.style.cursor = "pointer";
        label.style.color = "var(--text-primary)";
        label.innerHTML = `<input type="checkbox" name="act-member" value="${name}" ${isChecked ? "checked" : ""}> ${name}`;
        container.appendChild(label);
      });
    }
  }

  // Update profit numbers
  calcActionModalProfit();

  openModal("modal-new-action");
}

// Bind New Action button and modal open
document.addEventListener("DOMContentLoaded", () => {
  const btnOpenAction = document.getElementById("btn-open-new-action");
  if (btnOpenAction) {
    btnOpenAction.addEventListener("click", () => {
      editingActionId = null;

      actionMediaList = [];
      window.renderActionMediaList();

      // Reset modal texts
      const title = document.getElementById("modal-action-title");
      const submitBtn = document.getElementById("btn-submit-action");
      if (title) title.innerHTML = `<i class="fas fa-tasks"></i> Registrar Ação Realizada`;
      if (submitBtn) submitBtn.innerText = "Registrar Ação";

      // Limpar campos
      document.getElementById("form-new-action").reset();
      document.getElementById("act-date").value = new Date().toISOString().slice(0, 10);
      document.getElementById("act-profit-display").value = "$0";
      document.getElementById("act-profit-display").style.color = "#4CAF50";
      document.getElementById("act-cost-display").value = "$0";

      // Limpar e preencher linhas de materiais com uma linha inicial padrão
      const rowsContainer = document.getElementById("act-materials-rows");
      if (rowsContainer) {
        rowsContainer.innerHTML = "";
        addActionMaterialRow("", 1, 0);
      }

      // Carregar lista de participantes (apenas membros ativos)
      const container = document.getElementById("act-participants-checkboxes");
      if (container) {
        container.innerHTML = "";
        const activeMembers = state.members.filter(m => m.status === "Active");
        if (activeMembers.length === 0) {
          container.innerHTML = "<p style='color: var(--text-muted); font-size: 0.75rem; margin: 0;'>Nenhum membro ativo cadastrado no sistema.</p>";
        } else {
          activeMembers.forEach(m => {
            const label = document.createElement("label");
            label.style.display = "flex";
            label.style.alignItems = "center";
            label.style.gap = "8px";
            label.style.fontSize = "0.75rem";
            label.style.cursor = "pointer";
            label.style.color = "var(--text-primary)";
            label.innerHTML = `<input type="checkbox" name="act-member" value="${m.fullName}"> ${m.fullName}`;
            container.appendChild(label);
          });
        }
      }

      openModal("modal-new-action");
    });
  }

  // Bind actions status filter change
  const actionFilter = document.getElementById("action-filter-status");
  if (actionFilter) {
    actionFilter.addEventListener("change", () => {
      window.renderActions();
    });
  }
});

// ==================== GERENCIAMENTO DE MÍDIAS E ARQUIVAMENTO DE AÇÕES ====================
let actionMediaList = [];

window.getVideoEmbedHTML = function (url) {
  // YouTube RegExp
  const ytRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const ytMatch = url.match(ytRegExp);
  if (ytMatch && ytMatch[2].length === 11) {
    const videoId = ytMatch[2];
    return `<iframe width="100%" height="220" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px; border: 1px solid var(--border-color); display: block;"></iframe>`;
  }

  // Twitch Video RegExp
  const twitchRegExp = /twitch\.tv\/videos\/(\d+)/;
  const twitchMatch = url.match(twitchRegExp);
  if (twitchMatch) {
    const videoId = twitchMatch[1];
    return `<iframe src="https://player.twitch.tv/?video=${videoId}&parent=${window.location.hostname}&autoplay=false" frameborder="0" allowfullscreen="true" scrolling="no" height="220" width="100%" style="border-radius: 8px; border: 1px solid var(--border-color); display: block;"></iframe>`;
  }

  // Generic HTML5 Video Player
  return `<video src="${url}" controls style="width: 100%; max-height: 220px; border-radius: 8px; border: 1px solid var(--border-color); background: #000; display: block;"></video>`;
};

window.openMediaLightbox = function (url, type) {
  const lightbox = document.getElementById("modal-media-lightbox");
  const img = document.getElementById("lightbox-img");
  const videoContainer = document.getElementById("lightbox-video-container");
  
  if (!lightbox || !img || !videoContainer) return;
  
  if (type === 'image') {
    img.src = url;
    img.style.display = "block";
    videoContainer.style.display = "none";
    videoContainer.innerHTML = "";
  } else if (type === 'video') {
    img.style.display = "none";
    img.src = "";
    videoContainer.style.display = "block";
    videoContainer.innerHTML = window.getVideoEmbedHTML(url);
  }
  
  openModal("modal-media-lightbox");
};

window.addActionMediaLink = function () {
  const urlEl = document.getElementById("act-media-url");
  if (!urlEl) return;
  const url = urlEl.value.trim();
  if (!url) return;
  
  let type = "image";
  if (url.includes("youtube.com") || url.includes("youtu.be") || url.includes("twitch.tv") || url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg")) {
    type = "video";
  }
  
  let friendlyName = url;
  if (url.length > 25) {
    friendlyName = url.substring(0, 12) + "..." + url.substring(url.length - 10);
  }
  
  actionMediaList.push({ type, url, name: friendlyName });
  urlEl.value = "";
  window.renderActionMediaList();
};

window.uploadActionMediaFile = function (event) {
  const file = event.target.files[0];
  if (!file) return;
  
  if (file.size > 2.5 * 1024 * 1024) {
    showToast("Arquivo muito grande. O limite máximo recomendado é 2.5MB.", "error");
    if (file.size > 4 * 1024 * 1024) {
      showToast("Bloqueado: Arquivos maiores que 4MB excedem a cota.", "error");
      return;
    }
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const type = file.type.startsWith("image/") ? "image" : "video";
    actionMediaList.push({ type, url: e.target.result, name: file.name });
    window.renderActionMediaList();
    showToast("Arquivo anexado com sucesso", "success");
  };
  reader.readAsDataURL(file);
  event.target.value = "";
};

window.renderActionMediaList = function () {
  const container = document.getElementById("act-media-list");
  if (!container) return;
  
  container.innerHTML = "";
  if (actionMediaList.length === 0) {
    container.innerHTML = `<div style="grid-column: span 4; text-align: center; color: var(--text-muted); font-size: 0.7rem; padding: 10px 0;">Nenhuma mídia adicionada</div>`;
    checkMediaStorageUsage();
    return;
  }
  
  actionMediaList.forEach((m, index) => {
    const card = document.createElement("div");
    card.style.position = "relative";
    card.style.borderRadius = "4px";
    card.style.overflow = "hidden";
    card.style.border = "1px solid var(--border-color)";
    card.style.background = "rgba(0,0,0,0.3)";
    card.style.aspectRatio = "1/1";
    card.style.display = "flex";
    card.style.alignItems = "center";
    card.style.justifyContent = "center";
    
    if (m.type === "image") {
      card.innerHTML = `
        <img src="${m.url}" style="width: 100%; height: 100%; object-fit: cover;">
        <button type="button" onclick="window.removeActionMedia(${index})" style="position: absolute; top: 2px; right: 2px; background: rgba(0,0,0,0.6); color: #ff5252; border: none; border-radius: 50%; width: 16px; height: 16px; font-size: 0.6rem; cursor: pointer; display: flex; align-items: center; justify-content: center;"><i class="fas fa-times"></i></button>
      `;
    } else {
      card.innerHTML = `
        <div style="font-size: 1.2rem; color: #90caf9;"><i class="fas fa-video"></i></div>
        <span style="position: absolute; bottom: 2px; left: 2px; right: 2px; font-size: 0.5rem; color: var(--text-muted); text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${m.name}</span>
        <button type="button" onclick="window.removeActionMedia(${index})" style="position: absolute; top: 2px; right: 2px; background: rgba(0,0,0,0.6); color: #ff5252; border: none; border-radius: 50%; width: 16px; height: 16px; font-size: 0.6rem; cursor: pointer; display: flex; align-items: center; justify-content: center;"><i class="fas fa-times"></i></button>
      `;
    }
    container.appendChild(card);
  });
  
  checkMediaStorageUsage();
};

window.removeActionMedia = function (index) {
  actionMediaList.splice(index, 1);
  window.renderActionMediaList();
};

function checkMediaStorageUsage() {
  let totalLength = 0;
  actionMediaList.forEach(m => {
    if (m.url.startsWith("data:")) {
      totalLength += m.url.length;
    }
  });
  
  const warningEl = document.getElementById("act-media-storage-warning");
  if (warningEl) {
    if (totalLength > 1 * 1024 * 1024) {
      warningEl.style.display = "block";
      warningEl.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Atenção: Mídias locais ocupam ${(totalLength / (1024 * 1024)).toFixed(1)}MB de dados (limite 5MB). Dê preferência a links.`;
    } else {
      warningEl.style.display = "none";
    }
  }
}

window.archiveAction = function (id) {
  const act = state.actions.find(a => a.id === id);
  if (!act) return;
  act.status = "Archived";
  logActivity(`Arquivou ação de campo: ${act.type} (${act.date})`, "Operação");
  saveState();
  window.renderActions();
  showToast("Ação arquivada com sucesso", "success");
};

window.restoreAction = function (id) {
  const act = state.actions.find(a => a.id === id);
  if (!act) return;
  act.status = "Active";
  logActivity(`Restaurou ação de campo: ${act.type} (${act.date})`, "Operação");
  saveState();
  window.renderActions();
  showToast("Ação restaurada com sucesso", "success");
};

// Bind operations status filter change
document.addEventListener("DOMContentLoaded", () => {
  const operationFilter = document.getElementById("operation-filter-status");
  if (operationFilter) {
    operationFilter.addEventListener("change", () => {
      window.renderOperations();
    });
  }

  // Bind Iniciar Operação button specifically
  const btnNewOp = document.getElementById("btn-open-new-operation");
  if (btnNewOp) {
    btnNewOp.addEventListener("click", () => {
      editingOperationId = null;
      opMediaList = [];
      window.renderOpMediaList();
      
      // Reset form
      const form = document.getElementById("form-new-operation");
      if (form) form.reset();
      
      // Reset photo preview
      const preview = document.getElementById("o-photo-preview");
      if (preview) {
        preview.src = "";
        preview.style.display = "none";
      }
      const box = document.getElementById("o-photo-upload-box");
      if (box) {
        const icon = box.querySelector(".photo-upload-icon");
        const text = box.querySelector(".photo-upload-text");
        if (icon) icon.style.display = "block";
        if (text) text.style.display = "block";
      }
      
      // Clear temp photo state
      tempUploadedImage["new-operation"] = null;

      // Reset modal text
      const modalTitle = document.querySelector("#modal-new-operation .modal-title");
      if (modalTitle) modalTitle.innerHTML = `<i class="fas fa-crosshairs"></i> Planejar Operação Tática`;
      const submitBtn = document.querySelector("#form-new-operation button[type='submit']");
      if (submitBtn) submitBtn.innerText = "Lançar Missão";

      openModal("modal-new-operation");
    });
  }
});

// ==================== OPERAÇÕES TÁTICAS - EXIBIÇÃO, EDIÇÃO E MÍDIAS ====================
let editingOperationId = null;
let opMediaList = [];

window.addOpMediaLink = function () {
  const urlEl = document.getElementById("op-media-url");
  if (!urlEl) return;
  const url = urlEl.value.trim();
  if (!url) return;
  
  let type = "image";
  if (url.includes("youtube.com") || url.includes("youtu.be") || url.includes("twitch.tv") || url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg")) {
    type = "video";
  }
  
  let friendlyName = url;
  if (url.length > 25) {
    friendlyName = url.substring(0, 12) + "..." + url.substring(url.length - 10);
  }
  
  opMediaList.push({ type, url, name: friendlyName });
  urlEl.value = "";
  window.renderOpMediaList();
};

window.uploadOpMediaFile = function (event) {
  const file = event.target.files[0];
  if (!file) return;
  
  if (file.size > 2.5 * 1024 * 1024) {
    showToast("Arquivo muito grande. O limite máximo recomendado é 2.5MB.", "error");
    if (file.size > 4 * 1024 * 1024) {
      showToast("Bloqueado: Arquivos maiores que 4MB excedem a cota.", "error");
      return;
    }
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const type = file.type.startsWith("image/") ? "image" : "video";
    opMediaList.push({ type, url: e.target.result, name: file.name });
    window.renderOpMediaList();
    showToast("Arquivo anexado com sucesso", "success");
  };
  reader.readAsDataURL(file);
  event.target.value = "";
};

window.renderOpMediaList = function () {
  const container = document.getElementById("op-media-list");
  if (!container) return;
  
  container.innerHTML = "";
  if (opMediaList.length === 0) {
    container.innerHTML = `<div style="grid-column: span 4; text-align: center; color: var(--text-muted); font-size: 0.7rem; padding: 10px 0;">Nenhuma mídia adicionada</div>`;
    checkOpMediaStorageUsage();
    return;
  }
  
  opMediaList.forEach((m, index) => {
    const card = document.createElement("div");
    card.style.position = "relative";
    card.style.borderRadius = "4px";
    card.style.overflow = "hidden";
    card.style.border = "1px solid var(--border-color)";
    card.style.background = "rgba(0,0,0,0.3)";
    card.style.aspectRatio = "1/1";
    card.style.display = "flex";
    card.style.alignItems = "center";
    card.style.justifyContent = "center";
    
    if (m.type === "image") {
      card.innerHTML = `
        <img src="${m.url}" style="width: 100%; height: 100%; object-fit: cover;">
        <button type="button" onclick="window.removeOpMedia(${index})" style="position: absolute; top: 2px; right: 2px; background: rgba(0,0,0,0.6); color: #ff5252; border: none; border-radius: 50%; width: 16px; height: 16px; font-size: 0.6rem; cursor: pointer; display: flex; align-items: center; justify-content: center;"><i class="fas fa-times"></i></button>
      `;
    } else {
      card.innerHTML = `
        <div style="font-size: 1.2rem; color: #90caf9;"><i class="fas fa-video"></i></div>
        <span style="position: absolute; bottom: 2px; left: 2px; right: 2px; font-size: 0.5rem; color: var(--text-muted); text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${m.name}</span>
        <button type="button" onclick="window.removeOpMedia(${index})" style="position: absolute; top: 2px; right: 2px; background: rgba(0,0,0,0.6); color: #ff5252; border: none; border-radius: 50%; width: 16px; height: 16px; font-size: 0.6rem; cursor: pointer; display: flex; align-items: center; justify-content: center;"><i class="fas fa-times"></i></button>
      `;
    }
    container.appendChild(card);
  });
  
  checkOpMediaStorageUsage();
};

window.removeOpMedia = function (index) {
  opMediaList.splice(index, 1);
  window.renderOpMediaList();
};

function checkOpMediaStorageUsage() {
  let totalLength = 0;
  opMediaList.forEach(m => {
    if (m.url.startsWith("data:")) {
      totalLength += m.url.length;
    }
  });
  
  const warningEl = document.getElementById("op-media-storage-warning");
  if (warningEl) {
    if (totalLength > 1 * 1024 * 1024) {
      warningEl.style.display = "block";
      warningEl.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Atenção: Mídias locais ocupam ${(totalLength / (1024 * 1024)).toFixed(1)}MB de dados (limite 5MB). Dê preferência a links.`;
    } else {
      warningEl.style.display = "none";
    }
  }
}

window.viewOperation = function (id) {
  const op = state.operations.find(o => o.id === id);
  if (!op) return;

  const threatLabel = threatTranslations[op.threatLevel] || op.threatLevel;
  const statusLabel = op.status === 'Active' ? 'Ativa' : op.status === 'Completed' ? 'Concluída' : op.status === 'Planning' ? 'Planejamento' : op.status === 'Cancelled' ? 'Cancelada' : op.status;

  // Set text
  document.getElementById("view-op-id").innerText = op.id;
  
  const tb = document.getElementById("view-op-threat-badge");
  if (tb) {
    tb.innerText = threatLabel;
    tb.className = `threat-badge threat-${op.threatLevel === 'Baixo' ? 'low' : op.threatLevel === 'Médio' ? 'medium' : op.threatLevel === 'Alto' ? 'high' : 'critical'}`;
  }

  document.getElementById("view-op-title").innerText = op.title;
  document.getElementById("view-op-target-name").innerText = op.targetName;
  document.getElementById("view-op-target-alias").innerText = op.targetAlias ? `"${op.targetAlias}" | Idade: ${op.targetAge}` : `Sem vulgo | Idade: ${op.targetAge}`;
  document.getElementById("view-op-target-phone").innerText = op.targetPhone ? `Contato: ${op.targetPhone}` : "Sem contato cadastrado";
  document.getElementById("view-op-target-location").innerText = op.targetLocation || "Desconhecido";
  
  const statusEl = document.getElementById("view-op-status");
  if (statusEl) {
    statusEl.innerText = statusLabel;
    statusEl.className = op.status === 'Active' ? 'badge-active' : op.status === 'Completed' ? 'badge-active' : op.status === 'Planning' ? 'badge-pending' : 'badge-inactive';
    statusEl.style.display = "inline-block";
    statusEl.style.padding = "2px 8px";
    statusEl.style.borderRadius = "4px";
    statusEl.style.color = "#fff";
    statusEl.style.background = op.status === 'Active' || op.status === 'Completed' ? '#4CAF50' : op.status === 'Planning' ? '#ff9800' : '#F44336';
  }

  document.getElementById("view-op-reason").innerText = op.reason;
  document.getElementById("view-op-members").innerText = op.assignedTeam && op.assignedTeam.length > 0 ? op.assignedTeam.join(", ") : "Nenhum membro designado.";
  document.getElementById("view-op-vehicles").innerText = op.assignedVehicles && op.assignedVehicles.length > 0 ? op.assignedVehicles.join(", ") : "Nenhum veículo designado.";
  document.getElementById("view-op-equipment").innerText = op.assignedEquipment && op.assignedEquipment.length > 0 ? op.assignedEquipment.join(", ") : "Nenhum equipamento designado.";

  const targetPhoto = document.getElementById("view-op-target-photo");
  if (targetPhoto) {
    targetPhoto.src = op.targetPhoto || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100";
  }

  // Timeline
  const timelineEl = document.getElementById("view-op-timeline");
  if (timelineEl) {
    timelineEl.innerHTML = op.timeline.map(t => `<div style="margin-bottom: 4px;"><strong>${t.time}</strong> - ${t.text}</div>`).join("");
  }

  // Render Operation Media Section
  const mediaSection = document.getElementById("view-op-media-section");
  const mediaGrid = document.getElementById("view-op-media-grid");
  if (mediaSection && mediaGrid) {
    mediaGrid.innerHTML = "";
    if (op.media && op.media.length > 0) {
      mediaSection.style.display = "block";
      op.media.forEach(m => {
        const item = document.createElement("div");
        if (m.type === "image") {
          item.innerHTML = `
            <div style="position: relative; border-radius: 6px; overflow: hidden; border: 1px solid var(--border-color); background: rgba(0,0,0,0.2);">
              <img src="${m.url}" style="width: 100%; display: block; cursor: pointer; transition: transform 0.2s;" onclick="window.openMediaLightbox('${m.url}', 'image')" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
              <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.6); padding: 4px; font-size: 0.6rem; color: var(--text-muted); text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${m.name || 'Imagem'}</div>
            </div>
          `;
        } else {
          item.innerHTML = `
            <div style="border-radius: 6px; overflow: hidden; border: 1px solid var(--border-color); background: rgba(0,0,0,0.2); padding: 6px; display: flex; flex-direction: column; gap: 4px;">
              <div style="font-size: 0.65rem; color: var(--text-muted); display: flex; align-items: center; gap: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                <i class="fas fa-video" style="color: #90caf9;"></i> ${m.name}
              </div>
              <div style="cursor: pointer; position: relative;" onclick="window.openMediaLightbox('${m.url}', 'video')">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: #fff; z-index: 10;"><i class="fas fa-play-circle"></i></div>
                ${window.getVideoEmbedHTML(m.url)}
              </div>
            </div>
          `;
        }
        mediaGrid.appendChild(item);
      });
    } else {
      mediaSection.style.display = "none";
    }
  }

  openModal("modal-view-operation");
};

window.editOperation = function (id) {
  const op = state.operations.find(o => o.id === id);
  if (!op) return;

  editingOperationId = id;
  
  // Load Media
  opMediaList = op.media ? [...op.media] : [];
  window.renderOpMediaList();

  // Set modal texts
  const modalTitle = document.querySelector("#modal-new-operation .modal-title");
  if (modalTitle) modalTitle.innerHTML = `<i class="fas fa-edit"></i> Editar Operação Tática`;
  const submitBtn = document.querySelector("#form-new-operation button[type='submit']");
  if (submitBtn) submitBtn.innerText = "Salvar Alterações";

  // Fill inputs
  document.getElementById("o-target-name").value = op.targetName;
  document.getElementById("o-target-alias").value = op.targetAlias || "";
  document.getElementById("o-target-phone").value = op.targetPhone || "";
  document.getElementById("o-target-age").value = op.targetAge;
  document.getElementById("o-target-location").value = op.targetLocation || "";
  document.getElementById("o-title").value = op.title;
  document.getElementById("o-threat-level").value = op.threatLevel;
  document.getElementById("o-reason").value = op.reason;
  document.getElementById("o-members").value = op.assignedTeam ? op.assignedTeam.join(", ") : "";
  document.getElementById("o-vehicles").value = op.assignedVehicles ? op.assignedVehicles.join(", ") : "";
  document.getElementById("o-equipment").value = op.assignedEquipment ? op.assignedEquipment.join(", ") : "";

  // Target photo preview
  const preview = document.getElementById("o-photo-preview");
  if (preview) {
    preview.src = op.targetPhoto || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100";
    preview.style.display = "block";
  }
  const box = document.getElementById("o-photo-upload-box");
  if (box) {
    const icon = box.querySelector(".photo-upload-icon");
    const text = box.querySelector(".photo-upload-text");
    if (icon) icon.style.display = "none";
    if (text) text.style.display = "none";
  }

  // Reset temp photo upload state
  tempUploadedImage["new-operation"] = op.targetPhoto;

  openModal("modal-new-operation");
};

window.restoreOperation = function (id) {
  const op = state.operations.find(o => o.id === id);
  if (!op) return;
  op.status = "Active";
  const now = new Date();
  const timeStr = now.toISOString().slice(0, 10) + " " + now.toTimeString().slice(0, 5);
  op.timeline.unshift({ time: timeStr, text: "Operação restaurada e reativada." });
  logActivity(`Restaurou a Operação: ${op.title}`, "Operação");
  saveState();
  renderOperations();
  showToast(`Operação ${op.title} restaurada!`, "success");
};

window.deleteOperation = async function (id) {
  if (confirm("Tem certeza que deseja excluir esta operação permanentemente do histórico? Isso não pode ser desfeito.")) {
    const opIndex = state.operations.findIndex(o => o.id === id);
    if (opIndex !== -1) {
      const op = state.operations[opIndex];
      state.operations.splice(opIndex, 1);
      try {
        await supabaseClient.from("operations").delete().eq("id", id);
      } catch (err) {
        console.error("Erro ao excluir operação no Supabase:", err);
      }
      logActivity(`Excluiu permanentemente a Operação: ${op.title}`, "Operação");
      saveState("activities");
      renderOperations();
      showToast("Operação excluída com sucesso", "success");
    }
  }
};
