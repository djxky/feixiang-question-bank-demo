const topicCatalog = {
  t8: { title:"正数与负数概念巩固题单", focus:"理解实际意义，准确判断", reason:"适合当前教学进度", questions:16, minutes:20, difficulty:"简单", source:"龙岗区教研精选", usage:762 },
  t9: { title:"有理数运算基础过关配套题单", focus:"贴近教材知识链与能力层级", reason:"来自你常用的训练系列", questions:20, minutes:25, difficulty:"中等", source:"本地能力过关系列", usage:1143 },
  t15: { title:"坂田片区课堂小测精选题单", focus:"课堂检测，及时巩固", reason:"本地老师正在使用", questions:12, minutes:15, difficulty:"简单", source:"黄老师 · 坂田实验学校", usage:512, teacher:"黄" },
  t25: { title:"2025 深圳中考数学基础题单", focus:"近年真题中的基础得分点", reason:"深圳真题新整理", questions:20, minutes:30, difficulty:"中等", source:"深圳中考试卷", usage:1458 },
  t31: { title:"代数式实际意义专项题单", focus:"由情境列式并解释代数式", reason:"知识点专项", questions:13, minutes:18, difficulty:"中等", source:"平湖片区教研", usage:692 }
};

const directories = {
  chapter: {
    kicker:"教材目录", title:"人教版 · 七年级上册", summary:"共 6 章 · 326 份同步题单",
    breadcrumb:["人教版七年级上册","第一章 有理数"],
    groups:[
      ["第一章 有理数",["正数和负数","有理数","有理数的加减法","有理数的乘除法","有理数的乘方"]],
      ["第二章 整式的加减",["整式","整式的加减"]],
      ["第三章 一元一次方程",["从算式到方程","解一元一次方程","实际问题与一元一次方程"]],
      ["第四章 几何图形初步",["几何图形","直线、射线、线段","角"]]
    ],
    active:"正数和负数"
  },
  series: {
    kicker:"系列目录", title:"本地能力过关系列", summary:"同步、专项与检测 · 共 26 份题单",
    breadcrumb:["教辅题单","本地能力过关系列"],
    groups:[
      ["七上 · 有理数",["概念基础过关","运算基础过关","有理数单元检测"]],
      ["七上 · 整式",["整式同步巩固","整式易错专项"]],
      ["七上 · 方程",["解方程基础训练","方程应用检测"]],
      ["阶段检测",["期中基础卷","期末综合卷"]]
    ],
    active:"运算基础过关"
  },
  knowledge: {
    kicker:"知识点目录", title:"数与式 · 专项练习", summary:"5 个模块 · 418 份专项题单",
    breadcrumb:["专项练习","数与式"],
    groups:[
      ["有理数",["正负数意义","数轴与相反数","绝对值","有理数运算"]],
      ["整式",["代数式的意义","合并同类项","去括号"]],
      ["易错类型",["符号判断","计算顺序","分类讨论"]]
    ],
    active:"代数式的意义"
  },
  paper: {
    kicker:"试卷目录", title:"深圳真题 · 七年级数学", summary:"近三年 · 126 套本地真题",
    breadcrumb:["试卷题单","深圳真题"],
    groups:[
      ["同步考试",["单元测试","期中试卷","期末试卷"]],
      ["中考",["深圳中考真题","区级一模","区级二模"]],
      ["筛选",["2026 年","2025 年","2024 年"]]
    ],
    active:"深圳中考真题"
  }
};

const related = [
  { id:"t9", tag:"同步巩固", title:"有理数运算基础过关题单", meta:"20 题 · 25 分钟", usage:"1,143 位老师使用" },
  { id:"t31", tag:"方法专项", title:"代数式实际意义专项题单", meta:"13 题 · 18 分钟", usage:"692 位老师使用" },
  { id:"t15", tag:"本地共建", title:"坂田片区课堂小测精选题单", meta:"12 题 · 15 分钟", usage:"512 位老师使用" },
  { id:"t25", tag:"真题整理", title:"深圳中考数学基础题单", meta:"20 题 · 30 分钟", usage:"1,458 位老师使用" }
];

