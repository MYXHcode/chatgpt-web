import {Button, Input} from "antd";
import styles from "./auth.module.scss";

import {useNavigate} from "react-router-dom";
import {useAccessStore} from "../../store/access";
import ChatGPTIcon from "../../icons/chatgpt.svg";

<head>
    {/* 设置 referrer 为 no-referrer，用于绕过防盗链限制，从而正常显示图片 */}
    <meta name="referrer" content="no-referrer"/>
    <title>ChatGPT - MYXH</title>
</head>

export function Auth() {
    const navigate = useNavigate();
    const access = useAccessStore();

    return (
        <div className={styles["auth-page"]}>
            <ChatGPTIcon/>
            <div className={styles["auth-title"]}>AI问答助手 By MYXH</div>

            <div className={styles["auth-sub-title"]}>
                学习 AI 开发、掌握 AI 部署、运用 AI 提效
            </div>

            <img
                // src="../../qrcode/qrcode.png"
                src="https://img-blog.csdnimg.cn/direct/b686f27d2ba44ddcb39186feac361f1c.png"
                style={{width: 250}}
                alt={"微信公众号二维码"}/>

            <div className={styles["auth-tips"]}>
                扫码关注公众号【AI问答助手 By MYXH】，
                <a
                    // href="../../qrcode/qrcode.png"
                    href="https://img-blog.csdnimg.cn/direct/b686f27d2ba44ddcb39186feac361f1c.png"
                    target="_blank"
                >
                    回复【403】获取访问密码
                </a>
            </div>

            <Input
                className={styles["auth-input"]}
                type="password"
                placeholder="在此处填写访问码"
                value={access.accessCode}

                onChange={(e) => {
                    access.updateCode(e.currentTarget.value);
                }}

                status={access.accessCodeErrorMsgs ? 'error' : ''}
            />
            {access.accessCodeErrorMsgs ?
                <span className={styles['auth-error']}>{access.accessCodeErrorMsgs}</span> : null}

            <div className={styles["auth-actions"]}>
                <Button type="primary" onClick={() => access.login()}>确认登录👣</Button>
                <Button type="text">稍后再说</Button>
            </div>

            <span>
        说明：此平台主要以学习 ChatGPT、ChatGLM 为主，请合理、合法、合规的使用相关资料！
      </span>
        </div>
    );
}
