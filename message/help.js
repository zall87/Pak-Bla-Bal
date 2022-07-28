const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} 」 ──*
	
_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

 *INFO BOT*
 Library : *Baileys-MD*
 Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
 *WIB* : ${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')}
 *WITA* : ${moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')}
 *WIT* : ${moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')}

 *INFO USER*
 Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
 Balance : $${toCommas(getBalance(sender, balance))}
 ${readmore}
 *MAIN MENU*
 ${setting.sb} ${prefix}menu
 ${setting.sb} ${prefix}owner
 ${setting.sb} ${prefix}donasi
 ${setting.sb} ${prefix}speed
 ${setting.sb} ${prefix}runtime
 ${setting.sb} ${prefix}cekprem
 ${setting.sb} ${prefix}listprem
 ${setting.sb} ${prefix}listban
 ${setting.sb} ${prefix}listsewa
 ${setting.sb} ${prefix}join
 ${setting.sb} ${prefix}sewabot
 ${setting.sb} ${prefix}delete
 ${setting.sb} ${prefix}sourcecode
 ${setting.sb} ${prefix}tagme
 ${setting.sb} ${prefix}infobalance
 ${setting.sb} ${prefix}tukarprem

 *CONVERTER & TOOLS*
 ${setting.sb} ${prefix}sticker
 ${setting.sb} ${prefix}toimg
 ${setting.sb} ${prefix}tovid
 ${setting.sb} ${prefix}blur
 ${setting.sb} ${prefix}ttp
 ${setting.sb} ${prefix}ttp2
 ${setting.sb} ${prefix}ttp3
 ${setting.sb} ${prefix}ttp4
 ${setting.sb} ${prefix}ttp5
 ${setting.sb} ${prefix}ttp6
 ${setting.sb} ${prefix}urltoimg

 *DOWNLOADER*
 ${setting.sb} ${prefix}play
 ${setting.sb} ${prefix}tiktok
 ${setting.sb} ${prefix}ytmp4
 ${setting.sb} ${prefix}ytmp3
 ${setting.sb} ${prefix}getvideo
 ${setting.sb} ${prefix}getmusic
 ${setting.sb} ${prefix}instagram
 ${setting.sb} ${prefix}mediafire

 *SHORTLINK MENU*
 ${setting.sb} ${prefix}shortlink
 ${setting.sb} ${prefix}cuttly
 ${setting.sb} ${prefix}bitly
 ${setting.sb} ${prefix}tinyurl
 ${setting.sb} ${prefix}tinyurlprem
  
 *RANDOM MENU*
 ${setting.sb} ${prefix}quote
 ${setting.sb} ${prefix}galau
 ${setting.sb} ${prefix}bucin
 ${setting.sb} ${prefix}gombal
 ${setting.sb} ${prefix}cecan
 ${setting.sb} ${prefix}cogan
 ${setting.sb} ${prefix}artinama
 ${setting.sb} ${prefix}artimimpi
 ${setting.sb} ${prefix}darkjokes
 ${setting.sb} ${prefix}quotesmaker
 ${setting.sb} ${prefix}asupan

 *EDUCATION MENU*
 ${setting.sb} ${prefix}persegipanjang
 ${setting.sb} ${prefix}perkalian
 ${setting.sb} ${prefix}kuadrat
 ${setting.sb} ${prefix}kubik
 ${setting.sb} ${prefix}brainly
  
 *SEARCH MENU*
 ${setting.sb} ${prefix}lirik
 ${setting.sb} ${prefix}grupwa
 ${setting.sb} ${prefix}ytsearch
 ${setting.sb} ${prefix}gsmarena
 ${setting.sb} ${prefix}wallsearch
 ${setting.sb} ${prefix}googleimage

 *SPAM MENU*
 ${setting.sb} ${prefix}spamcall
 ${setting.sb} ${prefix}spamsms
 ${setting.sb} ${prefix}spamsms2
 ${setting.sb} ${prefix}spamsms3
 ${setting.sb} ${prefix}spamsms4
 ${setting.sb} ${prefix}spamsms5
 ${setting.sb} ${prefix}spamsms6
 ${setting.sb} ${prefix}spamsms7
 ${setting.sb} ${prefix}spamsms8
 
 *SERTIFIKAT MENU*
 ${setting.sb} ${prefix}tololserti
 ${setting.sb} ${prefix}fuckboy
 ${setting.sb} ${prefix}fuckgirl
 ${setting.sb} ${prefix}bucinserti
 ${setting.sb} ${prefix}pacarserti
 ${setting.sb} ${prefix}goodboy
 ${setting.sb} ${prefix}goodgirl
 ${setting.sb} ${prefix}badboy
 ${setting.sb} ${prefix}badgirl

 *TEXT PRO MENU*
 ${setting.sb} ${prefix}berry
 ${setting.sb} ${prefix}blackpink
 ${setting.sb} ${prefix}neon
 ${setting.sb} ${prefix}logobear
 ${setting.sb} ${prefix}christmas
 ${setting.sb} ${prefix}box3d
 ${setting.sb} ${prefix}glitchtiktok
 ${setting.sb} ${prefix}videogame
 ${setting.sb} ${prefix}marvel
 ${setting.sb} ${prefix}ninjalogo
 ${setting.sb} ${prefix}greenhorror
 ${setting.sb} ${prefix}magma
 ${setting.sb} ${prefix}neon3d
 ${setting.sb} ${prefix}orangejuice
 ${setting.sb} ${prefix}chococake
 ${setting.sb} ${prefix}strawberry
 ${setting.sb} ${prefix}pencil
 ${setting.sb} ${prefix}thunder
 ${setting.sb} ${prefix}thunder2
 ${setting.sb} ${prefix}glitch
 ${setting.sb} ${prefix}glitch2
 ${setting.sb} ${prefix}greenneon
 ${setting.sb} ${prefix}skeleton
 
 *ANIME MENU*
 ${setting.sb} ${prefix}naruto
 ${setting.sb} ${prefix}yaoi
 ${setting.sb} ${prefix}loli
 ${setting.sb} ${prefix}waifu
 ${setting.sb} ${prefix}husbu
 
 *STALK MENU*
 ${setting.sb} ${prefix}ghstalk
 ${setting.sb} ${prefix}igstalk
 ${setting.sb} ${prefix}tiktokstalk
 
 *GAME & FUN MENU*
 ${setting.sb} ${prefix}duithoki
 ${setting.sb} ${prefix}tictactoe
 ${setting.sb} ${prefix}delttc
 ${setting.sb} ${prefix}tebakgambar
 ${setting.sb} ${prefix}caklontong
 ${setting.sb} ${prefix}asahotak
 ${setting.sb} ${prefix}tebakjenaka
 ${setting.sb} ${prefix}tebakbendera
 ${setting.sb} ${prefix}siapakahaku
 ${setting.sb} ${prefix}susunkata
 ${setting.sb} ${prefix}dadu
  
 *PAYMENT & BANK*
 ${setting.sb} ${prefix}buylimit
 ${setting.sb} ${prefix}buyglimit
 ${setting.sb} ${prefix}transfer
 ${setting.sb} ${prefix}limit
 ${setting.sb} ${prefix}balance
  
 *GROUP MENU*
 ${setting.sb} ${prefix}groupsetting
 ${setting.sb} ${prefix}antilink
 ${setting.sb} ${prefix}welcome
 ${setting.sb} ${prefix}linkgrup
 ${setting.sb} ${prefix}setppgrup
 ${setting.sb} ${prefix}setnamegc
 ${setting.sb} ${prefix}setdesc
 ${setting.sb} ${prefix}group
 ${setting.sb} ${prefix}revoke
 ${setting.sb} ${prefix}hidetag
 ${setting.sb} ${prefix}tagall
 ${setting.sb} ${prefix}listadmin
 ${setting.sb} ${prefix}infogc
 ${setting.sb} ${prefix}promote
 ${setting.sb} ${prefix}demote
 ${setting.sb} ${prefix}add
 ${setting.sb} ${prefix}kick
 ${setting.sb} ${prefix}mute
  
 *OWNER MENU*
 > evalcode
 x evalcode-2
 $ executor
 ${setting.sb} ${prefix}addbalance
 ${setting.sb} ${prefix}addlimit
 ${setting.sb} ${prefix}addglimit
 ${setting.sb} ${prefix}textchat
 ${setting.sb} ${prefix}chatprem
 ${setting.sb} ${prefix}setprefix
 ${setting.sb} ${prefix}masuk
 ${setting.sb} ${prefix}broadcast
 ${setting.sb} ${prefix}setppbot
 ${setting.sb} ${prefix}exif
 ${setting.sb} ${prefix}leave
 ${setting.sb} ${prefix}addprem
 ${setting.sb} ${prefix}delprem
 ${setting.sb} ${prefix}ban
 ${setting.sb} ${prefix}unban
 ${setting.sb} ${prefix}mode
 ${setting.sb} ${prefix}addsewa
 ${setting.sb} ${prefix}delsewa
 ${setting.sb} ${prefix}block
 ${setting.sb} ${prefix}unblock

*OTHER MENU*
 ${setting.sb} ${prefix}readmore
 ${setting.sb} ${prefix}getpp
 ${setting.sb} ${prefix}tts
 ${setting.sb} ${prefix}ppcp
 ${setting.sb} ${prefix}kontak
 ${setting.sb} ${prefix}covidglobal
 ${setting.sb} ${prefix}infogempa

\`\`\`${setting.botName} By ${setting.ownerName}\`\`\`
`
}
exports.sewabot = (pushname, ownerName) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

*── 「 SEWA BOT 」 ──*

*Harga Sewa*
7 Hari = 5.000
30 Hari = 15.000
Permanen = 25.000

*Keuntungan :*
- Bot Masuk Sesuai Waktu Sewa
- Gratis Premium 3 Hari
- Antilink
- On 24 Jam
- Fitur Banyak
- Welcome
- Dan Lainnya

*_Minat Chat : wa.me/${setting.ownerNum}_*
`
}
exports.mainmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

 *MAIN MENU*
 ${setting.sb} ${prefix}menu
 ${setting.sb} ${prefix}owner
 ${setting.sb} ${prefix}donasi
 ${setting.sb} ${prefix}speed
 ${setting.sb} ${prefix}runtime
 ${setting.sb} ${prefix}cekprem
 ${setting.sb} ${prefix}listprem
 ${setting.sb} ${prefix}listban
 ${setting.sb} ${prefix}listsewa
 ${setting.sb} ${prefix}join
 ${setting.sb} ${prefix}sewabot
 ${setting.sb} ${prefix}delete
 ${setting.sb} ${prefix}sourcecode
 ${setting.sb} ${prefix}tagme
 ${setting.sb} ${prefix}infobalance
 ${setting.sb} ${prefix}tukarprem
`
}
exports.convertmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

 *CONVERTER & TOOLS*
 ${setting.sb} ${prefix}sticker
 ${setting.sb} ${prefix}toimg
 ${setting.sb} ${prefix}tovid
 ${setting.sb} ${prefix}blur
 ${setting.sb} ${prefix}ttp
 ${setting.sb} ${prefix}ttp2
 ${setting.sb} ${prefix}ttp3
 ${setting.sb} ${prefix}ttp4
 ${setting.sb} ${prefix}ttp5
 ${setting.sb} ${prefix}ttp6
 ${setting.sb} ${prefix}urltoimg
`
}
exports.downloadmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

 *DOWNLOADER MENU*
 ${setting.sb} ${prefix}play
 ${setting.sb} ${prefix}tiktok
 ${setting.sb} ${prefix}ytmp4
 ${setting.sb} ${prefix}ytmp3
 ${setting.sb} ${prefix}getvideo
 ${setting.sb} ${prefix}getmusic
 ${setting.sb} ${prefix}instagram
 ${setting.sb} ${prefix}mediafire
`
}
exports.shortlinkmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

 *SHORTLINK MENU*
 ${setting.sb} ${prefix}shortlink
 ${setting.sb} ${prefix}cuttly
 ${setting.sb} ${prefix}bitly
 ${setting.sb} ${prefix}tinyurl
 ${setting.sb} ${prefix}tinyurlprem
