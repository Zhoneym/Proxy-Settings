// Localization dictionary with emojis and Arabic added
const locales = {
  en: {
    title: "🌐 Proxy Settings 🔧",
    language_label: "🌏 Language",
    mode_label: "⚙️ Mode",
    mode_proxy_all: "🌍 Global Proxy",
    mode_direct_all: "🚫 Global Direct",
    mode_rules: "📜 Rules Mode (Regex supported)",
    proxy_host_label: "🖥️ Proxy Host",
    proxy_host_placeholder: "Proxy Host (e.g., 1.2.3.4)",
    proxy_port_label: "🔢 Proxy Port",
    proxy_port_placeholder: "Proxy Port (e.g., 8080)",
    proxy_type_label: "🛡️ Proxy Type",
    proxy_list_label: "🔗 Proxy List",
    proxy_list_placeholder: "Use proxy for these domains or regex",
    direct_list_label: "🔓 Direct List",
    direct_list_placeholder: "Direct connect for these domains or regex",
    apply: "🚀 Apply",
    applied: "✅ Proxy settings applied.",
    add_proxy_rule: "➕ Add Proxy Rule",
    add_direct_rule: "➕ Add Direct Rule",
    delete: "❌ Delete",
    export: "📤 Export",
    import: "📥 Import"
  },
  zh_CN: {
    title: "🌐 代理设置 🔧",
    language_label: "🌏 语言",
    mode_label: "⚙️ 模式",
    mode_proxy_all: "🌍 全局代理",
    mode_direct_all: "🚫 全局直连",
    mode_rules: "📜 规则模式（支持正则表达式）",
    proxy_host_label: "🖥️ 代理地址",
    proxy_host_placeholder: "代理地址 (例如 1.2.3.4)",
    proxy_port_label: "🔢 代理端口",
    proxy_port_placeholder: "代理端口 (例如 8080)",
    proxy_type_label: "🛡️ 代理类型",
    proxy_list_label: "🔗 代理列表",
    proxy_list_placeholder: "对这些域名或正则使用代理",
    direct_list_label: "🔓 直连列表",
    direct_list_placeholder: "对这些域名或正则直连",
    apply: "🚀 应用",
    applied: "✅ 代理设置已生效。",
    add_proxy_rule: "➕ 添加代理规则",
    add_direct_rule: "➕ 添加直连规则",
    delete: "❌ 删除",
    export: "📤 导出",
    import: "📥 导入"
  },
  zh_TW: {
    title: "🌐 代理設定 🔧",
    language_label: "🌏 語言",
    mode_label: "⚙️ 模式",
    mode_proxy_all: "🌍 全域代理",
    mode_direct_all: "🚫 全域直連",
    mode_rules: "📜 規則模式（支援正則）",
    proxy_host_label: "🖥️ 代理位址",
    proxy_host_placeholder: "代理位址 (例如 1.2.3.4)",
    proxy_port_label: "🔢 代理埠號",
    proxy_port_placeholder: "代理埠號 (例如 8080)",
    proxy_type_label: "🛡️ 代理類型",
    proxy_list_label: "🔗 代理列表",
    proxy_list_placeholder: "對這些域名或正則使用代理",
    direct_list_label: "🔓 直連列表",
    direct_list_placeholder: "對這些域名或正則直連",
    apply: "🚀 套用",
    applied: "✅ 代理設定已生效。",
    add_proxy_rule: "➕ 新增代理規則",
    add_direct_rule: "➕ 新增直連規則",
    delete: "❌ 刪除",
    export: "📤 匯出",
    import: "📥 匯入"
  },
  ja: {
    title: "🌐 プロキシ設定 🔧",
    language_label: "🌏 言語",
    mode_label: "⚙️ モード",
    mode_proxy_all: "🌍 全体プロキシ",
    mode_direct_all: "🚫 全体直通",
    mode_rules: "📜 ルールモード（正規表現対応）",
    proxy_host_label: "🖥️ プロキシホスト",
    proxy_host_placeholder: "プロキシホスト (例: 1.2.3.4)",
    proxy_port_label: "🔢 プロキシポート",
    proxy_port_placeholder: "プロキシポート (例: 8080)",
    proxy_type_label: "🛡️ プロキシタイプ",
    proxy_list_label: "🔗 プロキシリスト",
    proxy_list_placeholder: "ドメインまたは正規表現にプロキシを使用",
    direct_list_label: "🔓 直接接続リスト",
    direct_list_placeholder: "ドメインまたは正規表現に直接接続",
    apply: "🚀 適用",
    applied: "✅ プロキシ設定を適用しました。",
    add_proxy_rule: "➕ プロキシルールを追加",
    add_direct_rule: "➕ 直接接続ルールを追加",
    delete: "❌ 削除",
    export: "📤 エクスポート",
    import: "📥 インポート"
  },
  de: {
    title: "🌐 Proxy-Einstellungen 🔧",
    language_label: "🌏 Sprache",
    mode_label: "⚙️ Modus",
    mode_proxy_all: "🌍 Globaler Proxy",
    mode_direct_all: "🚫 Global Direkt",
    mode_rules: "📜 Regelmodus (Regex unterstützt)",
    proxy_host_label: "🖥️ Proxy-Host",
    proxy_host_placeholder: "Proxy-Host (z. B. 1.2.3.4)",
    proxy_port_label: "🔢 Proxy-Port",
    proxy_port_placeholder: "Proxy-Port (z. B. 8080)",
    proxy_type_label: "🛡️ Proxy-Typ",
    proxy_list_label: "🔗 Proxy-Liste",
    proxy_list_placeholder: "Proxy für diese Domains oder Regex verwenden",
    direct_list_label: "🔓 Direktverbindungsliste",
    direct_list_placeholder: "Direktverbindung für diese Domains oder Regex",
    apply: "🚀 Anwenden",
    applied: "✅ Proxy-Einstellungen angewendet.",
    add_proxy_rule: "➕ Proxy-Regel hinzufügen",
    add_direct_rule: "➕ Direktregel hinzufügen",
    delete: "❌ Löschen",
    export: "📤 Exportieren",
    import: "📥 Importieren"
  },
  fr: {
    title: "🌐 Paramètres Proxy 🔧",
    language_label: "🌏 Langue",
    mode_label: "⚙️ Mode",
    mode_proxy_all: "🌍 Proxy Global",
    mode_direct_all: "🚫 Connexion Directe Globale",
    mode_rules: "📜 Règles (Regex supporté)",
    proxy_host_label: "🖥️ Hôte Proxy",
    proxy_host_placeholder: "Hôte Proxy (ex: 1.2.3.4)",
    proxy_port_label: "🔢 Port Proxy",
    proxy_port_placeholder: "Port Proxy (ex: 8080)",
    proxy_type_label: "🛡️ Type de Proxy",
    proxy_list_label: "🔗 Liste Proxy",
    proxy_list_placeholder: "Utiliser proxy pour ces domaines ou regex",
    direct_list_label: "🔓 Liste Directe",
    direct_list_placeholder: "Connexion directe pour ces domaines ou regex",
    apply: "🚀 Appliquer",
    applied: "✅ Paramètres proxy appliqués.",
    add_proxy_rule: "➕ Ajouter règle proxy",
    add_direct_rule: "➕ Ajouter règle directe",
    delete: "❌ Supprimer",
    export: "📤 Exporter",
    import: "📥 Importer"
  },
  ar: {
    title: "🌐 إعدادات البروكسي 🔧",
    language_label: "🌏 اللغة",
    mode_label: "⚙️ الوضع",
    mode_proxy_all: "🌍 البروكسي العالمي",
    mode_direct_all: "🚫 الاتصال المباشر العالمي",
    mode_rules: "📜 القواعد (يدعم التعبيرات النمطية)",
    proxy_host_label: "🖥️ مضيف البروكسي",
    proxy_host_placeholder: "مضيف البروكسي (مثال: 1.2.3.4)",
    proxy_port_label: "🔢 منفذ البروكسي",
    proxy_port_placeholder: "منفذ البروكسي (مثال: 8080)",
    proxy_type_label: "🛡️ نوع البروكسي",
    proxy_list_label: "🔗 قائمة البروكسي",
    proxy_list_placeholder: "استخدم البروكسي لهذه المجالات أو التعبيرات النمطية",
    direct_list_label: "🔓 قائمة الاتصال المباشر",
    direct_list_placeholder: "الاتصال المباشر لهذه المجالات أو التعبيرات النمطية",
    apply: "🚀 تطبيق",
    applied: "✅ تم تطبيق إعدادات البروكسي.",
    add_proxy_rule: "➕ إضافة قاعدة بروكسي",
    add_direct_rule: "➕ إضافة قاعدة اتصال مباشر",
    delete: "❌ حذف",
    export: "📤 تصدير",
    import: "📥 استيراد"
  }
};


