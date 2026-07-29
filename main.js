const topics = [
  { id:"hero", title:"2026 龙岗区七年级数学期末复习核心题单", focus:"覆盖必考基础、常见易错和综合拓展，适合期末冲刺前完成一次系统复习。", reason:"龙岗区教研精选 · 今日更新", questions:24, minutes:45, difficulty:"中等", source:"龙岗区教研中心", usage:3642, tag:"paper", tone:"deep" },
  { id:"t1", title:"七上第二章有理数易错题单", focus:"符号判断、绝对值与混合运算", reason:"适合当前教学进度", questions:15, minutes:20, difficulty:"中等", source:"区统考同类题", usage:386, tag:"chapter", tone:"sage" },
  { id:"t2", title:"期末冲刺基础保分题单", focus:"覆盖期末必考基础题型", reason:"本周收藏增长最快", questions:22, minutes:40, difficulty:"中等", source:"龙岗实验学校", usage:1206, tag:"school", tone:"cream" },
  { id:"t3", title:"几何证明规范表达训练", focus:"从补全步骤到独立证明", reason:"龙岗老师高频复用", questions:12, minutes:25, difficulty:"较难", source:"区教研精选", usage:842, tag:"chapter", tone:"lilac" },
  { id:"t4", title:"深圳中考函数真题精选", focus:"近五年真题按题型分类", reason:"中考专题", questions:24, minutes:35, difficulty:"较难", source:"深圳中考试卷", usage:1532, tag:"paper", tone:"mist" },
  { id:"t5", title:"负数符号判断补偿练", focus:"易错判断专项强化", reason:"班级薄弱点", questions:10, minutes:15, difficulty:"简单", source:"区教研精选", usage:613, tag:"chapter", tone:"sage" },
  { id:"t6", title:"一次函数压轴分层突破", focus:"三档难度，逐层突破", reason:"名校共建", questions:18, minutes:30, difficulty:"较难", source:"龙岗区四中联考", usage:1089, tag:"paper", tone:"cream" },
  { id:"t7", title:"整式运算正负号专项", focus:"整式运算常见错误归纳", reason:"教辅优选题单", questions:14, minutes:20, difficulty:"中等", source:"《一遍过》配套题单", usage:522, tag:"workbook", tone:"lilac" },
  { id:"t8", title:"正数与负数概念巩固题单", focus:"理解实际意义，准确判断", reason:"七上第1章", questions:16, minutes:20, difficulty:"简单", source:"区教研精选", usage:762, tag:"chapter", tone:"sage" },
  { id:"t9", title:"有理数运算基础强化题单", focus:"加减乘除与混合运算", reason:"七上第2章", questions:20, minutes:25, difficulty:"中等", source:"《高效同步精练》", usage:1143, tag:"workbook", tone:"cream" },
  { id:"t10", title:"整式的加减基础题单", focus:"合并同类项与化简", reason:"七上第3章", questions:18, minutes:20, difficulty:"简单", source:"龙岗区教研室", usage:908, tag:"chapter", tone:"lilac" },
  { id:"t11", title:"一元一次方程应用题单", focus:"顺序解题方法与实际应用", reason:"七上第3章", questions:22, minutes:25, difficulty:"中等", source:"校本共建题单", usage:1221, tag:"school", tone:"mist" },
  { id:"t12", title:"图形初步认识巩固题单", focus:"直线、射线和线段", reason:"七上第4章", questions:14, minutes:15, difficulty:"简单", source:"龙岗实验学校", usage:669, tag:"school", tone:"sage" },
  { id:"t13", title:"有理数混合运算提升题单", focus:"综合运算与技巧提升", reason:"七上第5章", questions:20, minutes:25, difficulty:"中等", source:"区教研精选", usage:1015, tag:"chapter", tone:"cream" },
  { id:"t14", title:"龙岗区七年级期末模拟预测题单", focus:"综合模拟，查漏补缺", reason:"新 · 07-28", questions:20, minutes:35, difficulty:"较难", source:"龙岗区教研室", usage:984, tag:"latest", tone:"sage" },
  { id:"t15", title:"坂田片区课堂小测精选题单", focus:"课堂检测，及时巩固", reason:"新 · 07-27", questions:12, minutes:15, difficulty:"简单", source:"坂田片区教研", usage:512, tag:"latest", tone:"cream" },
  { id:"t16", title:"龙岗实验学校月考精选题单", focus:"月考精选，重点突破", reason:"新 · 07-27", questions:18, minutes:25, difficulty:"中等", source:"龙岗实验学校", usage:1266, tag:"school", tone:"lilac" },
  { id:"t17", title:"平湖片区数学教研精选题单", focus:"教研共建，优质共享", reason:"新 · 07-27", questions:16, minutes:20, difficulty:"中等", source:"平湖片区教研", usage:698, tag:"latest", tone:"mist" },
  { id:"t18", title:"中考函数模型方法题单", focus:"函数专题，强化训练", reason:"教研员审核", questions:22, minutes:35, difficulty:"较难", source:"龙岗区教研室", usage:1374, tag:"paper", tone:"sage" },
  { id:"t19", title:"《实验班提优训练》精选题单", focus:"基础完成后的进阶提升", reason:"本地常用教辅", questions:18, minutes:30, difficulty:"中等", source:"《实验班提优训练》", usage:831, tag:"workbook", tone:"cream" },
  { id:"t20", title:"《点拨》易错方法题单", focus:"典型错法与方法点拨", reason:"老师收藏较多", questions:16, minutes:25, difficulty:"中等", source:"《点拨》配套题单", usage:742, tag:"workbook", tone:"lilac" },
  { id:"t21", title:"本校期中错题重组题单", focus:"基于三个班真实易错题", reason:"本校老师共建", questions:15, minutes:22, difficulty:"中等", source:"启航实验学校数学组", usage:96, tag:"school", tone:"mist" }
];

