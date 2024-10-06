<template>
    <div class="app-footer">
        <nav class="app-nav">
            <a href="https://login.live.com/gls.srf?urlID=WinLiveTermsOfUse" class="app-nav-text">Termos de uso</a>
            <a href="https://login.live.com/gls.srf?urlID=MSNPrivacyStatement" class="app-nav-text">Privacidade e cookies</a>
            <i @click="AppInfo" class="fa-solid fa-ellipsis app-nav-icon"></i>
        </nav>
    </div>
</template>
<script setup>
function AppInfo() {
    const appInfo = document.querySelector(".app-down-info");
    if (appInfo) {
        appInfo.classList.toggle("app-down-info-show");
    } else {
        appInfo.classList.toggle("app-down-info");
        
    }
}
</script>