// Get current language or default to English
function getCurrentLang() {
  const langSelect = document.getElementById("language");
  return langSelect.value || "en";
}

function updateTablePlaceholders(lang) {
  const proxyPlaceholder = locales[lang].proxy_list_placeholder;
  document.querySelectorAll('#proxyTable tbody input').forEach(input => {
    input.placeholder = proxyPlaceholder;
  });

  const directPlaceholder = locales[lang].direct_list_placeholder;
  document.querySelectorAll('#directTable tbody input').forEach(input => {
    input.placeholder = directPlaceholder;
  });
}


// Apply localized texts to the UI
function applyLocale(lang) {
  const dict = locales[lang] || locales.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.placeholder = dict[key];
  });
  document.getElementById("addProxyBtn").textContent = dict.add_proxy_rule;
  document.getElementById("addDirectBtn").textContent = dict.add_direct_rule;
  document.getElementById("exportBtn").textContent = dict.export;
  document.getElementById("importBtn").textContent = dict.import;
  const proxyPlaceholder = dict.proxy_list_placeholder;
  document.querySelectorAll('#proxyTable tbody input').forEach(input => {
    input.placeholder = proxyPlaceholder;
  });

  const directPlaceholder = dict.direct_list_placeholder;
  document.querySelectorAll('#directTable tbody input').forEach(input => {
    input.placeholder = directPlaceholder;
  });
}

