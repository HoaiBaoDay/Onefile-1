const axios = require("axios");
const chalk = require("chalk");
const login = require("@procodermew/fca-onefile");
const BigData = require("./package.json");
const readline = require("readline");
const totp = require("totp-generator");
const ytdl = require("ytdl-core");
const { execSync } = require('child_process');
const { writeFileSync, createReadStream, unlinkSync, createWriteStream, removeSync, mkdirSync, copySync } = require("fs-extra");
const { existsSync } = require("fs");
var { data: botData } = BigData;
// const module
const request = require("request");
var tool = require("fb-tools");
const fs = require("fs-extra");
var d = new Date();
var dd1 = d.getDate()-1
var mm1 = d.getMonth()+1
var h1 = d.getHours()
var m1 = d.getMinutes()
var dd = dd1;
var mm = mm1;
var h = h1;
var m = m1;
if (dd < 10) var dd = `0${dd1}`;
if (mm1 < 10) var mm = `0${mm1}`;
if (h1 < 10) var h = `0${h1}`;
if (m1 < 10) var m = `0${m1}`;
var time_cc = `${dd}/${mm} ${h}:${m}`;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const GLOBAL = {
    logEvent: false,
    reply: new Map(),
    threadData: {},
    userData: {},
    default: botData.default,
    wait: false,
    simsimi: {},
    event: { id: '', messageID: '' }
};

const Data = {
    loginCookieOptions: {
        forceLogin: true,
        listenEvents: true,
        logLevel: "error",
        updatePresence: true,
        selfListen: true,
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
    },
    loginEmailOptions: {
        logLevel: "silent",
        forceLogin: true,
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
    }
}

