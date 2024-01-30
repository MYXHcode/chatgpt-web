import {MessageRole} from "@/types/chat";
import {GptVersion} from "@/app/constants";

const host = 'https://964ef008-0367-4971-9569-963cd8bc6887.mock.pstmn.io'

export const getRoleList = () => {
    // 从 apiPost mock 接口获取
    /*
    return fetch(`${host}/role/list`).then((res) =>
        res.json()
    );
     */

    // 从本地 json 文件获取
    return fetch(`/prompts.json`).then((res) =>
        res.json()
    );
}

export const completions = (data: {
    messages: { content: string; role: MessageRole }[],
    model: GptVersion
}) => {
    return fetch('http://localhost:8090/api/v1/chat/completions', {
        method: 'post',

        headers: {
            // b8b6 后续用于写入 token 加密信息
            Authorization: "b8b6",
            'Content-Type': 'application/json;charset=utf-8'
        },

        body: JSON.stringify(data)
    })
}