// Fill table with values
function fillTable(tableId, values) {
  const tbody = document.querySelector(`#${tableId} tbody`);
  tbody.innerHTML = "";
  values.forEach(value => addRow(tableId, value));
}

// Add one editable row
function addRow(tableId, value = "") {
  const tbody = document.querySelector(`#${tableId} tbody`);
  const tr = document.createElement("tr");

  const tdInput = document.createElement("td");
  const input = document.createElement("input");
  input.type = "text";
  input.value = value;
  const lang = getCurrentLang();
  input.placeholder = locales[lang][tableId === "proxyTable" ? "proxy_list_placeholder" : "direct_list_placeholder"];
  input.style.width = "100%";
  tdInput.appendChild(input);

  const tdDelete = document.createElement("td");
  const delBtn = document.createElement("button");
  delBtn.textContent = locales[getCurrentLang()].delete;
  delBtn.className = "delete-btn";
  delBtn.addEventListener("click", () => tr.remove());
  tdDelete.appendChild(delBtn);

  tr.appendChild(tdInput);
  tr.appendChild(tdDelete);
  tbody.appendChild(tr);
}

// Get all non-empty trimmed input values from a table
function getTableValues(tableId) {
  const inputs = document.querySelectorAll(`#${tableId} tbody input`);
  return Array.from(inputs)
    .map(i => i.value.trim())
    .filter(v => v.length > 0);
}

