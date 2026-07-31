const listResources = [
  { id:"t21", title:"期中错题重组：三个班高频失分题", teacher:"陈老师", className:"七（3）班", count:"15 题", usage:"96 人使用", tone:"blue" },
  { id:"t29", title:"周末分层作业 A：基础巩固与补弱", teacher:"陈老师", className:"七（1）班", count:"15 题", usage:"168 人使用", tone:"blue" },
  { id:"t30", title:"周末分层作业 B：综合应用与提升", teacher:"陈老师", className:"七（2）班", count:"18 题", usage:"152 人使用", tone:"blue" },
  { id:"t11", title:"一元一次方程应用：审题建模专项", teacher:"李老师", className:"七（3）班", count:"22 题", usage:"1,221 人使用", tone:"amber" }
];

const questionResources = [
  { id:"q1", title:"有理数混合运算：负号漏乘", teacher:"陈老师", className:"七（3）班", wrong:"18 人答错", rate:"错误率 46%", tone:"blue" },
  { id:"q2", title:"移项后符号未改变", teacher:"李老师", className:"七（2）班", wrong:"14 人答错", rate:"错误率 38%", tone:"amber" },
  { id:"q3", title:"绝对值概念：遗漏零点情况", teacher:"陈老师", className:"七（1）班", wrong:"12 人答错", rate:"错误率 35%", tone:"blue" },
  { id:"q4", title:"去括号：括号前负号处理错误", teacher:"李老师", className:"七（3）班", wrong:"16 人答错", rate:"错误率 42%", tone:"amber" }
];

let currentView = "list";
let currentClass = "all";

const resourceGrid = document.querySelector("#schoolResources");
const emptyState = document.querySelector("#schoolEmpty");
const toast = document.querySelector("#schoolToast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1600);
}

function renderResources() {
  const source = currentView === "list" ? listResources : questionResources;
  const visible = source.filter(item => currentClass === "all" || item.className === currentClass);
  emptyState.hidden = visible.length > 0;
  resourceGrid.hidden = visible.length === 0;
  resourceGrid.innerHTML = visible.map(item => `
    <button class="school-resource-card" data-id="${item.id}" data-kind="${currentView}">
      <span class="resource-type">${currentView === "list" ? "题单" : "单题"}</span>
      <b>${item.title}</b>
      <span class="resource-meta">
        <i class="teacher-avatar ${item.tone}">${item.teacher.slice(0, 1)}</i>
        <em>${item.teacher}</em>
        <small>${item.className}</small>
      </span>
      <span class="resource-signal">
        <small>${currentView === "list" ? item.count : item.wrong}</small>
        <strong>${currentView === "list" ? item.usage : item.rate}</strong>
      </span>
      <i class="ri-arrow-right-s-line"></i>
    </button>
  `).join("");

  resourceGrid.querySelectorAll(".school-resource-card").forEach(card => {
    card.addEventListener("click", () => {
      if (card.dataset.kind === "list") {
        window.location.href = `./detail.html?topic=${card.dataset.id}`;
      } else {
        showToast("正在打开单题详情");
      }
    });
  });
}

document.querySelectorAll("[data-view]").forEach(button => {
  button.addEventListener("click", () => {
    currentView = button.dataset.view;
    document.querySelectorAll("[data-view]").forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    renderResources();
  });
});

document.querySelector("#classFilter").addEventListener("change", event => {
  currentClass = event.target.value;
  renderResources();
});

renderResources();
