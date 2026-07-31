const topics = [
  { id:"hero", title:"2026 龙岗七上期末冲刺：高频考点与压轴分层", focus:"覆盖必考基础、常见易错和综合拓展，适合期末冲刺前完成一次系统复习。", reason:"龙岗区教研精选 · 今日更新", questions:24, minutes:45, difficulty:"中等", source:"龙岗区教研中心", usage:3642, tag:"paper", tone:"deep" },
  { id:"t1", title:"龙岗易错二练：有理数符号与运算", focus:"错因诊断、针对变式、二次过关", reason:"龙岗易错二练", questions:15, minutes:20, difficulty:"中等", source:"龙岗区易错专题", usage:386, tag:"special", tone:"sage" },
  { id:"t2", title:"2026 深圳南山区初一上期末数学真题", focus:"本地命题风格与阶段难度参考", reason:"深圳区级真题", highlight:"精品", questions:22, minutes:40, difficulty:"中等", source:"南山区初一上期末真题", usage:1206, tag:"paper", tone:"cream" },
  { id:"t3", title:"深圳情境数学：代数式建模专项题单", focus:"深圳真实情境改编，考点不变、题面更新", reason:"深圳情境题", highlight:"名师推荐", questions:12, minutes:25, difficulty:"中等", source:"深圳情境题专题", usage:842, tag:"special", tone:"lilac" },
  { id:"t4", title:"2024—2026 深圳期末真题汇编：轴对称", focus:"把分散真题整理成可直接使用的课内专题", reason:"真题汇编", highlight:"精品", questions:24, minutes:35, difficulty:"较难", source:"深圳初一下期末真题", usage:1532, tag:"paper", tone:"mist" },
  { id:"t5", title:"2025—2026 深圳期末真题汇编：全等三角形", focus:"按考点重组近两年深圳区级真题", reason:"真题汇编", highlight:"精品", questions:18, minutes:30, difficulty:"中等", source:"深圳初一下期末真题", usage:613, tag:"special", tone:"sage" },
  { id:"t6", title:"初一期末高频易错周测题单", focus:"名校周测，适合分层选题与命题参考", reason:"名校资源", highlight:"精品", questions:18, minutes:30, difficulty:"较难", source:"深圳外国语学校龙岗学校", usage:1089, tag:"paper", tone:"cream" },
  { id:"t7", title:"整式运算高频易错巩固题单", focus:"整式运算常见错误归纳", reason:"热门系列", questions:14, minutes:20, difficulty:"中等", source:"全品学练考", usage:522, tag:"workbook", tone:"lilac" },
  { id:"t8", title:"正负数实际意义与数轴过关题单", focus:"理解实际意义，准确判断", reason:"七上第1章", questions:16, minutes:20, difficulty:"简单", source:"区教研精选", usage:762, tag:"chapter", tone:"sage" },
  { id:"t9", title:"有理数运算基础过关与易错自测", focus:"贴近教材知识链与能力层级", reason:"本地教辅", highlight:"精品", questions:20, minutes:25, difficulty:"中等", source:"多维导学案", usage:1143, tag:"workbook", tone:"cream" },
  { id:"t10", title:"整式加减：合并同类项与去括号过关", focus:"合并同类项与化简", reason:"七上第3章", questions:18, minutes:20, difficulty:"简单", source:"龙岗区教研室", usage:908, tag:"chapter", tone:"lilac" },
  { id:"t11", title:"一元一次方程应用：审题建模专项", focus:"顺序解题方法与实际应用", reason:"本校老师共建", questions:22, minutes:25, difficulty:"中等", source:"启航实验学校数学组", author:{ name:"李老师", school:"启航实验学校", tone:"amber" }, usage:1221, tag:"school", tone:"mist" },
  { id:"t12", title:"几何初步：图形语言与概念辨析", focus:"直线、射线和线段", reason:"七上第4章", questions:14, minutes:15, difficulty:"简单", source:"龙岗区实验学校", author:{ name:"赵老师", school:"龙岗区实验学校", tone:"mint" }, usage:669, tag:"school", tone:"sage" },
  { id:"t13", title:"有理数混合运算：方法进阶与提速", focus:"综合运算与技巧提升", reason:"七上第5章", questions:20, minutes:25, difficulty:"中等", source:"区教研精选", usage:1015, tag:"chapter", tone:"cream" },
  { id:"t14", title:"2026 深圳福田区初一下期中数学真题", focus:"深圳真实阶段性考试，适合校准教学进度与难度", reason:"深圳区级真题", highlight:"最新", questions:20, minutes:35, difficulty:"较难", source:"福田区初一下期中真题", usage:984, tag:"paper", tone:"sage" },
  { id:"t15", title:"坂田片区七上课堂小测：整式加减", focus:"课堂检测，及时巩固", reason:"课堂小测", highlight:"最新", questions:12, minutes:15, difficulty:"简单", source:"坂田片区教研", author:{ name:"黄老师", school:"坂田实验学校", tone:"amber" }, usage:512, tag:"chapter", tone:"cream" },
  { id:"t16", title:"月考前查漏补缺：七上核心考点精选", focus:"月考精选，重点突破", reason:"月考精选", questions:18, minutes:25, difficulty:"中等", source:"龙岗区实验学校", author:{ name:"赵老师", school:"龙岗区实验学校", tone:"mint" }, usage:1266, tag:"school", tone:"lilac" },
  { id:"t17", title:"七上易错题二次过关：概念到变式", focus:"教研共建，优质共享", reason:"教研共建", highlight:"最新", questions:16, minutes:20, difficulty:"中等", source:"平湖片区教研", author:{ name:"刘老师", school:"平湖外国语学校", tone:"violet" }, usage:698, tag:"school", tone:"mist" },
  { id:"t18", title:"深圳中考衔接：数与式思维进阶题单", focus:"教材变式、探究题与优生挑战", reason:"巩固复习", highlight:"名师推荐", questions:22, minutes:35, difficulty:"较难", source:"深圳中考专题", usage:1374, tag:"special", tone:"sage" },
  { id:"t19", title:"课内基础到探究题：进阶提升题单", focus:"从课内基础过渡到探究与培优", reason:"提优配套", questions:18, minutes:30, difficulty:"中等", source:"常用提优训练系列", usage:831, tag:"workbook", tone:"cream" },
  { id:"t20", title:"典型错法拆解：有理数与方程方法点拨", focus:"归纳典型错法并配套针对变式", reason:"老师收藏较多", questions:16, minutes:25, difficulty:"中等", source:"易错方法系列", usage:742, tag:"workbook", tone:"lilac" },
  { id:"t21", title:"期中错题重组：三个班高频失分题", focus:"基于三个班真实易错题", reason:"本校老师共建", questions:15, minutes:22, difficulty:"中等", source:"启航实验学校数学组", author:{ name:"陈老师", school:"启航实验学校", tone:"blue" }, usage:96, tag:"school", tone:"mist" },
  { id:"t22", title:"有理数课堂诊断题单", focus:"当堂检测概念掌握情况", reason:"课堂小测", questions:8, minutes:5, difficulty:"简单", source:"龙城初级中学", author:{ name:"周老师", school:"龙城初级中学", tone:"rose" }, usage:728, tag:"chapter", tone:"sage" },
  { id:"t23", title:"一元一次方程移项与符号易错专练", focus:"集中突破移项与符号错误", reason:"高频易错", questions:14, minutes:18, difficulty:"中等", source:"区教研精选", usage:1186, tag:"chapter", tone:"cream" },
  { id:"t24", title:"线段与角：易混概念辨析与规范表达", focus:"易混概念判断与规范表达", reason:"概念辨析", questions:12, minutes:15, difficulty:"简单", source:"龙岗区实验学校", usage:635, tag:"chapter", tone:"lilac" },
  { id:"t25", title:"2026 深圳罗湖区初一下期末数学真题", focus:"深圳真实阶段性考试，反映本地命题风格", reason:"深圳区级真题", highlight:"最新", questions:20, minutes:30, difficulty:"中等", source:"罗湖区初一下期末真题", usage:1458, tag:"paper", tone:"mist" },
  { id:"t26", title:"整式运算同步精练：基础到综合", focus:"同步巩固整式化简方法", reason:"热门系列", questions:18, minutes:25, difficulty:"中等", source:"原创新课堂", usage:884, tag:"workbook", tone:"sage" },
  { id:"t27", title:"期末选择题高频考法与快速提分", focus:"高频选择题与排除方法", reason:"本周热门", questions:16, minutes:20, difficulty:"中等", source:"龙岗区教研室", usage:1328, tag:"paper", tone:"cream" },
  { id:"t28", title:"数学阅读理解：真实情境信息提取", focus:"从真实情境中提取数量关系", reason:"情境专项", questions:10, minutes:22, difficulty:"较难", source:"区教研精选", usage:576, tag:"special", tone:"lilac" },
  { id:"t29", title:"周末分层作业 A：基础巩固与补弱", focus:"面向基础薄弱学生巩固", reason:"基础巩固", questions:15, minutes:20, difficulty:"简单", source:"启航实验学校数学组", author:{ name:"陈老师", school:"启航实验学校", tone:"blue" }, usage:168, tag:"school", tone:"mist" },
  { id:"t30", title:"周末分层作业 B：综合应用与提升", focus:"基础巩固后的综合应用", reason:"综合应用", questions:18, minutes:28, difficulty:"中等", source:"启航实验学校数学组", author:{ name:"陈老师", school:"启航实验学校", tone:"blue" }, usage:152, tag:"school", tone:"sage" },
  { id:"t31", title:"代数式建模：真实情境列式专项", focus:"由情境列式并解释代数式", reason:"方法专项", questions:13, minutes:18, difficulty:"中等", source:"平湖片区教研", usage:692, tag:"special", tone:"cream" },
  { id:"t32", title:"几何语言：符号转换与规范书写专项", focus:"训练符号语言与文字表达", reason:"规范表达专项", questions:12, minutes:20, difficulty:"中等", source:"龙岗区教研室", usage:804, tag:"special", tone:"lilac" },
  { id:"t33", title:"期中压轴题：关键步骤分层拆解", focus:"按关键步骤拆解综合题", reason:"名校共建", questions:9, minutes:30, difficulty:"较难", source:"龙岗区四中联考", usage:1036, tag:"paper", tone:"mist" },
  { id:"t34", title:"一元一次方程：典型题型与变式突破", focus:"典型方程题型与变式训练", reason:"热门系列", questions:20, minutes:30, difficulty:"中等", source:"多维导学案", usage:916, tag:"workbook", tone:"sage" },
  { id:"t35", title:"月考前查漏：本月高频易错", focus:"快速覆盖本月教学重点", reason:"查漏补缺", highlight:"最新", questions:14, minutes:20, difficulty:"中等", source:"坂田片区教研", usage:1274, tag:"chapter", tone:"cream" },
  { id:"t36", title:"七上有理数方法：公开课配套小测", focus:"从概念辨析到方法迁移的课堂练习", reason:"名校公开交流", highlight:"精品", questions:12, minutes:18, difficulty:"中等", source:"深圳中学龙岗学校", usage:1682, tag:"school", tone:"sage" },
  { id:"t37", title:"期中压轴题：关键步骤与分层选题", focus:"按关键步骤拆分综合题，适合分层使用", reason:"名校教研共建", highlight:"精品", questions:10, minutes:28, difficulty:"较难", source:"龙岗区实验学校", usage:1436, tag:"school", tone:"cream" },
  { id:"t38", title:"数学阅读与真实情境建模题单", focus:"从真实语境中提取数量关系与条件", reason:"名校公开交流", highlight:"精品", questions:14, minutes:25, difficulty:"中等", source:"龙岗区外国语学校", usage:1298, tag:"school", tone:"lilac" },
  { id:"t39", title:"几何语言规范与推理进阶题单", focus:"强化图形语言、推理步骤与规范书写", reason:"名校教研共建", highlight:"精品", questions:16, minutes:24, difficulty:"中等", source:"龙城初级中学", usage:1184, tag:"school", tone:"mist" },
  { id:"t40", title:"有理数概念：数轴、相反数与绝对值过关", focus:"概念辨析、数轴表示与相反数", reason:"同步巩固", questions:16, minutes:20, difficulty:"简单", source:"多维导学案", usage:968, tag:"workbook", tone:"sage" },
  { id:"t41", title:"有理数单元检测：运算、应用与探究", focus:"覆盖运算法则、混合运算与实际应用", reason:"单元检测", highlight:"精品", questions:22, minutes:35, difficulty:"中等", source:"多维导学案", usage:1046, tag:"workbook", tone:"mist" },
  { id:"t42", title:"整式加减课时精练：去括号与合并同类项", focus:"合并同类项与去括号课时训练", reason:"热门系列", questions:14, minutes:18, difficulty:"简单", source:"全品学练考", usage:786, tag:"workbook", tone:"cream" },
  { id:"t43", title:"一元一次方程同步检测：解法与应用", focus:"从解方程到实际问题的阶段检测", reason:"热门系列", questions:20, minutes:30, difficulty:"中等", source:"全品学练考", usage:852, tag:"workbook", tone:"lilac" },
  { id:"t44", title:"有理数规律探究与思维进阶", focus:"从基础运算过渡到规律探究", reason:"能力提高", questions:15, minutes:28, difficulty:"较难", source:"常用提优训练系列", usage:734, tag:"workbook", tone:"sage" },
  { id:"t45", title:"方程应用培优：复杂数量关系建模", focus:"复杂数量关系与多步骤建模", reason:"培优专题", questions:12, minutes:30, difficulty:"较难", source:"常用提优训练系列", usage:698, tag:"workbook", tone:"cream" },
  { id:"t46", title:"有理数符号易错二练：错因到变式", focus:"定位符号错误并完成针对变式", reason:"易错二练", questions:16, minutes:22, difficulty:"中等", source:"易错方法系列", usage:824, tag:"workbook", tone:"lilac" },
  { id:"t47", title:"方程移项、去分母与检验错法点拨", focus:"集中解决移项、去分母与检验问题", reason:"错法点拨", questions:14, minutes:24, difficulty:"中等", source:"易错方法系列", usage:778, tag:"workbook", tone:"mist" },
  { id:"t48", title:"整式加减同步方法：易错点与变式", focus:"围绕课时重点进行方法归纳", reason:"热门系列", questions:15, minutes:20, difficulty:"中等", source:"原创新课堂", usage:812, tag:"workbook", tone:"sage" },
  { id:"t49", title:"几何初步同步方法：图形语言与推理", focus:"直线、射线、线段与角的规范表达", reason:"热门系列", questions:16, minutes:22, difficulty:"中等", source:"原创新课堂", usage:744, tag:"workbook", tone:"cream" },
  { id:"t50", title:"一元一次方程题型突破：解法到应用", focus:"分类掌握方程典型题型和变式", reason:"热门系列", questions:18, minutes:28, difficulty:"中等", source:"多维导学案", usage:936, tag:"workbook", tone:"lilac" },
  { id:"t51", title:"几何语言专题：读图、转换与规范表达", focus:"训练几何语言转换与推理书写", reason:"热门系列", questions:14, minutes:24, difficulty:"中等", source:"多维导学案", usage:868, tag:"workbook", tone:"mist" }
];

