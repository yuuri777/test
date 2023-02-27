const mytask = {
    deadline: "2021-04-30",
    taskName: "オブジェクトの分割代入を実装",
    task: "設計書に従って、オブジェクトの分割代入を実装する"
}

const { deadline,taskName,task } = mytask;
const  message = `締切日:${deadline}\nタスク名:${taskName}\nタスク内容:${task}`

console.log(message);