const byId = Object.fromEntries(topics.map(topic => [topic.id, topic]));
const toneMap = { sage:"var(--sage)", cream:"var(--cream)", lilac:"var(--lilac)", mist:"var(--mist)" };
let currentFilter = "all";
let currentQuery = "";

const contentFeed = document.querySelector("#contentFeed");
const emptyState = document.querySelector("#emptyState");
const detailDrawer = document.querySelector("#detailDrawer");
const drawerMask = document.querySelector("#drawerMask");
const aiMask = document.querySelector("#aiMask");
const toast = document.querySelector("#toast");

function match(topic) {
  const filterMatch = currentFilter === "all"
    || topic.tag === currentFilter
    || (currentFilter === "latest" && topic.reason.includes("新"));
  const text = [topic.title, topic.focus, topic.reason, topic.source].join(" ").toLowerCase();
  return filterMatch && (!currentQuery || text.includes(currentQuery.toLowerCase()));
}

function topicCard(topic) {
  const badge = topic.tag === "latest"
    ? '<span class="signal-badge new">NEW</span>'
    : topic.usage > 1000
      ? '<span class="signal-badge hot">HOT</span>'
      : "";
  return `
    <article class="topic-card" data-topic="${topic.id}" tabindex="0" role="button" aria-label="预览${topic.title}" style="--tone:${toneMap[topic.tone]}">
      <div class="card-cover">
        <div class="card-signals"><span class="card-reason">${topic.reason}</span>${badge}</div>
        <h3>${topic.title}</h3>
        <p class="card-focus">${topic.focus}</p>
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${topic.questions} 题</span><span>${topic.minutes} 分钟</span><span>${topic.difficulty}</span></div>
        <p class="card-source">来源：${topic.source}</p>
        <div class="card-bottom">
          <span class="card-usage"><i class="ri-user-line"></i>${topic.usage.toLocaleString()} 位老师使用</span>
          <button class="bookmark" data-bookmark aria-label="收藏题单"><i class="ri-bookmark-line"></i></button>
        </div>
      </div>
    </article>`;
}

function compactRow(topic, rank, showTime = false) {
  return `
    <button class="compact-row" data-topic="${topic.id}">
      <span class="rank">${String(rank).padStart(2, "0")}</span>
      <span class="compact-main"><b>${topic.title}</b><small>${topic.source} · ${topic.questions}题 · ${topic.minutes}分钟</small></span>
      <strong>${showTime ? "刚刚使用" : `${topic.usage.toLocaleString()}次使用`}</strong>
      <i class="ri-arrow-right-s-line"></i>
    </button>`;
}