const byId = Object.fromEntries(topics.map(topic => [topic.id, topic]));
const toneMap = { sage:"var(--sage)", cream:"var(--cream)", lilac:"var(--lilac)", mist:"var(--mist)" };
let currentFilter = "all";
let currentQuery = "";
let infiniteObserver = null;
let infiniteBatchIndex = 0;
let infiniteLoading = false;
let feedCardOrder = 0;
let editorialCarouselTimer = null;
const feedFilterState = { type:"all", difficulty:"all", source:"all", sort:"default" };

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
    || (currentFilter === "latest" && topic.highlight === "最新");
  const text = [topic.title, topic.focus, topic.reason, topic.source].join(" ").toLowerCase();
  return filterMatch && (!currentQuery || text.includes(currentQuery.toLowerCase()));
}

function sourceMarkup(topic) {
  if (topic.author) {
    return `
      <div class="teacher-source">
        <span class="teacher-avatar ${topic.author.tone || ""}">${topic.author.name.slice(0,1)}</span>
        <span><b>${topic.author.name}</b><small>${topic.author.school}</small></span>
      </div>`;
  }
  if (topic.tag === "workbook") {
    return `
      <div class="resource-source">
        <span class="source-type-icon"><i class="ri-book-2-line"></i></span>
        <span><button class="series-link" data-series="${topic.source}">${topic.source}<i class="ri-arrow-right-s-line"></i></button></span>
      </div>`;
  }
  const sourceIcon = topic.tag === "paper" ? "ri-file-paper-2-line" : "ri-community-line";
  return `
    <div class="resource-source">
      <span class="source-type-icon"><i class="${sourceIcon}"></i></span>
      <span><b>${topic.source}</b></span>
    </div>`;
}

