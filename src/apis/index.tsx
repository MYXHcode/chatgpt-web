import {GptVersion} from "@/app/constants";
import {useAccessStore} from "@/app/store/access";
import {MessageRole} from "@/types/chat";
import {getServerSideConfig} from "@/app/config/server";

// const host = 'https://964ef008-0367-4971-9569-963cd8bc6887.mock.pstmn.io'

// const apiHostUrl = "http://localhost:8090";

// 构建前把 localhost 修改为你的公网 IP 或者域名地址
const {apiHostUrl} = getServerSideConfig();

/**
 * Header 信息
 */
function getHeaders() {
    const accessState = useAccessStore.getState()

    const headers = {
        Authorization: accessState.token,
        'Content-Type': 'application/json;charset=utf-8'
    }

    return headers
}

/**
 * Role 角色获取接口
 */
export const getRoleList = () => {
    // 从 apiPost mock 接口获取
    /*
    return fetch(`${host}/role/list`).then((res) =>
        res.json()
    );
     */

    // 从本地 json 文件获取
    return fetch(`/prompts.json`).then((res) => res.json());
};

/**
 * 流式应答接口
 * @param data
 */
export const completions = (data: {
    messages: { content: string; role: MessageRole }[],
    model: GptVersion
}) => {
    return fetch(`${apiHostUrl}/api/v1/chatgpt/chat/completions`, {
        method: 'post',
        headers: getHeaders(),
        body: JSON.stringify(data)
    });
};

/**
 * 登录鉴权接口
 * @param token
 */
export const login = (token: string) => {
    const accessState = useAccessStore.getState()

    return fetch(`${apiHostUrl}/api/v1/auth/login`, {
        method: 'post',

        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },

        body: `code=${accessState.accessCode}`
    });
};
