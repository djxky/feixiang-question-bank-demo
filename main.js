const topics = [
  { id:"hero", title:"2026 龙岗区七年级数学期末复习核心题单", focus:"覆盖必考基础、常见易错和综合拓展，适合期末冲刺前完成一次系统复习。", reason:"龙岗区教研精选 · 今日更新", questions:24, minutes:45, difficulty:"中等", source:"龙岗区教研中心", usage:3642, tag:"paper", tone:"deep" },
  { id:"t1", title:"龙岗易错二练：有理数运算", focus:"错因诊断、针对变式、二次过关", reason:"龙岗易错二练", questions:15, minutes:20, difficulty:"中等", source:"龙岗区易错专题", usage:386, tag:"special", tone:"sage" },
  { id:"t2", title:"2026 深圳南山区初一上期末精选", focus:"本地命题风格与阶段难度参考", reason:"深圳区级真题", questions:22, minutes:40, difficulty:"中等", source:"南山区初一上期末真题", usage:1206, tag:"paper", tone:"cream" },
  { id:"t3", title:"情景数学题：深圳生活中的正负数", focus:"深圳真实情境改编，考点不变、题面更新", reason:"深圳专用", questions:12, minutes:25, difficulty:"中等", source:"本地情境题专题", usage:842, tag:"special", tone:"lilac" },
  { id:"t4", title:"2024—2026 深圳期末真题：图形的轴对称", focus:"把分散真题整理成可直接使用的课内专题", reason:"真题汇编", questions:24, minutes:35, difficulty:"较难", source:"深圳初一下期末真题", usage:1532, tag:"paper", tone:"mist" },
  { id:"t5", title:"2025—2026 深圳期末真题：全等三角形", focus:"按考点重组近两年深圳区级真题", reason:"真题专项", questions:18, minutes:30, difficulty:"中等", source:"深圳初一下期末真题", usage:613, tag:"special", tone:"sage" },
  { id:"t6", title:"深圳中学初一期末周测精选", focus:"名校周测，适合分层选题与命题参考", reason:"名校资源", questions:18, minutes:30, difficulty:"较难", source:"深圳名校周测资源", usage:1089, tag:"paper", tone:"cream" },
  { id:"t7", title:"整式运算符号易错配套题单", focus:"整式运算常见错误归纳", reason:"配套题单", questions:14, minutes:20, difficulty:"中等", source:"常用同步训练系列", usage:522, tag:"workbook", tone:"lilac" },
  { id:"t8", title:"正数与负数概念巩固题单", focus:"理解实际意义，准确判断", reason:"七上第1章", questions:16, minutes:20, difficulty:"简单", source:"区教研精选", usage:762, tag:"chapter", tone:"sage" },
  { id:"t9", title:"有理数运算基础过关配套题单", focus:"贴近教材知识链与能力层级", reason:"本地同步", questions:20, minutes:25, difficulty:"中等", source:"本地能力过关系列", usage:1143, tag:"workbook", tone:"cream" },
  { id:"t10", title:"整式的加减基础题单", focus:"合并同类项与化简", reason:"七上第3章", questions:18, minutes:20, difficulty:"简单", source:"龙岗区教研室", usage:908, tag:"chapter", tone:"lilac" },
  { id:"t11", title:"一元一次方程应用题单", focus:"顺序解题方法与实际应用", reason:"七上第3章", questions:22, minutes:25, difficulty:"中等", source:"校本共建题单", usage:1221, tag:"school", tone:"mist" },
  { id:"t12", title:"图形初步认识巩固题单", focus:"直线、射线和线段", reason:"七上第4章", questions:14, minutes:15, difficulty:"简单", source:"龙岗实验学校", usage:669, tag:"school", tone:"sage" },
  { id:"t13", title:"有理数混合运算提升题单", focus:"综合运算与技巧提升", reason:"七上第5章", questions:20, minutes:25, difficulty:"中等", source:"区教研精选", usage:1015, tag:"chapter", tone:"cream" },
  { id:"t14", title:"龙岗区七年级期末模拟预测题单", focus:"综合模拟，查漏补缺", reason:"新 · 07-28", questions:20, minutes:35, difficulty:"较难", source:"龙岗区教研室", usage:984, tag:"latest", tone:"sage" },
  { id:"t15", title:"坂田片区课堂小测精选题单", focus:"课堂检测，及时巩固", reason:"新 · 07-27", questions:12, minutes:15, difficulty:"简单", source:"坂田片区教研", usage:512, tag:"latest", tone:"cream" },
  { id:"t16", title:"龙岗实验学校月考精选题单", focus:"月考精选，重点突破", reason:"新 · 07-27", questions:18, minutes:25, difficulty:"中等", source:"龙岗实验学校", usage:1266, tag:"school", tone:"lilac" },
  { id:"t17", title:"平湖片区数学教研精选题单", focus:"教研共建，优质共享", reason:"新 · 07-27", questions:16, minutes:20, difficulty:"中等", source:"平湖片区教研", usage:698, tag:"latest", tone:"mist" },
  { id:"t18", title:"中考函数模型方法题单", focus:"函数专题，强化训练", reason:"教研员审核", questions:22, minutes:35, difficulty:"较难", source:"龙岗区教研室", usage:1374, tag:"paper", tone:"sage" },
  { id:"t19", title:"基础完成后的进阶提升题单", focus:"从课内基础过渡到探究与培优", reason:"提优配套", questions:18, minutes:30, difficulty:"中等", source:"常用提优训练系列", usage:831, tag:"workbook", tone:"cream" },
  { id:"t20", title:"典型错法与方法点拨题单", focus:"归纳典型错法并配套针对变式", reason:"老师收藏较多", questions:16, minutes:25, difficulty:"中等", source:"易错方法系列", usage:742, tag:"workbook", tone:"lilac" },
  { id:"t21", title:"本校期中错题重组题单", focus:"基于三个班真实易错题", reason:"本校老师共建", questions:15, minutes:22, difficulty:"中等", source:"启航实验学校数学组", usage:96, tag:"school", tone:"mist" },
  { id:"t22", title:"有理数课堂 5 分钟小测题单", focus:"当堂检测概念掌握情况", reason:"课堂小测", questions:8, minutes:5, difficulty:"简单", source:"龙城初级中学", usage:728, tag:"chapter", tone:"sage" },
  { id:"t23", title:"一元一次方程移项易错题单", focus:"集中突破移项与符号错误", reason:"高频易错", questions:14, minutes:18, difficulty:"中等", source:"区教研精选", usage:1186, tag:"chapter", tone:"cream" },
  { id:"t24", title:"线段与角基础概念辨析题单", focus:"易混概念判断与规范表达", reason:"概念辨析", questions:12, minutes:15, difficulty:"简单", source:"龙岗实验学校", usage:635, tag:"chapter", tone:"lilac" },
  { id:"t25", title:"2025 深圳中考数学基础题单", focus:"近年真题中的基础得分点", reason:"真题新整理", questions:20, minutes:30, difficulty:"中等", source:"深圳中考试卷", usage:1458, tag:"paper", tone:"mist" },
  { id:"t26", title:"整式运算同步巩固配套题单", focus:"同步巩固整式化简方法", reason:"配套题单", questions:18, minutes:25, difficulty:"中等", source:"同步方法训练系列", usage:884, tag:"workbook", tone:"sage" },
  { id:"t27", title:"期末选择题快速提分题单", focus:"高频选择题与排除方法", reason:"本周热门", questions:16, minutes:20, difficulty:"中等", source:"龙岗区教研室", usage:1328, tag:"paper", tone:"cream" },
  { id:"t28", title:"数学阅读理解情境题单", focus:"从真实情境中提取数量关系", reason:"情境专项", questions:10, minutes:22, difficulty:"较难", source:"区教研精选", usage:576, tag:"special", tone:"lilac" },
  { id:"t29", title:"本校周末分层作业 A 组题单", focus:"面向基础薄弱学生巩固", reason:"本校分层作业", questions:15, minutes:20, difficulty:"简单", source:"启航实验学校数学组", usage:168, tag:"school", tone:"mist" },
  { id:"t30", title:"本校周末分层作业 B 组题单", focus:"基础巩固后的综合应用", reason:"本校分层作业", questions:18, minutes:28, difficulty:"中等", source:"启航实验学校数学组", usage:152, tag:"school", tone:"sage" },
  { id:"t31", title:"代数式实际意义专项题单", focus:"由情境列式并解释代数式", reason:"方法专项", questions:13, minutes:18, difficulty:"中等", source:"平湖片区教研", usage:692, tag:"special", tone:"cream" },
  { id:"t32", title:"几何语言规范书写题单", focus:"训练符号语言与文字表达", reason:"规范表达专项", questions:12, minutes:20, difficulty:"中等", source:"龙岗区教研室", usage:804, tag:"special", tone:"lilac" },
  { id:"t33", title:"期中考试压轴题拆解题单", focus:"按关键步骤拆解综合题", reason:"名校共建", questions:9, minutes:30, difficulty:"较难", source:"龙岗区四中联考", usage:1036, tag:"paper", tone:"mist" },
  { id:"t34", title:"方程典型题型与变式配套题单", focus:"典型方程题型与变式训练", reason:"配套题单", questions:20, minutes:30, difficulty:"中等", source:"常用专题训练系列", usage:916, tag:"workbook", tone:"sage" },
  { id:"t35", title:"月考前 20 分钟查漏题单", focus:"快速覆盖本月教学重点", reason:"最近收藏增长快", questions:14, minutes:20, difficulty:"中等", source:"坂田片区教研", usage:1274, tag:"latest", tone:"cream" }
];