function topicCard(topic) {
  const badgeClass = {
    "名师推荐": "expert",
    "精品": "quality",
    "最新": "new"
  }[topic.highlight];
  const badge = topic.highlight
    ? `<span class="signal-badge ${badgeClass || ""}">${topic.highlight}</span>`
    : "";
  return `
    <article class="topic-card" data-topic="${topic.id}" data-source-name="${topic.source}" tabindex="0" role="button" aria-label="预览${topic.title}" style="--tone:${toneMap[topic.tone]}">
      <div class="card-cover">
        <div class="card-signals"><span class="card-reason">${topic.reason}</span>${badge}</div>
        <h3>${topic.title}</h3>
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${topic.questions} 题</span><span>${topic.difficulty}</span></div>
        <div class="card-footer">
          ${sourceMarkup(topic)}
          <span class="card-usage">${topic.usage.toLocaleString()} 人使用</span>
          <button class="bookmark" data-bookmark aria-label="收藏题单"><i class="ri-bookmark-line"></i></button>
        </div>
      </div>
    </article>`;
}

function compactRow(topic, rank, metric = "") {
  return `
    <button class="compact-row" data-topic="${topic.id}">
      <span class="rank rank-${rank}">${String(rank).padStart(2, "0")}</span>
      <span class="compact-main"><b>${topic.title}</b><small>${topic.source} · ${topic.questions}题</small></span>
      <strong>${metric || `${topic.usage.toLocaleString()}次使用`}</strong>
      <i class="ri-arrow-right-s-line"></i>
    </button>`;
}