`
}
exports.randommenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

 *RANDOM MENU*
 ${setting.sb} ${prefix}quote
 ${setting.sb} ${prefix}galau
 ${setting.sb} ${prefix}bucin
 ${setting.sb} ${prefix}gombal
 ${setting.sb} ${prefix}cecan
 ${setting.sb} ${prefix}cogan
 ${setting.sb} ${prefix}artinama
 ${setting.sb} ${prefix}artimimpi
 ${setting.sb} ${prefix}darkjokes
 ${setting.sb} ${prefix}quotesmaker
 ${setting.sb} ${prefix}asupan
`
}
exports.edumenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

 *EDUCATION MENU*
 ${setting.sb} ${prefix}persegipanjang
 ${setting.sb} ${prefix}perkalian
 ${setting.sb} ${prefix}kuadrat
 ${setting.sb} ${prefix}kubik
 ${setting.sb} ${prefix}brainly
`
}
exports.searchmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

 *SEARCH MENU*
 ${setting.sb} ${prefix}lirik
 ${setting.sb} ${prefix}grupwa
 ${setting.sb} ${prefix}ytsearch
 ${setting.sb} ${prefix}gsmarena
 ${setting.sb} ${prefix}wallsearch
 ${setting.sb} ${prefix}googleimage
`
}
exports.spammenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
 *SPAM MENU*
 ${setting.sb} ${prefix}spamcall
 ${setting.sb} ${prefix}spamsms
 ${setting.sb} ${prefix}spamsms2
 ${setting.sb} ${prefix}spamsms3
 ${setting.sb} ${prefix}spamsms4
 ${setting.sb} ${prefix}spamsms5
 ${setting.sb} ${prefix}spamsms6
 ${setting.sb} ${prefix}spamsms7
 ${setting.sb} ${prefix}spamsms8
