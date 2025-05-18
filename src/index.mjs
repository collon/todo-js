import { moveEmitHelpers } from "typescript";
import "./styles.css";

/**
 * 追加ボタン
 */
const onClickAdd = () => {
  console.log("追加ボタンがクリックされました");

  const inputText = document.getElementById("add-text").value;
  console.log(inputText);
  document.getElementById("add-text").value = "";

  createIncompleteTodo(inputText);
};

//渡された引数をもとに未完了のTODOを作る関数
const createIncompleteTodo = (todo) => {
  //li生成
  const li = document.createElement("li");
  console.log(li);

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //p生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;
  console.log(p);

  /**完了ボタン */
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    console.log("完了ボタンが押されました");
    const movetarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    //戻すボタンを作る
    const backbutton = document.createElement("button");
    backbutton.innerHTML = "戻す";
    backbutton.addEventListener("click", () => {
      console.log("戻すボタンが押されました");
      const backtarget = backbutton.closest("li");
      const todoText = backbutton.previousElementSibling.innerHTML;
      console.log(todoText);
      createIncompleteTodo(todoText);
      backbutton.closest("li").remove();
    });
    movetarget.firstElementChild.appendChild(backbutton);
    document.getElementById("complete-list").appendChild(movetarget);
  });

  /**削除ボタン */
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    console.log("削除ボタンが押されました");
    const deletetarget = deleteButton.closest("li");
    console.log(deletetarget.innerHTML);
    document.getElementById("imcomplete-list").removeChild(deletetarget);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById("imcomplete-list").appendChild(li);
  console.log(div);
};

//デバッグ用
console.log(document.getElementById("add-button").value);
console.log(document.getElementById("add-button").innerHTML.textContent);

/**
 * ロード時
 */
document.getElementById("add-button").addEventListener("click", onClickAdd);