function shelf(title, subtitle, ids) {
  const list = ids.map(id => byId[id]).filter(Boolean).filter(match);
  if (!list.length) return "";
  return `
    <section class="shelf">
      <header class="shelf-header">
        <div class="shelf-title"><h2>${title}</h2><p>${subtitle}</p></div>
        <button class="view-all">查看全部 <i class="ri-arrow-right-s-line"></i></button>
      </header>
      <div class="shelf-viewport"><div class="shelf-track">${list.map(topicCard).join("")}</div></div>
    </section>`;
}

function chapterSection() {
  const chapterTopics = [byId.t8, byId.t9, byId.t10, byId.t11, byId.t12];
  return `
    <section class="chapter-section">
      <header class="shelf-header">
        <div class="shelf-title"><h2>跟着当前教材进度找</h2><p>人教版七年级上册 · 按教材目录快速定位题单</p></div>
        <button class="view-all">完整教材目录 <i class="ri-arrow-right-s-line"></i></button>
      </header>
      <div class="chapter-layout">
        <nav class="chapter-rail" aria-label="教材章节">
          <button><span>01</span><b>正数与负数</b><small>36 份题单</small></button>
          <button class="active"><span>02</span><b>有理数及其运算</b><small>82 份题单</small></button>
          <button><span>03</span><b>整式的加减</b><small>64 份题单</small></button>
          <button><span>04</span><b>一元一次方程</b><small>71 份题单</small></button>
          <button><span>05</span><b>图形初步认识</b><small>48 份题单</small></button>
        </nav>
        <div class="chapter-topic-list">
          <div class="chapter-list-heading"><span>第二章 · 有理数及其运算</span><strong>本章共 82 份题单</strong></div>
          ${chapterTopics.map((topic, index) => `
            <button class="chapter-topic-row" data-topic="${topic.id}">
              <span class="chapter-order">${String(index + 1).padStart(2,"0")}</span>
              <span><b>${topic.title}</b><small>${topic.focus}</small></span>
              <em>${topic.questions} 题 · ${topic.minutes} 分钟</em>
              <strong>${topic.usage.toLocaleString()} 人使用</strong>
              <i class="ri-arrow-right-s-line"></i>
            </button>`).join("")}
        </div>
      </div>
    </section>`;
}

function workbookSection() {
  const groups = [
    { name:"同步训练系列", desc:"本地使用覆盖 26 所学校", topics:[byId.t9, byId.t7] },
    { name:"提优讲解系列", desc:"本周新增 4 份配套题单", topics:[byId.t19, byId.t20] }
  ];
  return `
    <section class="workbook-section">
      <header class="shelf-header">
        <div class="shelf-title"><h2>来自教辅的优质题单</h2><p>按老师熟悉的教辅来源分组，组内仍然是可直接使用的题单</p></div>
        <button class="view-all">全部教辅来源 <i class="ri-arrow-right-s-line"></i></button>
      </header>
      <div class="workbook-groups">
        ${groups.map((group, groupIndex) => `
          <article class="workbook-group tone-${groupIndex + 1}">
            <header>
              <span class="book-mark">辅</span>
              <div><h3>${group.name}</h3><p>${group.desc}</p></div>
              <button>查看目录</button>
            </header>
            <div>${group.topics.map((topic,index)=>compactRow(topic,index+1)).join("")}</div>
          </article>`).join("")}
      </div>
    </section>`;
}

function schoolSection() {
  const schoolTopics = [byId.t21, byId.t16, byId.t2, byId.t11, byId.t12];
  return `
    <section class="school-section">
      <header class="shelf-header">
        <div class="shelf-title"><h2>本校老师共享题单</h2><p>来自本校备课组和老师真实教学使用</p></div>
        <button class="view-all">进入本校题库 <i class="ri-arrow-right-s-line"></i></button>
      </header>
      <div class="school-table">
        <div class="school-table-head"><span>题单名称</span><span>来源</span><span>内容</span><span>本校使用</span><span></span></div>
        ${schoolTopics.map(topic => `
          <button class="school-row" data-topic="${topic.id}">
            <span><b>${topic.title}</b><small>${topic.focus}</small></span>
            <span>${topic.source}</span>
            <span>${topic.questions} 题 · ${topic.minutes} 分钟</span>
            <strong>${topic.usage.toLocaleString()} 人</strong>
            <i class="ri-arrow-right-s-line"></i>
          </button>`).join("")}
      </div>
    </section>`;
}

