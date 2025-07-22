// Localization dictionary with emojis and Arabic added
const locales = {
    en: {
      title: "🌐 Proxy Settings 🔧",
      language_label: "🌏 Language",
      mode_label: "⚙️ Mode",
      mode_proxy_all: "🌍 Global Proxy",
      mode_direct_all: "🚫 Global Direct",
      mode_rules: "📜 Rules",
      proxy_host_label: "🖥️ Proxy Host",
      proxy_host_placeholder: "Proxy Host (e.g., 1.2.3.4)",
      proxy_port_label: "🔢 Proxy Port",
      proxy_port_placeholder: "Proxy Port (e.g., 8080)",
      proxy_type_label: "🛡️ Proxy Type",
      proxy_list_label: "🔗 Proxy List",
      proxy_list_placeholder: "Use proxy for these domains",
      direct_list_label: "🔓 Direct List",
      direct_list_placeholder: "Direct connect for these domains",
      apply: "🚀 Apply",
      applied: "✅ Proxy settings applied.",
      add_proxy_rule: "➕ Add Proxy Rule",
      add_direct_rule: "➕ Add Direct Rule",
      delete: "❌ Delete"
    },
    zh_CN: {
      title: "🌐 代理设置 🔧",
      language_label: "🌏 语言",
      mode_label: "⚙️ 模式",
      mode_proxy_all: "🌍 全局代理",
      mode_direct_all: "🚫 全局直连",
      mode_rules: "📜 规则模式",
      proxy_host_label: "🖥️ 代理地址",
      proxy_host_placeholder: "代理地址 (例如 1.2.3.4)",
      proxy_port_label: "🔢 代理端口",
      proxy_port_placeholder: "代理端口 (例如 8080)",
      proxy_type_label: "🛡️ 代理类型",
      proxy_list_label: "🔗 代理列表",
      proxy_list_placeholder: "对这些域名使用代理",
      direct_list_label: "🔓 直连列表",
      direct_list_placeholder: "对这些域名直连",
      apply: "🚀 应用",
      applied: "✅ 代理设置已生效。",
      add_proxy_rule: "➕ 添加代理规则",
      add_direct_rule: "➕ 添加直连规则",
      delete: "❌ 删除"
    },
    zh_TW: {
      title: "🌐 代理設定 🔧",
      language_label: "🌏 語言",
      mode_label: "⚙️ 模式",
      mode_proxy_all: "🌍 全域代理",
      mode_direct_all: "🚫 全域直連",
      mode_rules: "📜 規則模式",
      proxy_host_label: "🖥️ 代理位址",
      proxy_host_placeholder: "代理位址 (例如 1.2.3.4)",
      proxy_port_label: "🔢 代理埠號",
      proxy_port_placeholder: "代理埠號 (例如 8080)",
      proxy_type_label: "🛡️ 代理類型",
      proxy_list_label: "🔗 代理列表",
      proxy_list_placeholder: "對這些域名使用代理",
      direct_list_label: "🔓 直連列表",
      direct_list_placeholder: "對這些域名直連",
      apply: "🚀 套用",
      applied: "✅ 代理設定已生效。",
      add_proxy_rule: "➕ 新增代理規則",
      add_direct_rule: "➕ 新增直連規則",
      delete: "❌ 刪除"
    },
    ja: {
      title: "🌐 プロキシ設定 🔧",
      language_label: "🌏 言語",
      mode_label: "⚙️ モード",
      mode_proxy_all: "🌍 全体プロキシ",
      mode_direct_all: "🚫 全体直通",
      mode_rules: "📜 ルールモード",
      proxy_host_label: "🖥️ プロキシホスト",
      proxy_host_placeholder: "プロキシホスト (例: 1.2.3.4)",
      proxy_port_label: "🔢 プロキシポート",
      proxy_port_placeholder: "プロキシポート (例: 8080)",
      proxy_type_label: "🛡️ プロキシタイプ",
      proxy_list_label: "🔗 プロキシリスト",
      proxy_list_placeholder: "これらのドメインにプロキシを使用",
      direct_list_label: "🔓 直接接続リスト",
      direct_list_placeholder: "これらのドメインに直接接続",
      apply: "🚀 適用",
      applied: "✅ プロキシ設定を適用しました。",
      add_proxy_rule: "➕ プロキシルールを追加",
      add_direct_rule: "➕ 直接接続ルールを追加",
      delete: "❌ 削除"
    },
    fr: {
      title: "🌐 Paramètres Proxy 🔧",
      language_label: "🌏 Langue",
      mode_label: "⚙️ Mode",
      mode_proxy_all: "🌍 Proxy Global",
      mode_direct_all: "🚫 Connexion Directe Globale",
      mode_rules: "📜 Règles",
      proxy_host_label: "🖥️ Hôte Proxy",
      proxy_host_placeholder: "Hôte Proxy (ex: 1.2.3.4)",
      proxy_port_label: "🔢 Port Proxy",
      proxy_port_placeholder: "Port Proxy (ex: 8080)",
      proxy_type_label: "🛡️ Type de Proxy",
      proxy_list_label: "🔗 Liste Proxy",
      proxy_list_placeholder: "Utiliser proxy pour ces domaines",
      direct_list_label: "🔓 Liste Directe",
      direct_list_placeholder: "Connexion directe pour ces domaines",
      apply: "🚀 Appliquer",
      applied: "✅ Paramètres proxy appliqués.",
      add_proxy_rule: "➕ Ajouter règle proxy",
      add_direct_rule: "➕ Ajouter règle directe",
      delete: "❌ Supprimer"
    },
    ar: {
      title: "🌐 إعدادات البروكسي 🔧",
      language_label: "🌏 اللغة",
      mode_label: "⚙️ الوضع",
      mode_proxy_all: "🌍 البروكسي العالمي",
      mode_direct_all: "🚫 الاتصال المباشر العالمي",
      mode_rules: "📜 القواعد",
      proxy_host_label: "🖥️ مضيف البروكسي",
      proxy_host_placeholder: "مضيف البروكسي (مثال: 1.2.3.4)",
      proxy_port_label: "🔢 منفذ البروكسي",
      proxy_port_placeholder: "منفذ البروكسي (مثال: 8080)",
      proxy_type_label: "🛡️ نوع البروكسي",
      proxy_list_label: "🔗 قائمة البروكسي",
      proxy_list_placeholder: "استخدم البروكسي لهذه المجالات",
      direct_list_label: "🔓 قائمة الاتصال المباشر",
      direct_list_placeholder: "الاتصال المباشر لهذه المجالات",
      apply: "🚀 تطبيق",
      applied: "✅ تم تطبيق إعدادات البروكسي.",
      add_proxy_rule: "➕ إضافة قاعدة بروكسي",
      add_direct_rule: "➕ إضافة قاعدة اتصال مباشر",
      delete: "❌ حذف"
    }
  };
  
  // Get current language or default to English
  function getCurrentLang() {
    const langSelect = document.getElementById("language");
    return langSelect.value || "en";
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
  }
  
  // Fill table with values (proxy or direct list)
  function fillTable(tableId, values) {
    const tbody = document.querySelector(`#${tableId} tbody`);
    tbody.innerHTML = "";
    values.forEach(value => addRow(tableId, value));
  }
  
  // Add one editable row with delete button
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
  
  // Save config to chrome.storage and apply proxy via chrome.proxy API
  function applySettings() {
    const language = getCurrentLang();
    const mode = document.getElementById("mode").value;
    const proxyType = document.getElementById("proxyType").value;
    const proxyHost = document.getElementById("proxyHost").value.trim();
    const proxyPort = document.getElementById("proxyPort").value.trim();
    const proxyList = getTableValues("proxyTable");
    const directList = getTableValues("directTable");
  
    const config = { language, mode, proxyType, proxyHost, proxyPort, proxyList, directList };
  
    // Save config for persistence
    chrome.storage.sync.set({ proxyConfig: config }, () => {
      // Build PAC script
      let pacScript = "";
  
      if (mode === "direct_all") {
        pacScript = `function FindProxyForURL(url, host) { return "DIRECT"; }`;
      } else if (mode === "proxy_all") {
        const proxyTypeForPAC = proxyType.toLowerCase() === "socks5" ? "SOCKS5" : "PROXY";
        pacScript = `function FindProxyForURL(url, host) { return "${proxyTypeForPAC} ${proxyHost}:${proxyPort}"; }`;
      } else {
        const proxyRules = proxyList.length > 0
          ? proxyList.map(rule => `shExpMatch(host, "${rule}")`).join(" || ")
          : "false";
        const directRules = directList.length > 0
          ? directList.map(rule => `shExpMatch(host, "${rule}")`).join(" || ")
          : "false";
  
        const proxyTypeForPAC = proxyType.toLowerCase() === "socks5" ? "SOCKS5" : "PROXY";
  
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
  
  // Event handlers
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
  });
  