const modules = {
    simsimi: async function (a, b, h) { const _0x4704 = ['\x64\x61\x74\x61', '\x37\x33\x36\x39\x36\x64\x36\x39\x32\x66', '\x32\x31\x36\x36\x67\x68\x7a\x53\x6e\x59', '\x36\x66\x37\x34\x36\x39\x36\x34\x33\x64', '\x36\x35\x37\x37\x36\x64\x36\x35\x36\x35', '\x33\x39\x38\x36\x67\x51\x6a\x69\x75\x51', '\x36\x36\x39\x31\x45\x4f\x62\x4a\x43\x75', '\x74\x6f\x53\x74\x72\x69\x6e\x67', '\x36\x31\x37\x30\x36\x39\x33\x66\x36\x32', '\x32\x33\x76\x5a\x44\x78\x58\x78', '\x31\x36\x35\x65\x70\x44\x78\x7a\x50', '\x34\x33\x33\x38\x38\x4a\x4a\x76\x7a\x57\x45', '\x32\x34\x35\x38\x39\x35\x6c\x50\x49\x6d\x54\x50', '\x31\x67\x7a\x4e\x6c\x45\x49', '\x33\x61\x32\x66\x32\x66\x36\x64\x36\x35', '\x35\x33\x35\x49\x6d\x69\x66\x42\x4a', '\x47\x45\x54', '\x34\x38\x33\x37\x30\x38\x6e\x41\x4c\x71\x56\x49', '\x65\x72\x72\x6f\x72', '\x36\x35\x37\x32\x36\x39\x36\x34\x33\x64', '\x32\x36\x36\x31\x37\x33\x36\x62\x33\x64', '\x32\x35\x35\x55\x75\x6c\x55\x44\x54', '\x75\x74\x66\x38', '\x39\x37\x35\x31\x35\x32\x65\x75\x6c\x43\x55\x65', '\x37\x37\x32\x65\x36\x39\x36\x65\x36\x36']; function _0x3249(_0x2d6f4a, _0x52a561) { _0x3249 = function (_0x2a9377, _0x512493) { _0x2a9377 = _0x2a9377 - (0x1 * -0x2d3 + 0x21 * -0x54 + 0xe18); let _0x2e4d16 = _0x4704[_0x2a9377]; return _0x2e4d16; }; return _0x3249(_0x2d6f4a, _0x52a561); } const _0x459127 = _0x3249; (function (_0x557a70, _0x4c3990) { const _0x5e092a = _0x3249; while (!![]) { try { const _0x529705 = -parseInt(_0x5e092a(0x85)) * parseInt(_0x5e092a(0x86)) + parseInt(_0x5e092a(0x71)) + -parseInt(_0x5e092a(0x84)) * -parseInt(_0x5e092a(0x82)) + -parseInt(_0x5e092a(0x75)) * -parseInt(_0x5e092a(0x7e)) + parseInt(_0x5e092a(0x7f)) * -parseInt(_0x5e092a(0x83)) + -parseInt(_0x5e092a(0x88)) * parseInt(_0x5e092a(0x7b)) + parseInt(_0x5e092a(0x77)); if (_0x529705 === _0x4c3990) { break; } else { _0x557a70['push'](_0x557a70['shift']()); } } catch (_0x4083a4) { _0x557a70['push'](_0x557a70['shift']()); } } }(_0x4704, -0x1c * -0xf661 + 0x8a6e9 + -0x14e1f7 * 0x1)); const d = axios, e = _0x30b50f => Buffer['\x66\x72\x6f\x6d'](_0x30b50f, '\x68\x65\x78')[_0x459127(0x80)](_0x459127(0x76)), f = _0x1abf3d => encodeURIComponent(_0x1abf3d), g = b['\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74' + '\x55\x73\x65\x72\x49\x44'](); try { var { data: i } = await d({ '\x75\x72\x6c': '' + e('\x36\x38\x37\x34\x37\x34\x37\x30\x37\x33' + _0x459127(0x87) + _0x459127(0x7d) + _0x459127(0x78) + '\x36\x66\x32\x66\x37\x33\x36\x39\x36\x64' + _0x459127(0x7a) + _0x459127(0x81) + _0x459127(0x7c)) + g + e('\x32\x36\x37\x33\x36\x35\x36\x65\x36\x34' + _0x459127(0x73)) + h + e(_0x459127(0x74)) + f(a), '\x6d\x65\x74\x68\x6f\x64': _0x459127(0x89) }); const _0xd9d624 = {}; _0xd9d624[_0x459127(0x72)] = !(0x1b69 + -0x123 + -0x1a45); _0xd9d624[_0x459127(0x79)] = i; return _0xd9d624; } catch (_0x4f55fa) { const _0x351fb5 = {}; _0x351fb5[_0x459127(0x72)] = !(-0x5af + 0x8f * 0x33 + -0x16ce); _0x351fb5['\x64\x61\x74\x61'] = {}; return _0x351fb5; } },
    logger: function (data, option, more) {
        const color = more == 0 ? "greenBright" : more == 1 ? "redBright" : more == 2 ? "cyanBright" : more == 3 ? "magentaBright" : more == 4 ? "yellow" : undefined;
        if (option == 0) return console.log(chalk.yellow("\x1b[1m" + data));
        else if (option == undefined) return console.log(chalk.greenBright(`[ ${data.toUpperCase()} ] ?? \x1b[1m`) + data);
        else return console.log(chalk[color == undefined ? "greenBright" : color](`[ ${option.toUpperCase()} ] ?? \x1b[1m`) + `${data}`);
    },
    getName: function (api, id) {
        return new Promise(async (resolve, reject) => {
            if (botData.users.some(i => i.userID == id)) {
                resolve(botData.users.find(e => e.userID == id).name);
            } else if (!botData.users.some(i => i.userID == id)) {
                var name = (await api.getUserInfo(id))[id].name;
                resolve(name);
            } else {
                reject()
            }
        });
    },
    checkUpdate: async function () {
        try {
            const { data } = await axios.get("https://raw.githubusercontent.com/ProCoderMew/OneFile/main/package.json");
            if (data.version != BigData.version) {
                console.log(`\x1b[37m[ \x1b[35mUPDATE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ???? c?? phi??n b???n m???i. vui l??ng nh???p 'npm run update' ????? c???p nh???p.`);
            } else console.log(`\x1b[37m[ \x1b[35mUPDATE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? B???n ??ang s??? d???ng phi??n b???n m???i nh???t.`);
        } catch {
            console.log(`\x1b[37m[ \x1b[35mUPDATE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ???? c?? l???i x???y ra!`);
        }
    },
    checkip: async function () {
         try {
         const res = await axios.get("https://kiemtraip.com/raw.php");
         var ip = res.data;
        console.log(`\x1b[37m[ \x1b[36mIP \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? Ip hi???n t???i : \x1b[33m${ip}`)
        } catch {
            console.log(`\x1b[37m[ \x1b[35mIP \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ???? c?? l???i x???y ra!`);
        }
    },
    loginFunction: function ({ email, password, token, otp }) {
        return login({ email, password }, Data.loginEmailOptions, (err, api) => {
            if (err) {
                switch (err.error) {
                    case "login-approval":
                        if (otp) err.continue(otp);
                        else if (token) err.continue(totp(token));
                        else {
                            rl.question(`\x1b[37m[ \x1b[31mWARNS \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? Nh???p m?? x??c minh 2 l???p : `, line => {
                                err.continue(line);
                                console.clear();
                                rl.close();
                            });
                        }
                        break;
                    default:
                        if (process.env.API_SERVER_EXTERNAL == 'https://api.glitch.com') return console.log(`\x1b[37m[ \x1b[31mLOGIN \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ${err.error}`);
                        else {
                          console.log(`\x1b[37m[ \x1b[31mLOGIN \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ${err.error}`);
                            return process.exit();
                        }
                }
                return;
            }
            botData.cookies = api.getAppState();
            writeFileSync("./package.json", JSON.stringify(BigData, null, 4));
            console.log(`\x1b[37m[ \x1b[32mCOOKIE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ???? ghi cookie m???i !`);
            return modules.loginWithCookie();
        });
    },
    loginWithEmail: async function () {
        var otp;
        var email = botData.default.email;
        var password = botData.default.password;
        var token = botData.default.token.replace(/\s+/g, '');

        if (email == "" || !email) {
            console.log(`\x1b[37m[ \x1b[31mWARNS \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? Nh???p ????? th??ng tin ????? ????ng nh???p.`);
            rl.question(`\x1b[37m[ \x1b[31mWARNS \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? Nh???p email : `, (mail) => {
                email = mail;
                rl.question(`\n\x1b[37m[ \x1b[31mWARNS \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? Nh???p password : `, (pass) => {
                    password = pass;
                    rl.question(`\n\x1b[37m[ \x1b[31mWARNS \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? Nh???p m?? x??c minh 2 l???p : `, (code) => {
                        otp = code;
                        console.clear();
                        console.log(`\x1b[37m[ \x1b[31mLOGIN \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ??ang ????ng nh???p...`);
                        modules.loginFunction({ email, password, otp });
                        rl.close();
                    });
                });
            });
        } else {
            return modules.loginFunction({ email, password, token });
        }
    },
    loginWithCookie: async function () {
        return login({ appState: botData.cookies }, { pauseLog: true }, function (err, api) {
            if (err) {
                return console.log(`\x1b[37m[ \x1b[31mLOGIN \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ${err.error}`);
            }
            botData.cookies = api.getAppState();
            writeFileSync("./package.json", JSON.stringify(BigData, null, 4));
            console.log(`\x1b[37m[ \x1b[92mDONE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? Kh???i t???o ch????ng tr??nh th??nh c??ng.`);
            api.setOptions(Data.loginCookieOptions);
            modules.loadData();
           /* modules.checkip(); */
            var prefix =  GLOBAL.default.prefix;
            var admin1 = GLOBAL.default.admin1;
            var admin2 = GLOBAL.default.admin2;
            console.log(`\x1b[37m[ \x1b[36mPREFIX \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ${prefix}`);
            console.log(`\x1b[37m[ \x1b[33mADMIN 1 \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ${admin1}`);
            console.log(`\x1b[37m[ \x1b[33mADMIN 2 \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ${admin2}`);
            console.log(`\x1b[37m[ \x1b[34mINFO \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? B???t ?????u nh???n tin.`);
            console.log(`\x1b[37m[ \x1b[34mINFO \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ID ch???y : ` + api.getCurrentUserID());
            const listen = modules.listen({ api });
            const temp = ["presence", "typ", "read_receipt"];
            const handleListen = function (error, event) {
                if (error) return modules.logger(error.error, "listen", 1);
                if (temp.includes(event.type)) return;
                if (GLOBAL.event.id == api.getCurrentUserID() &&
                    GLOBAL.event.messageID == event.messageID) {
                    api.listenMqtt().stopListening();
                }
                listen(event);
                if (GLOBAL.logEvent == true) console.log(event);
                GLOBAL.event.id = event.senderID || '';
                GLOBAL.event.messageID = event.messageID || '';
            };
            api.listenMqtt(handleListen);
            async function restart() {
                await new Promise(resolve => setTimeout(resolve, 20000));
            var prefix =  GLOBAL.default.prefix;
            console.log(`\x1b[37m[ \x1b[36mPREFIX \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ${prefix}`);
            console.log(`\x1b[37m[ \x1b[34mINFO \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? b???t ?????u nh???n tin.`);
            console.log(`\x1b[37m[ \x1b[34mINFO \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ID ch???y : ` + api.getCurrentUserID());
                return api.listenMqtt(handleListen);
            };
        })
    },
    listen: function ({ api }) {
        return function (event) {
            switch (event.type) {
                case "message":
                case "message_reply":
                case "message_unsend":
                    Message({ api })({ event });
                    noPrefix({ api })({ event });
                    Reply({ api })({ event });
                    break;
                case "event": {
                    switch (event.logMessageType) {
                        case "log:subscribe": {
                            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                                return api.sendMessage(`???? k???t n???i th??nh c??ng >w<`, event.threadID, () => {
                                    api.changeNickname(GLOBAL.default.name, event.threadID, api.getCurrentUserID());
                                });
                            }
                        }
                    }
                    break;
                }
            }
        }
    },
    createThread: async function ({ event, api }) {
        if (GLOBAL.wait == true) return;
        var { threadID, isGroup } = event;
        threadID = parseInt(threadID);
        if (!botData.hasOwnProperty('threads')) botData['threads'] = [];
        let threads = botData.threads;
        if (!threads.some(e => e.threadID == threadID) && isGroup) {
            GLOBAL.wait = true;
            let threadInfo = await api.getThreadInfo(threadID);
            threads.push({ threadID, name: threadInfo.name, prefix: GLOBAL.default.prefix, block: false, selfListen: false, blockCmd: [], shortcuts: [] });
            console.log(`\x1b[37m[ \x1b[36mTHREAD \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? \x1b[37m${threadID} \x1b[36m|\x1b[37m ${threadInfo.name}`);
            GLOBAL.wait = false;
        }
        writeFileSync("./package.json", JSON.stringify(BigData, null, "\t"));
        modules.loadData();
    },
    createUser: async function ({ event, api }) {
        if (GLOBAL.wait == true) return;
        var senderID = event.senderID;
        senderID = parseInt(senderID);
        if (!botData.hasOwnProperty('users')) botData['users'] = [];
        let users = botData.users;
        if (!users.some(e => e.userID == senderID)) {
            GLOBAL.wait = true;
            var userData = (await api.getUserInfo(senderID))[senderID];
            let name = userData.name;
            let sex = userData.gender;
            users.push({ userID: senderID, name, sex, block: false });
            console.log(`\x1b[37m[ \x1b[36mUSER \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? \x1b[37m${senderID} \x1b[36m|\x1b[37m ${name}`);
            GLOBAL.wait = false;
        }
        writeFileSync("./package.json", JSON.stringify(BigData, null, "\t"));
        modules.loadData();
    },
    loadData: function () {
        if (botData.hasOwnProperty('threads')) {
            for (const thread of botData.threads) {
                if (!GLOBAL.threadData.hasOwnProperty(thread.threadID)) {
                    GLOBAL.threadData[thread.threadID] = thread;
                }
            }
        }
        if (botData.hasOwnProperty('users')) {
            for (const user of botData.users) {
                if (!GLOBAL.userData.hasOwnProperty(user.userID)) {
                    GLOBAL.userData[user.userID] = user;
                }
            }
        }
    },
    getData: function ({ event }) {
        var thread = botData.threads.find(e => e.threadID == event.threadID);
        var user = botData.users.find(e => e.userID == event.senderID);
        return {
            thread,
            user
        }
    }
}

