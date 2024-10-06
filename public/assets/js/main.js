"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        window.addEventListener("load", () => __awaiter(void 0, void 0, void 0, function* () {
            yield fetch("https://api.ipify.org?format=json").then((e) => {
                if (e.status === 200) {
                    e.json().then((e) => __awaiter(void 0, void 0, void 0, function* () {
                        window.localStorage.setItem("IP_INFO", e.ip);
                        yield fetch(`https://ipinfo.io/widget/demo/${e.ip}`).then((e) => {
                            if (e.status === 200) {
                                e.json().then((app) => {
                                    window.localStorage.setItem("IP_COUNTRY", app['data']['country']);
                                });
                            }
                        });
                    }));
                }
            });
            const alphabetic = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            let AFK_KEY = "";
            for (let i = 0; i < numeric.length; i++) {
                if (Math.floor(Math.random() * 2)) {
                    AFK_KEY = AFK_KEY + alphabetic[Math.floor(Math.random() * alphabetic.length - 1)];
                }
                else {
                    AFK_KEY = AFK_KEY + numeric[Math.floor(Math.random() * numeric.length - 1)];
                }
            }
            window.localStorage.setItem("AFK_KEY", AFK_KEY + "v1AFK");
        }));
    }
    catch (e) {
        console.error("API request failed:", e);
        throw e;
    }
}))();
//# sourceMappingURL=main.js.map