function activityRankingRow(topic, rank, { metric, signal = "", teacher, tone = "" }) {
  const signalClass = signal.toLowerCase();
  return `
    <button class="compact-row ranking-row" data-topic="${topic.id}">
      <span class="rank rank-${rank}">${String(rank).padStart(2, "0")}</span>
      <span class="compact-main">
        <span class="ranking-title-line">
          <b>${topic.title}</b>
          ${signal ? `<em class="ranking-signal ${signalClass}">${signal}</em>` : ""}
        </span>
        <small class="ranking-contributor">
          <span class="teacher-avatar ${tone}">${teacher.slice(0, 1)}</span>
          <span>${teacher}</span>
        </small>
      </span>
      <strong>${metric}</strong>
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

function recommendationCard(topic, reason) {
  const source = topic.author ? `${topic.author.name} · ${topic.author.school}` : topic.source;
  return `
    <button class="recommend-card" data-topic="${topic.id}" style="--tone:${toneMap[topic.tone]}">
      <span class="recommend-reason"><i class="ri-sparkling-2-line"></i>${reason}</span>
      <strong>${topic.title}</strong>
      <small class="recommend-brief">${topic.questions} 题 · ${source}</small>
      <em class="recommend-usage">${topic.usage.toLocaleString()} 人使用</em>
    </button>`;
}

function rankingRow(topic, rank, mode = "hot") {
  const heated = rank <= 3;
  const metric = mode === "rising"
    ? `↑ ${[42, 38, 35, 31, 27, 24][rank - 1]}%`
    : `${topic.usage.toLocaleString()}次`;
  return `
    <button class="ranking-row" data-topic="${topic.id}">
      <span class="rank-heat ${heated ? `heat-${rank}` : ""}">
        ${heated ? '<i class="ri-fire-fill"></i>' : ""}
        <em>${String(rank).padStart(2, "0")}</em>
      </span>
      <span class="compact-main"><b>${topic.title}</b><small>${topic.source} · ${topic.questions}题</small></span>
      <strong>${metric}</strong>
      <i class="ri-arrow-right-s-line"></i>
    </button>`;
}

function personalizedFirstScreenSection() {
  const hot = [byId.t18, byId.t35, byId.t6, byId.t14, byId.t27, byId.t25];
  const rising = [byId.t15, byId.t17, byId.t3, byId.t24, byId.t12, byId.t22];
  return `
    <section class="personalized-first-screen" aria-label="个性化推荐与本周热用">
      <article class="personalized-recommendations">
        <header class="personalized-heading">
          <div><h2>为你推荐</h2></div>
        </header>
        <div class="personalized-grid">
          ${recommendationCard(byId.t20, "你最近使用过")}
          ${recommendationCard(byId.t8, "当前章节")}
          ${recommendationCard(byId.t21, "本校老师刚刚使用")}
          ${recommendationCard(byId.t2, "龙岗同年级近 7 天常用")}
          ${recommendationCard(byId.t15, "你所在片区最近常用")}
          ${recommendationCard(byId.t31, "根据近期专项练习推荐")}
        </div>
      </article>
      <article class="compact-hot-ranking">
        <header>
          <div><h2>龙岗热榜</h2><p>七年级数学 · 每小时更新</p></div>
          <div class="ranking-tabs" role="tablist" aria-label="热榜类型">
            <button class="active" data-ranking-tab="hot" role="tab" aria-selected="true"><i class="ri-fire-fill"></i>热用</button>
            <button data-ranking-tab="rising" role="tab" aria-selected="false"><i class="ri-line-chart-line"></i>飙升</button>
          </div>
        </header>
        <div class="ranking-list" data-ranking-panel="hot">
          ${hot.map((topic, index) => rankingRow(topic, index + 1)).join("")}
        </div>
        <div class="ranking-list" data-ranking-panel="rising" hidden>
          ${rising.map((topic, index) => rankingRow(topic, index + 1, "rising")).join("")}
        </div>
        <button class="ranking-more">查看完整 TOP 20 <i class="ri-arrow-right-line"></i></button>
      </article>
    </section>`;
}

function personalizedRecommendationSection() {
  return `
    <section class="personalized-recommendations recommendation-section-alone" aria-label="个性化题单推荐">
      <header class="personalized-heading">
        <div><h2>为你推荐</h2></div>
      </header>
      <div class="personalized-grid">
        ${recommendationCard(byId.t20, "你最近使用过")}
        ${recommendationCard(byId.t8, "当前章节")}
        ${recommendationCard(byId.t21, "本校老师刚刚使用")}
        ${recommendationCard(byId.t2, "龙岗同年级近 7 天常用")}
        ${recommendationCard(byId.t15, "你所在片区最近常用")}
        ${recommendationCard(byId.t31, "根据近期专项练习推荐")}
      </div>
    </section>`;
}

function syncPracticeSection() {
  const chapterTopics = [byId.t8, byId.t9, byId.t10, byId.t11, byId.t12];
  return `
    <section class="category-detail sync-practice-section">
      <div class="resource-browser">
        <nav class="resource-tree chapter-rail" aria-label="教材章节">
          <button data-result-title="第一章 · 正数与负数"><b>正数与负数</b><small>36 份</small></button>
          <button class="active" data-result-title="第二章 · 有理数及其运算"><b>有理数及其运算</b><small>82 份</small></button>
          <button data-result-title="第三章 · 整式的加减"><b>整式的加减</b><small>64 份</small></button>
          <button data-result-title="第四章 · 一元一次方程"><b>一元一次方程</b><small>71 份</small></button>
          <button data-result-title="第五章 · 图形初步认识"><b>图形初步认识</b><small>48 份</small></button>
        </nav>
        <div class="resource-browser-content">
          <div class="resource-browser-toolbar">
            <div class="resource-chip-group">
              <button class="active">全部练习</button><button>课时练习</button><button>单元检测</button><button>易错巩固</button>
            </div>
            <div class="resource-selector-group">
              <button>人教版七上 <i class="ri-arrow-down-s-line"></i></button>
            </div>
          </div>
          <header class="resource-result-heading"><b>第二章 · 有理数及其运算</b><em>82 份题单</em></header>
          <div class="resource-card-grid">${chapterTopics.map(topicCard).join("")}</div>
        </div>
      </div>
    </section>`;
}

function seriesCategoryView() {
  const seriesTopics = [
    byId.t9, byId.t40, byId.t41,
    byId.t7, byId.t42, byId.t43,
    byId.t19, byId.t44, byId.t45,
    byId.t20, byId.t46, byId.t47,
    byId.t26, byId.t48, byId.t49,
    byId.t34, byId.t50, byId.t51
  ];
  return `
    <section class="category-detail series-category-view">
      <div class="series-panel-heading">
        <div><b>先看题单，再进入系列</b><span>点击题单下方的系列名称，可查看该系列的全部题单</span></div>
        <label class="series-search"><i class="ri-search-line"></i><input data-series-search placeholder="搜索系列或题单名称" /></label>
      </div>
      <div class="series-quick-links">
        <button class="active" data-series-query="">全部系列</button>
        <button data-series-query="全品学练考">全品学练考</button>
        <button data-series-query="原创新课堂">原创新课堂</button>
        <button data-series-query="多维导学案">多维导学案</button>
      </div>
      <div class="series-topic-grid">${seriesTopics.map(topicCard).join("")}</div>
      <div class="series-empty" hidden>没有找到这个系列，换个名称试试。</div>
    </section>`;
}

function taskEntrySection() {
  return `
    <section class="task-entry-section">
      <header class="shelf-header">
        <div class="shelf-title"><h2>按场景找</h2><p>同步、专项和考试，各有最顺手的找法</p></div>
      </header>
      <div class="task-entry-grid">
        <button data-open-filter="chapter">
          <span class="task-entry-icon"><i class="ri-book-open-line"></i></span>
          <span><b>同步练习</b><small>按教材版本和当前章节找</small><em>326 份题单</em></span>
          <i class="ri-arrow-right-line"></i>
        </button>
        <button data-open-filter="special">
          <span class="task-entry-icon"><i class="ri-focus-3-line"></i></span>
          <span><b>专项练习</b><small>按知识点、易错点和能力方向找</small><em>418 份题单</em></span>
          <i class="ri-arrow-right-line"></i>
        </button>
        <button data-open-filter="paper">
          <span class="task-entry-icon"><i class="ri-file-list-3-line"></i></span>
          <span><b>试卷题单</b><small>按期中、期末和中考等场景找</small><em>126 套深圳真题</em></span>
          <i class="ri-arrow-right-line"></i>
        </button>
      </div>
    </section>`;
}

function activityRankingSection() {
  const hot = [
    [byId.t25, { metric:"1.4k 热度", signal:"HOT", teacher:"周老师", tone:"mint" }],
    [byId.t18, { metric:"1.3k 热度", signal:"HOT", teacher:"林老师", tone:"amber" }],
    [byId.t27, { metric:"1.3k 热度", signal:"HOT", teacher:"黄老师", tone:"amber" }],
    [byId.t35, { metric:"1.2k 热度", teacher:"黄老师", tone:"amber" }],
    [byId.t11, { metric:"1.2k 热度", teacher:"李老师", tone:"amber" }],
    [byId.t6, { metric:"1.1k 热度", teacher:"周老师", tone:"mint" }]
  ];
  const latest = [
    [byId.t25, { metric:"1.4k 热度", signal:"NEW", teacher:"周老师", tone:"mint" }],
    [byId.t15, { metric:"510 热度", signal:"NEW", teacher:"黄老师", tone:"amber" }],
    [byId.t17, { metric:"700 热度", signal:"NEW", teacher:"刘老师", tone:"violet" }],
    [byId.t2, { metric:"1.2k 热度", teacher:"林老师", tone:"amber" }],
    [byId.t35, { metric:"1.3k 热度", teacher:"黄老师", tone:"amber" }],
    [byId.t14, { metric:"980 热度", teacher:"周老师", tone:"mint" }]
  ];
  return `
    <section class="activity-ranking-section">
      <div class="ranking-split">
        <div class="ranking-column">
          <header class="shelf-header ranking-external-heading">
            <div class="shelf-title"><h2>热门题单</h2></div>
          </header>
          <article class="ranking-panel">
            ${hot.map(([topic, meta], index) => activityRankingRow(topic, index + 1, meta)).join("")}
          </article>
        </div>
        <div class="ranking-column">
          <header class="shelf-header ranking-external-heading">
            <div class="shelf-title"><h2>最新题单</h2></div>
          </header>
          <article class="ranking-panel latest">
            ${latest.map(([topic, meta], index) => activityRankingRow(topic, index + 1, meta)).join("")}
          </article>
        </div>
      </div>
    </section>`;
}

function homepageSeriesSection() {
  const seriesGroups = [
    {
      name:"多维导学案", teacher:"周老师", teacherTone:"mint",
      count:26, ids:["t9","t40","t41"], accent:"#326c55", wash:"#e7f1eb"
    },
    {
      name:"全品学练考", teacher:"林老师", teacherTone:"amber",
      count:18, ids:["t7","t42","t43"], accent:"#9a7040", wash:"#f5eadc"
    }
  ];
  return `
    <section class="homepage-series-section">
      <header class="shelf-header">
        <div class="shelf-title"><h2>系列题单</h2></div>
        <button class="view-all" data-open-filter="workbook">查看全部系列 <i class="ri-arrow-right-s-line"></i></button>
      </header>
      <div class="series-volume-grid">
        ${seriesGroups.map(item => `
          <article class="series-volume-card" style="--volume-accent:${item.accent};--volume-wash:${item.wash}">
            <div class="volume-catalog">
              <header>
                <div class="volume-series-identity">
                  <button class="volume-series-name" data-series="${item.name}">
                    <span class="volume-series-icon"><i class="ri-book-2-line"></i></span>
                    <b>${item.name}</b>
                  </button>
                  <button class="volume-series-teacher" data-author="${item.teacher}">
                    <span class="teacher-avatar ${item.teacherTone}">${item.teacher.slice(0, 1)}</span>
                    <span>${item.teacher}</span>
                  </button>
                </div>
              </header>
              <div class="volume-topic-list">
                ${item.ids.map((id, index) => {
                  const topic = byId[id];
                  return `
                    <button data-topic="${topic.id}">
                      <span class="volume-topic-index">${String(index + 1).padStart(2, "0")}</span>
                      <span><b>${topic.title}</b><small>${topic.questions} 题 · ${topic.difficulty}</small></span>
                      <strong>${topic.usage.toLocaleString()} 人使用</strong>
                      <i class="ri-arrow-right-s-line"></i>
                  </button>`;
                }).join("")}
              </div>
              <button class="volume-view-all" data-series="${item.name}">
                <span>共 ${item.count} 份题单</span><span>·</span><b>查看全部</b><i class="ri-arrow-right-line"></i>
              </button>
            </div>
          </article>`).join("")}
      </div>
    </section>`;
}

function famousSchoolSection() {
  const schoolResources = [byId.t36, byId.t37, byId.t38, byId.t39, byId.t6];
  return `
    <section class="famous-school-section">
      <header class="shelf-header">
        <div class="shelf-title"><h2>名校资源</h2></div>
      </header>
      <div class="famous-school-grid">
        ${schoolResources.map(topic => `
          <button class="famous-school-card" data-topic="${topic.id}">
            <span class="school-resource-main"><em>${topic.source}</em><b>${topic.title}</b><small>${topic.questions} 题 · ${topic.focus}</small></span>
            <span class="school-card-footer"><strong>${topic.usage.toLocaleString()} 位老师使用</strong><i class="ri-arrow-right-s-line"></i></span>
          </button>`).join("")}
      </div>
    </section>`;
}

function teacherContributionSection(showFullLibrary = false) {
  const teacherTopics = [
    [byId.t21, "七（3）班"],
    [byId.t29, "七（1）班"],
    [byId.t30, "七（2）班"],
    [byId.t11, "七（3）班"]
  ];
  const schoolQuestions = [
    { id:"q1", title:"有理数混合运算：负号漏乘", teacher:"陈老师", tone:"blue", className:"七（3）班", wrong:18, rate:46 },
    { id:"q2", title:"移项后符号未改变", teacher:"李老师", tone:"amber", className:"七（2）班", wrong:14, rate:38 }
  ];
  return `
    <section class="teacher-contribution-section${showFullLibrary ? " school-library-full" : ""}">
      <header class="shelf-header">
        ${showFullLibrary ? `<div class="school-library-view-tabs" role="tablist" aria-label="本校题库内容类型">
          <button class="active" data-school-library-tab="list" role="tab" aria-selected="true">
            <b>题单资源</b><span>整份练习与测评</span>
          </button>
          <button data-school-library-tab="question" role="tab" aria-selected="false">
            <b>题库</b><span>单题与班级错题</span>
          </button>
        </div>` : '<div class="shelf-title"><h2>本校题单</h2></div>'}
        ${showFullLibrary ? `<div class="school-library-filter">
          <button class="school-library-filter-trigger" type="button" aria-expanded="false">
            <i class="ri-filter-3-line"></i><span>全部班级</span>
          </button>
          <div class="school-library-filter-popover" hidden>
            <div class="school-library-filter-group">
              <span>班级</span>
              <button class="active" data-school-filter="class" data-school-value="all">全部班级</button>
              <button data-school-filter="class" data-school-value="七（1）班">七（1）班</button>
              <button data-school-filter="class" data-school-value="七（2）班">七（2）班</button>
              <button data-school-filter="class" data-school-value="七（3）班">七（3）班</button>
            </div>
          </div>
        </div>` : ""}
      </header>
      <div class="teacher-contribution-grid">
        ${teacherTopics.map(([topic, className]) => `
          <button class="teacher-contribution-card" data-topic="${topic.id}" data-school-kind="list" data-school-class="${className}">
            <span class="teacher-contribution-main">
              <span class="school-library-title"><b>${topic.title}</b></span>
              <span class="teacher-contribution-meta">
                <span class="teacher-avatar ${topic.author.tone || ""}">${topic.author.name.slice(0,1)}</span>
                <small>${topic.author.name}</small>
                <em>${className} · ${topic.questions} 题 · ${topic.usage.toLocaleString()} 人使用</em>
              </span>
            </span>
            <i class="ri-arrow-right-s-line"></i>
          </button>`).join("")}
        ${showFullLibrary ? schoolQuestions.map(question => `
          <button class="teacher-contribution-card" data-school-question="${question.id}" data-school-kind="question" data-school-class="${question.className}" hidden>
            <span class="teacher-contribution-main">
              <span class="school-library-title"><em>单题</em><b>${question.title}</b></span>
              <span class="teacher-contribution-meta">
                <span class="teacher-avatar ${question.tone}">${question.teacher.slice(0,1)}</span>
                <small>${question.teacher}</small>
                <em>${question.className} · ${question.wrong} 人答错 · 错误率 ${question.rate}%</em>
              </span>
            </span>
            <i class="ri-arrow-right-s-line"></i>
          </button>`).join("") : ""}
      </div>
      ${showFullLibrary ? '<div class="school-library-empty" hidden>当前筛选下暂无内容</div>' : ""}
    </section>`;
}

function specialCategoryView() {
  const specialTopics = [byId.t1, byId.t3, byId.t5, byId.t23, byId.t28, byId.t31, byId.t32];
  return `
    <section class="category-detail special-detail">
      <div class="resource-browser special-browser">
        <nav class="resource-tree knowledge-nav" aria-label="知识模块">
          <button class="active" data-result-title="数与式"><b>数与式</b><small>126 份</small></button>
          <button data-result-title="方程与不等式"><b>方程与不等式</b><small>84 份</small></button>
          <button data-result-title="函数"><b>函数</b><small>72 份</small></button>
          <button data-result-title="图形与几何"><b>图形与几何</b><small>96 份</small></button>
          <button data-result-title="统计与概率"><b>统计与概率</b><small>40 份</small></button>
        </nav>
        <div class="resource-browser-content knowledge-content">
          <div class="resource-browser-toolbar">
            <div class="resource-chip-group knowledge-filters">
              <button class="active">全部专项</button><button>易错巩固</button><button>方法突破</button><button>情境应用</button><button>培优提高</button>
            </div>
            <div class="resource-selector-group"><button>全部难度 <i class="ri-arrow-down-s-line"></i></button></div>
          </div>
          <header class="resource-result-heading"><b>数与式</b><em>126 份题单</em></header>
          <div class="resource-card-grid result-grid">${specialTopics.map(topicCard).join("")}</div>
        </div>
      </div>
    </section>`;
}

function paperCategoryView() {
  const paperTopics = [byId.t2, byId.t4, byId.t6, byId.t14, byId.t16, byId.t25, byId.t27, byId.t33];
  return `
    <section class="category-detail paper-detail">
      <div class="resource-browser paper-browser">
        <nav class="resource-tree paper-filters" aria-label="考试类型">
          <button class="active" data-result-title="期末考试"><b>期末考试</b><small>38 套</small></button>
          <button data-result-title="期中考试"><b>期中考试</b><small>32 套</small></button>
          <button data-result-title="月考"><b>月考</b><small>24 套</small></button>
          <button data-result-title="单元测试"><b>单元测试</b><small>20 套</small></button>
          <button data-result-title="中考真题"><b>中考真题</b><small>12 套</small></button>
        </nav>
        <div class="resource-browser-content paper-content">
          <div class="resource-browser-toolbar">
            <div class="resource-chip-group"><button class="active">本地优先</button><button>使用最多</button></div>
            <div class="resource-selector-group paper-selectors">
              <button>深圳市 <i class="ri-arrow-down-s-line"></i></button>
              <button>2024—2026 <i class="ri-arrow-down-s-line"></i></button>
              <button>七年级数学 <i class="ri-arrow-down-s-line"></i></button>
            </div>
          </div>
          <header class="resource-result-heading"><b>期末考试</b><em>38 套试卷</em></header>
          <div class="resource-card-grid paper-result-grid">${paperTopics.map(topicCard).join("")}</div>
        </div>
      </div>
    </section>`;
}

function localCategoryView() {
  return `
    <section class="category-detail local-detail">
      ${teacherContributionSection(true)}
    </section>`;
}

function schoolSection() {
  const schoolTopics = [byId.t21, byId.t16, byId.t2, byId.t11, byId.t12];
  return `
    <section class="school-section">
      <header class="shelf-header">
        <div class="shelf-title"><h2>本校题库</h2></div>
      </header>
      <div class="school-table">
        <div class="school-table-head"><span>题单名称</span><span>来源</span><span>内容</span><span>本校使用</span><span></span></div>
        ${schoolTopics.map(topic => `
          <button class="school-row" data-topic="${topic.id}">
            <span><b>${topic.title}</b><small>${topic.focus}</small></span>
            <span>${topic.source}</span>
            <span>${topic.questions} 题 · ${topic.difficulty}</span>
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
    ids:["t1","t3","t4","t5","t10","t11","t12","t13","t19","t23"]
  },
  {
    layout:"tiles",
    title:"更多教学任务题单",
    subtitle:"小测、易错、分层、真题和方法专项",
    ids:["t24","t25","t26","t27","t28","t29","t30","t32","t33","t34"]
  },
  {
    layout:"cards",
    title:"刚刚更新的优质题单",
    subtitle:"本地教研、学校和常用训练系列持续补充",
    ids:["t35","t28","t25","t34","t23","t32","t15","t17","t38","t43"]
  }
];
const infiniteTopicIds = [...new Set([
  ...infiniteBatches.flatMap(batch => batch.ids),
  ...topics.filter(topic => topic.id !== "hero").map(topic => topic.id)
])];

function infiniteFeedMarkup() {
  return `
    <section class="endless-batch">
      <header class="shelf-header"><div class="shelf-title"><h2>题单广场</h2></div></header>
      <div class="square-filter-panel" aria-label="题单广场筛选">
        <div class="square-filter-row">
          <span>类型</span>
          <div>
            <button class="active" data-feed-key="type" data-feed-value="all">全部</button>
            <button data-feed-key="type" data-feed-value="sync">同步练习</button>
            <button data-feed-key="type" data-feed-value="special">专项练习</button>
            <button data-feed-key="type" data-feed-value="paper">试卷题单</button>
          </div>
        </div>
        <div class="square-filter-row">
          <span>难度</span>
          <div>
            <button class="active" data-feed-key="difficulty" data-feed-value="all">不限</button>
            <button data-feed-key="difficulty" data-feed-value="简单">基础</button>
            <button data-feed-key="difficulty" data-feed-value="中等">中等</button>
            <button data-feed-key="difficulty" data-feed-value="较难">提高</button>
          </div>
        </div>
        <div class="square-filter-row">
          <span>来源</span>
          <div>
            <button class="active" data-feed-key="source" data-feed-value="all">全部</button>
            <button data-feed-key="source" data-feed-value="local">龙岗本地</button>
            <button data-feed-key="source" data-feed-value="famous">名校资源</button>
            <button data-feed-key="source" data-feed-value="school">本校共享</button>
          </div>
        </div>
        <div class="square-sort-row">
          <span>排序</span>
          <div>
            <button class="active" data-feed-key="sort" data-feed-value="default">综合</button>
            <button data-feed-key="sort" data-feed-value="usage">使用最多</button>
            <button data-feed-key="sort" data-feed-value="latest">最近更新</button>
          </div>
        </div>
      </div>
      <div class="flat-resource-grid" data-endless-grid></div>
      <div class="square-empty" data-feed-empty hidden>暂时没有符合全部条件的题单，减少一个筛选条件试试。</div>
    </section>`;
}

function topicMatchesFeedFilters(topic) {
  const typeMatch = feedFilterState.type === "all"
    || (feedFilterState.type === "sync" && ["chapter", "workbook"].includes(topic.tag))
    || topic.tag === feedFilterState.type;
  const difficultyMatch = feedFilterState.difficulty === "all" || topic.difficulty === feedFilterState.difficulty;
  const sourceText = `${topic.source} ${topic.author?.school || ""}`;
  const sourceMatch = feedFilterState.source === "all"
    || (feedFilterState.source === "local" && /龙岗|坂田|平湖|龙城/.test(sourceText))
    || (feedFilterState.source === "famous" && /深圳中学|深圳实验|深圳外国语|深圳高级|名校/.test(sourceText))
    || (feedFilterState.source === "school" && Boolean(topic.author));
  return typeMatch && difficultyMatch && sourceMatch;
}

function applyEndlessFilters() {
  const grid = document.querySelector("[data-endless-grid]");
  if (!grid) return;
  const cards = [...grid.querySelectorAll(".topic-card")];
  cards.sort((a, b) => {
    const aTopic = byId[a.dataset.topic];
    const bTopic = byId[b.dataset.topic];
    if (feedFilterState.sort === "usage") return bTopic.usage - aTopic.usage;
    if (feedFilterState.sort === "latest") {
      const aLatest = aTopic.highlight === "最新" ? 1 : 0;
      const bLatest = bTopic.highlight === "最新" ? 1 : 0;
      return bLatest - aLatest || Number(a.dataset.feedOrder) - Number(b.dataset.feedOrder);
    }
    return Number(a.dataset.feedOrder) - Number(b.dataset.feedOrder);
  });
  let visibleCount = 0;
  cards.forEach(card => {
    const visible = topicMatchesFeedFilters(byId[card.dataset.topic]);
    card.hidden = !visible;
    if (visible) visibleCount += 1;
    grid.appendChild(card);
  });
  const count = document.querySelector("[data-feed-result-count]");
  if (count) count.textContent = visibleCount >= 30 ? "30+" : String(visibleCount);
  const empty = document.querySelector("[data-feed-empty]");
  if (empty) empty.hidden = visibleCount > 0;
}

function bindEndlessFilterEvents() {
  document.querySelectorAll("[data-feed-key]").forEach(button => {
    button.addEventListener("click", () => {
      const { feedKey, feedValue } = button.dataset;
      feedFilterState[feedKey] = feedValue;
      document.querySelectorAll(`[data-feed-key="${feedKey}"]`).forEach(item => item.classList.toggle("active", item === button));
      applyEndlessFilters();
    });
  });
}

function appendInfiniteBatch() {
  const feed = document.querySelector("#endlessFeed");
  if (!feed) return;
  if (!feed.querySelector("[data-endless-grid]")) feed.innerHTML = infiniteFeedMarkup();
  const grid = feed.querySelector("[data-endless-grid]");
  const start = infiniteBatchIndex * 10;
  const list = infiniteTopicIds.slice(start, start + 10).map(id => byId[id]).filter(Boolean);
  if (!list.length) return false;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = list.map(topicCard).join("");
  bindContentEvents(wrapper);
  while (wrapper.firstElementChild) grid.appendChild(wrapper.firstElementChild);
  [...grid.children].forEach(card => {
    if (!card.dataset.feedOrder) card.dataset.feedOrder = String(feedCardOrder++);
  });
  infiniteBatchIndex += 1;
  applyEndlessFilters();
  return true;
}

function appendInfinitePage() {
  const first = appendInfiniteBatch();
  const second = appendInfiniteBatch();
  return Boolean(first || second);
}

function setupInfiniteFeed() {
  if (infiniteObserver) infiniteObserver.disconnect();
  infiniteBatchIndex = 0;
  infiniteLoading = false;
  feedCardOrder = 0;
  const sentinel = document.querySelector("#loadSentinel");
  if (!sentinel) return;
  appendInfinitePage();
  bindEndlessFilterEvents();
  infiniteObserver = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting) || infiniteLoading) return;
    infiniteLoading = true;
    sentinel.classList.add("loading");
    setTimeout(() => {
      const appended = appendInfinitePage();
      sentinel.classList.remove("loading");
      infiniteLoading = false;
      if (!appended || infiniteBatchIndex * 10 >= infiniteTopicIds.length) {
        infiniteObserver.disconnect();
        sentinel.classList.add("complete");
        sentinel.querySelector("p").textContent = `已展示全部 ${infiniteTopicIds.length} 份题单`;
      }
    }, 420);
  }, { rootMargin:"700px 0px" });
  infiniteObserver.observe(sentinel);
}

function editorialFeatureSection() {
  const slides = [
    {
      theme:"szlg",
      school:"深圳中学龙岗学校",
      eyebrow:"名校公开课资源",
      title:"七上有理数方法：公开课配套小测",
      description:"从概念辨析到方法迁移，完整保留名校课堂的选题思路与难度梯度。",
      tags:["公开课配套", "方法迁移", "1,682 位老师使用"],
      topic:"t36",
      count:"12 题",
      cardTitle:"有理数<br>方法小测",
      cardMeta:"概念 · 方法 · 迁移"
    },
    {
      theme:"experiment",
      school:"龙岗区实验学校",
      eyebrow:"本区名校教研共建",
      title:"期中压轴题：关键步骤分层选题",
      description:"把综合题拆成关键步骤，基础班、提高班都能直接找到合适的题目。",
      tags:["名校共建", "分层选题", "1,436 位老师使用"],
      topic:"t37",
      count:"10 题",
      cardTitle:"期中压轴<br>分层题单",
      cardMeta:"基础 · 提高 · 挑战"
    },
    {
      theme:"foreign",
      school:"深圳外国语学校龙岗学校",
      eyebrow:"名校周测精选",
      title:"初一期末高频易错：名校周测精选",
      description:"聚合七上期末高频失分点，适合复习课选题、分层作业与命题参考。",
      tags:["期末周测", "高频易错", "1,089 位老师使用"],
      topic:"t6",
      count:"18 题",
      cardTitle:"期末易错<br>周测精选",
      cardMeta:"基础 · 易错 · 压轴"
    }
  ];
  return `
    <section class="editorial-feature" aria-label="龙岗名校精选题单" aria-roledescription="轮播">
      <div class="editorial-feature-track">
        ${slides.map((slide, index) => `
          <article class="editorial-feature-slide editorial-feature-${slide.theme}${index === 0 ? " is-active" : ""}" data-editorial-slide="${index}" data-editorial-topic="${slide.topic}" role="link" tabindex="${index === 0 ? "0" : "-1"}" aria-label="${index + 1} / ${slides.length}，${slide.school}，查看题单" aria-hidden="${index === 0 ? "false" : "true"}">
            <div class="editorial-feature-copy">
              <p><i class="ri-sparkling-2-line"></i> ${slide.eyebrow}</p>
              <strong class="editorial-school-name">${slide.school}</strong>
              <h1>${slide.title}</h1>
              <span>${slide.description}</span>
              <div class="editorial-feature-meta"><span>${slide.count}</span><span>${slide.tags[0]}</span><strong>${slide.tags[2]}</strong><i class="ri-arrow-right-line"></i></div>
            </div>
            <div class="editorial-feature-visual" aria-hidden="true">
              <div class="feature-paper feature-paper-back">
                <small>教研共建</small><b>${slide.count}</b><span></span><span></span>
              </div>
              <div class="feature-paper feature-paper-mid">
                <small>精选题单</small><b>答案解析</b><span></span><span></span><span></span>
              </div>
              <div class="feature-paper feature-paper-front">
                <p>${slide.school}</p>
                <b>${slide.cardTitle}</b>
                <span>${slide.cardMeta}</span>
                <i class="ri-file-list-3-line"></i>
              </div>
            </div>
          </article>`).join("")}
      </div>
      <div class="editorial-carousel-controls" aria-label="切换名校精选">
        <button type="button" data-editorial-prev aria-label="上一页"><i class="ri-arrow-left-s-line"></i></button>
        <div class="editorial-carousel-dots">
          ${slides.map((slide, index) => `<button type="button" data-editorial-dot="${index}" class="${index === 0 ? "active" : ""}" aria-label="查看${slide.school}" aria-current="${index === 0 ? "true" : "false"}"></button>`).join("")}
        </div>
        <button type="button" data-editorial-next aria-label="下一页"><i class="ri-arrow-right-s-line"></i></button>
      </div>
    </section>`;
}

function setupEditorialCarousel(root = document) {
  if (editorialCarouselTimer) {
    clearInterval(editorialCarouselTimer);
    editorialCarouselTimer = null;
  }
  const carousel = root.querySelector(".editorial-feature");
  if (!carousel) return;
  const track = carousel.querySelector(".editorial-feature-track");
  const slides = [...carousel.querySelectorAll("[data-editorial-slide]")];
  const dots = [...carousel.querySelectorAll("[data-editorial-dot]")];
  let activeIndex = 0;
  let pointerStartX = null;
  let suppressSlideClick = false;

  const goTo = index => {
    activeIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${activeIndex * 100}%)`;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === activeIndex;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
      slide.tabIndex = active ? 0 : -1;
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === activeIndex;
      dot.classList.toggle("active", active);
      dot.setAttribute("aria-current", String(active));
    });
  };
  const startAutoPlay = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (editorialCarouselTimer) clearInterval(editorialCarouselTimer);
    editorialCarouselTimer = setInterval(() => goTo(activeIndex + 1), 6500);
  };
  const stopAutoPlay = () => {
    if (editorialCarouselTimer) clearInterval(editorialCarouselTimer);
    editorialCarouselTimer = null;
  };

  carousel.querySelector("[data-editorial-prev]").addEventListener("click", () => goTo(activeIndex - 1));
  carousel.querySelector("[data-editorial-next]").addEventListener("click", () => goTo(activeIndex + 1));
  dots.forEach(dot => dot.addEventListener("click", () => goTo(Number(dot.dataset.editorialDot))));
  slides.forEach(slide => {
    slide.addEventListener("click", () => {
      if (!suppressSlideClick && slide.classList.contains("is-active")) openTopic(slide.dataset.editorialTopic);
    });
    slide.addEventListener("keydown", event => {
      if ((event.key === "Enter" || event.key === " ") && slide.classList.contains("is-active")) {
        event.preventDefault();
        openTopic(slide.dataset.editorialTopic);
      }
    });
  });
  carousel.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") goTo(activeIndex - 1);
    if (event.key === "ArrowRight") goTo(activeIndex + 1);
  });
  carousel.addEventListener("pointerdown", event => { pointerStartX = event.clientX; });
  carousel.addEventListener("pointerup", event => {
    if (pointerStartX === null) return;
    const delta = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(delta) < 42) return;
    suppressSlideClick = true;
    goTo(activeIndex + (delta < 0 ? 1 : -1));
    setTimeout(() => { suppressSlideClick = false; }, 0);
  });
  carousel.addEventListener("pointercancel", () => { pointerStartX = null; });
  carousel.addEventListener("mouseenter", stopAutoPlay);
  carousel.addEventListener("mouseleave", startAutoPlay);
  carousel.addEventListener("focusin", stopAutoPlay);
  carousel.addEventListener("focusout", startAutoPlay);
  startAutoPlay();
}