const params = new URLSearchParams(location.search);
const topicId = params.get("topic") || "t8";
const contextName = params.get("context") || "chapter";
const topic = topicCatalog[topicId] || topicCatalog.t8;
const context = directories[contextName] || directories.chapter;

function renderDirectory() {
  document.querySelector("#directoryKicker").textContent = context.kicker;
  document.querySelector("#directoryTitle").textContent = context.title;
  document.querySelector("#directorySummary").textContent = context.summary;
  document.querySelector("#breadcrumbContext").textContent = context.breadcrumb[0];
  document.querySelector("#breadcrumbLeaf").textContent = context.breadcrumb[1];
  document.querySelector("#directoryTree").innerHTML = context.groups.map(([group, leaves], groupIndex) => `
    <section class="tree-group">
      <button type="button"><i class="ri-arrow-${groupIndex === 0 ? "down" : "right"}-s-line"></i><span>${group}</span></button>
      <div class="tree-leaves">
        ${leaves.map(leaf => `<button class="tree-leaf ${leaf === context.active ? "active" : ""}" type="button">${leaf}</button>`).join("")}
      </div>
    </section>`).join("");
}

function renderTopic() {
  document.title = `${topic.title} · 飞象 AI 题库`;
  document.querySelector("#topicReason").textContent = topic.reason;
  document.querySelector("#topicTitle").textContent = topic.title;
  document.querySelector("#paperTitle").textContent = topic.title;
  document.querySelector("#topicFocus").textContent = topic.focus;
  document.querySelector("#questionCount").textContent = topic.questions;
  document.querySelector("#topicMinutes").textContent = topic.minutes;
  document.querySelector("#topicDifficulty").textContent = topic.difficulty;
  document.querySelector("#topicUsage").textContent = topic.usage.toLocaleString();
  document.querySelector("#topicSource").textContent = topic.source;
  if (topic.teacher) {
    document.querySelector("#sourceAvatar").textContent = topic.teacher;
    document.querySelector("#sourceDescription").textContent = "老师贡献 · 学校与身份已认证 · 支持调整后使用";
  }
}

function renderRelated() {
  document.querySelector("#relatedGrid").innerHTML = related.map(item => `
    <button class="related-card" data-related="${item.id}" type="button">
      <span>${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.meta}</p>
      <strong>${item.usage}</strong>
    </button>`).join("");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1700);
}

renderDirectory();
renderTopic();
renderRelated();

document.querySelectorAll(".tree-group > button").forEach(button => button.addEventListener("click", () => {
  const icon = button.querySelector("i");
  const leaves = button.nextElementSibling;
  const open = leaves.hidden;
  leaves.hidden = !open;
  icon.className = open ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line";
}));

document.querySelectorAll(".tree-leaf").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".tree-leaf").forEach(item => item.classList.toggle("active", item === button));
  showToast(`已切换到「${button.textContent}」的题单`);
}));

document.querySelector("#favoriteTopic").addEventListener("click", event => {
  const button = event.currentTarget;
  button.classList.toggle("saved");
  button.innerHTML = button.classList.contains("saved")
    ? '<i class="ri-bookmark-fill"></i><span>已收藏</span>'
    : '<i class="ri-bookmark-line"></i><span>收藏</span>';
});

document.querySelectorAll("[data-action]").forEach(button => button.addEventListener("click", () => {
  const messages = { use:"已加入待布置，可继续选择班级", edit:"正在进入题单编辑", download:"正在生成可打印文件" };
  showToast(messages[button.dataset.action]);
}));

document.querySelectorAll("[data-neighbor]").forEach(button => button.addEventListener("click", () => showToast("已切换到相邻题单")));
document.querySelectorAll("[data-related]").forEach(button => button.addEventListener("click", () => {
  location.href = `./detail.html?topic=${button.dataset.related}&context=${contextName}`;
}));

const directoryPanel = document.querySelector("#directoryPanel");
const directoryMask = document.querySelector("#directoryMask");
document.querySelector("#mobileDirectory").addEventListener("click", () => {
  directoryPanel.classList.add("open");
  directoryMask.hidden = false;
});
directoryMask.addEventListener("click", () => {
  directoryPanel.classList.remove("open");
  directoryMask.hidden = true;
});