const byId = Object.fromEntries(topics.map(topic => [topic.id, topic]));
const toneMap = { sage:"var(--sage)", cream:"var(--cream)", lilac:"var(--lilac)", mist:"var(--mist)" };
let currentFilter = "all";
let currentQuery = "";
let infiniteObserver = null;
let infiniteBatchIndex = 0;
let infiniteLoading = false;

const contentFeed = document.querySelector("#contentFeed");
const emptyState = document.querySelector("#emptyState");
const detailDrawer = document.querySelector("#detailDrawer");
const drawerMask = document.querySelector("#drawerMask");
const aiMask = document.querySelector("#aiMask");
const toast = document.querySelector("#toast");

function match(topic) {
  const filterMatch = currentFilter === "all"
    || topic.tag === currentFilter
    || (currentFilter === "chapter" && topic.tag === "workbook")
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

function firstScreenSection() {
  const commonTopics = [byId.t1, byId.t2, byId.t3, byId.t4, byId.t5];
  return `
    <section class="first-screen" aria-label="首屏资源概览">
      <div class="featured-lists">
        <article class="list-panel">
          <header>
            <div><p>来自深圳真题、龙岗专题与本地共建</p><h2>龙岗老师常用题单</h2></div>
            <button>查看全部 <i class="ri-arrow-right-s-line"></i></button>
          </header>
          <div>${commonTopics.map((topic, index) => compactRow(topic, index + 1)).join("")}</div>
        </article>
        <article class="resource-overview">
          <header>
            <div><p><span class="live-dot"></span> 最近更新于 10 分钟前</p><h2>龙岗七年级资源概览</h2></div>
            <button>更新记录</button>
          </header>
          <div class="coverage-grid" aria-label="资源覆盖">
            <div><small>同步练习</small><strong>326</strong><span>份</span><em>覆盖教材 5 章</em></div>
            <div><small>知识点专项</small><strong>418</strong><span>份</span><em>易错、方法与培优</em></div>
            <div><small>深圳真题</small><strong>126</strong><span>套</span><em>覆盖近 3 学年</em></div>
            <div><small>本区与校本</small><strong>92</strong><span>份</span><em>龙岗学校持续共建</em></div>
          </div>
          <div class="recent-resource-list">
            <span>刚刚补充</span>
            <button data-topic="t2"><b>2026 深圳南山区初一上期末精选</b><i class="ri-arrow-right-s-line"></i></button>
            <button data-topic="t1"><b>龙岗易错二练：有理数运算</b><i class="ri-arrow-right-s-line"></i></button>
            <button data-topic="t5"><b>深圳期末真题：全等三角形</b><i class="ri-arrow-right-s-line"></i></button>
          </div>
        </article>
      </div>
    </section>`;
}

function chapterSection() {
  const chapterTopics = [byId.t8, byId.t9, byId.t10, byId.t11, byId.t12];
  return `
    <section class="chapter-section">
      <header class="shelf-header">
        <div class="shelf-title"><h2>同步练习 · 按教材章节找</h2><p>已匹配人教版七年级上册，也可以切换教材版本</p></div>
        <button class="view-all">切换教材版本 <i class="ri-arrow-right-s-line"></i></button>
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
    { name:"常用同步训练系列", desc:"课时练、导学与分层作业", topics:[byId.t9, byId.t7] },
    { name:"本地能力过关系列", desc:"课时诊断、基础过关与提优", topics:[byId.t19, byId.t20] }
  ];
  return `
    <section class="workbook-section">
      <header class="shelf-header">
        <div class="shelf-title"><h2>同步练习 · 按常用配套系列找</h2><p>信任某套练习体系时，可以进入系列查看它的全部题单</p></div>
        <button class="view-all">全部配套系列 <i class="ri-arrow-right-s-line"></i></button>
      </header>
      <div class="workbook-groups">
        ${groups.map((group, groupIndex) => `
          <article class="workbook-group tone-${groupIndex + 1}">
            <header>
              <span class="book-mark">配</span>
              <div><h3>${group.name}</h3><p>${group.desc}</p></div>
              <button>查看全部题单</button>
            </header>
            <div>${group.topics.map((topic,index)=>compactRow(topic,index+1)).join("")}</div>
          </article>`).join("")}
      </div>
    </section>`;
}

function specialSection() {
  return shelf(
    "专项练习 · 按知识点复习",
    "从易错、方法、情境到培优，按知识点集中训练",
    ["t1","t3","t5","t23","t31"]
  );
}

function paperSection() {
  const paperTopics = [byId.t2, byId.t4, byId.t6, byId.t14];
  return `
    <section class="paper-section">
      <header class="shelf-header">
        <div class="shelf-title"><h2>试卷题单 · 找本地真题</h2><p>按地区、考试阶段与年份筛选，快速找到本地命题参考</p></div>
        <button class="view-all">全部试卷题单 <i class="ri-arrow-right-s-line"></i></button>
      </header>
      <div class="paper-browser">
        <nav class="paper-filters" aria-label="试卷类型">
          <button class="active"><b>深圳区级真题</b><small>近三学年 · 126 套</small></button>
          <button><b>龙岗区统考</b><small>期中、期末与模拟</small></button>
          <button><b>名校考试</b><small>周测、月考与联考</small></button>
        </nav>
        <div class="paper-list">
          ${paperTopics.map((topic, index) => compactRow(topic, index + 1)).join("")}
        </div>
      </div>
    </section>`;
}

function schoolSection() {
  const schoolTopics = [byId.t21, byId.t16, byId.t2, byId.t11, byId.t12];
  return `
    <section class="school-section">
      <header class="shelf-header">
        <div class="shelf-title"><h2>本区与本校资源</h2><p>优先展示龙岗区教研、学校和备课组正在使用的题单</p></div>
        <button class="view-all">进入本区题库 <i class="ri-arrow-right-s-line"></i></button>
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

const infiniteBatches = [
  {
    layout:"rows",
    title:"近期老师收藏较多",
    subtitle:"来自真实收藏与使用增长",
    ids:["t22","t23","t24","t25","t26","t27"]
  },
  {
    layout:"tiles",
    title:"更多教学任务题单",
    subtitle:"小测、易错、分层、真题和方法专项",
    ids:["t28","t29","t30","t31","t32","t33","t34","t35"]
  },
  {
    layout:"cards",
    title:"刚刚更新的优质题单",
    subtitle:"本地教研、学校和常用训练系列持续补充",
    ids:["t35","t28","t25","t34","t23","t32"]
  }
];

function infiniteBatchMarkup(batch, cycle) {
  const list = batch.ids.map(id => byId[id]).filter(Boolean);
  return `
    <section class="endless-batch">
      ${cycle === 0 ? `<header class="shelf-header"><div class="shelf-title"><h2>更多题单</h2><p>继续向下浏览，所有内容都可以直接预览和使用</p></div><span class="batch-mark">共 30+ 份</span></header>` : ""}
      <div class="flat-resource-grid">${list.map(topicCard).join("")}</div>
    </section>`;
}

function appendInfiniteBatch() {
  const feed = document.querySelector("#endlessFeed");
  if (!feed) return;
  const batch = infiniteBatches[infiniteBatchIndex % infiniteBatches.length];
  const wrapper = document.createElement("div");
  wrapper.innerHTML = infiniteBatchMarkup(batch, infiniteBatchIndex);
  const section = wrapper.firstElementChild;
  feed.appendChild(section);
  bindContentEvents(section);
  infiniteBatchIndex += 1;
}

function setupInfiniteFeed() {
  if (infiniteObserver) infiniteObserver.disconnect();
  infiniteBatchIndex = 0;
  infiniteLoading = false;
  const sentinel = document.querySelector("#loadSentinel");
  if (!sentinel) return;
  appendInfiniteBatch();
  infiniteObserver = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting) || infiniteLoading) return;
    infiniteLoading = true;
    sentinel.classList.add("loading");
    setTimeout(() => {
      appendInfiniteBatch();
      sentinel.classList.remove("loading");
      infiniteLoading = false;
    }, 420);
  }, { rootMargin:"700px 0px" });
  infiniteObserver.observe(sentinel);
}

