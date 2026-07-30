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
  { id:"t12", title:"图形初步认识巩固题单", focus:"直线、射线和线段", reason:"七上第4章", questions:14, minutes:15, difficulty:"简单", source:"龙岗实验学校", author:{ name:"赵老师", school:"龙岗实验学校", tone:"mint" }, usage:669, tag:"school", tone:"sage" },
  { id:"t13", title:"有理数混合运算提升题单", focus:"综合运算与技巧提升", reason:"七上第5章", questions:20, minutes:25, difficulty:"中等", source:"区教研精选", usage:1015, tag:"chapter", tone:"cream" },
  { id:"t14", title:"龙岗区七年级期末模拟预测题单", focus:"综合模拟，查漏补缺", reason:"新 · 07-28", questions:20, minutes:35, difficulty:"较难", source:"龙岗区教研室", usage:984, tag:"latest", tone:"sage" },
  { id:"t15", title:"坂田片区课堂小测精选题单", focus:"课堂检测，及时巩固", reason:"新 · 07-27", questions:12, minutes:15, difficulty:"简单", source:"坂田片区教研", author:{ name:"黄老师", school:"坂田实验学校", tone:"amber" }, usage:512, tag:"latest", tone:"cream" },
  { id:"t16", title:"龙岗实验学校月考精选题单", focus:"月考精选，重点突破", reason:"新 · 07-27", questions:18, minutes:25, difficulty:"中等", source:"龙岗实验学校", author:{ name:"赵老师", school:"龙岗实验学校", tone:"mint" }, usage:1266, tag:"school", tone:"lilac" },
  { id:"t17", title:"平湖片区数学教研精选题单", focus:"教研共建，优质共享", reason:"新 · 07-27", questions:16, minutes:20, difficulty:"中等", source:"平湖片区教研", author:{ name:"刘老师", school:"平湖外国语学校", tone:"violet" }, usage:698, tag:"latest", tone:"mist" },
  { id:"t18", title:"中考函数模型方法题单", focus:"函数专题，强化训练", reason:"教研员审核", questions:22, minutes:35, difficulty:"较难", source:"龙岗区教研室", usage:1374, tag:"paper", tone:"sage" },
  { id:"t19", title:"基础完成后的进阶提升题单", focus:"从课内基础过渡到探究与培优", reason:"提优配套", questions:18, minutes:30, difficulty:"中等", source:"常用提优训练系列", usage:831, tag:"workbook", tone:"cream" },
  { id:"t20", title:"典型错法与方法点拨题单", focus:"归纳典型错法并配套针对变式", reason:"老师收藏较多", questions:16, minutes:25, difficulty:"中等", source:"易错方法系列", usage:742, tag:"workbook", tone:"lilac" },
  { id:"t21", title:"本校期中错题重组题单", focus:"基于三个班真实易错题", reason:"本校老师共建", questions:15, minutes:22, difficulty:"中等", source:"启航实验学校数学组", author:{ name:"陈老师", school:"启航实验学校", tone:"blue" }, usage:96, tag:"school", tone:"mist" },
  { id:"t22", title:"有理数课堂 5 分钟小测题单", focus:"当堂检测概念掌握情况", reason:"课堂小测", questions:8, minutes:5, difficulty:"简单", source:"龙城初级中学", author:{ name:"周老师", school:"龙城初级中学", tone:"rose" }, usage:728, tag:"chapter", tone:"sage" },
  { id:"t23", title:"一元一次方程移项易错题单", focus:"集中突破移项与符号错误", reason:"高频易错", questions:14, minutes:18, difficulty:"中等", source:"区教研精选", usage:1186, tag:"chapter", tone:"cream" },
  { id:"t24", title:"线段与角基础概念辨析题单", focus:"易混概念判断与规范表达", reason:"概念辨析", questions:12, minutes:15, difficulty:"简单", source:"龙岗实验学校", usage:635, tag:"chapter", tone:"lilac" },
  { id:"t25", title:"2025 深圳中考数学基础题单", focus:"近年真题中的基础得分点", reason:"真题新整理", questions:20, minutes:30, difficulty:"中等", source:"深圳中考试卷", usage:1458, tag:"paper", tone:"mist" },
  { id:"t26", title:"整式运算同步巩固配套题单", focus:"同步巩固整式化简方法", reason:"配套题单", questions:18, minutes:25, difficulty:"中等", source:"同步方法训练系列", usage:884, tag:"workbook", tone:"sage" },
  { id:"t27", title:"期末选择题快速提分题单", focus:"高频选择题与排除方法", reason:"本周热门", questions:16, minutes:20, difficulty:"中等", source:"龙岗区教研室", usage:1328, tag:"paper", tone:"cream" },
  { id:"t28", title:"数学阅读理解情境题单", focus:"从真实情境中提取数量关系", reason:"情境专项", questions:10, minutes:22, difficulty:"较难", source:"区教研精选", usage:576, tag:"special", tone:"lilac" },
  { id:"t29", title:"本校周末分层作业 A 组题单", focus:"面向基础薄弱学生巩固", reason:"本校分层作业", questions:15, minutes:20, difficulty:"简单", source:"启航实验学校数学组", author:{ name:"陈老师", school:"启航实验学校", tone:"blue" }, usage:168, tag:"school", tone:"mist" },
  { id:"t30", title:"本校周末分层作业 B 组题单", focus:"基础巩固后的综合应用", reason:"本校分层作业", questions:18, minutes:28, difficulty:"中等", source:"启航实验学校数学组", author:{ name:"陈老师", school:"启航实验学校", tone:"blue" }, usage:152, tag:"school", tone:"sage" },
  { id:"t31", title:"代数式实际意义专项题单", focus:"由情境列式并解释代数式", reason:"方法专项", questions:13, minutes:18, difficulty:"中等", source:"平湖片区教研", usage:692, tag:"special", tone:"cream" },
  { id:"t32", title:"几何语言规范书写题单", focus:"训练符号语言与文字表达", reason:"规范表达专项", questions:12, minutes:20, difficulty:"中等", source:"龙岗区教研室", usage:804, tag:"special", tone:"lilac" },
  { id:"t33", title:"期中考试压轴题拆解题单", focus:"按关键步骤拆解综合题", reason:"名校共建", questions:9, minutes:30, difficulty:"较难", source:"龙岗区四中联考", usage:1036, tag:"paper", tone:"mist" },
  { id:"t34", title:"方程典型题型与变式配套题单", focus:"典型方程题型与变式训练", reason:"配套题单", questions:20, minutes:30, difficulty:"中等", source:"常用专题训练系列", usage:916, tag:"workbook", tone:"sage" },
  { id:"t35", title:"月考前 20 分钟查漏题单", focus:"快速覆盖本月教学重点", reason:"最近收藏增长快", questions:14, minutes:20, difficulty:"中等", source:"坂田片区教研", usage:1274, tag:"latest", tone:"cream" },
  { id:"t36", title:"深圳中学公开课：有理数方法小测", focus:"从概念辨析到方法迁移的课堂练习", reason:"名校公开交流", questions:12, minutes:18, difficulty:"中等", source:"深圳中学公开交流资源", usage:1682, tag:"school", tone:"sage" },
  { id:"t37", title:"深圳实验学校：期中压轴分层题单", focus:"按关键步骤拆分综合题，适合分层使用", reason:"名校教研共建", questions:10, minutes:28, difficulty:"较难", source:"深圳实验学校校际共建", usage:1436, tag:"school", tone:"cream" },
  { id:"t38", title:"深圳外国语学校：数学阅读情境题单", focus:"从真实语境中提取数量关系与条件", reason:"名校公开交流", questions:14, minutes:25, difficulty:"中等", source:"深圳外国语学校公开交流资源", usage:1298, tag:"school", tone:"lilac" },
  { id:"t39", title:"深圳高级中学初中部：几何表达训练", focus:"强化图形语言、推理步骤与规范书写", reason:"名校教研共建", questions:16, minutes:24, difficulty:"中等", source:"深圳高级中学初中部校际共建", usage:1184, tag:"school", tone:"mist" },
  { id:"t40", title:"有理数概念基础过关题单", focus:"概念辨析、数轴表示与相反数", reason:"同步巩固", questions:16, minutes:20, difficulty:"简单", source:"本地能力过关系列", usage:968, tag:"workbook", tone:"sage" },
  { id:"t41", title:"有理数运算单元检测题单", focus:"覆盖运算法则、混合运算与实际应用", reason:"单元检测", questions:22, minutes:35, difficulty:"中等", source:"本地能力过关系列", usage:1046, tag:"workbook", tone:"mist" },
  { id:"t42", title:"整式加减课时同步题单", focus:"合并同类项与去括号课时训练", reason:"课时同步", questions:14, minutes:18, difficulty:"简单", source:"常用同步训练系列", usage:786, tag:"workbook", tone:"cream" },
  { id:"t43", title:"一元一次方程同步检测题单", focus:"从解方程到实际问题的阶段检测", reason:"阶段检测", questions:20, minutes:30, difficulty:"中等", source:"常用同步训练系列", usage:852, tag:"workbook", tone:"lilac" },
  { id:"t44", title:"有理数思维进阶题单", focus:"从基础运算过渡到规律探究", reason:"能力提高", questions:15, minutes:28, difficulty:"较难", source:"常用提优训练系列", usage:734, tag:"workbook", tone:"sage" },
  { id:"t45", title:"方程应用培优题单", focus:"复杂数量关系与多步骤建模", reason:"培优专题", questions:12, minutes:30, difficulty:"较难", source:"常用提优训练系列", usage:698, tag:"workbook", tone:"cream" },
  { id:"t46", title:"有理数符号易错二练题单", focus:"定位符号错误并完成针对变式", reason:"易错二练", questions:16, minutes:22, difficulty:"中等", source:"易错方法系列", usage:824, tag:"workbook", tone:"lilac" },
  { id:"t47", title:"方程移项错法点拨题单", focus:"集中解决移项、去分母与检验问题", reason:"错法点拨", questions:14, minutes:24, difficulty:"中等", source:"易错方法系列", usage:778, tag:"workbook", tone:"mist" },
  { id:"t48", title:"整式加减同步方法题单", focus:"围绕课时重点进行方法归纳", reason:"同步方法", questions:15, minutes:20, difficulty:"中等", source:"同步方法训练系列", usage:812, tag:"workbook", tone:"sage" },
  { id:"t49", title:"几何初步同步方法题单", focus:"直线、射线、线段与角的规范表达", reason:"同步方法", questions:16, minutes:22, difficulty:"中等", source:"同步方法训练系列", usage:744, tag:"workbook", tone:"cream" },
  { id:"t50", title:"一元一次方程题型突破题单", focus:"分类掌握方程典型题型和变式", reason:"题型专项", questions:18, minutes:28, difficulty:"中等", source:"常用专题训练系列", usage:936, tag:"workbook", tone:"lilac" },
  { id:"t51", title:"几何语言专题训练题单", focus:"训练几何语言转换与推理书写", reason:"方法专项", questions:14, minutes:24, difficulty:"中等", source:"常用专题训练系列", usage:868, tag:"workbook", tone:"mist" }
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
  const badge = topic.tag === "latest"
    ? '<span class="signal-badge new">NEW</span>'
    : topic.usage > 1000
      ? '<span class="signal-badge hot">HOT</span>'
      : "";
  return `
    <article class="topic-card" data-topic="${topic.id}" data-source-name="${topic.source}" tabindex="0" role="button" aria-label="预览${topic.title}" style="--tone:${toneMap[topic.tone]}">
      <div class="card-cover">
        <div class="card-signals"><span class="card-reason">${topic.reason}</span>${badge}</div>
        <h3>${topic.title}</h3>
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${topic.questions} 题</span><span>${topic.minutes} 分钟</span><span>${topic.difficulty}</span></div>
        <div class="card-footer">
          ${sourceMarkup(topic)}
          <span class="card-usage">${topic.usage.toLocaleString()} 人使用</span>
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

function localUpdateStrip() {
  return `
    <section class="local-update-strip" aria-label="龙岗题库更新概况">
      <div class="update-strip-title">
        <span class="live-dot"></span>
        <span><b>龙岗七年级资源持续更新</b><small>最近更新于 10 分钟前</small></span>
      </div>
      <div class="update-strip-stat"><strong>1,286</strong><span>份题单</span></div>
      <div class="update-strip-stat"><strong>68</strong><span>今日新增</span></div>
      <div class="update-strip-stat"><strong>126</strong><span>深圳真题</span></div>
      <div class="update-strip-stat"><strong>12</strong><span>所名校共建</span></div>
      <button class="view-all">查看更新 <i class="ri-arrow-right-s-line"></i></button>
    </section>`;
}

function recommendationCard(topic, reason) {
  const source = topic.author ? `${topic.author.name} · ${topic.author.school}` : topic.source;
  return `
    <button class="recommend-card" data-topic="${topic.id}" style="--tone:${toneMap[topic.tone]}">
      <span class="recommend-reason"><i class="ri-sparkling-2-line"></i>${reason}</span>
      <strong>${topic.title}</strong>
      <small class="recommend-brief">${topic.questions} 题 · ${topic.minutes} 分钟 · ${source}</small>
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
      <span class="compact-main"><b>${topic.title}</b><small>${topic.source} · ${topic.questions}题 · ${topic.minutes}分钟</small></span>
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
          <div><h2>为你推荐</h2><p>依据教学进度与本地使用习惯</p></div>
          <span><i class="ri-refresh-line"></i> 随教学进度更新</span>
        </header>
        <div class="personalized-grid">
          ${recommendationCard(byId.t20, "继续使用 · 易错方法系列")}
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