`
}
exports.sertimenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
 *SERTIFIKAT MENU*
 ${setting.sb} ${prefix}tololserti
 ${setting.sb} ${prefix}fuckboy
 ${setting.sb} ${prefix}fuckgirl
 ${setting.sb} ${prefix}bucinserti
 ${setting.sb} ${prefix}pacarserti
 ${setting.sb} ${prefix}goodboy
 ${setting.sb} ${prefix}goodgirl
 ${setting.sb} ${prefix}badboy
 ${setting.sb} ${prefix}badgirl
`
}
exports.textpromenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
 *TEXT PRO MENU*
 ${setting.sb} ${prefix}berry
 ${setting.sb} ${prefix}blackpink
 ${setting.sb} ${prefix}neon
 ${setting.sb} ${prefix}logobear
 ${setting.sb} ${prefix}christmas
 ${setting.sb} ${prefix}box3d
 ${setting.sb} ${prefix}glitchtiktok
 ${setting.sb} ${prefix}videogame
 ${setting.sb} ${prefix}marvel
 ${setting.sb} ${prefix}ninjalogo
 ${setting.sb} ${prefix}greenhorror
 ${setting.sb} ${prefix}magma
 ${setting.sb} ${prefix}neon3d
 ${setting.sb} ${prefix}orangejuice
 ${setting.sb} ${prefix}chococake
 ${setting.sb} ${prefix}strawberry
 ${setting.sb} ${prefix}pencil
 ${setting.sb} ${prefix}thunder
 ${setting.sb} ${prefix}thunder2
 ${setting.sb} ${prefix}glitch
 ${setting.sb} ${prefix}glitch2
 ${setting.sb} ${prefix}greenneon
 ${setting.sb} ${prefix}skeleton