function renderDefaultFeed() {
  return [
    firstScreenSection(),
    chapterSection(),
    workbookSection(),
    specialSection(),
    paperSection(),
    schoolSection(),
    `
    <section class="weekly-hot list-panel">
      <header><div><p>依据近 7 天真实使用数据</p><h2>本周龙岗热门题单</h2></div><button>完整榜单 <i class="ri-arrow-right-s-line"></i></button></header>
      <div>${[byId.t4,byId.t18,byId.t2,byId.t9].map((topic,index)=>compactRow(topic,index+1)).join("")}</div>
    </section>`,
    `
    <section class="collection-section">
      <header class="shelf-header"><div class="shelf-title"><h2>题单合集</h2><p>按章节、考试与训练系列整理成组，适合连续教学</p></div><button class="view-all">全部合集 <i class="ri-arrow-right-s-line"></i></button></header>
      <div class="collection-grid">
        <button class="collection-card green" data-topic="t8"><span>8 份题单</span><h3>七上有理数<br>完整题单合集</h3><p>课时练习、易错专项、单元复习与检测</p><strong>4,826 位老师使用</strong></button>
        <button class="collection-card cream" data-topic="t14"><span>12 份题单</span><h3>龙岗近三年<br>期末试卷题单合集</h3><p>按年份、难度和题型重新整理</p><strong>36 所学校共同使用</strong></button>
        <button class="collection-card lilac" data-topic="t19"><span>16 份题单</span><h3>本地常用训练<br>配套题单合集</h3><p>按同一训练体系整理，可直接调整和使用</p><strong>本周新增 3 份</strong></button>
      </div>
    </section>
    <div id="endlessFeed" class="endless-feed"></div>
    <div id="loadSentinel" class="load-sentinel" aria-live="polite">
      <span class="loading-ring"></span><p>继续向下，发现更多题单</p>
    </div>`
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
  if (defaultState) setupInfiniteFeed();
  else if (infiniteObserver) infiniteObserver.disconnect();
}

function bindContentEvents(root = document) {
  root.querySelectorAll("[data-topic]").forEach(element => {
    const open = () => openTopic(element.dataset.topic);
    element.addEventListener("click", event => {
      if (event.target.closest("[data-bookmark]")) return;
      open();
    });
    if (element.matches("[tabindex]")) element.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); }
    });
  });
  root.querySelectorAll("[data-bookmark]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      button.classList.toggle("saved");
      button.innerHTML = button.classList.contains("saved") ? '<i class="ri-bookmark-fill"></i>' : '<i class="ri-bookmark-line"></i>';
      showToast(button.classList.contains("saved") ? "已收藏到我的题单" : "已取消收藏");
    });
  });
  root.querySelectorAll(".view-all, .trending-panel header button").forEach(button => button.addEventListener("click", () => showToast("已展开更多题单")));
  root.querySelectorAll(".source-tabs button").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".source-tabs button").forEach(item => item.classList.toggle("active", item === button));
    showToast(`正在查看${button.textContent}题单`);
  }));
  root.querySelectorAll(".chapter-rail button").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".chapter-rail button").forEach(item => item.classList.toggle("active", item === button));
    showToast(`已切换到${button.querySelector("b").textContent}`);
  }));
  root.querySelectorAll(".workbook-group > header > button").forEach(button => button.addEventListener("click", () => {
    showToast("已展开该系列的全部题单");
  }));
  root.querySelectorAll(".paper-filters button").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".paper-filters button").forEach(item => item.classList.toggle("active", item === button));
    showToast(`正在查看${button.querySelector("b").textContent}`);
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