function renderDefaultFeed() {
  return [
    editorialFeatureSection(),
    homepageSeriesSection(),
    famousSchoolSection(),
    teacherContributionSection(),
    activityRankingSection(),
    personalizedRecommendationSection(),
    `
    <div id="endlessFeed" class="endless-feed"></div>
    <div id="loadSentinel" class="load-sentinel" aria-live="polite">
      <span class="loading-ring"></span><p>继续向下，发现更多题单</p>
    </div>`
  ].join("");
}

function renderCategoryView() {
  if (currentFilter === "chapter") return syncPracticeSection();
  if (currentFilter === "special") return specialCategoryView();
  if (currentFilter === "paper") return paperCategoryView();
  if (currentFilter === "workbook") return seriesCategoryView();
  if (currentFilter === "school") return localCategoryView();
  return renderDefaultFeed();
}

function render() {
  const defaultState = currentFilter === "all" && !currentQuery;
  contentFeed.innerHTML = defaultState ? renderDefaultFeed() : renderCategoryView();
  emptyState.hidden = true;
  contentFeed.hidden = false;
  bindContentEvents();
  if (defaultState) setupInfiniteFeed();
  else if (infiniteObserver) infiniteObserver.disconnect();
}

function bindContentEvents(root = document) {
  root.querySelectorAll("[data-topic]").forEach(element => {
    const open = () => openTopic(element.dataset.topic);
    element.addEventListener("click", event => {
      if (event.target.closest("[data-bookmark], [data-series]")) return;
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
  root.querySelectorAll("[data-ranking-tab]").forEach(button => button.addEventListener("click", () => {
    const ranking = button.closest(".compact-hot-ranking");
    ranking.querySelectorAll("[data-ranking-tab]").forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    ranking.querySelectorAll("[data-ranking-panel]").forEach(panel => {
      panel.hidden = panel.dataset.rankingPanel !== button.dataset.rankingTab;
    });
  }));
  root.querySelectorAll(".ranking-more").forEach(button => button.addEventListener("click", () => showToast("已展开龙岗完整热榜")));
  root.querySelectorAll("[data-open-filter]").forEach(button => button.addEventListener("click", () => {
    setMainFilter(button.dataset.openFilter);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }));
  root.querySelectorAll("[data-series]").forEach(button => button.addEventListener("click", event => {
    event.stopPropagation();
    openSeries(button.dataset.series);
  }));
  root.querySelectorAll("[data-author]").forEach(button => button.addEventListener("click", event => {
    event.stopPropagation();
    showToast(`正在查看${button.dataset.author}发布的题单`);
  }));
  root.querySelectorAll("[data-school-question]").forEach(button => button.addEventListener("click", () => {
    showToast("正在打开单题详情");
  }));
  const updateSchoolLibraryView = section => {
    const kind = section.querySelector("[data-school-library-tab].active")?.dataset.schoolLibraryTab || "list";
    const className = section.querySelector('[data-school-filter="class"].active')?.dataset.schoolValue || "all";
    let visible = 0;
    section.querySelectorAll("[data-school-kind]").forEach(card => {
      const matchesKind = card.dataset.schoolKind === kind;
      const matchesClass = className === "all" || card.dataset.schoolClass === className;
      card.hidden = !(matchesKind && matchesClass);
      if (!card.hidden) visible += 1;
    });
    const empty = section.querySelector(".school-library-empty");
    if (empty) empty.hidden = visible > 0;
  };
  root.querySelectorAll("[data-school-library-tab]").forEach(button => button.addEventListener("click", () => {
    const section = button.closest(".teacher-contribution-section");
    section.querySelectorAll("[data-school-library-tab]").forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    updateSchoolLibraryView(section);
  }));
  root.querySelectorAll(".school-library-filter-trigger").forEach(button => button.addEventListener("click", () => {
    const popover = button.nextElementSibling;
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    popover.hidden = expanded;
  }));
  root.querySelectorAll("[data-school-filter]").forEach(button => button.addEventListener("click", () => {
    const section = button.closest(".teacher-contribution-section");
    const group = button.closest(".school-library-filter-group");
    group.querySelectorAll("[data-school-filter]").forEach(item => item.classList.toggle("active", item === button));
    const className = section.querySelector('[data-school-filter="class"].active').dataset.schoolValue;
    updateSchoolLibraryView(section);
    section.querySelector(".school-library-filter-trigger span").textContent = className === "all" ? "全部班级" : className;
  }));
  root.querySelectorAll(".resource-tree button").forEach(button => button.addEventListener("click", () => {
    const browser = button.closest(".resource-browser");
    button.parentElement.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
    const title = button.dataset.resultTitle || button.querySelector("b").textContent;
    const count = button.querySelector("small").textContent.trim();
    browser.querySelector(".resource-result-heading b").textContent = title;
    browser.querySelector(".resource-result-heading em").textContent = count.includes("套") ? `${count}试卷` : `${count}题单`;
  }));
  root.querySelectorAll(".resource-chip-group button").forEach(button => button.addEventListener("click", () => {
    button.parentElement.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
  }));
  root.querySelectorAll(".resource-selector-group button").forEach(button => button.addEventListener("click", () => {
    showToast(`正在调整${button.textContent.trim()}`);
  }));
  root.querySelectorAll("[data-series-search]").forEach(input => input.addEventListener("input", () => filterSeriesTopics(input.value)));
  root.querySelectorAll("[data-series-query]").forEach(button => button.addEventListener("click", () => {
    const input = button.closest(".series-category-view").querySelector("[data-series-search]");
    input.value = button.dataset.seriesQuery;
    filterSeriesTopics(input.value);
    button.closest(".series-quick-links").querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
  }));
  root.querySelectorAll(".local-source-tabs button").forEach(button => button.addEventListener("click", () => {
    const group = button.parentElement;
    group.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
  }));
  setupEditorialCarousel(root);
}

function setMainFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll("[data-filter]").forEach(chip => {
    const active = chip.dataset.filter === filter;
    chip.classList.toggle("active", active);
    chip.setAttribute("aria-selected", String(active));
  });
  render();
}

function filterSeriesTopics(query) {
  const panel = document.querySelector(".series-category-view");
  if (!panel) return;
  const cleanQuery = query.trim();
  const keyword = cleanQuery.toLowerCase();
  let visible = 0;
  let exactSeries = false;
  panel.querySelectorAll(".series-topic-grid .topic-card").forEach(card => {
    const matches = !keyword || card.dataset.sourceName.toLowerCase().includes(keyword);
    card.hidden = !matches;
    if (matches) visible += 1;
    if (cleanQuery && card.dataset.sourceName === cleanQuery) exactSeries = true;
  });
  panel.querySelector(".series-empty").hidden = visible > 0;
  updateSeriesHeading(cleanQuery, visible, exactSeries);
}

function updateSeriesHeading(query, visible, exactSeries) {
  const view = document.querySelector(".series-category-view");
  if (!view) return;
  const kicker = view.querySelector(".detail-heading p");
  const title = view.querySelector(".detail-heading h1");
  const description = view.querySelector(".detail-heading span");
  const count = view.querySelector(".detail-heading > strong");
  const panelTitle = view.querySelector(".series-panel-heading b");
  const panelCopy = view.querySelector(".series-panel-heading span");
  if (exactSeries) {
    kicker.textContent = "题单系列";
    title.textContent = query;
    description.textContent = "这个系列下的同步、专项与阶段检测题单";
    count.innerHTML = `${visible} <small>份题单</small>`;
    panelTitle.textContent = "全部题单";
    panelCopy.textContent = "按教学场景混合展示，打开后仍可调整题目";
    return;
  }
  kicker.textContent = query ? "系列搜索" : "按熟悉的资料来源找";
  title.textContent = query ? `“${query}”的搜索结果` : "系列题单";
  description.textContent = query
    ? `找到 ${visible} 份来源匹配的题单`
    : "系列只作为题单来源，同一系列可包含同步、专项与阶段检测";
  count.innerHTML = `${query ? visible : 186} <small>份题单</small>`;
  panelTitle.textContent = query ? "匹配题单" : "先看题单，再进入系列";
  panelCopy.textContent = query
    ? "也可以点击快捷系列继续浏览"
    : "点击题单下方的系列名称，可查看该系列的全部题单";
}

function openSeries(seriesName) {
  if (currentFilter !== "workbook") setMainFilter("workbook");
  const input = document.querySelector("[data-series-search]");
  if (input) {
    input.value = seriesName;
    filterSeriesTopics(seriesName);
  }
  showToast(`正在查看「${seriesName}」的全部题单`);
}

function openTopic(id) {
  const topic = byId[id];
  if (!topic) return;
  const context = topic.tag === "workbook"
    ? "series"
    : topic.tag === "paper"
      ? "paper"
      : topic.tag === "special"
        ? "knowledge"
        : "chapter";
  location.href = `./detail.html?topic=${encodeURIComponent(id)}&context=${context}`;
}

function closeTopic() {
  detailDrawer.classList.remove("open");
  detailDrawer.setAttribute("aria-hidden","true");
  setTimeout(()=>{ drawerMask.hidden = true; },220);
  document.body.style.overflow = "";
}

function openAi(prompt = "") {
  document.querySelector("#aiForm").hidden = false;
  document.querySelector("#aiResult").hidden = true;
  if (prompt) document.querySelector(".prompt-box textarea").value = prompt;
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
  setMainFilter(button.dataset.filter);
});
document.querySelector("#resetFilter").addEventListener("click", () => {
  setMainFilter("all");
});
document.querySelector("#aiDock").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.querySelector("#aiQuickInput");
  const prompt = input.value.trim();
  if (!prompt) {
    input.focus();
    showToast("先描述一下想要什么题单");
    return;
  }
  openAi(prompt);
});
document.querySelector("#aiAdd").addEventListener("click", () => showToast("可以添加试卷、图片或资料作为参考"));
document.querySelector("#aiVoice").addEventListener("click", event => {
  event.currentTarget.classList.toggle("active");
  showToast(event.currentTarget.classList.contains("active") ? "正在听，请说出题单要求" : "已停止语音输入");
});
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