// Save config to chrome.storage and apply proxy
function applySettings() {
  const language = getCurrentLang();
  const mode = document.getElementById("mode").value;
  const proxyType = document.getElementById("proxyType").value;
  const proxyHost = document.getElementById("proxyHost").value.trim();
  const proxyPort = document.getElementById("proxyPort").value.trim();
  const proxyList = getTableValues("proxyTable");
  const directList = getTableValues("directTable");

  const config = { language, mode, proxyType, proxyHost, proxyPort, proxyList, directList };

  chrome.storage.sync.set({ proxyConfig: config }, () => {
    let pacScript = "";

    if (mode === "direct_all") {
      pacScript = `function FindProxyForURL(url, host) { return "DIRECT"; }`;
    } else if (mode === "proxy_all") {
      const proxyTypeForPAC = proxyType.toLowerCase() === "socks5" ? "SOCKS5" : "PROXY";
      pacScript = `function FindProxyForURL(url, host) { return "${proxyTypeForPAC} ${proxyHost}:${proxyPort}"; }`;
    } else {
      const proxyTypeForPAC = proxyType.toLowerCase() === "socks5" ? "SOCKS5" : "PROXY";

      const proxyRules = proxyList.length > 0
        ? proxyList.map(rule => `/${rule}/.test(host)`).join(" || ")
        : "false";
      const directRules = directList.length > 0
        ? directList.map(rule => `/${rule}/.test(host)`).join(" || ")
        : "false";

      pacScript = `
function FindProxyForURL(url, host) {
  if (${directRules}) {
    return "DIRECT";
  }
  if (${proxyRules}) {
    return "${proxyTypeForPAC} ${proxyHost}:${proxyPort}";
  }
  return "DIRECT";
}`;
    }

    chrome.proxy.settings.set(
      {
        value: {
          mode: "pac_script",
          pacScript: { data: pacScript }
        },
        scope: "regular"
      },
      () => {
        if (chrome.runtime.lastError) {
          alert("❌ " + chrome.runtime.lastError.message);
        } else {
          alert(locales[language].applied);
        }
      }
    );
  });
}

// Load saved config and initialize UI
function initialize() {
  chrome.storage.sync.get(["proxyConfig"], ({ proxyConfig }) => {
    proxyConfig = proxyConfig || {};
    const lang = proxyConfig.language || "en";

    document.getElementById("language").value = lang;
    applyLocale(lang);

    document.getElementById("mode").value = proxyConfig.mode || "rules";
    document.getElementById("proxyType").value = proxyConfig.proxyType || "http";
    document.getElementById("proxyHost").value = proxyConfig.proxyHost || "";
    document.getElementById("proxyPort").value = proxyConfig.proxyPort || "";

    fillTable("proxyTable", proxyConfig.proxyList || []);
    fillTable("directTable", proxyConfig.directList || []);
  });
}

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initialize();

  document.getElementById("language").addEventListener("change", e => {
    const lang = e.target.value;
    applyLocale(lang);
  });

  document.getElementById("addProxyBtn").addEventListener("click", () => {
    addRow("proxyTable");
  });

  document.getElementById("addDirectBtn").addEventListener("click", () => {
    addRow("directTable");
  });

  document.getElementById("applyBtn").addEventListener("click", () => {
    applySettings();
  });

  // Export Config
  document.getElementById("exportBtn").addEventListener("click", () => {
    chrome.storage.sync.get(["proxyConfig"], ({ proxyConfig }) => {
      const json = JSON.stringify(proxyConfig, null, 2);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "proxy_rules.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  });

  // Import Config
  document.getElementById("importBtn").addEventListener("click", () => {
    document.getElementById("importFile").click();
  });

  document.getElementById("importFile").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const config = JSON.parse(event.target.result);
        chrome.storage.sync.set({ proxyConfig: config }, () => {
          initialize();
          alert("✅ Rules imported successfully.");
        });
      } catch (err) {
        alert("❌ Invalid JSON file.");
      }
    };
    reader.readAsText(file);
  });
});
