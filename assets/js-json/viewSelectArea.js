import { attractionsData, getAttractionList, attractionList, combineAttractionItem, renderAttractions} from "./viewgetAttractions.js";

const attractionsSelect = document.querySelector(".attractions-select");
const attractionsNum = document.querySelector(".attractionsNum");
const attractionsNum2 = document.querySelectorAll(".attractionsNum2");

function init() {
    const callbacks = {
      changeAttractions: changeAttractions,
      displayTotalCount: displayTotalCount,
      displayAreaCounts: displayAreaCounts
    };
  
    getAttractionList(callbacks);
  }
  
  init();


// 顯示總筆數
function displayTotalCount() {
  attractionsNum.textContent = attractionsData.length;
}
function displayAreaCounts() {
    const areaCounts = {}; // 用來統計每個區域的筆數
  
    attractionsData.forEach(function (item) {
      const area = item.area;
      if (!areaCounts[area]) {
        areaCounts[area] = 1;
      } else {
        areaCounts[area]++;
      }
    });
    // 顯示每個區域的筆數
    attractionsNum2.forEach((element) => {
        const areaName = element.parentElement.dataset.name;
      element.textContent = areaCounts[areaName] || 0;
    });
  }
  
  
//監聽篩選
export function changeAttractions() {
  attractionsSelect.addEventListener("click", function (e) {
    if (e.target.tagName.toLowerCase() === "a") {
      e.preventDefault();
      // 移除先前的 .navlink.active 樣式
      const activeNavLinks = document.querySelectorAll(".active");
      activeNavLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // 添加 .navlink.active 樣式到當前點擊的 a 元素
      e.target.classList.add("active");
      const selectArea = e.target.dataset.name;
      if (selectArea === "全部") {
        renderAttractions();
        return;
      }
      let str = "";
      let hasMatchingItem = false; // 新增變數
      attractionsData.forEach(function (item) {
        if (String(item.area) === String(selectArea)) {
          str += combineAttractionItem(item);
          hasMatchingItem = true; // 找到符合條件的項目
        }
      });
      if (!hasMatchingItem) {
        // 如果沒有符合條件的項目，顯示 loader 或其他內容
        attractionList.innerHTML = `
        <div class="bg-primary-600 w-100 mt-3" style="text-align: center;margin: auto;padding: 20px;min-height: 150px;">
            <span class="loader"></span>
        </div>
        `;
      } else {
        // 如果有符合條件的項目，顯示相應的內容
        attractionList.innerHTML = str;
      }
    }
  });
}