function renderDefaultFeed() {
  return [
    `
    <section class="weekly-resource">
      <article class="list-panel">
        <header><div><p>依据近 7 天真实使用数据</p><h2>本周龙岗热门题单</h2></div><button>完整榜单 <i class="ri-arrow-right-s-line"></i></button></header>
        <div>${[byId.t4,byId.t18,byId.t2,byId.t9].map((topic,index)=>compactRow(topic,index+1)).join("")}</div>
      </article>
      <article class="resource-update">
        <header><div><p><span class="live-dot"></span> 最近更新于 10 分钟前</p><h2>优质资源持续更新</h2></div><button>更新记录</button></header>
        <div class="update-stat-grid">
          <div><small>今日新增题目</small><strong>1,842</strong><span>道</span></div>
          <div><small>今日新增题单</small><strong>68</strong><span>份</span></div>
          <div><small>新整理试卷</small><strong>26</strong><span>套</span></div>
          <div><small>更新教辅章节</small><strong>14</strong><span>章</span></div>
        </div>
        <footer>来自龙岗区教研、学校共建和本地常用资源</footer>
      </article>
    </section>`,
    shelf("老师们正在用的好题单", "不是题很多，而是已经选好、编好，可以直接拿走", ["t1","t2","t3","t4","t5","t6","t7"]),
    chapterSection(),
    workbookSection(),
    schoolSection(),
    `
    <section class="collection-section">
      <header class="shelf-header"><div class="shelf-title"><h2>一组一组地找题单</h2><p>把相关题单整理成合集，更适合连续教学</p></div><button class="view-all">全部合集 <i class="ri-arrow-right-s-line"></i></button></header>
      <div class="collection-grid">
        <button class="collection-card green" data-topic="t8"><span>8 份题单</span><h3>七上有理数<br>完整题单合集</h3><p>课时练习、易错专项、单元复习与检测</p><strong>4,826 位老师使用</strong></button>
        <button class="collection-card cream" data-topic="t14"><span>12 份题单</span><h3>龙岗近三年<br>期末试卷题单合集</h3><p>按年份、难度和题型重新整理</p><strong>36 所学校共同使用</strong></button>
        <button class="collection-card lilac" data-topic="t19"><span>16 份题单</span><h3>本地常用教辅<br>配套题单合集</h3><p>题单来自教辅，但可以直接调整和使用</p><strong>本周新增 3 份</strong></button>
      </div>
    </section>`
  ].join("");
}

function renderFilteredFeed() {
  const list = topics.filter(topic => topic.id !== "hero").filter(match);
  if (!list.length) return "";
  return `
    <section class="filtered-results">
      <header class="shelf-header">
        <div class="shelf-title"><h2>找到 ${list.length} 组匹配内容</h2><p>以下结果全部是可直接预览和调整的题单</p></div>
      </header>
      <div class="result-grid">${list.map(topicCard).join("")}</div>
    </section>`;
}

function render() {
  const defaultState = currentFilter === "all" && !currentQuery;
  contentFeed.innerHTML = defaultState ? renderDefaultFeed() : renderFilteredFeed();
  const count = topics.filter(topic => topic.id !== "hero").filter(match).length;
  emptyState.hidden = defaultState || count > 0;
  contentFeed.hidden = !defaultState && count === 0;
  bindContentEvents();
}

function bindContentEvents() {
  document.querySelectorAll("[data-topic]").forEach(element => {
    const open = () => openTopic(element.dataset.topic);
    element.addEventListener("click", event => {
      if (event.target.closest("[data-bookmark]")) return;
      open();
    });
    if (element.matches("[tabindex]")) element.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); }
    });
  });
  document.querySelectorAll("[data-bookmark]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      button.classList.toggle("saved");
      button.innerHTML = button.classList.contains("saved") ? '<i class="ri-bookmark-fill"></i>' : '<i class="ri-bookmark-line"></i>';
      showToast(button.classList.contains("saved") ? "已收藏到我的题单" : "已取消收藏");
    });
  });
  document.querySelectorAll(".view-all, .trending-panel header button").forEach(button => button.addEventListener("click", () => showToast("已展开更多题单")));
  document.querySelectorAll(".source-tabs button").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".source-tabs button").forEach(item => item.classList.toggle("active", item === button));
    showToast(`正在查看${button.textContent}题单`);
  }));
  document.querySelectorAll(".chapter-rail button").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".chapter-rail button").forEach(item => item.classList.toggle("active", item === button));
    showToast(`已切换到${button.querySelector("b").textContent}`);
  }));
  document.querySelectorAll(".workbook-group > header > button").forEach(button => button.addEventListener("click", () => {
    showToast("已展开教辅目录");
  }));
}