`
}
exports.animemenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
 *ANIME MENU*
 ${setting.sb} ${prefix}naruto
 ${setting.sb} ${prefix}yaoi
 ${setting.sb} ${prefix}loli
 ${setting.sb} ${prefix}waifu
 ${setting.sb} ${prefix}husbu
 ${setting.sb} ${prefix}hentai
`
}
exports.stalkmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
 *STALK MENU*
 ${setting.sb} ${prefix}ghstalk
 ${setting.sb} ${prefix}igstalk
 ${setting.sb} ${prefix}tiktokstalk
`
}
exports.gamemenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
 *GAME & FUN MENU*
 ${setting.sb} ${prefix}duithoki
 ${setting.sb} ${prefix}tictactoe
 ${setting.sb} ${prefix}delttc
 ${setting.sb} ${prefix}tebakgambar
 ${setting.sb} ${prefix}caklontong
 ${setting.sb} ${prefix}asahotak
 ${setting.sb} ${prefix}tebakjenaka
 ${setting.sb} ${prefix}tebakbendera
 ${setting.sb} ${prefix}siapakahaku
 ${setting.sb} ${prefix}susunkata
 ${setting.sb} ${prefix}dadu
`
}
exports.bankmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
 *PAYMENT & BANK*
 ${setting.sb} ${prefix}buylimit
 ${setting.sb} ${prefix}buyglimit
 ${setting.sb} ${prefix}transfer
 ${setting.sb} ${prefix}limit
 ${setting.sb} ${prefix}balance