function syncPracticeSection() {
  const chapterTopics = [byId.t8, byId.t9, byId.t10, byId.t11, byId.t12];
  return `
    <section class="sync-practice-section">
      <header class="shelf-header">
        <div class="shelf-title"><h2>同步练习</h2><p>先确认教材版本，再按当前教学章节找到日常作业题单</p></div>
        <button class="view-all">查看全部同步题单 <i class="ri-arrow-right-s-line"></i></button>
      </header>
      <div class="sync-mode-bar">
        <div class="sync-mode-title"><b>按教材章节</b><span>已自动匹配你的教学身份</span></div>
        <div class="sync-current-source"><span>当前：人教版七年级上册</span><button>切换教材版本</button></div>
      </div>
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
      <header class="detail-heading">
        <div><p>按熟悉的资料来源找</p><h1>配套系列题单</h1><span>系列只作为题单来源，同一系列可包含同步、专项与阶段检测</span></div>
        <strong>186 <small>份题单</small></strong>
      </header>
      <div class="series-panel-heading">
        <div><b>先看题单，再进入系列</b><span>点击题单下方的系列名称，可查看该系列的全部题单</span></div>
        <label class="series-search"><i class="ri-search-line"></i><input data-series-search placeholder="搜索配套系列名称" /></label>
      </div>
      <div class="series-quick-links">
        <button class="active" data-series-query="">全部系列</button>
        <button data-series-query="本地能力过关系列">本地能力过关系列</button>
        <button data-series-query="常用同步训练系列">常用同步训练系列</button>
        <button data-series-query="易错方法系列">易错方法系列</button>
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
  const hot = [byId.t18, byId.t35, byId.t6, byId.t14];
  const rising = [byId.t1, byId.t3, byId.t17, byId.t32];
  return `
    <section class="activity-ranking-section">
      <header class="shelf-header">
        <div class="shelf-title"><h2>本周热用</h2><p>龙岗老师最近 7 天的真实使用与收藏变化</p></div>
        <span class="live-ranking"><i></i> 每小时更新</span>
      </header>
      <div class="ranking-split">
        <article class="ranking-panel">
          <header><div><b>本周热用</b><span>使用次数增长最快</span></div><em>TOP 4</em></header>
          ${hot.map((topic, index) => compactRow(topic, index + 1)).join("")}
        </article>
        <article class="ranking-panel rising">
          <header><div><b>收藏上升</b><span>老师最近更愿意留下</span></div><em>RISING</em></header>
          ${rising.map((topic, index) => compactRow(topic, index + 1)).join("")}
        </article>
      </div>
    </section>`;
}

function homepageSeriesSection() {
  const seriesGroups = [
    {
      name:"本地能力过关系列", shortName:"能力过关", descriptor:"同步 · 检测",
      count:26, ids:["t9","t40","t41"], accent:"#326c55", wash:"#e7f1eb"
    },
    {
      name:"易错方法系列", shortName:"易错方法", descriptor:"错因 · 变式",
      count:18, ids:["t20","t46","t47"], accent:"#9a7040", wash:"#f5eadc"
    }
  ];
  return `
    <section class="homepage-series-section">
      <header class="shelf-header">
        <div class="shelf-title"><h2>教辅题单</h2><p>一个训练系列包含多份题单，可直接选题单，也可以进入完整目录</p></div>
        <button class="view-all" data-open-filter="workbook">查看全部系列 <i class="ri-arrow-right-s-line"></i></button>
      </header>
      <div class="series-volume-grid">
        ${seriesGroups.map(item => `
          <article class="series-volume-card" style="--volume-accent:${item.accent};--volume-wash:${item.wash}">
            <button class="volume-cover" data-series="${item.name}" aria-label="查看${item.name}全部题单">
              <span>题单系列</span>
              <i class="ri-book-open-line"></i>
              <b>${item.shortName}</b>
              <small>七年级数学</small>
              <em>${item.count} 份题单</em>
            </button>
            <div class="volume-catalog">
              <header>
                <button data-series="${item.name}"><b>${item.name}</b><small>${item.descriptor}</small></button>
                <span>${item.count} 份</span>
              </header>
              <div class="volume-topic-list">
                ${item.ids.map((id, index) => {
                  const topic = byId[id];
                  return `
                    <button data-topic="${topic.id}">
                      <span class="volume-topic-index">${String(index + 1).padStart(2, "0")}</span>
                      <span><b>${topic.title}</b><small>${topic.questions} 题 · ${topic.minutes} 分钟 · ${topic.difficulty}</small></span>
                      <strong>${topic.usage.toLocaleString()} 人使用</strong>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>`;
                }).join("")}
              </div>
              <button class="volume-view-all" data-series="${item.name}">查看该系列全部题单 <i class="ri-arrow-right-line"></i></button>
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
        <div class="shelf-title"><h2>名校资源</h2><p>来自深圳名校公开交流与校际共建，可直接预览和使用</p></div>
        <span class="school-proof">5 所学校 · 本周新增 16 份</span>
      </header>
      <div class="famous-school-grid">
        ${schoolResources.map(topic => `
          <button class="famous-school-card" data-topic="${topic.id}">
            <span class="school-resource-main"><em>${topic.source.split("公开")[0].split("校际")[0]}</em><b>${topic.title}</b><small>${topic.questions} 题 · ${topic.minutes} 分钟 · ${topic.focus}</small></span>
            <span class="school-card-footer"><strong>${topic.usage.toLocaleString()} 位老师使用</strong><i class="ri-arrow-right-s-line"></i></span>
          </button>`).join("")}
      </div>
    </section>`;
}

function teacherContributionSection() {
  const teacherTopics = [byId.t21, byId.t16, byId.t17, byId.t22];
  return `
    <section class="teacher-contribution-section">
      <header class="shelf-header">
        <div class="shelf-title"><h2>本校资源</h2><p>来自本校教研组与老师的日常使用和分享</p></div>
        <span class="school-proof">本周新增 18 份</span>
      </header>
      <div class="teacher-contribution-grid">
        ${teacherTopics.map(topic => `
          <button class="teacher-contribution-card" data-topic="${topic.id}">
            <span class="teacher-avatar ${topic.author.tone || ""}">${topic.author.name.slice(0,1)}</span>
            <span class="teacher-contribution-main">
              <small>${topic.author.name} · ${topic.author.school}</small>
              <b>${topic.title}</b>
              <em>${topic.questions} 题 · ${topic.minutes} 分钟 · ${topic.usage.toLocaleString()} 人使用</em>
            </span>
            <i class="ri-arrow-right-s-line"></i>
          </button>`).join("")}
      </div>
    </section>`;
}

function specialCategoryView() {
  const specialTopics = [byId.t1, byId.t3, byId.t5, byId.t23, byId.t28, byId.t31, byId.t32];
  return `
    <section class="category-detail special-detail">
      <header class="detail-heading">
        <div><p>复习与集中突破</p><h1>专项练习</h1><span>按知识点、易错类型和能力方向找到适合的题单</span></div>
        <strong>418 <small>份题单</small></strong>
      </header>
      <div class="special-browser">
        <nav class="knowledge-nav" aria-label="知识模块">
          <button class="active"><b>数与式</b><small>126 份</small></button>
          <button><b>方程与不等式</b><small>84 份</small></button>
          <button><b>函数</b><small>72 份</small></button>
          <button><b>图形与几何</b><small>96 份</small></button>
          <button><b>统计与概率</b><small>40 份</small></button>
        </nav>
        <div class="knowledge-content">
          <div class="knowledge-filters">
            <button class="active">全部专项</button><button>易错巩固</button><button>方法突破</button><button>情境应用</button><button>培优提高</button>
          </div>
          <div class="result-grid">${specialTopics.map(topicCard).join("")}</div>
        </div>
      </div>
    </section>`;
}

function paperCategoryView() {
  const paperTopics = [byId.t2, byId.t4, byId.t6, byId.t14, byId.t16, byId.t25, byId.t27, byId.t33];
  return `
    <section class="category-detail paper-detail">
      <header class="detail-heading">
        <div><p>考试场景</p><h1>找试卷题单</h1><span>已匹配七年级数学，优先展示龙岗与深圳近三年真题</span></div>
        <strong>126 <small>套深圳真题</small></strong>
      </header>
      <div class="paper-toolbar">
        <div class="exam-stage-tabs" role="tablist" aria-label="考试场景">
          <button class="active">期末</button><button>期中</button><button>月考</button><button>单元测试</button><button>中考真题</button>
        </div>
        <div class="paper-selectors">
          <button>深圳市 <i class="ri-arrow-down-s-line"></i></button>
          <button>2024—2026 <i class="ri-arrow-down-s-line"></i></button>
          <button>七年级数学 <i class="ri-arrow-down-s-line"></i></button>
        </div>
      </div>
      <header class="paper-result-heading"><div><b>本地优质试卷</b><span>按本地优先、年份由近到远排序</span></div><em>共 38 套期末试卷</em></header>
      <div class="paper-result-grid">${paperTopics.map(topicCard).join("")}</div>
    </section>`;
}

function localCategoryView() {
  return `
    <section class="category-detail local-detail">
      <header class="detail-heading">
        <div><p>本地优先</p><h1>本区与本校题单</h1><span>来自龙岗区教研、片区共建和本校备课组</span></div>
        <strong>92 <small>份本地题单</small></strong>
      </header>
      <div class="local-source-tabs"><button class="active">龙岗区教研</button><button>片区共建</button><button>本校共享</button></div>
      ${schoolSection()}
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
    ids:["t22","t24","t27","t29","t30","t31","t32","t35","t36","t40"]
  },
  {
    layout:"tiles",
    title:"更多教学任务题单",
    subtitle:"小测、易错、分层、真题和方法专项",
    ids:["t28","t29","t30","t31","t32","t33","t34","t35","t41","t44"]
  },
  {
    layout:"cards",
    title:"刚刚更新的优质题单",
    subtitle:"本地教研、学校和常用训练系列持续补充",
    ids:["t35","t28","t25","t34","t23","t32","t15","t17","t38","t43"]
  }
];

function infiniteFeedMarkup() {
  return `
    <section class="endless-batch">
      <header class="shelf-header"><div class="shelf-title"><h2>更多题单</h2><p>继续向下浏览，所有内容都可以直接预览和使用</p></div><span class="batch-mark">共 30+ 份</span></header>
      <div class="flat-resource-grid" data-endless-grid></div>
    </section>`;
}

function appendInfiniteBatch() {
  const feed = document.querySelector("#endlessFeed");
  if (!feed) return;
  if (!feed.querySelector("[data-endless-grid]")) feed.innerHTML = infiniteFeedMarkup();
  const grid = feed.querySelector("[data-endless-grid]");
  const batch = infiniteBatches[infiniteBatchIndex % infiniteBatches.length];
  const list = batch.ids.map(id => byId[id]).filter(Boolean);
  const wrapper = document.createElement("div");
  wrapper.innerHTML = list.map(topicCard).join("");
  bindContentEvents(wrapper);
  while (wrapper.firstElementChild) grid.appendChild(wrapper.firstElementChild);
  infiniteBatchIndex += 1;
}

function appendInfinitePage() {
  appendInfiniteBatch();
  appendInfiniteBatch();
}

function setupInfiniteFeed() {
  if (infiniteObserver) infiniteObserver.disconnect();
  infiniteBatchIndex = 0;
  infiniteLoading = false;
  const sentinel = document.querySelector("#loadSentinel");
  if (!sentinel) return;
  appendInfinitePage();
  infiniteObserver = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting) || infiniteLoading) return;
    infiniteLoading = true;
    sentinel.classList.add("loading");
    setTimeout(() => {
      appendInfinitePage();
      sentinel.classList.remove("loading");
      infiniteLoading = false;
    }, 420);
  }, { rootMargin:"700px 0px" });
  infiniteObserver.observe(sentinel);
}

function renderDefaultFeed() {
  return [
    localUpdateStrip(),
    personalizedFirstScreenSection(),
    famousSchoolSection(),
    teacherContributionSection(),
    homepageSeriesSection(),
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
  root.querySelectorAll(".chapter-rail button").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".chapter-rail button").forEach(item => item.classList.toggle("active", item === button));
    showToast(`已切换到${button.querySelector("b").textContent}`);
  }));
  root.querySelectorAll("[data-series-search]").forEach(input => input.addEventListener("input", () => filterSeriesTopics(input.value)));
  root.querySelectorAll("[data-series-query]").forEach(button => button.addEventListener("click", () => {
    const input = button.closest(".series-category-view").querySelector("[data-series-search]");
    input.value = button.dataset.seriesQuery;
    filterSeriesTopics(input.value);
    button.closest(".series-quick-links").querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
  }));
  root.querySelectorAll(".knowledge-nav button, .knowledge-filters button, .exam-stage-tabs button, .local-source-tabs button").forEach(button => button.addEventListener("click", () => {
    const group = button.parentElement;
    group.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
  }));
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
    kicker.textContent = "配套系列";
    title.textContent = query;
    description.textContent = "这个系列下的同步、专项与阶段检测题单";
    count.innerHTML = `${visible} <small>份题单</small>`;
    panelTitle.textContent = "全部题单";
    panelCopy.textContent = "按教学场景混合展示，打开后仍可调整题目";
    return;
  }
  kicker.textContent = query ? "系列搜索" : "按熟悉的资料来源找";
  title.textContent = query ? `“${query}”的搜索结果` : "配套系列题单";
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
