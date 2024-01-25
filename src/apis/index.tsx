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