function openTopic(id) {
  const topic = byId[id];
  if (!topic) return;
  document.querySelector("#drawerReason").textContent = topic.reason;
  document.querySelector("#drawerKind").textContent = "本地优质题单";
  document.querySelector("#drawerTitle").textContent = topic.title;
  document.querySelector("#drawerSubtitle").textContent = `${topic.questions} 题 · 约 ${topic.minutes} 分钟 · 难度 ${topic.difficulty}`;
  document.querySelector("#drawerSource").textContent = `来源：${topic.source}`;
  document.querySelector("#sourceAvatar").textContent = topic.source.slice(0,1);
  document.querySelector("#drawerTotal").textContent = `共 ${topic.questions} 题`;
  document.querySelector("#drawerWhy").textContent = `${topic.reason}，并且与七年级数学当前教学进度匹配；题量适合一次 ${topic.minutes} 分钟左右的练习。`;
  drawerMask.hidden = false;
  detailDrawer.classList.add("open");
  detailDrawer.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}

function closeTopic() {
  detailDrawer.classList.remove("open");
  detailDrawer.setAttribute("aria-hidden","true");
  setTimeout(()=>{ drawerMask.hidden = true; },220);
  document.body.style.overflow = "";
}

function openAi() {
  document.querySelector("#aiForm").hidden = false;
  document.querySelector("#aiResult").hidden = true;
  aiMask.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeAi() {
  aiMask.hidden = true;
  document.body.style.overflow = "";
}

function showToast(message) {
  toast.textContent = message; toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1700);
}

render();

document.querySelector("#filterChips").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  document.querySelectorAll("[data-filter]").forEach(chip => chip.classList.toggle("active", chip === button));
  currentFilter = button.dataset.filter;
  render();
});
document.querySelector("#resetFilter").addEventListener("click", () => {
  currentFilter = "all";
  document.querySelectorAll("[data-filter]").forEach(chip => chip.classList.toggle("active", chip.dataset.filter === "all"));
  render();
});
document.querySelector("#openAi").addEventListener("click", openAi);
document.querySelector("#closeAi").addEventListener("click", closeAi);
document.querySelector("#closeDrawer").addEventListener("click", closeTopic);
drawerMask.addEventListener("click", closeTopic);
aiMask.addEventListener("click", event => { if (event.target === aiMask) closeAi(); });
document.querySelector("#favoriteButton").addEventListener("click", event => {
  event.currentTarget.classList.toggle("saved");
  event.currentTarget.innerHTML = event.currentTarget.classList.contains("saved") ? '<i class="ri-bookmark-fill"></i><span>已收藏</span>' : '<i class="ri-bookmark-line"></i><span>收藏</span>';
});
document.querySelector("#useDirectly").addEventListener("click", ()=>showToast("已将题单加入待布置"));
document.querySelector("#adjustUse").addEventListener("click", ()=>showToast("正在进入题单编辑"));
document.querySelector("#generateList").addEventListener("click", event => {
  const button = event.currentTarget;
  button.disabled = true;
  button.querySelector("span").textContent = "正在生成题单结构…";
  setTimeout(() => {
    document.querySelector("#aiForm").hidden = true;
    document.querySelector("#aiResult").hidden = false;
    button.disabled = false;
    button.querySelector("span").textContent = "生成完整题单";
  }, 850);
});
document.querySelector("#regenerate").addEventListener("click", () => {
  document.querySelector("#aiResult").hidden = true;
  document.querySelector("#aiForm").hidden = false;
});
document.querySelector("#editGenerated").addEventListener("click", () => {
  closeAi();
  showToast("AI 题单已生成，正在进入题单编辑");
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (!aiMask.hidden) closeAi();
    else if (detailDrawer.classList.contains("open")) closeTopic();
  }
});