`
}
exports.groupmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
 *GROUP MENU*
 ${setting.sb} ${prefix}groupsetting
 ${setting.sb} ${prefix}antilink
 ${setting.sb} ${prefix}welcome
 ${setting.sb} ${prefix}linkgrup
 ${setting.sb} ${prefix}setppgrup
 ${setting.sb} ${prefix}setnamegc
 ${setting.sb} ${prefix}setdesc
 ${setting.sb} ${prefix}group
 ${setting.sb} ${prefix}revoke
 ${setting.sb} ${prefix}hidetag
 ${setting.sb} ${prefix}tagall
 ${setting.sb} ${prefix}listadmin
 ${setting.sb} ${prefix}infogc
 ${setting.sb} ${prefix}promote
 ${setting.sb} ${prefix}demote
 ${setting.sb} ${prefix}add
 ${setting.sb} ${prefix}kick
 ${setting.sb} ${prefix}mute
`
}
exports.ownermenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
 *OWNER MENU*
 > evalcode
 x evalcode-2
 $ executor
 ${setting.sb} ${prefix}addbalance
 ${setting.sb} ${prefix}addlimit
 ${setting.sb} ${prefix}addglimit
 ${setting.sb} ${prefix}textchat
 ${setting.sb} ${prefix}chatprem
 ${setting.sb} ${prefix}setprefix
 ${setting.sb} ${prefix}masuk
 ${setting.sb} ${prefix}broadcast
 ${setting.sb} ${prefix}setppbot
 ${setting.sb} ${prefix}exif
 ${setting.sb} ${prefix}leave
 ${setting.sb} ${prefix}addprem
 ${setting.sb} ${prefix}delprem
 ${setting.sb} ${prefix}ban
 ${setting.sb} ${prefix}unban
 ${setting.sb} ${prefix}mode
 ${setting.sb} ${prefix}addsewa
 ${setting.sb} ${prefix}delsewa
 ${setting.sb} ${prefix}block
 ${setting.sb} ${prefix}unblock
`
}
exports.othermenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
 *OTHER MENU*
 ${setting.sb} ${prefix}readmore
 ${setting.sb} ${prefix}getpp
 ${setting.sb} ${prefix}tts
 ${setting.sb} ${prefix}ppcp
 ${setting.sb} ${prefix}kontak
 ${setting.sb} ${prefix}covidglobal
 ${setting.sb} ${prefix}infogempa
`
}