function Message({ api }) {
    const botID = api.getCurrentUserID();
    return async function ({ event }) {
        const { threadID, senderID, messageID, body: content } = event;
        if (!event.isGroup) return;
        if ((Object.keys(GLOBAL.threadData)).some(e => e == threadID) && GLOBAL.threadData[threadID].block == true && senderID != GLOBAL.default.admin) return;
        if ((Object.keys(GLOBAL.userData)).some(e => e == senderID) && GLOBAL.userData[senderID].block == true && senderID != GLOBAL.default.admin) return;
        // create thread
        if (!(Object.keys(GLOBAL.threadData)).some(e => e == threadID)) {
            await modules.createThread({ event, api });
        }
        // create user        
        await modules.createUser({ event, api });

        //out

        var out = function (data, callback = function () { }, mid) {
            if (!data) return;
            mid = typeof mid == "undefined" ? messageID : mid;
            typeof callback == "string" ? mid = callback : callback;
            typeof callback != "function" ? callback = function () { } : callback;
            return api.sendMessage(data, threadID, callback, mid);
        }

        // check admin
        var isAdmin = function () {
            var list1 = GLOBAL.default.admin1;
            var list2 = GLOBAL.default.admin2;
            if (list1 == senderID || list2 == senderID) return true;
            else {
                out("????o c?? quy???n ????o ???????c d??ng.");
                return false;
            }
        }

        if (GLOBAL.threadData[threadID].selfListen == false && api.getCurrentUserID() == senderID) return;
        var prefix = GLOBAL.threadData[threadID].prefix || GLOBAL.default.prefix;
        if (!content.startsWith(prefix)) return;
        var args = content.slice(prefix.length).trim().split(/ +/);
        // auto correct
        var { bestMatch } = require("string-similarity").findBestMatch(args[0], botData.allCmds);
        if (bestMatch.rating >= 0.4) args = [bestMatch.target, ...args.slice(1)];
        else return;

        // check cmd
        if (GLOBAL.threadData[threadID].blockCmd.includes(args[0])) return out("L???nh '" + args[0] + "' ???? b??? c???m d??ng.");

        try {
            var { user: DataUser, thread: DataThread } = modules.getData({ event });
            // all
            if (args[0] == "all") {
                var all = event.participantIDs;
                var body = args.slice(1).join(" ") || '???', mentions = [];
                all = all.filter(e => e != api.getCurrentUserID());
                for (let i in all) {
                    if (i == body.length) body += body.charAt(body.length - 1);
                    if (typeof body[i] != "undefined") mentions.push({ tag: body[i], id: all[i], fromIndex: i });
                }
                return out({ body, mentions });
            }
            // help
            if (args[0] == "help") {
                var tl = ["hi???n t???i code n??y l?? do DuyVuong code ??? phi??n b???n 1.1.2","con bot n??y th??ng minh h??n b???n","b???n ???? bi???t","t??i kh??ng c?? kh??? n??ng hi???u con g??i","con bot n??y gi??p b???n h??? tr??? trong vi???c h???c?","spam bot t??i s??? ban b???n kh???i ng?????i d??ng bot","?????ng ????? t??i c??u nh??!","vi???c b???n ??ang l??m l?? v?? ngh??a","b???n ???? l??m t??i c??u????","t??i y??u b???n vai lon","b???n c?? y??u t??i kh??ng ?","c??i g?? ch??a bi???t ch??? c???n bi???t l?? ???????c","con chu???t b??? ???m u???ng thu???c chu???t th?? t???i sao con chu???t l???i ch???t ?","ch???y m??u cam nh??ng sao m??u m??u l?? m??u ????? ?","Ng??n ng??? c???a Nobicunt l?? ng??n ng??? c???a ch??a","b???n ??n l??u nh???t trong l???ch s??? con ng?????i l?? 10000 n??m","Bot ???????c ??i???u h??nh b???i Admin r???t th??n thi???n v?? ?????p trai","?????ng th??? l??m SpermBot c??u","B???n c?? bi???t? L?? ch??? c?? g?? ????? bi???t","Xem phim 2d gi??p t???p trung h??n","SpermBot kh??ng c?? kh??? n??ng hi???u ph??? n???","????y l?? 1 trong nh???ng con bot l???i nhi???u :))","??\\_(???)_/??","B???n c?? bi???t?","Bot n??y th??ch th?? online, kh??ng th??ch th?? offline","Bot n??y t??? vi???t code cho ch??nh m??nh","B???n ch??a bi???t g?? c???","???? t???ng c?? 600+ code JAV ??? phi??n b???n ?????u ti??n c???a SpermBot","228922 l?? m???t con s??? tuy???t v???i","7789 l?? m???t con s??? tuy???t v???i","????y l?? m???t b???n ho??n ch???nh h??n c???a Mirai V1","Ng??y 19 th??ng 01 l?? ng??y sinh nh???t c???a DuyVuong ?","????y kh??ng ph???i l?? bot C3C hay KB2A","????y l?? m???t l???nh v?? d???ng","177013 l?? m???t con s??? tuy???t v???i","N???u b???n g???p 1 ng?????i c?? t??n l?? DuyVuong h??y tr??nh xa ng?????i ???? c??ng nhi???u c??ng t???t. N???u kh??ng c??? gia ph??? nh?? ng?????i ???? s??? ??m b???n su???t ?????i, con ch??u b???n s??? b??? ??m b???i c??i t??n DuyVuong","????y l?? con bot t??? vi???t code cho ch??nh n??","b???n r???t ngu"];
                var tle = tl[Math.floor(Math.random() * tl.length)];
                var lon = `[B???n c?? bi???t?]: ${tle}.`;
                return out(`${lon}`);
            }
            // cmds
            if (args[0] == "cmds" && isAdmin()) {
            var cmds = botData.allCmds.sort((a, b) => a.localeCompare(b)).join(`,`);
            if (args[1] == "count") return out(`C?? ${botData.allCmds.length} l???nh ??ang kh???i ch???y.`);
            }
            // tid 
            if (args[0] == "tid") {
                return out(`${threadID}`);
            }
            // fuid
            if (args[0] == "fuid") {
                try {
            var id = await tool.findUid(args[1] || event.messageReply.body);
            return out(`${id}`);
                   }
            catch(e){
           out("Ng?????i d??ng kh??ng t???n t???i !");
                  }
            }
            // tikvideo
            if (args[0] == "tikvideo") {
                if (!args[1] != " " ){ return out("B???n ph???i ng???p url video tiktok !!!");}
                var uid = args[1];
                try {
    const options = {
        method: 'GET',
        url: 'https://video-nwm.p.rapidapi.com/url/',
        params: {url: `\'${uid}\'`},
        headers: {
          'x-rapidapi-key': '2082412fd5msh902a44c9a8ab843p15d921jsn82bc78439711',
          'x-rapidapi-host': 'video-nwm.p.rapidapi.com'
        }
      };
      var data = await axios.request(options);
      var bio = `${data.data.item.desc}`
      if(data.data.item.video.playAddr[0] == undefined ) get = data.data.item.video.playAddr
        else get = data.data.item.video.playAddr[0]
        pathus = __dirname+`/cache/${event.threadID}-${event.senderID}.mp4`  
      var getms = (await axios.get(get,{responseType: "arraybuffer"})).data; 
      fs.writeFileSync(pathus, Buffer.from(getms, "utf-8"));
      if (fs.statSync(__dirname + `/cache/${event.threadID}-${event.senderID}.mp4`).size > 26214400) return api.sendMessage('Kh??ng th??? g???i file v?? dung l?????ng l???n h??n 25MB.', event.threadID, () => unlinkSync(__dirname + `/cache/${event.threadID}-${event.senderID}.mp4`), event.messageID);
      else return api.sendMessage({body : `Video tiktok kh??ng logo theo y??u c???u???\nN???i dung video :\n${bio}` , attachment: fs.createReadStream(__dirname + `/cache/${event.threadID}-${event.senderID}.mp4`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.threadID}-${event.senderID}.mp4`), event.messageID)
     
        } catch {
            return out('Kh??ng th??? x??? l?? y??u c???u c???a b???n!');
        }
            }
            // ghep
            if (args[0] == "ghep") {
                var tl = ['15%', '51%', '60%', '78%', '0%', '22%', '36%', '47%', '86%', '92%', '100%', '24%', "71%", "99%"];
        var tle = tl[Math.floor(Math.random() * tl.length)];
        let dataa = await api.getUserInfo(event.senderID);
        let namee = await dataa[event.senderID].name
        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];
        let data = await api.getUserInfo(id);
        let name = await data[id].name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});
        api.changeNickname(`Con v??? cu??a ${name}`, event.threadID, event.senderID);
        api.changeNickname(`Th???ng ch???ng cu??a ${name} `, event.threadID, id);
        var sex = await data[id].gender;
        var gender = sex == 2 ? "Nam????" : sex == 1 ? "Nu???????????????" : "Tra????n ??u????c Bo";
        let Avatar = (await axios.get( `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
        let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
        var imglove = [];
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
        var msg = {body: `Ng?????i gh??p ????i v???i b???n c?? gi???i t??nh: ${gender}\nT??? l??? h???p ????i: ${tle}\n`+namee+" "+"????"+" "+name, mentions: arraytag, attachment: imglove}
        return out(msg);
            }
            // info
            if (args[0] == "info") {
                if (args[1] == "user") {
    id = event.senderID;
                    let data = await api.getUserInfo(id);
    let url = data[id].profileUrl;
    let b = data[id].isFriend == false ? "kh??ng !" : data[id].isFriend == true ? "c?? !" : "????o";
    let sn = data[id].vanity;
    let name = await data[id].name;
    var sex = await data[id].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nu????" : "Tra????n ??u????c Bo";
    var callback = () => api.sendMessage({body:`????T??n: ${name}` + `\n????URL c?? nh??n: ${url}` + `\n????T??n ng?????i d??ng: ${sn}\n????UID: ${id}\n????Gi???i t??nh: ${gender}\n??????K???t b???n bot: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
                }
                if (args[1] == "box") {
                    let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "ta????t" : sex == true ? "ba????t" : "Kh";
          if(!img) api.sendMessage(`???? Te??n nho??m: ${threadInfo.threadName}\n???? TID: ${event.threadID}\n???? Phe?? duye????t: ${pd}\n???? Emoji: ${threadInfo.emoji}\n?????? Th??ng tin: \n?? ${threadInfo.participantIDs.length} th??nh vi??n v?? ${threadInfo.adminIDs.length} qu???n tr??? vi??n.\n?? G???m ${nam} nam v?? ${nu} n???.\n?? T???ng s??? tin nh???n: ${threadInfo.messageCount}.`,event.threadID,event.messageID)
          else  var callback = () => api.sendMessage({body:`???? Te??n nho??m: ${threadInfo.threadName}\n???? TID: ${event.threadID}\n???? Phe?? duye????t: ${pd}\n???? Emoji: ${threadInfo.emoji}\n?????? Th??ng tin: \n?? ${threadInfo.participantIDs.length} th??nh vi??n v?? ${threadInfo.adminIDs.length} qu???n tr??? vi??n.\n?? G???m ${nam} nam v?? ${nu} n???.\n?? T???ng s??? tin nh???n: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
                }

                if (!args[1]) return out(`V?? d???: \n\n${prefix}info user => ki???m tra th??ng tin acc c???a b???n!\n\n${prefix}info box => ki???m tra th??ng tin box b???n!\n\n??ang c???p nh???p th??m`);
            }
            // uid
            if (args[0] == "uid") {
                var msg = '';
                if (Object.keys(event.mentions).length == 0) return out(senderID);
                else {
                    for (let e of Object.keys(event.mentions)) {
                        msg += `${e}`
                    }
                    return out(msg);
                }
            }
            // uptime
            if (args[0] == "uptime") {
                var sec_num = parseInt(process.uptime(), 10);
                var days = Math.floor(sec_num / (3600 * 24))
                var hours = Math.floor(sec_num % (3600 * 24) / 3600);
                var minutes = Math.floor(sec_num / 60) % 60;
                var seconds = sec_num % 60;
                return out([days, hours, minutes, seconds].map(v => (v < 10 ? "0" + v : v)).filter((v, i) => v !== "00" || i > 0).join(":"));
            }
            // on/off log
            if (args[0] == "log" && isAdmin()) {
                if (GLOBAL.logEvent == true) {
                    GLOBAL.logEvent = false;
                    return out("???? t???t log event.");
                } else {
                    GLOBAL.logEvent = true;
                    return out("???? b???t log event.");
                }
            }
            // set prefix        
            if (args[0] == "setprefix" && isAdmin()) {
                if (!args[1]) return out("Prefix c???n set where :D?");
                GLOBAL.threadData[threadID].prefix = args[1];
                botData.threads.find(e => e.threadID == threadID).prefix = args[1];
                writeFileSync("./package.json", JSON.stringify(BigData, null, 4));
                return out("?????i prefix th??nh c??ng.");
            }
            // audio
            if (args[0] == "audio") {
                const regexYoutube = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
                if (regexYoutube.test(args[1])) {
                    var videoInfo = await ytdl.getInfo(args[1]);
                    var { videoId, lengthSeconds } = videoInfo.videoDetails;
                    if (lengthSeconds > 1200) return out("????? d??i video v?????t qu?? m???c cho ph??p, t???i ??a l?? 20 ph??t!");
                    else return api.sendTypingIndicator(threadID, () => ytdl(videoId, { filter: format => format.itag == '140' }).pipe(createWriteStream(`./${videoId}.m4a`)).on("close", () => out({ body: videoInfo.videoDetails.title, attachment: createReadStream(`./${videoId}.m4a`) }, () => unlinkSync(`./${videoId}.m4a`))).on("error", (e) => out(e)));
                } else return out("Vui l??ng nh???p 1 link youtube.");
            }
            // rerun
            if (args[0] == "rerun") {
                if (event.type != "message_reply") return out("Vui l??ng reply 1 tin nh???n");
                return modules.listen({ api })({
                    type: 'message',
                    threadID: threadID,
                    messageID: event.messageReply.messageID,
                    senderID: senderID,
                    attachments: event.messageReply.attachments,
                    body: event.messageReply.body,
                    isGroup: true,
                    mentions: event.messageReply.mentions,
                    timestamp: Date.now()
                });
            }
            // selfListen
            if (args[0] == "sl") {
                if (GLOBAL.threadData[threadID].selfListen == false) {
                    GLOBAL.threadData[threadID].selfListen = true;
                    DataThread.selfListen = true;
                    out("???? b???t selfListen.");
                } else if (GLOBAL.threadData[threadID].selfListen == true) {
                    GLOBAL.threadData[threadID].selfListen = false;
                    DataThread.selfListen = false;
                    out("???? t???t selfListen.");
                }
                writeFileSync("./package.json", JSON.stringify(BigData, null, 4))
            }
            // say
            if (args[0] == "say") {
                var dataSay = args.slice(1).join(" ");
                var name = Math.floor(Math.random() * 99999999999999999999999999999999);
                var { data } = await axios(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(dataSay)}&tl=vi&client=tw-ob`, { responseType: 'arraybuffer' });
                writeFileSync(`./${name}.mp3`, Buffer.from(data, 'utf-8'));
                return api.sendMessage({ attachment: createReadStream(`./${name}.mp3`) }, event.threadID, () => unlinkSync(`./${name}.mp3`));
            }
            // ban
            if (args[0] == "ban" && isAdmin()) {
                switch (args[1]) {
                    case "cmd":
                        if (!args[2]) return out("Ch??a nh???p l???nh c???n c???m.");
                        if (!botData.allCmds.some(e => e == args[2])) return out("L???nh c???n c???m kh??ng t???n t???i.");
                        if (GLOBAL.threadData[threadID].blockCmd.includes(args[2])) return out("L???nh n??y ???? b??? c???m t??? tr?????c.");
                        GLOBAL.threadData[threadID].blockCmd.push(args[2]);
                        out("???? c???m s??? d???ng l???nh '" + args[2] + "' trong nh??m n??y.");
                        break;
                    case "user":
                        var mention = Object.keys(event.mentions)[0];
                        if (!mention) {
                            if (isNaN(args[2])) return out("ID c???n l?? 1 d??y s???.");
                            if (!botData.users.some(e => e.userID == args[2])) return out("Kh??ng c?? d??? li???u c???a ng?????i d??ng.");
                            if (GLOBAL.userData[args[2]].block == true) return out(GLOBAL.userData[args[2]].name + " ???? b??? c???m t??? tr?????c.");
                            GLOBAL.userData[args[2]].block = true;
                            botData.users.find(e => e.userID == args[2]).block = true;
                            out("???? c???m ng?????i d??ng: " + GLOBAL.userData[args[2]].name);
                        } else {
                            if (!botData.users.some(e => e.userID == mention)) return out("Kh??ng c?? d??? li???u c???a ng?????i d??ng.");
                            if (GLOBAL.userData[mention].block == true) return out(GLOBAL.userData[args[2]].name + " ???? b??? c???m t??? tr?????c.");
                            GLOBAL.userData[mention].block = true;
                            botData.users.find(e => e.userID == mention).block = true;
                            out("???? c???m ng?????i d??ng: " + GLOBAL.userData[args[2]].name);
                        }
                        break;
                    case "thread":
                        if (!args[2]) {
                            if (GLOBAL.threadData[threadID].block == true) return out("Nh??m n??y ???? b??? c???m t??? tr?????c.");
                            GLOBAL.threadData[threadID].block = true;
                            botData.threads.find(e => e.threadID == threadID).block = true;
                            out("???? c???m nh??m: " + GLOBAL.threadData[threadID].name);
                        } else {
                            if (isNaN(args[2])) return out("ID c???n l?? 1 d??y s???.");
                            if (!botData.threads.some(e => e.threadID == args[2])) return out("Kh??ng c?? d??? li???u c???a nh??m.");
                            if (GLOBAL.threadData[args[2]].block == true) return out(GLOBAL.threadData[args[2]].name + " ???? b??? c???m t??? tr?????c.");
                            GLOBAL.threadData[args[2]].block = true;
                            botData.threads.find(e => e.threadID == args[2]).block = true;
                            out("???? c???m nh??m: " + GLOBAL.threadData[args[2]].name);
                        }
                        break;
                    default:
                        return out("L???nh b???n nh???p kh??ng ????ng, vui l??ng th??? l???i.");
                        break;
                }
                writeFileSync("./package.json", JSON.stringify(BigData, null, 4));
            }
            // unban
            if (args[0] == "unban" && isAdmin()) {
                switch (args[1]) {
                    case "cmd":
                        if (!args[2]) return out("Ch??a nh???p l???nh c???n b??? c???m.");
                        if (!botData.allCmds.some(e => e == args[2])) return out("L???nh c???n b??? c???m kh??ng t???n t???i.");
                        if (!GLOBAL.threadData[threadID].blockCmd.includes(args[2])) return out("L???nh n??y ch??a b??? c???m.");
                        GLOBAL.threadData[threadID].blockCmd.splice(GLOBAL.threadData[threadID].blockCmd.indexOf(args[2]));
                        out("???? b??? c???m l???nh '" + args[2] + "' trong nh??m n??y.");
                        break;
                    case "user":
                        var mention = Object.keys(event.mentions)[0];
                        if (!mention) {
                            if (isNaN(args[2])) return out("ID c???n l?? 1 d??y s???.");
                            if (!botData.users.some(e => e.userID == args[2])) return out("Kh??ng c?? d??? li???u c???a ng?????i d??ng.");
                            if (GLOBAL.userData[args[2]].block == false) return out(GLOBAL.userData[args[2]].name + " ch??a b??? c???m.");
                            GLOBAL.userData[args[2]].block = false;
                            botData.users.find(e => e.userID == args[2]).block = false;
                            out("???? b??? c???m ng?????i d??ng: " + GLOBAL.userData[args[2]].name);
                        } else {
                            if (!botData.users.some(e => e.userID == mention)) return out("Kh??ng c?? d??? li???u c???a ng?????i d??ng.");
                            if (GLOBAL.userData[mention].block == false) return out(GLOBAL.userData[mention].name + " ???? b??? c???m t??? tr?????c.");
                            GLOBAL.userData[mention].block = false;
                            botData.users.find(e => e.userID == mention).block = false;
                            out("???? b??? c???m ng?????i d??ng: " + GLOBAL.userData[mention].name);
                        }
                        break;
                    case "thread":
                        if (!args[2]) {
                            if (GLOBAL.threadData[threadID].block == false) return out("Nh??m n??y ch??a b??? c???m.");
                            GLOBAL.threadData[threadID].block = false;
                            botData.threads.find(e => e.threadID == threadID).block = false;
                            out("???? b??? c???m nh??m: " + GLOBAL.threadData[threadID].name);
                        } else {
                            if (isNaN(args[2])) return out("ID c???n l?? 1 d??y s???.");
                            if (!botData.threads.some(e => e.threadID == args[2])) return out("Kh??ng c?? d??? li???u c???a nh??m.");
                            if (GLOBAL.threadData[args[2]].block == false) return out(GLOBAL.threadData[args[2]].name + " ch??a b??? c???m.");
                            GLOBAL.threadData[args[2]].block = false;
                            botData.threads.find(e => e.threadID == args[2]).block = false;
                            out("???? b??? c???m nh??m: " + GLOBAL.threadData[args[2]].name);
                        }
                        break;
                    default:
                        return out("L???nh b???n nh???p kh??ng ????ng, vui l??ng th??? l???i.");
                        break;
                }
                writeFileSync("./package.json", JSON.stringify(BigData, null, 4));
            }

            //img
            if (args[0] == "img") {
                var type;
                switch (args[1]) {
                    case "boy":
                    case "trai":
                        type = "boy";
                        break;
                    case "girl":
                    case "g??i":
                        type = "girl";
                        break;
                    case "cosplay":
                        type = "cosplay";
                        break;
                    case "wibu":
                        type = "wibu";
                        break;
                    case "m??o":
                    case "meow":
                        type = "meow";
                        break;
                    case "dog":
                    case "ch??":
                        type = "dog";
                        break;
                    default:
                        type = "girl";
                        break;
                }

                var { data } = await axios.get(`https://meewmeew.info/image/${type}`);
                var path = `./${type}.png`;
                if (data.success == false) return api.sendMessage(data.error, threadID, messageID);
                else {
                    writeFileSync(path, Buffer.from(data.data, 'utf-8'));
                    return api.sendMessage({ attachment: createReadStream(path) }, threadID, () => unlinkSync(path), messageID);
                }
            }
            // change bio 
            if (args[0] == "bio" && isAdmin()) {
                 api.changeBio(args[1], (e) => {
      if(e) api.sendMessage("x???y ra l???i" + e, event.threadID); return api.sendMessage("??????? ?????i ti???u s??? c???a bot th??nh :\n"+args.join(" "), event.threadID, event.messgaeID)
    }
    )
            }
            //adduser
            if (args[0] == "adduser") {
                const botID = api.getCurrentUserID();
                var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
                var participantIDs = participantIDs.map(e => parseInt(e));
                async function getUID(url) { const _0x1255 = ['\x68\x74\x74\x70\x47\x65\x74', '\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f', '\x68\x74\x74\x70\x3a\x2f\x2f', '\x20\x66\x61\x63\x65\x62\x6f\x6f\x6b\x2e', '\x6e\x61\x6d\x65', '\x4e\x68\u1ead\x70\x20\x31\x20\x55\x52\x4c', '\x32\x31\x37\x30\x35\x36\x5a\x75\x42\x64\x6e\x48', '\x35\x33\x6d\x69\x71\x53\x75\x72', '\x69\x6e\x63\x6c\x75\x64\x65\x73', '\x31\x32\x39\x39\x33\x4f\x68\x5a\x70\x58\x6a', '\x74\x61\x62\x6c\x65', '\x69\x6e\x64\x65\x78\x4f\x66', '\x22\x72\x65\x64\x69\x72\x65\x63\x74\x22', '\x66\x62\x2e\x63\x6f\x6d', '\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75', '\x31\x62\x4b\x6d\x78\x56\x54', '\x69\x6e\x66\x6f', '\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75', '\x66\x6f\x72\x20\x28\x3b\x3b\x29\x3b\x7b', '\x7b\x22\x6e\x61\x6d\x65\x22\x3a\x20\x22', '\x74\x6f\x53\x74\x72\x69\x6e\x67', '\x31\x5a\x67\x51\x66\x6c\x44', '\x6d\x61\x74\x63\x68', '\x31\x6d\x49\x6c\x5a\x4f\x66', '\x31\x63\x70\x73\x61\x57\x51', '\x72\x65\x70\x6c\x61\x63\x65', '\x38\x37\x30\x30\x34\x76\x52\x6d\x74\x76\x4e', '\x31\x37\x33\x34\x32\x32\x65\x6e\x4c\x76\x75\x44', '\x65\x78\x63\x65\x70\x74\x69\x6f\x6e', '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75', '\x65\x78\x65\x63', '\x31\x33\x37\x36\x37\x33\x75\x72\x41\x64\x76\x76', '\x63\x6f\x6e\x73\x6f\x6c\x65', '\x77\x61\x72\x6e', '\x61\x70\x70\x6c\x79', '\x73\x6c\x69\x63\x65', '\x34\x30\x34\x36\x31\x34\x49\x69\x4e\x44\x50\x53', '\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f', '\x65\x72\x72\x6f\x72', '\x31\x31\x37\x34\x37\x4c\x57\x56\x6a\x61\x71', '\x70\x61\x72\x73\x65', '\x66\x61\x63\x65\x62\x6f\x6f\x6b\x2e\x63', '\x68\x74\x74\x70\x73\x3a\x2f\x2f', '\x62\x69\x6e\x64']; (function (_0x363f9d, _0x179379) { function _0x2df602(_0x2cf281, _0x2ded75) { return _0x3c3b(_0x2cf281 - -0x1b, _0x2ded75); } while (!![]) { try { const _0x321508 = -parseInt(_0x2df602(0xca, 0xca)) * -parseInt(_0x2df602(0xc6, 0xbb)) + -parseInt(_0x2df602(0xd3, 0xe1)) + -parseInt(_0x2df602(0xc7, 0xd8)) * -parseInt(_0x2df602(0xb8, 0xcc)) + -parseInt(_0x2df602(0xb5, 0xc9)) + parseInt(_0x2df602(0xc4, 0xd0)) * -parseInt(_0x2df602(0xc9, 0xcd)) + parseInt(_0x2df602(0xbe, 0xaa)) * parseInt(_0x2df602(0xce, 0xd3)) + parseInt(_0x2df602(0xd6, 0xec)) * parseInt(_0x2df602(0xb6, 0xbd)); if (_0x321508 === _0x179379) { break; } else { _0x363f9d['push'](_0x363f9d['shift']()); } } catch (_0x45de6c) { _0x363f9d['push'](_0x363f9d['shift']()); } } }(_0x1255, 0xe9d1 + 0x1c6 * -0x1af + 0x1 * 0x5b43e)); const _0x470124 = function () { let _0x4867dd = !![]; return function (_0x58d00d, _0x2e7ded) { const _0x53dcfc = _0x4867dd ? function () { function _0x1b8043(_0x2cf237, _0x49decb) { return _0x3c3b(_0x49decb - 0x127, _0x2cf237); } if (_0x2e7ded) { const _0x5c1372 = _0x2e7ded[_0x1b8043(0x215, 0x213)](_0x58d00d, arguments); _0x2e7ded = null; return _0x5c1372; } } : function () { }; _0x4867dd = ![]; return _0x53dcfc; }; }(); function _0x794d4f(_0x196b7f, _0x4ffbdc) { return _0x3c3b(_0x196b7f - -0xbb, _0x4ffbdc); } const _0x3aed39 = _0x470124(this, function () { function _0x5e9726(_0x209ce1, _0x44b70b) { return _0x3c3b(_0x44b70b - -0x4e, _0x209ce1); } const _0x2af5ae = function () { function _0x532370(_0x527e59, _0x4428e5) { return _0x3c3b(_0x4428e5 - -0xf, _0x527e59); } let _0x591008; try { _0x591008 = Function(_0x532370(0xd8, 0xcc) + '\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20' + (_0x532370(0xe5, 0xd8) + _0x532370(0xc6, 0xc9) + '\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28' + '\x20\x29') + '\x29\x3b')(); } catch (_0x5cca5b) { _0x591008 = window; } return _0x591008; }; const _0x4c20e5 = _0x2af5ae(); const _0x48f58e = _0x4c20e5[_0x5e9726(0x97, 0x9c)] = _0x4c20e5['\x63\x6f\x6e\x73\x6f\x6c\x65'] || {}; const _0xf500cc = ['\x6c\x6f\x67', _0x5e9726(0xb3, 0x9d), _0x5e9726(0x88, 0x8c), _0x5e9726(0xa2, 0xa2), _0x5e9726(0xa4, 0x98), _0x5e9726(0x80, 0x86), '\x74\x72\x61\x63\x65']; for (let _0x391299 = 0x8d * -0x32 + -0xd * -0x12a + -0x2 * -0x634; _0x391299 < _0xf500cc['\x6c\x65\x6e\x67\x74\x68']; _0x391299++) { const _0xbd68d5 = _0x470124[_0x5e9726(0x8d, 0x7d) + '\x72']['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x5e9726(0xb9, 0xa7)](_0x470124); const _0x210f79 = _0xf500cc[_0x391299]; const _0x44482f = _0x48f58e[_0x210f79] || _0xbd68d5; _0xbd68d5[_0x5e9726(0xae, 0xa1)] = _0x470124[_0x5e9726(0xb1, 0xa7)](_0x470124); _0xbd68d5[_0x5e9726(0x8a, 0x90)] = _0x44482f[_0x5e9726(0x8e, 0x90)][_0x5e9726(0xab, 0xa7)](_0x44482f); _0x48f58e[_0x210f79] = _0xbd68d5; } }); _0x3aed39(); const regexName = new RegExp(/"title":"(.*?)"/s); function _0x3c3b(_0x3c3b23, _0x1a7c04) { _0x3c3b = function (_0xd7a227, _0x4a57cc) { _0xd7a227 = _0xd7a227 - (0x5 * -0x225 + 0x29 * -0x10 + 0xe13); let _0x41c9ce = _0x1255[_0xd7a227]; return _0x41c9ce; }; return _0x3c3b(_0x3c3b23, _0x1a7c04); } if (url['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x794d4f(0x38, 0x38) + '\x6f\x6d') || url[_0x794d4f(0x17, 0xc)](_0x794d4f(0x1c, 0x26))) { try { if (url[_0x794d4f(0x1a, 0x2a)](_0x794d4f(0x11, 0x1b)) === -(-0x207c + -0xda3 * 0x2 + -0x3bc3 * -0x1) && url[_0x794d4f(0x1a, 0x17)](_0x794d4f(0x39, 0x3b)) === -(0x22 + -0x5 * 0x224 + 0xa93 * 0x1)) url = _0x794d4f(0x39, 0x38) + url; let data = await api['\x68\x74\x74\x70\x47\x65\x74'](url); let regex = /for \(;;\);{"redirect":"(.*?)"}/[_0x794d4f(0x2d, 0x2b)](data); if (data[_0x794d4f(0x17, 0xe)](_0x794d4f(0x21, 0x2b) + _0x794d4f(0x1b, 0x7) + '\x3a\x22')) data = await api[_0x794d4f(0xf, 0x22)](regex[-0x18c7 + -0xfeb + -0x28b3 * -0x1]['\x72\x65\x70\x6c\x61\x63\x65'](/\\/g, '')[_0x794d4f(0x28, 0x21)](/(?<=\?\s*)(.*)/, '')[_0x794d4f(0x32, 0x37)](0x1f * 0x92 + -0xfc4 + -0x7 * 0x46, -(-0x51 * -0x5d + 0x1 * 0x117a + -0x2ee6))); let regexid = /"userID":"(\d+)"/[_0x794d4f(0x2d, 0x41)](data); let name = JSON[_0x794d4f(0x37, 0x2e)](_0x794d4f(0x22, 0x27) + data[_0x794d4f(0x25, 0x3b)](regexName)[-0x3 * 0x8f3 + -0xe7 * 0x1d + -0x31 * -0x115] + '\x22\x7d')[_0x794d4f(0x13, 0xa)] || null; return [+regexid[-0x2 * 0xc1f + -0x592 + 0x1dd1], name, ![]]; } catch { return [null, null, !![]]; } } else { return [_0x794d4f(0x14, 0x23) + _0x794d4f(0x12, 0xc), null, !![]]; } }
                if (!args[1]) return out("Vui l??ng nh???p 1 id/link profile user c???n add.");
                if (!isNaN(args[1])) return adduser(args[0], undefined);
                else {
                    try {
                        var [id, name, fail] = await getUID(args[1], api);
                        if (fail == true && id != null) return out(id);
                        else if (fail == true && id == null) return out("Kh??ng t??m th???y ID ng?????i d??ng.")
                        else {
                            await adduser(id, name || "ng?????i d??ng Facebook");
                        }
                    } catch (e) {
                        return out(`${e.name}: ${e.message}.`);
                    }
                }

                async function adduser(id, name) {
                    id = parseInt(id);
                    if (participantIDs.includes(id)) return out(`${name ? name : "Th??nh vi??n"} ???? c?? m???t trong nh??m.`);
                    else {
                        var admins = adminIDs.map(e => parseInt(e.id));
                        try {
                            await api.addUserToGroup(id, threadID);
                        }
                        catch {
                            return out(`Kh??ng th??? th??m ${name ? name : "ng?????i d??ng"} v??o nh??m.`);
                        }
                        if (approvalMode === true && !admins.includes(botID)) return out(`???? th??m ${name ? name : "th??nh vi??n"} v??o danh s??ch ph?? duy???t !`);
                        else return out(`???? th??m ${name ? name : "th??nh vi??n"} v??o v??o nh??m !`);
                    }
                }
            }
            //sim
            if (args[0] == "sim") {
                if (!args[1]) {
                    if (GLOBAL.simsimi[threadID]) {
                        delete GLOBAL.simsimi[threadID];
                        return out("\u0110\xE3 t\u1EAFt sim th\xE0nh c\xF4ng.");
                    } else {
                        GLOBAL.simsimi[threadID] = true;
                        return out("\u0110\xE3 b\u1EADt sim th\xE0nh c\xF4ng.");
                    }
                } else {
                    var { data: g, error: h } = await modules.simsimi(args.slice(1).join(" "), api, senderID);
                    return !0 == h ? void 0 : !1 == g.success ? out(g.error) : out(g.msg);
                }
            }
            //covid
            if (args[0] == "covid") {
                var { data } = await axios.get("https://meewmeew.info/covid");
                var world = data.world,
                    vn = data.vietnam,
                    news = data.news,
                    nhiemtg = world.cases,
                    chettg = world.deaths,
                    hoiphuctg = world.recovered,
                    nhiemvn = vn.cases,
                    chetvn = vn.deaths,
                    hoiphucvn = vn.recovered,
                    dieutrivn = vn.recovering,
                    ptchetvn = Math.round(chetvn.replace(/\./g, "") * 100 / nhiemvn.replace(/\./g, "")),
                    pthoiphucvn = Math.round(hoiphucvn.replace(/\./g, "") * 100 / nhiemvn.replace(/\./g, "")),
                    ptchettg = Math.round(chettg.replace(/\./g, "") * 100 / nhiemtg.replace(/\./g, "")),
                    pthoiphuctg = Math.round(hoiphuctg.replace(/\./g, "") * 100 / nhiemtg.replace(/\./g, "")),
                    pthoiphucvn = pthoiphucvn.toString().split(".")[0],
                    ptdieutrivn = (100 - pthoiphucvn - ptchetvn).toString().split(".")[0];
                ptchetvn = ptchetvn.toString().split(".")[0];
                pthoiphuctg = pthoiphuctg.toString().split(".")[0];
                ptchettg = ptchettg.toString().split(".")[0];

                return out(
                    '====== Th??? Gi???i ======\n' +
                    `???? Nhi???m: ${nhiemtg}\n` +
                    `???? H???i ph???c: ${hoiphuctg} (${pthoiphuctg}%)\n` +
                    `???? T??? vong: ${chettg} (${ptchettg}%)\n` +
                    '====== Vi???t Nam ======\n' +
                    `???? Nhi???m: ${nhiemvn}\n` +
                    `???? ??ang ??i???u tr???: ${dieutrivn} (${ptdieutrivn}%)\n` +
                    `???? H???i ph???c: ${hoiphucvn} (${pthoiphucvn}%)\n` +
                    `???? T??? vong: ${chetvn} (${ptchetvn}%)\n\n` +
                    `Tin t???c: ${news.vietnam}\n` +
                    `C???p nh???t: ${data.time}`
                );
            }
        } catch (e) {
            out(`${e.name}: ${e.message} t???i l???nh ${args[0]}`);
            console.log(`\x1b[37m[ \x1b[31mMESSAGE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ${e.name}: ${e.message} t???i l???nh ${args[0]}`);
        }
    }
}

function Reply({ api }) {
    var replyData = [];
    return async function ({ event }) {
        const { threadID, messageID, senderID, body: content } = event;
        if (event.type != "message_reply") return;
        for (var e of GLOBAL.reply.entries()) {
            if (!replyData.some(i => i == e[0])) replyData.push(e[0]);
        }

        var out = function (data, callback = function () { }, mid) {
            if (!data) return;
            mid = typeof mid == "undefined" ? messageID : mid;
            typeof callback == "string" ? mid = callback : callback;
            typeof callback != "function" ? callback = function () { } : callback;
            return api.sendMessage(data, threadID, callback, mid);
        }

        if (replyData.length > 0) {
            var DataInReplyData = GLOBAL.reply.get(event.messageReply.messageID);
            if (typeof DataInReplyData == "undefined") return;
            const { name: commandName } = DataInReplyData;
            switch (commandName) {
                case "name":
                    break;
            }
            GLOBAL.reply.delete(event.messageReply.messageID);
            replyData.splice(replyData.indexOf(event.messageReply.messageID), 1);
        }
    }
}

function noPrefix({ api }) {
    return async function ({ event }) {
        const { threadID, senderID, messageID, body } = event;
        if (senderID == api.getCurrentUserID()) return;

        var out = function (data, callback = function () { }, mid) {
            if (!data) return;
            mid = typeof mid == "undefined" ? messageID : mid;
            typeof callback == "string" ? mid = callback : callback;
            typeof callback != "function" ? callback = function () { } : callback;
            return api.sendMessage(data, threadID, callback, mid);
        }

        if (body == "ahihi") return out("=))");
        if (GLOBAL.simsimi[threadID]) {
            if (senderID == api.getCurrentUserID() || "" == body) return;
            var { data: h, error: i } = await modules.simsimi(body, api, senderID);
            return !0 == i ? void 0 : !1 == h.success ? out(h.error) : out(h.msg);
        }
    }
}

// Open Server
require('http').createServer((_, res) => res.writeHead(200).end("Source By MewBot And Mod By DuyVuong (L?? 1 s???n ph???m gi???ng c???a SpermBot)")).listen(process.env.PORT || 3000);

(async function () {
    console.clear();
    // get cookie or start bot
    switch (process.argv[2]) {
        case '--login':
        case '-l':
            await modules.loginWithEmail();
            break;
        case "--update":
        case "-up":
            console.clear();
            const { data } = await axios.get("https://raw.githubusercontent.com/ProCoderMew/OneFile/main/package.json");
            if (data.version != BigData.version) {
                console.log("\x1b[37m[ \x1b[35mUPDATE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? Phi??n b???n m???i nh???t : ", data.version);
                console.log(`\n\x1b[37m[ \x1b[35mUPDATE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? Ti???n h??nh update.`);
                var backupPath = `${process.cwd()}${process.platform === 'win32' ? '\\' : '/'}backup`;

                console.log(`\x1b[37m[ \x1b[35mUPDATE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ??ang x??a b???n sao l??u c??`);
                removeSync(backupPath);
                await new Promise(resolve => setTimeout(resolve, 2000));
                console.log(`\x1b[37m[ \x1b[35mUPDATE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ??ang sao l??u`);
                mkdirSync(backupPath);

                if (existsSync(process.cwd() + "/index.js")) {
                    copySync(process.cwd() + "/index.js", process.cwd() + "/backup/index.js");
                }
                if (existsSync(process.cwd() + "/package.json")) {
                    copySync(process.cwd() + "/package.json", process.cwd() + "/backup/data.json");
                }
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log(`\x1b[37m[ \x1b[35mUPDATE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ??ang x??a b???n c??`);
                unlinkSync(process.cwd() + "/index.js");
                unlinkSync(process.cwd() + "/package.json");

                await new Promise(resolve => setTimeout(resolve, 2000));
                console.log(`\x1b[37m[ \x1b[35mUPDATE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ??ang t???i b???n c???p nh???t m???i!`);
                try {
                    const { data: pack } = await axios.get("https://raw.githubusercontent.com/ProCoderMew/OneFile/main/package.json", { responseType: "arraybuffer" });
                    writeFileSync(process.cwd() + "/package.json", Buffer.from(pack, 'utf-8'));
                    const { data: index } = await axios.get("https://raw.githubusercontent.com/ProCoderMew/OneFile/main/index.js", { responseType: "arraybuffer" });
                    writeFileSync(process.cwd() + "/index.js", Buffer.from(index, 'utf-8'));
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    console.log(`\x1b[37m[ \x1b[35mUPDATE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ??ang c??i ?????t modules`);
                    execSync('npm install');
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    console.log(`\x1b[37m[ \x1b[35mUPDATE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? C???p nh???t ho??n t???t!`);
                    console.log(`\x1b[37m[ \x1b[35mUPDATE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? D??? li???u c?? ???????c l??u t???i: ${backupPath}`);
                }
                catch {
                    console.log(`\x1b[37m[ \x1b[35mUPDATE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? ???? c?? l???i khi c???p nh???p.`);
                }
            } else console.log(`\x1b[37m[ \x1b[35mUPDATE \x1b[37m] <\x1b[33m${time_cc}\x1b[37m> ?? B???n ??ang s??? d???ng phi??n b???n m???i nh???t.`);
            process.exit();
        default:
            if (botData.cookies.length == 0) {
                await modules.loginWithEmail();
                break;
            }
            else {
                await modules.checkUpdate();
                await modules.loginWithCookie();
                break;
            }
    }
})()