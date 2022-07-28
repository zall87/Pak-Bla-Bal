/*
  * Created by Christian ID 
  * Base Ori : rtwone / Irfan
*/

"use strict";
const {
	downloadContentFromMessage
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('../lib/color')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid } = require("../lib/myfunc");
const { y2mateA, y2mateV } = require('../lib/y2mate')
const { igDownloader } = require("../lib/igdown")
const { darkjokes } = require("../lib/darkjokes")
const { mediafire } = require("../lib/mediafire")
const { webp2mp4File } = require("../lib/convert")
const { pinterest } = require("../lib/pinterest")
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("../lib/banned");
const { isTicTacToe, getPosTic } = require("../lib/tictactoe");
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("../lib/game");
const { addAfkUser, checkAfkUser, getAfkReason, getAfkTime, getAfkId, getAfkPosition } = require("../lib/afk");
const tictac = require("../lib/tictac");
const _prem = require("../lib/premium");
const _sewa = require("../lib/sewa");

const fs = require ("fs");
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const xfar = require('xfarr-api');
const axios = require("axios");
const hxz = require("hxz-api");
const ra = require("ra-api");
const kotz = require("kotz-api");
const yts = require("yt-search");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");
const brainly = require("brainly-scraper");

// Exif
const Exif = require("../lib/exif")
const exif = new Exif()

// Mode
let mode = 'public'

//Prefix
let multi = true
let nopref = false
let prefa = '#'

// DB Game
let tictactoe = [];
let tebakgambar = []
let caklontong = []
let ao = []
let tj = []
let tb = []
let siapaaku = []
let susun = []

// Database
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let mess = JSON.parse(fs.readFileSync('./message/response.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let afk = JSON.parse(fs.readFileSync('./database/afk.json'));

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = async(conn, msg, m, setting, store, welcome) => {
	try {
		let { ownerNumber, botName, gamewaktu, limitCount } = setting
		let { allmenu, mainmenu, convertmenu, downloadmenu, shortlinkmenu, randommenu, edumenu, searchmenu, spammenu, sertimenu, textpromenu, animemenu, stalkmenu, gamemenu, bankmenu, groupmenu, ownermenu, othermenu } = require('./help')
		let { sewabot } = require('./help')
		const { type, quotedMsg, mentioned, now, fromMe } = msg
		if (msg.isBaileys) return
		const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
        const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const content = JSON.stringify(msg.message)
		const from = msg.key.remoteJid
		const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
                const toJSON = j => JSON.stringify(j, null,'\t')
		if (multi){
		    var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : ''
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
		const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
		const args = chats.split(' ')
		const command = chats.toLowerCase().split(' ')[0] || ''
		const isCmd = command.startsWith(prefix)
		const isGroup = msg.key.remoteJid.endsWith('@g.us')
		const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
		const isOwner = ownerNumber == sender ? true : ["6285921165857@s.whatsapp.net", "6285921165857@s.whatsapp.net"].includes(sender) ? true : false
		const pushname = msg.pushName
		const q = chats.slice(command.length + 1, chats.length)
		const body = chats.startsWith(prefix) ? chats : ''
		const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'
		const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.id : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender)
		const isUser = pendaftar.includes(sender)
		const isBan = cekBannedUser(sender, ban)
		const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
		const isSewa = _sewa.checkSewaGroup(from, sewa)
		const isAfkOn = checkAfkUser(sender, afk)
		const isAntiLink = isGroup ? antilink.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isWelcome = isGroup ? welcome.includes(from) ? true : false : false
		const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user
		const pp_bot = fs.readFileSync(setting.pathimg)

        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${setting.ownerName}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `*Runtime : ${runtime(process.uptime())}*`, jpegThumbnail: fs.readFileSync(setting.pathimg)}}}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${setting.fake}`,jpegThumbnail: fs.readFileSync(setting.pathimg)}}} //Fake Document
		const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
                const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
                const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
                mention != undefined ? mention.push(mentionByReply) : []
                const mentionUser = mention != undefined ? mention.filter(n => n) : []
		
		async function downloadAndSaveMediaMessage (type_file, path_file) {
			if (type_file === 'image') {
				var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'video') {
				var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'sticker') {
				var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'audio') {
				var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			}
		}
		const sendFileFromUrl = async (from, url, caption, options = {}) => {
		    let mime = '';
		    let res = await axios.head(url)
		    mime = res.headerd["content-type"]
		    let type = mime.split("/")[0]+"Message"
		    if (mime.split("/")[0] === "image") {
		       var img = await getBuffer(url)
		       return conn.sendMessage(from, { image: img, caption: caption }, options)
		    } else if (mime.split("/")[0] === "video") {
		       var vid = await getBuffer(url)
		       return conn.sendMessage(from, { video: vid, caption: caption }, options)
		    } else if (mime.split("/")[0] === "audio") {
		       var aud = await getBuffer(url)
		       return conn.sendMessage(from, { audio: aud, mimetype: 'audio/mp3' }, options)
		    } else {
		       var doc = await getBuffer(url)
		       return conn.sendMessage(from, { document: doc, mimetype: mime, caption: caption }, options)
		    }
		}
        async function sendPlay(from, query) {
           var url = await yts(query)
           url = url.videos[0].url
           hxz.youtube(url).then(async(data) => {
           var button = [
		        	{ urlButton: { displayText: `Source`, url : `https://youtu.be/${data.id}` } },
	         		{ quickReplyButton: { displayText: `🎧 Audio (${data.size_mp3})`, id: `${prefix}ytmp3 ${url}` } },
	         		{ quickReplyButton: { displayText: `🎥 Video (${data.size})`, id: `${prefix}ytmp4 ${url}` } },
		]
             conn.sendMessage(from, { caption: `*Title :* ${data.title}\n*Quality :* ${data.quality}\n*Url :* https://youtu.be/${data.id}`, image: {url: data.thumb}, templateButtons: button, footer: 'Pilih Salah Satu Button Dibawah', mentions: [sender]} )
           }).catch((e) => {
             conn.sendMessage(from, { text: mess.error.api }, { quoted: fgif })
               ownerNumber.map( i => conn.sendMessage(ownerNumber, { text: `Send Play Error : ${e}` }))
           })
        }
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
		}
		function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
		function monospace(string) {
            return '```' + string + '```'
        }
		function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}
		function mentions(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = conn.sendMessage(from, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
		      return res
 		    }
		}
		const reply = (teks) => {
			conn.sendMessage(from, { text: teks }, { quoted: msg })
		}
		const fakemsg = (teks) => {
			conn.sendMessage(from, { text: teks }, { quoted: fgif})
		}
		const textImg = (teks) => {
			return conn.sendMessage(from, { text: teks, jpegThumbnail: pp_bot }, { quoted: msg })
		}
		const sendMess = (hehe, teks) => {
			return conn.sendMessage(hehe, { text, teks })
		}
		const buttonWithText = (from, text, footer, buttons) => {
			return conn.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
		}
		
		const sendContact = (jid, numbers, name, quoted, mn) => {
			let number = numbers.replace(/[^0-9]/g, '')
			const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return conn.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
		}
		
		const buttonsDefault = [
		    { urlButton: { displayText: `Youtube`, url : `${setting.youtubeOwner}` } },
		    { urlButton: { displayText: `Website`, url : `${setting.web}` } },
			{ callButton: { displayText: `Contact Me`, phoneNumber: `${setting.ownerNumber}` } },
			{ quickReplyButton: { displayText: `👤 Owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `💰 Donasi`, id: `${prefix}donate` } }
		]
		const buttonsMenu = [
		    { urlButton: { displayText: `${setting.namaButton}`, url : `${setting.linkButton}` } },
			{ quickReplyButton: { displayText: `👤 Owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `💰 Donasi`, id: `${prefix}donate` } }
		]
        
		const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

         // Mode
        if (mode === 'self'){
            if (!fromMe) return
        }

		// Auto Read & Presence Online
		conn.sendReadReceipt(from, sender, [msg.key.id])
		conn.sendPresenceUpdate('available', from)
		conn.sendPresenceUpdate('composing', from)
		
		// Auto Registrasi
		if (isCmd && !isUser) {
		  pendaftar.push(sender)
		  fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
		}
		
		// Premium
		_prem.expiredCheck(conn, premium)
		
		// Sewa
             _sewa.expiredCheck(conn, sewa)

		// Tictactoe
		if (isTicTacToe(from, tictactoe)) tictac(chats, prefix, tictactoe, from, sender, reply, mentions, addBalance, balance)

         // Banned
        if (isBan) return
        BannedExpired(ban)

        // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.match(`://chat.whatsapp.com`)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nKamu Mengirim Link Grup, Bot Akan Kick Kamu`)
                number = sender
      conn.groupParticipantsUpdate(from, [number], "remove")
            }
        }
        // Mute
        if (isMuted){
            if (!isGroupAdmins && !isOwner) return
            if (chats.toLowerCase().startsWith(prefix+'unmute')){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`Bot telah diunmute di group ini`)
            }
        }
        // Afk
        if (isGroup) {
            if (mentioned.length !== 0){
                for (let ment of mentioned) {
                    if (checkAfkUser(ment, afk)) {
                        const getId = getAfkId(ment, afk)
                        const getReason = getAfkReason(getId, afk)
                        const getTime = Date.now() - getAfkTime(getId, afk)
                        const heheh = ms(getTime)
                        await mentions(`*「 AFK MODE 」*\n\n*Sssttt! Orangnya lagi AFK, jangan diganggu!*\n\n*➸ Nama :* @${ment.split('@')[0]}\n*➸ Alasan :* ${getReason}\n*➸ Sejak :* ${heheh.hours} \`\`\`Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\`\`\``, [ment], true)
                        sendMess(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nIn Group : ${groupName}\nPesan : ${chats}`)
                    }
                }
            }
            if (checkAfkUser(sender, afk)) {
                afk.splice(getAfkPosition(sender, afk), 1)
                fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
                await mentions(`@${sender.split('@')[0]} telah kembali dari AFK! Selamat datang kembali~`, [sender], true)
            }
        }
        
        // Auto Youtube Downloader By Christian ID
let yutu = `https://youtu${chats.slice(13)}`
if (!isGroup){
if (chats.startsWith(yutu)) {
            y2mateA(yutu).then( data => {
              conn.sendMessage(from, {document: {url: data[0].link}, fileName: `${data[0].judul}.mp3`, mimetype: 'audio/mp3'}, {quoted: fgif})
})
}
}
if (isGroup) {
if (chats.startsWith(yutu)) {
  var buttonsYt = [
			{ urlButton: { displayText: `Link`, url : `${yutu}` } },
			{ quickReplyButton: { displayText: `Video`, id: `${prefix}ytmp4 ${yutu}` } },
			{ quickReplyButton: { displayText: `Voice Not`, id: `${prefix}ytmp3vn ${yutu}` } },
			{ quickReplyButton: { displayText: `Document`, id: yutu } },
		]
            y2mateA(yutu).then( data => {
              conn.sendMessage(from, {audio: {url: data[0].link}, mimetype: 'audio/mp4'}, {quoted: msg})
              var caption = monospace(`Auto Download Youtube, Pilih Tipe Berikut`)
              conn.sendMessage(sender, {text: caption, templateButtons: buttonsYt, footer: botName, mentions: [sender]} )
					  })
            }
}

        // Game
		cekWaktuGame(conn, tebakgambar)
		if (isPlayGame(from, tebakgambar) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebakgambar)) {
			var kode = randomNomor(1000000000, 9000000000)
		    var htgm = randomNomor(200, 300)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} 🎉 Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\nKode Game : ${kode}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}tebakgambar` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'TEBAK GAMBAR', mentions: [sender]} )  
		    tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
		  }
		}
		cekWaktuGame(conn, caklontong)
		if (isPlayGame(from, caklontong) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, caklontong)) {
			var kode = randomNomor(1000000000, 9000000000)
		    var htgm = randomNomor(200, 300)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} 🎉 Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, caklontong)}\nHadiah : ${htgm} balance\nKode Game : ${kode}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}caklontong` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'CAK LONTONG', mentions: [sender]} )  
		    caklontong.splice(getGamePosi(from, caklontong), 1)
		  }
		}
		cekWaktuGame(conn, ao)
		if (isPlayGame(from, ao) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, ao)) {
			var kode = randomNomor(1000000000, 9000000000)
		    var htgm = randomNomor(200, 300)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} 🎉 Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, ao)}\nHadiah : ${htgm} balance\nKode Game : ${kode}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}asahotak` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'ASAH OTAK', mentions: [sender]} )  
		    ao.splice(getGamePosi(from, ao), 1)
		  }
		}
		cekWaktuGame(conn, tj)
		if (isPlayGame(from, tj) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, tj)) {
			var kode = randomNomor(1000000000, 9000000000)
		    var htgm = randomNomor(200, 300)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} 🎉 Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tj)}\nHadiah : ${htgm} balance\nKode Game : ${kode}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}tebakjenaka` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'TEBAK JENAKA', mentions: [sender]} )  
		    tj.splice(getGamePosi(from, tj), 1)
		  }
		}
		cekWaktuGame(conn, siapaaku)
		if (isPlayGame(from, siapaaku) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, siapaaku)) {
		    var htgm = randomNomor(200, 300)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} 🎉 Jawaban Kamu Benar*\n\nJawaban : ${getJawabanGame(from, siapaaku)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}siapakahaku` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'TEBAK AKU', mentions: [sender]} )  
		    siapaaku.splice(getGamePosi(from, siapaaku), 1)
		  }
		}
		
		cekWaktuGame(conn, tb)
		if (isPlayGame(from, tb) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, tb)) {
		    var htgm = randomNomor(200, 300)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} 🎉 Jawaban Kamu Benar*\n\nJawaban : ${getJawabanGame(from, tb)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}tebakbendera` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'TEBAK BENDERA', mentions: [sender]} )  
		    tb.splice(getGamePosi(from, tb), 1)
		  }
		}
		cekWaktuGame(conn, susun)
		if (isPlayGame(from, susun) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, susun)) {
		    var htgm = randomNomor(200, 300)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} 🎉 Jawaban Kamu Benar*\n\nJawaban : ${getJawabanGame(from, susun)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}susunkata` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'SUSUN KATA', mentions: [sender]} )  
		    susun.splice(getGamePosi(from, susun), 1)
		  }
		}

		if (chats.startsWith("> ") && isOwner) {
		console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
		  const ev = (sul) => {
            var sat = JSON.stringify(sul, null, 2)
            var bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return textImg(bang)
          }
          try {
           textImg(util.format(eval(`;(async () => { ${chats.slice(2)} })()`)))
          } catch (e) {
           textImg(util.format(e))
          }
		} else if (chats.startsWith("$ ") && isOwner) {
        console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
          exec(chats.slice(2), (err, stdout) => {
		    if (err) return reply(`${err}`)
		    if (stdout) reply(`${stdout}`)
		  })
        } else if (chats.startsWith("x ") && isOwner) {
	    console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkaokwoak`))
		 try {
	       let evaled = await eval(chats.slice(2))
		   if (typeof evaled !== 'string') evaled = require("util").inspect(evaled)
			reply(`${evaled}`)
		 } catch (err) {
		   reply(`${err}`)
		 }
		}
		
		if (chats.startsWith(`@${setting.ownerNum}`)){ 
var teks = `*Hai @${sender.split('@')[0]} 👋*\n\n*_Jika Ada Kepentingan Dengan Owner Silakan Hubungi Owner_*`
            var but = [{buttonId: `${prefix}owner`, buttonText: { displayText: "Owner" }, type: 1 }]
			    conn.sendMessage(from, { text: teks, footer: "Klik Button Dibawah Untuk Menghubungi Owner", buttons: but, mentions: [sender]} )  
}
		
		// Logs;
		if (!isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(20), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
		}
		if (isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(20), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}

		switch(command) {
			case 'bot': case 'Bot':{
                var teks = `*Hai @${sender.split('@')[0]} 👋*\n\n*_Ada Yang Bisa Saya Bantu ? Ketik ${prefix}menu Untuk Memulai Menu_*`
            var but = [{buttonId: `${prefix}menu`, buttonText: { displayText: "Menu Bot" }, type: 1 }]
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, buttons: but, mentions: [sender]} )  
            }
                break
case 'P': case 'proses':{
            	if (!isQuotedMsg) return reply(`Reply Message nya!`)
            	if (!isGroup) return reply(mess.OnlyGrup)
                const number = quotedMsg.sender
                fakemsg(`*「 TRANSAKSI PENDING 」*\n\n\`\`\`📆 TANGGAL : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\n⌚ JAM : ${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')}\n✨ STATUS : PENDING\`\`\`\n\nPesanan @${number.split('@')[0]} sedang diproses!`)
            }
                break
             case 'D': case 'done':{
             	if (!isQuotedMsg) return reply(`Reply Message nya!`)
             	if (!isGroup) return reply(mess.OnlyGrup)
                 const number = quotedMsg.sender
                fakemsg(`*「 TRANSAKSI BERHASIL 」*\n\n\`\`\`📆 TANGGAL : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\n⌚ JAM : ${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')}\n✨ STATUS : Berhasil\`\`\`\n\nTerimakasih @${number.split('@')[0]} Next Order Ya🙏`)
            }
                break
			// Main Menu
case prefix+'selamatdatang':
                var teks = `*Welcome Kak Semoga Betah Di Group Ini*\n*Patuhi Rules Group Jika Tidak Ingin Ter Kick*`
            var but = [{buttonId: `${prefix}menu`, buttonText: { displayText: "Menu Bot" }, type: 1 }]
			    conn.sendMessage(from, { text: teks, footer: `Welcome To ${groupMetadata.subject}`, buttons: but, mentions: [sender]} )  
                break
case prefix+'goodbye':
                var teks = `*Selamat Tinggal Kak*\n*Makanya Jangan Melanggar Rules Group*`
            var but = [{buttonId: `${prefix}menu`, buttonText: { displayText: "Menu Bot" }, type: 1 }]
			    conn.sendMessage(from, { text: teks, footer: `Leave From ${groupMetadata.subject}`, buttons: but, mentions: [sender]} )  
                break
            case prefix+'delete':
  case prefix+'d':
    case prefix+'del':
  conn.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from }})
  break
			case prefix+'allmenu':
			case prefix+'allfitur':
			    var gambarnya = ["https://i.ibb.co/5szVCLS/Allmenu1.jpg","https://i.ibb.co/3NtLdW3/Allmenu2.jpg","https://i.ibb.co/PFTbdFK/Allmenu3.jpg"]
			    var teks = allmenu(sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount)
			    conn.sendMessage(from, { caption: teks, image: {url: `${pickRandom(gambarnya)}`}, templateButtons: buttonsMenu, footer: `${setting.footer}`, mentions: [sender] })
				break
case prefix+'mainmenu':
			case prefix+'menumain':
			    var teks = mainmenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
case prefix+'convertmenu':
			case prefix+'menuconvert':
			    var teks = convertmenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
case prefix+'downloadmenu':
			case prefix+'menudownload':
			    var teks = downloadmenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
case prefix+'shortlinkmenu':
			case prefix+'menushortlink':
			    var teks = shortlinkmenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
case prefix+'randommenu':
			case prefix+'menurandom':
			    var teks = randommenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
case prefix+'edumenu':
			case prefix+'menuedu':
			    var teks = edumenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
case prefix+'searchmenu':
			case prefix+'menusearch':
			    var teks = searchmenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
case prefix+'spammenu':
			case prefix+'menuspam':
			    var teks = spammenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
case prefix+'sertimenu':
			case prefix+'menuserti':
			    var teks = sertimenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
case prefix+'textpromenu':
			case prefix+'menutextpro':
			    var teks = textpromenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
case prefix+'animemenu':
			case prefix+'menuanime':
			    var teks = animemenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
case prefix+'stalkmenu':
			case prefix+'menustalk':
			    var teks = stalkmenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
case prefix+'gamemenu':
			case prefix+'menugame':
			    var teks = gamemenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
case prefix+'groupmenu':
			case prefix+'menugroup':
			    var teks = groupmenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
case prefix+'ownermenu':
			case prefix+'menuowner':
			    var teks = ownermenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
case prefix+'othermenu':
			case prefix+'menuother':
			    var teks = othermenu(prefix, pushname)
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, templateButtons: buttonsMenu, mentions: [sender]} )  
				break
			case prefix+'sewabot':
			    var teks = sewabot(pushname)
			    var but = [{buttonId: `${prefix}pay`, buttonText: { displayText: "Payment" }, type: 1 }]
			    conn.sendMessage(from, { caption: teks, image: pp_bot, buttons: but, footer: `${setting.footer}` }, { quoted: fgif })
				break
            case prefix+'help':
            case prefix+'menu':
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
var but = [{buttonId: `${prefix}command`, buttonText: { displayText: "List Menu 📑" }, type: 1 }, {buttonId: `${prefix}rate`, buttonText: { displayText: "Rate Bot ⭐" }, type: 1 }, {buttonId: `${prefix}thanksto`, buttonText: { displayText: "Thanks To 💌" }, type: 1 }]
var teks = `${ucapanWaktu} ${pushname} 👋

Saya ${setting.botName}, Bot Ini Adalah Beta Multi-Device Whatsapp
Jika Ada Fitur Yang Eror Segera Hubungi Owner Agar Segera Diperbaiki 🙏`
 conn.sendMessage(from, { caption: teks, image: {url: `${pickRandom(setting.randomlink)}`}, buttons: but, footer: `*© ${setting.botName}*` }, { quoted: fgif })
			    break
case prefix+'command':
const salam = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
  var sections = [
    {
	title: "MENU KE 1",
	rows: [
	    {title: "All Menu", rowId: "allmenu"}
	]
    },
    {
	title: "MENU KE 2",
	rows: [
	    {title: "Main Menu ", rowId: "mainmenu"},
	    {title: "Convert Menu", rowId: "convertmenu"},
	    {title: "Download Menu", rowId: "downloadmenu"},
	    {title: "Shortlink Menu", rowId: "shortlinkmenu"},
	    {title: "Random Menu", rowId: "randommenu"},
	    {title: "Education Menu", rowId: "edumenu"},
	    {title: "Search Menu", rowId: "searchmenu"},
	    {title: "Spam Menu", rowId: "spammenu"},
	    {title: "Sertifikat Menu", rowId: "sertimenu"},
	    {title: "Textpro Menu", rowId: "textpromenu"},
	    {title: "Anime Menu", rowId: "animemenu"},
	{title: "Stalk Menu", rowId: "stalkmenu"},
	{title: "Game & Fun Menu", rowId: "gamemenu"},
	{title: "Bank Menu", rowId: "bankmenu"},
	{title: "Group Menu", rowId: "groupmenu"},
	{title: "Owner Menu", rowId: "ownermenu"},
	{title: "Other Menu", rowId: "othermenu"},
	]
    },
    {
	title: "MENU KE 3",
	rows: [
	    {title: "Thanks To", rowId: "thanksto"}
	]
    },
]
var listMessage = {
  text: `${salam} ${pushname} 👋\n\n*WAKTU INDONESIA :* \n*WIB* : ${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')}\n*WITA* : ${moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')}\n*WIT* : ${moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')}\n\nList Menu *${setting.botName}*`,
  footer: `\n*${setting.footer}*`,
  title: "",
  buttonText: "List Menu",
  sections
}
conn.sendMessage(from, listMessage, { quoted: fgif })
  break
case prefix+'rate':
            case prefix+'rating':
var but = [{buttonId: `${prefix}rating1`, buttonText: { displayText: "Rating 1 - 25 ⭐" }, type: 1 }, {buttonId: `${prefix}rating2`, buttonText: { displayText: "Rating 25 - 60 ⭐⭐" }, type: 1 }, {buttonId: `${prefix}rating3`, buttonText: { displayText: "Rating 60 - 100 ⭐⭐⭐" }, type: 1 }]
var teks = `Hallo ${pushname} 👋

Bantu Rating Bot Yukk!!, Dengan Cara Menekan Tombol Dibawah Ini, Pilih Salah Satu Yaa Terimakasih`
 conn.sendMessage(from, { caption: teks, image: {url: `${pickRandom(setting.randomlink)}`}, buttons: but, footer: `© ${setting.botName}` }, { quoted: fgif })
			    break
case prefix+'rating1':
fakemsg(`Hallo ${pushname} 👋\n\nTerima Kasih Telah Bantu Menilai Bot Ini\nJika Kamu Kurang Puas Dengan Bot Ini Mohon Di Maafkan Yah 🙏`)
break
case prefix+'rating2':
fakemsg(`Hallo ${pushname} 👋\n\nTerima Kasih Telah Bantu Menilai Bot Ini\nDukung Bot Ini Ya Agar Semakin Berkembang 👍`)
break
case prefix+'rating3':
fakemsg(`Hallo ${pushname} 👋\n\nTerima Kasih Telah Bantu Menilai Bot Ini\nNilai Yang Cukup Bagus Untuk Bot Ini Terimakasih Telah Memakai Bot Ini 🙏`)
break
			case prefix+'runtime':
			    reply(runtime(process.uptime()))
			    break
            case prefix+'tes':
                var teks = `*STATUS BOT ONLINE*\n${runtime(process.uptime())}`
            var but = [{buttonId: `${prefix}menu`, buttonText: { displayText: "Menu Bot" }, type: 1 }]
			    conn.sendMessage(from, { text: teks, footer: `Hai Kak ${pushname} 👋`, buttons: but, mentions: [sender]} )  
                break
            case prefix+'ping':
			case prefix+'speed':
			    let timestamp = speed();
                            let latensi = speed() - timestamp
                            reply(`${latensi.toFixed(4)} Second`)
		            break
case prefix+'infobalance':
  case prefix+'tukarbalance':
var infomenu = ["https://i.ibb.co/StvqR2B/1e5b0f093a1e.jpg","https://i.ibb.co/kgdSznw/0c9ebde24eb2.jpg","https://i.ibb.co/PhQdxNb/99050ae13b7a.jpg","https://i.ibb.co/2ddLXSj/72dcf1b92fc3.jpg"]
    var caption = `*Hallo Kak @${sender.split('@')[0]} 👋*\n\n*- Info Balance :*\n• Balance Dapat Di Tukarkan Ke Premium Jika Mencapai Jumlah Target\n*20.000 Balance = 10 Hari*\n\nJika Ingin Push Balance Silakan Main Game Dan Dapatkan Balancenya\nUntuk Menukarnya Silakan Hubungi Owner`
    conn.sendMessage(from, {caption: caption, image: {url: `${pickRandom(infomenu)}`}, mentions: [sender]} )  
    limitAdd(sender, limit)
    break
case prefix+'tukarprem':
if (getBalance(sender, balance) < 20000) return reply(`Balance kamu tidak mencukupi untuk menukarkan ke premium`)
var kurbal = kurangBalance(`${sender}`, parseInt(20000), balance)
var addpremium = _prem.addPremiumUser(`${sender}`, `10d`, premium)
var teks = `*Hai @${sender.split('@')[0]} 👋*\n\n*Balance Kamu Sudah Ditukarkan Ke Premium Silakan Cek Premium Kamu*`
            var but = [{buttonId: `${prefix}cekprem`, buttonText: { displayText: "Cek Premium" }, type: 1 }]
			    conn.sendMessage(from, { text: teks, footer: `© ${setting.botName}`, buttons: but, mentions: [sender]} )  
                break
break
case prefix+'addbalance':
if (!isOwner) return reply(mess.OnlyOwner)
if (args.length < 2) return reply(`Kirim perintah ${command} *nomor|jumlah*`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var addbal = addBalance(`${text1}@s.whatsapp.net`, parseInt(`${text2}`), balance)
reply(`*Sukses Menambahkan Balance User Sebanyak : $${text2}*`)
break
			case prefix+'pay':
            case prefix+'payment':
var but = [{buttonId: `${prefix}owner`, buttonText: { displayText: "Owner" }, type: 1 }]
var teks = `──「 PAYMENT 」──

Hi ${pushname} 👋🏻
\`\`\`GOPAY : SCAN QRIS DI ATAS\`\`\`
\`\`\`OVO : SCAN QRIS DI ATAS\`\`\`
\`\`\`DANA : SCAN QRIS DI ATAS\`\`\`
\`\`\`PULSA : TIDAK MENERIMA VIA PULSA!!!!\`\`\`

*_Jika Sudah Membayar Silakan Konfirmasi Ke Owner_*`
 conn.sendMessage(from, { caption: teks, image: {url: `${setting.donasiQris}`}, buttons: but, footer: `© Sewa Bot By ${setting.ownerName}` }, { quoted: fgif })
			    break
case prefix+'sc':
case prefix+'sourcecode':
var teks = `*Hai Kak @${sender.split('@')[0]} 👋*\n\nMau Scnya Kak?\n*Link : ${setting.linkButton}*`
            var but = [{buttonId: `${prefix}ytown`, buttonText: { displayText: "Youtube Sc Ori" }, type: 1 }]
			    conn.sendMessage(from, { text: teks, footer: `© *Sourcecode Bot*`, buttons: but, mentions: [sender]} )  
                break
case prefix+'ytown':
fakemsg(`_Sumber Script : https://youtube.com/c/ChristianID99_`)
break
case prefix+'tagme':
                mentions(`Woy @${sender.split('@')[0]}`, [sender], true)
                break
case prefix+'block':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah *${command} nomer`)
                const block = args.join(" ")
                await conn.updateBlockStatus(args[1] + '@s.whatsapp.net', "block")
                reply(`Sukses Block Target`)
                break
case prefix+'unblock':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah *${command} nomer`)
                const unblock = args.join(" ")
                await conn.updateBlockStatus(args[1] + '@s.whatsapp.net', "unblock")
                reply(`Sukses Unblock Target`)
                break
case prefix+'donasi':
            case prefix+'donate':
var but = [{buttonId: `${prefix}owner`, buttonText: { displayText: "Owner" }, type: 1 }]
var teks = `──「 DONASI 」──

Hi ${pushname} 👋🏻
\`\`\`GOPAY : SCAN QRIS DI ATAS\`\`\`
\`\`\`OVO : SCAN QRIS DI ATAS\`\`\`
\`\`\`DANA : SCAN QRIS DI ATAS\`\`\`
\`\`\`PULSA : ${setting.donasiPulsa}\`\`\`

*_Donate Untuk Perkembangan Bot Ini_*
*_Thanks You Yang Sudah Donate Semoga Bermanfaat_*`
 conn.sendMessage(from, { caption: teks, image: {url: `${setting.donasiQris}`}, buttons: but, footer: `Donasi Bot ${setting.botName}` }, { quoted: fgif })
			    break
case prefix+'infobot':
  case prefix+'inforobot':
    case prefix+'info':
      var caption = `*[ Info ${setting.botName} ]*

Haii, aku adalah *${setting.botName}*, Yang bisa membantu anda untuk membuat stiker dan download lagu yang di udah di program oleh Pemilik Aku *${setting.ownerName}* aku mempunyai lebih dari 100 fitur yang bisa kau gunakan dengan gratis, kamu Bisa melihat fitur fitur tersebut dengan cara ketik ${prefix}menu

*Nama Bot :* ${setting.botName}
*Name Owner :* ${setting.ownerName}
*Nomor Owner :* wa.me/${setting.ownerNumber}
*Engine :* NodeJs
*Status :* Aktif
*Aktif Selama :* ${runtime(process.uptime())}

===================
Thanks To
- Ifran / Rtwone (Base)
- Christian ID (Created)
- ${setting.ownerName} (Owner)`

conn.sendMessage(from, { caption: caption, image: pp_bot }, {quoted: fgif})
break
			case prefix+'owner':
			    for (let x of ownerNumber) {
			      sendContact(from, x.split('@s.whatsapp.net')[0], `${setting.ownerName}`, fgif)
			    }
			    break
			case prefix+'cekprem':
            case prefix+'cekpremium':
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
                if (isOwner) return reply(`Lu owner bego!`)
                if (_prem.getPremiumExpired(sender, premium) == "PERMANENT") return reply(`PERMANENT`)
                let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
                break
            case prefix+'listprem':
                let txt = `List Prem\nJumlah : ${premium.length}\n\n`
                let men = [];
                for (let i of premium) {
                    men.push(i.id)
                    txt += `*ID :* @${i.id.split("@")[0]}\n`
                  if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    txt += `*Expire :* PERMANENT\n\n`
                  } else {
                    let cekvip = ms(i.expired - Date.now())
                    txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                  }
                }
                mentions(txt, men, true)
                break
	        // Converter & Tools Menu
			case prefix+'sticker': case prefix+'stiker': case prefix+'s':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (isImage || isQuotedImage) {
		           var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
			       var buffer = Buffer.from([])
			       for await(const chunk of stream) {
			          buffer = Buffer.concat([buffer, chunk])
			       }
			       var rand1 = 'sticker/'+getRandom('.jpg')
			       var rand2 = 'sticker/'+getRandom('.webp')
			       fs.writeFileSync(`./${rand1}`, buffer)
			       ffmpeg(`./${rand1}`)
				.on("error", console.error)
				.on("end", () => {
				  exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				    conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
				    limitAdd(sender, limit)
					fs.unlinkSync(`./${rand1}`)
			            fs.unlinkSync(`./${rand2}`)
			          })
				 })
				.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				.toFormat('webp')
				.save(`${rand2}`)
			    } else if (isVideo || isQuotedVideo) {
				 var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				 var buffer = Buffer.from([])
				 for await(const chunk of stream) {
				   buffer = Buffer.concat([buffer, chunk])
				 }
			     var rand1 = 'sticker/'+getRandom('.mp4')
				 var rand2 = 'sticker/'+getRandom('.webp')
			         fs.writeFileSync(`./${rand1}`, buffer)
			         ffmpeg(`./${rand1}`)
				  .on("error", console.error)
				  .on("end", () => {
				    exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				      conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
				      limitAdd(sender, limit)
					  fs.unlinkSync(`./${rand1}`)
				      fs.unlinkSync(`./${rand2}`)
				    })
				  })
				 .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				 .toFormat('webp')
				 .save(`${rand2}`)
                } else {
			       reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
			    }
                break
			case prefix+'toimg': case prefix+'toimage':
                case prefix+'tovid': case prefix+'tovideo':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (!isQuotedSticker) return reply(`Reply stikernya!`)
                   var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
                   var buffer = Buffer.from([])
                   for await(const chunk of stream) {
                     buffer = Buffer.concat([buffer, chunk])
                   }
                   var rand1 = 'sticker/'+getRandom('.webp')
                   var rand2 = 'sticker/'+getRandom('.png')
                   fs.writeFileSync(`./${rand1}`, buffer)
                   if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
                     reply(mess.wait)
                     exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
                       fs.unlinkSync(`./${rand1}`)
                       if (err) return reply(mess.error.api)
                       conn.sendMessage(from, {caption: `*Nih Kak ${pushname}*`, image: fs.readFileSync(`./${rand2}`) }, { quoted: fgif })
                       limitAdd(sender, limit)
                       fs.unlinkSync(`./${rand2}`)
                     })
                   } else {
                     reply(mess.wait)
                     webp2mp4File(`./${rand1}`).then(async(data) => {
                       fs.unlinkSync(`./${rand1}`)
                       conn.sendMessage(from, {caption: `*Nih Kak ${pushname}*`, video: await getBuffer(data.data) }, { quoted: fgif })
                       limitAdd(sender, limit)
                     })
                   }
                   break
case prefix+'blur':
                 if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 reply(mess.wait)
                 const blur = args.join(" ")
                 var but = [{buttonId: `${prefix}menu`, buttonText: { displayText: "Back To Menu" }, type: 1 }]
                 conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/maker/blur?url=${args[1]}`}, buttons: but, footer: `${setting.footer}` }, {quoted: fgif})
                 break
case prefix+'ttp':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const ttp = args.join(" ")
conn.sendMessage(from, {caption: `Please Change To Sticker`, image: {url: `https://api.lolhuman.xyz/api/ttp?apikey=${setting.lolkey}&text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'ttp2':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const ttp2 = args.join(" ")
conn.sendMessage(from, {caption: `Please Change To Sticker`, image: {url: `https://api.lolhuman.xyz/api/ttp2?apikey=${setting.lolkey}&text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'ttp3':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const ttp3 = args.join(" ")
conn.sendMessage(from, {caption: `Please Change To Sticker`, image: {url: `https://api.lolhuman.xyz/api/ttp3?apikey=${setting.lolkey}&text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'ttp4':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const ttp4 = args.join(" ")
conn.sendMessage(from, {caption: `Please Change To Sticker`, image: {url: `https://api.lolhuman.xyz/api/ttp4?apikey=${setting.lolkey}&text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'ttp5':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const ttp5 = args.join(" ")
conn.sendMessage(from, {caption: `Please Change To Sticker`, image: {url: `https://api.lolhuman.xyz/api/ttp5?apikey=${setting.lolkey}&text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'ttp6':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const ttp6 = args.join(" ")
conn.sendMessage(from, {caption: `Please Change To Sticker`, image: {url: `https://api.lolhuman.xyz/api/ttp6?apikey=${setting.lolkey}&text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'urltoimg':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const urltoimg = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://api.lolhuman.xyz/api/urltoimg?apikey=${setting.lolkey}&url=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
// Spam Menu
case prefix+'spamcall':
    if (!args[1].includes('62')) return reply(`Masukan Nomer mulai dari 62`)
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				var data = await fetchJson(`https://api.lolhuman.xyz/api/spam/call1?apikey=${setting.lolkey}&nomor=${q}`)
			    fakemsg(`\`\`\`${data.result}\`\`\``)
				break
case prefix+'spamsms':
    if (!args[1].includes('62')) return reply(`Masukan Nomer mulai dari 62`)
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${setting.lolkey}&nomor=${q}`)
			    fakemsg(`\`\`\`${data.result}\`\`\``)
				break
case prefix+'spamsms2':
    if (!args[1].includes('62')) return reply(`Masukan Nomer mulai dari 62`)
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${setting.lolkey}&nomor=${q}`)
			    fakemsg(`\`\`\`${data.result}\`\`\``)
				break
case prefix+'spamsms3':
    if (!args[1].includes('62')) return reply(`Masukan Nomer mulai dari 62`)
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${setting.lolkey}&nomor=${q}`)
			    fakemsg(`\`\`\`${data.result}\`\`\``)
				break
case prefix+'spamsms4':
    if (!args[1].includes('62')) return reply(`Masukan Nomer mulai dari 62`)
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${setting.lolkey}&nomor=${q}`)
			    fakemsg(`\`\`\`${data.result}\`\`\``)
				break
case prefix+'spamsms5':
    if (!args[1].includes('62')) return reply(`Masukan Nomer mulai dari 62`)
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${setting.lolkey}&nomor=${q}`)
			    fakemsg(`\`\`\`${data.result}\`\`\``)
				break
case prefix+'spamsms6':
    if (!args[1].includes('62')) return reply(`Masukan Nomer mulai dari 62`)
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${setting.lolkey}&nomor=${q}`)
			    fakemsg(`\`\`\`${data.result}\`\`\``)
				break
case prefix+'spamsms7':
    if (!args[1].includes('62')) return reply(`Masukan Nomer mulai dari 62`)
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${setting.lolkey}&nomor=${q}`)
			    fakemsg(`\`\`\`${data.result}\`\`\``)
				break
case prefix+'spamsms8':
    if (!args[1].includes('62')) return reply(`Masukan Nomer mulai dari 62`)
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${setting.lolkey}&nomor=${q}`)
			    fakemsg(`\`\`\`${data.result}\`\`\``)
				break
	        // Downloader Menu
			/*case prefix+'tiktok':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Tiktok(args[1]).then( data => {
			      conn.sendMessage(from, {
				   video: { url: data.medias[0].url },
				   caption: `${data.title}\n\nKamu bisa mengubahnya menjadi Vidio Tanpa Watermark atau Audio, pencet tombol dibawah untuk mengubahnya!`,
				   buttons: [{buttonId: `${prefix}tiktoknowm ${args[1]}`, buttonText: { displayText: "Without Watermark" }, type: 1 },
					{buttonId: `${prefix}tiktokaudio ${args[1]}`, buttonText: { displayText: "Audio" }, type: 1 }],
				   footer: "Create by ${setting.ownerName}"
			      }, { quoted: msg })
				  limitAdd(sender, limit)
			    }).catch(() => reply(mess.error.api))
			    break*/
			/*case prefix+'tiktoknowm':
			  case prefix+'tiktok':
				  case prefix+'tt':
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    const link = `${q}`
				hxz.ttdownloader(link).then( data => {
					var tidtod = [
						{ urlButton: { displayText: `Link`, url : `${q}` } },
			{ quickReplyButton: { displayText: `Ubah Ke Audio`, id: `${prefix}tiktokaudio ${q}` } },
				]
				reply(mess.wait)
				conn.sendMessage(from, { caption: `Succes Download Video Tiktok, Thanks For Using ${botName}`, video: {url: data.nowm}, templateButtons: tidtod, footer: `Tiktok Downloader`, mentions: [sender]} )
			}).catch(() => reply(mess.error.api))
			limitAdd(sender, limit)
			    break
			case prefix+'tiktokaudio':
				case prefix+'ttaudio':
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    hxz.ttdownloader(args[1]).then( data => {
			      conn.sendMessage(from, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: fgif })
			       limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
		        break*/
		
case prefix+'tiktok':
                 if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 reply(mess.wait)
                 var but = [{buttonId: `${prefix}tiktoknowm ${q}`, buttonText: { displayText: "No Watermark ❌" }, type: 1 }, {buttonId: `${prefix}tiktokaudio ${q}`, buttonText: { displayText: "Audio 🎧" }, type: 2 }]
                 conn.sendMessage(from, { caption: `Succes Download Video Tiktok, Thanks For Using ${botName}`, video: {url: `https://api.lolhuman.xyz/api/tiktokwm?apikey=${setting.lolkey}&url=${q}`}, buttons: but, footer: "Tiktok Downloader" }, { quoted: fgif })
                 break
case prefix+'tiktoknowm':
case prefix+'ttnowm':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  reply(mess.wait)
  const ttnowm = args.join(" ")
  var data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=HitomiBot&url=${args[1]}`)
conn.sendMessage(from, {caption: mess.succses, video: {url: data.result.link}}, {quoted: fgif})
break
case prefix+'tiktokaudio':
case prefix+'ttaudio':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  reply(mess.wait)
  const ttaudio = args.join(" ")
conn.sendMessage(from, { audio: { url: `https://api.lolhuman.xyz/api/tiktokmusic?apikey=${setting.lolkey}&url=${args[1]}` }, mimetype: 'audio/mp4' }, { quoted: fgif })
break
            case prefix+'play':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah ${command} query\nContoh : ${command} monokrom`)
                reply(mess.wait)
                await sendPlay(from, q)
				limitAdd(sender, limit)
                break
			case prefix+'ytmp4': case prefix+'mp4':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    y2mateV(args[1]).then ( data => {
			      var capt = monospace(`Title : ${data[0].judul}`)
			      conn.sendMessage(from, {caption: capt, video: {url: data[0].link}}, {quoted: fgif})
			    }).catch(() => reply(mess.error.api))
			    break
/*case prefix+'ytmp3': case prefix+'mp3':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Youtube(args[1]).then( data => {
			      var teks = `*Youtube Audio Downloader*\n\n*â‰» Title :* ${data.title}\n*â‰» Quality :* ${data.medias[7].quality}\n*â‰» Size :* ${data.medias[7].formattedSize}\n*â‰» Url Source :* ${data.url}\n\n_wait a minute sending media..._`
			      conn.sendMessage(from, { audio: { url: data.medias[7].url }, mimetype: 'audio/mp4' }, { quoted: msg })
			      limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break*/
				///SCRAPER YTMP3 BY CHRISTIAN ID 
case prefix+'ytmp3':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)

			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
				y2mateA(q).then( data => {
					var capt = `📛 *Title :* ${data[0].judul}\n🔰 *Size Audio :* ${data[0].size}\n\n_Tunggu sebentar audio akan di kirim...._`
					conn.sendMessage(from, {caption: capt, image: {url: data[0].thumb}}, {quoted: fgif}) 
					
					conn.sendMessage(from, { document: { url: data[0].link }, fileName: `${data[0].judul}.mp3`, mimetype: 'audio/mp3' }, { quoted: fgif })
					  }
					  )
limitAdd(sender, limit)
              break
			  case prefix+'ytmp3vn':
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
				y2mateA(q).then( data => {
					var capt = `🔰 *Title :* ${data[0].judul}\n🔱 *Size Video :* ${data[0].size}\n📌 *Download :* ${data[0].link}\n\n_Tunggu sebentar audio akan di kirim...._`
					conn.sendMessage(from, {caption: capt, image: {url: data[0].thumb}}, {quoted: msg}) 
					
					conn.sendMessage(from, {audio: {url: data[0].link}, mimetype: 'audio/mp4', ptt: true}, {quoted: fgif})
					  }
					  )
				limitAdd(sender, limit)
				  break
			case prefix+'getvideo': case prefix+'getvidio':
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
				if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				var kuoted = await quotedMsg.chats
                var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
			    reply(mess.wait)
			    y2mateV(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then( data => {
			      var capt = monospace(`Judul : ${data[0].judul}`)
			      conn.sendMessage(from, { video: { url: data[0].link }, caption: capt }, { quoted: fgif })
			       limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
		        break
			case prefix+'getmusik': case prefix+'getmusic':
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
				if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				var kuoted = await quotedMsg.chats
                var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
			    reply(mess.wait)
			    y2mateA(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then( data => {
			      conn.sendMessage(from, {document: {url: data[0].link}, fileName: `${data[0].judul}.mp3`, mimetype: 'audio/mp3'}, {quoted: fgif})
			      limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'igdl': case prefix+'instagram': case prefix+'ig':
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
				if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('instagram.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    hxz.igdl(args[1]).then( data => {
			     var teks = monospace(`[ IG DOWNLOADER ]\n\nUsername : ${data.user.username}\nFull Name : ${data.user.fullName}\nFollowers : ${data.user.followers}`)
			     reply(teks)
			     for (let i of data.medias) {
				  if (i.fileType === "mp4") {
				   conn.sendMessage(from, { video: { url: i.url }})
				  } else if (i.fileType === "jpg") {
				   conn.sendMessage(from, { image: { url: i.url }})
			      }
			     }
				 limitAdd(sender, limit)
			    }).catch(() => reply(mess.error.api))
			    break
            case prefix+'mediafire':
					if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('mediafire')) return reply(mess.error.Iv)
			    reply(mess.wait)
					var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/mediafire?url=${q}`)
					conn.sendMessage(from, { document: { url: data.url }, fileName: `${data.filename}`, mimetype: 'zip' }, { quoted: fgif })
					limitAdd(sender, limit)
					break
			// Owner Menu
case prefix+'addbalance':
if (!isOwner) return reply(mess.OnlyOwner)
if (args.length < 2) return reply(`Kirim perintah ${command} *nomor|jumlah*`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var addbal = addBalance(`${text1}@s.whatsapp.net`, parseInt(`${text2}`), balance)
reply(`*Sukses Menambahkan Balance User Sebanyak : $${text2}*`)
break
case prefix+'addlimit':
if (!isOwner) return reply(mess.OnlyOwner)
if (args.length < 2) return reply(`Kirim perintah ${command} *nomor|jumlah*`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var addlimit = giveLimit(`${text1}@s.whatsapp.net`, parseInt(`${text2}`), limit)
reply(`*Sukses Menambahkan Limit User Sebanyak : ${text2}*`)
break
case prefix+'addglimit':
if (!isOwner) return reply(mess.OnlyOwner)
if (args.length < 2) return reply(`Kirim perintah ${command} *nomor|jumlah*`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var addglimit = givegame(`${text1}@s.whatsapp.net`, parseInt(`${text2}`), glimit)
reply(`*Sukses Menambahkan Limit User Sebanyak : ${text2}*`)
break
			case prefix+'exif':
			    if (!isOwner) return reply(mess.OnlyOwner)
			    var namaPack = q.split('|')[0] ? q.split('|')[0] : q
                var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
                exif.create(namaPack, authorPack)
				reply(`Sukses membuat exif`)
				break
			case prefix+'leave':
			    if (!isOwner) return reply(mess.OnlyOwner)
				if (!isGroup) return reply(mess.OnlyGrup)
				conn.groupLeave(from)
			    break
            case prefix+'self':
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                mode = 'self'
                reply('Sukses Ganti Ke Mode Self\n\nUntuk mengubah ke mode public silahkan gunakan nomor bot')
                break
            case prefix+'publik': case prefix+'public':
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                mode = 'public'
                reply('Berhasil berubah ke mode public')
                break
            case prefix+'mode':
            case prefix+'set':
   if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
 var teks = `*SELF OR PUBLIC*`
 var but = [{buttonId: `${prefix}self`, buttonText: { displayText: "⬡ SELF" }, type: 1 }, {buttonId: `${prefix}public`, buttonText: { displayText: "⬡ PUBLIC" }, type: 2 }]
 conn.sendMessage(from, { text: teks, footer: "Silakan Pilih Salah Satu", buttons: but, mentions: [sender]} )  
 break
            case prefix+'join':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} Link Grup Kamu`)
        reply(`Sukses Kirim Ke Owner, tunggu Laporan 3/4 menitan untuk masukan bot ke grup`)
        for (let i of ownerNumber) {
            conn.reply(i, `*[ JOIN GRUP ]*\nLink nya : ${q}`, fgif)
        }
        limitAdd(sender, limit)
        break
			case prefix+'masuk':
			    if (!isOwner) return reply(mess.OnlyOwner)
				if (args.length < 2) return reply(`Kirim perintah ${command} _linkgrup_`)
				if (!isUrl(args[1])) return reply(mess.error.Iv)
				var url = args[1]
			    url = url.split('https://chat.whatsapp.com/')[1]
				var data = await conn.groupAcceptInvite(url)
				reply(jsonformat(data))
				break
                        case prefix+'bc': case prefix+'broadcast':
			    if (!isOwner) return reply(mess.OnlyOwner)
		            if (args.length < 2) return reply(`Masukkan isi pesannya`)
                            var data = await store.chats.all()
                            for (let i of data) {
                               conn.sendMessage(i.id, { text: `${q}\n\n_*BROADCAST MESSAGE*_` })
                               await sleep(1000)
                            }
                            break
			case prefix+'setpp': case prefix+'setppbot':
		        if (!isOwner) return reply(mess.OnlyOwner)
		        if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage('image', 'ppbot.jpeg')
				  var data =  await conn.updateProfilePicture(botNumber, { url: media })
			      fs.unlinkSync(media)
				  reply(`Sukses`)
				} else {
				  reply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
				}
				break
            case prefix+'setprefix':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
                if (q === 'multi'){
                    multi = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    reply(`Berhasil mengubah prefix ke ${q}`)
                }
                break
			case prefix+'addprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : ${command} @tag 30d`)
                if (!args[2]) return reply(`Mau yang berapa hari?`)
                if (mentioned.length !== 0) {
                    _prem.addPremiumUser(mentioned[0], args[2], premium)
                    reply('Sukses')
                } else {
                 var cekap = await conn.onWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    _prem.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], premium)
                    reply('Sukses')
                }
                break
            case prefix+'delprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
                if (mentioned.length !== 0){
                    premium.splice(_prem.getPremiumPosition(mentioned[0], premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                } else {
                 var cekpr = await conn.oWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                }
                break
            case prefix+'ban':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        addBanned(mentioned[0], args[2], ban)
                    }
                    reply('Sukses')
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa ban Owner`)
                    addBanned(quotedMsg.sender, args[1], ban)
                    reply(`Sukses ban target`)
                } else if (!isNaN(args[1])) {
                    addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
                    reply('Sukses')
                } else {
                    reply(`Kirim perintah ${prefix}ban @tag atau nomor atau reply pesan orang yang ingin di ban`)
                }
                break
            case prefix+'unban':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        unBanned(mentioned[i], ban)
                    }
                    reply('Sukses')
                }if (isQuotedMsg) {
                    unBanned(quotedMsg.sender, ban)
                    reply(`Sukses unban target`) 
                } else if (!isNaN(args[1])) {
                    unBanned(args[1] + '@s.whatsapp.net', ban)
                    reply('Sukses')
                } else {
                    reply(`Kirim perintah ${prefix}unban @tag atau nomor atau reply pesan orang yang ingin di unban`)
                }
                break
            case prefix+'listban':
                let txtx = `List Banned\nJumlah : ${ban.length}\n\n`
                let menx = [];
                for (let i of ban){
                    menx.push(i.id)
                    txtx += `*ID :* @${i.id.split("@")[0]}\n`
                    if (i.expired === 'PERMANENT'){
                        let cekvip = 'PERMANENT'
                        txtx += `*Expire :* PERMANENT\n\n`
                    } else {
                        let cekvip = ms(i.expired - Date.now())
                        txtx += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                    }
                }
                mentions(txtx, menx, true)
                break
            case prefix+'addsewa':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}addsewa* link waktu\n\nContoh : ${command} https://chat.whatsapp.com/ 30d`)
                if (!args[2]) return reply(`Mau yang berapa hari?`)
                var url = args[1]
			    url = url.split('https://chat.whatsapp.com/')[1]
				var data = await conn.groupAcceptInvite(url)
                if (data.length == 0) return reply(`Masukkan Link Group Yang Vaild`)
                _sewa.addSewaGroup(args[1] + ``, args[2], sewa)
                reply('Sukses')
                break
            case prefix+'delsewa':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}delsewa* linkgrup`)
                 var url = args[1]
			     url = url.split('https://chat.whatsapp.com/')[1]
				 var data = await conn.groupLeave(url)
                 if (data.length == 0) return reply(`Masukkan Link Group Yang Valid`)
                    sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
                    fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
                    reply('Sukses')
                break
case prefix+'listsewa':
                let txtnye = `List Sewa\nJumlah : ${sewa.length}\n\n`
                for (let i of sewa) {
                    txtnye += `*ID :* ${i.id}\n`
                  if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    txtnye += `*Expire :* PERMANENT\n\n`
                  } else {
                    let cekvip = ms(i.expired - Date.now())
                    txtnye += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                  }
                }
                mentions(txtnye, true)
                break
            case prefix+'sewacheck':
       case prefix+'ceksewa': 
              if (!isGroup)return reply(mess.OnlyGrup)
              if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              if (_sewa.getSewaExpired(from, sewa) == "PERMANENT") return reply(`PERMANENT`)
              let ceksewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s)`
              reply(sewanya)
              break
            case prefix+'textchat':
  case prefix+'kirim':
    if (args.length < 2) return reply(`Kirim perintah ${command} nomer|Suratnya\nContoh ${command} 62813199449171|Anjing\n\nAWALI DENGAN 62!`)
    if (!isOwner) return reply(mess.OnlyOwner)
  var number = q.split('|')[0] ? q.split('|')[0] : q
                var text = q.split('|')[1] ? q.split('|')[1] : ''
                reply(`Pesan Sukses Terkirim`)
                var caption = `*「 PESAN DARI OWNER 」*\nDari : Owner\nUntuk : Kamu\nPesan : *${text}*`
                var but = [{buttonId: `${prefix}siap`, buttonText: { displayText: "Siap Bang 👍" }, type: 1 }]
conn.sendMessage(`${number}@s.whatsapp.net`, {caption: caption, image : fs.readFileSync('./media/surat.jpg'), footer: `${setting.footer}`, buttons: but}, {quoted: fgif})
break
case prefix+'chatprem':
  case prefix+'premiumchat':
    if (args.length < 2) return reply(`Kirim perintah ${command} nomer|Suratnya\nContoh ${command} 62813199449171|Anjing\n\nAWALI DENGAN 62!`)
    if (!isOwner) return reply(mess.OnlyOwner)
  var numberr = q.split('|')[0] ? q.split('|')[0] : q
                var textt = q.split('|')[1] ? q.split('|')[1] : ''
                reply(`Pesan Sukses Terkirim`)
                var caption = `*「 UPGRADE TO PREMIUM 」*\nPesan : *${textt}*`
                var but = [{buttonId: `${prefix}cekprem`, buttonText: { displayText: "Cek Premium" }, type: 1 }]
conn.sendMessage(`${numberr}@s.whatsapp.net`, {caption: caption, image : fs.readFileSync('./media/surat.jpg'), footer: 'Upgrade To Premium', buttons: but}, {quoted: fgif})
break
case prefix+'siap':
            var teks = `*@${sender.split('@')[0]} Kamu Mendapatkan Chat Dari Owner Jika Penting Silakan Hubungi Owner*`
            var but = [{buttonId: `${prefix}owner`, buttonText: { displayText: "Owner" }, type: 1 }]
			    conn.sendMessage(from, { text: teks, footer: `${setting.footer}`, buttons: but, mentions: [sender]} )  
				break
             // Stalk Menu
            case prefix+'ghstalk':
  case prefix+'stalkgh':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Username\nContoh : ${command} ${setting.ownerName}`)
    reply(mess.wait)
    var data = await fetchJson(`https://hadi-api.herokuapp.com/api/githubstalk?username=${q}`)
    var caption = `*「 GITHUB STALK 」*\n\n\`\`\`▢ Bio : ${data.result.bio}\n▢ Company : ${data.result.company}\n▢ Email : ${data.result.email}\n▢ Twiter Username : ${data.result.twiter_username}\n▢ Public Repo : ${data.result.public_repo}\n▢ Public Gists : ${data.result.public_gists}\n▢ Followers : ${data.result.follower}\n▢ Following : ${data.result.following}\n▢ Location : ${data.result.location}\n▢ Type : ${data.result.Type}\n▢ Link : https://github.com/${q}\`\`\`\n\n${readmore} *By ${botName}*`
    conn.sendMessage(from, {caption: caption, image: {url: data.result.avatar}}, {quoted: fgif})
    limitAdd(sender, limit)
    break
case prefix+'igstalk':
  case prefix+'stalkig':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Username\nContoh : ${command} ${setting.ownerName}`)
    reply(mess.wait)
    var data = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${q}?apikey=${setting.lolkey}`)
    var caption = `*「 INSTAGRAM STALK 」*\n\n\`\`\`▢ Username : ${data.result.username}\n▢ Fullname : ${data.result.fullname}\n▢ Total Post : ${data.result.posts}\n▢ Followers : ${data.result.followers}\n▢ Following : ${data.result.following}\n▢ Bio : ${data.result.bio}\n▢ Link : https://instagram.com/${q}\`\`\`\n\n${readmore} *By ${botName}*`
    conn.sendMessage(from, {caption: caption, image: {url: data.result.photo_profile}}, {quoted: fgif})
    limitAdd(sender, limit)
    break
case prefix+'tiktokstalk': case prefix+'stalktiktok':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah ${command} Username\nContoh : ${command} ${setting.ownerName}`)
                reply(mess.wait)
                var data = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${q}?apikey=${setting.lolkey}`)
                var teks = `*「 TIKTOK STALK 」*\n\n\`\`\`▢ Username : ${data.result.username}\n▢ Nickname : ${data.result.nickname}\n▢ Bio : ${data.result.bio}\n▢ Followers : ${data.result.followers}\n▢ Followings : ${data.result.followings}\n▢ Likes : ${data.result.likes}\n▢ Video : ${data.result.video}\n▢ Link : https://tiktok.com/@${q}\`\`\`\n\n${readmore} *By ${botName}*`
			    conn.sendMessage(from, { caption: teks, image: {url: `https://api.lolhuman.xyz/api/pptiktok/${q}?apikey=${setting.lolkey}`}}, { quoted: fgif })
			    limitAdd(sender, limit)
                break
            // Info Menu
            case prefix+'covidworld':
  case prefix+'covidglobal':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    var data = await fetchJson(`https://yuzzu-api.herokuapp.com/api/news/covidworld`)
    var caption = `*[ COVID DUNIA ]*\n\nTotal Kasus : ${data.result.totalCases}\nTotal Sembuh : ${data.result.recovered}\nTotal Kematian : ${data.result.deaths}\nKasus Aktif : ${data.result.activeCases}\nKasus Tertutup : ${data.result.closedCases}\nUpdate : ${data.result.lastUpdate}\n\n${readmore} *By ${botName}*`
    conn.sendMessage(from, {caption: caption, image: { url: `https://telegra.ph/file/86b3b90581f9d31353b62.jpg`}}, {quoted: fgif})
    limitAdd(sender, limit)
    break
            case prefix+'infogempa':
  case prefix+'gempainfo':
    var data = await fetchJson(`https://yuzzu-api.herokuapp.com/api/news/infogempa`)
    var caption = `*[ INFO GEMPA ]*\n\nWaktu : ${data.result.Waktu}\nLintang : ${data.result.Lintang}\nBujur : ${data.result.Bujur}\nMagnitudo : ${data.result.Magnitudo}\nKedalaman : ${data.result.Kedalaman}\nWilayah : ${data.result.Wilayah}\n\n${readmore} *By ${botName}*`
    conn.sendMessage(from, {caption: caption, image: {url: `https://telegra.ph/file/9f59526d1ba350d53539d.jpg`}}, {quoted: fgif})
    limitAdd(sender, limit)
    break
case prefix+'checkapikey':
case prefix+'cekapi':
var api = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${q}`)
fakemsg(`\`\`\`▢ Username : ${api.result.username}\n▢ Permintaan : ${api.result.requests}\n▢ Hari Ini : ${api.result.today}\n▢ Status Akun : ${api.result.account_type}\n▢ Expired : ${api.result.expired}\`\`\``)
break
             // Shortlink Menu
            case prefix+'shortlink':
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[1])) return reply("Masukan Link")
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				var data = await fetchJson(`https://hadi-api.herokuapp.com/api/shorturl?url=${args[1]}`)
			    reply(`*Hasil : ${data.result}*`)
				limitAdd(sender, limit)
				break
case prefix+'cuttly':
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[1])) return reply("Masukan Link")
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				var data = await fetchJson(`https://rest-api-hitomi.herokuapp.com/api/linkshort/cuttly?link=${args[1]}`)
			    reply(`*Hasil : ${data.result}*`)
				limitAdd(sender, limit)
				break
case prefix+'bitly':
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[1])) return reply("Masukan Link")
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				var data = await fetchJson(`https://rest-api-hitomi.herokuapp.com/api/linkshort/bitly?link=${args[1]}`)
			    reply(`*Link : ${data.result}*`)
				limitAdd(sender, limit)
				break
case prefix+'tinyurl':
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[1])) return reply("Masukan Link")
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				var data = await fetchJson(`https://rest-api-hitomi.herokuapp.com/api/linkshort/tinyurl?link=${args[1]}`)
			    reply(`*Hasil : ${data.result}*`)
				limitAdd(sender, limit)
				break
case prefix+'tinyurlprem':
  if (args.length < 2) return reply(`Kirim perintah ${command} link|alias`)
  if (!isUrl(args[1])) return reply("Masukan Link")
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    var text1 = q.split('|')[0] ? q.split('|')[0] : q

                var text2 = q.split('|')[1] ? q.split('|')[1] : ''
				var data = await fetchJson(`https://rest-api-hitomi.herokuapp.com/api/linkshort/tinyurlwithalias?link=${text1}&alias=${text2}`)
			    reply(`*Hasil : ${data.result}*`)
				limitAdd(sender, limit)
				break
            // Anime Menu
            case prefix+'naruto':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["naruto hd","naruto boruto","naruto sasuke", "naruto aesthetic", "naruto aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Naruto", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fgif })
			    limitAdd(sender, limit)
 			    break
case prefix+'yaoi':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)

				reply(mess.wait)
			    var query = ["yaoi","yaoi aesthetic","yaoi hd","yaoi ganteng"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Yaoi", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fgif })
			    limitAdd(sender, limit)
 			    break
case prefix+'loli':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["loli","loli chan","loli anime","loli hd","loli aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Loli Chan", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fgif })
			    limitAdd(sender, limit)
 			    break
case prefix+'waifu':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["waifu","waifu aesthetic","waifu hd"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Waifu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fgif })
			    limitAdd(sender, limit)
 			    break
case prefix+'husbu':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["husbu anime","husbu hd","husbu aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Husbu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fgif })
			    limitAdd(sender, limit)
 			    break
case prefix+'hentai':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  reply(mess.wait)
var hentai = JSON.parse(fs.readFileSync('./fiturnya/nsfw/hentai.json'))
var hasil = pickRandom(hentai)
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
conn.sendMessage(from, { caption: "Random Hentai", image: { url: hasil }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fgif })
break 
// Sertifikat Menu
case prefix+'tololserti':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const tolol = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://api.lolhuman.xyz/api/toloserti?apikey=${setting.lolkey}&name=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'fuckboy':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const fuckboy = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://api.lolhuman.xyz/api/fuckboy?apikey=${setting.lolkey}&name=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'fuckgirl':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const fuckgirl = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://api.lolhuman.xyz/api/fuckgirl?apikey=${setting.lolkey}&name=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'bucinserti':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const bucinserti = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${setting.lolkey}&name=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'pacarserti':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${setting.lolkey}&name1=${text1}&name2=${text2}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'goodboy':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const goodboy = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://api.lolhuman.xyz/api/goodboy?apikey=${setting.lolkey}&name=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'goodgirl':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const goodgirl = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://api.lolhuman.xyz/api/goodgirl?apikey=${setting.lolkey}&name=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'badboy':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const badboy = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://api.lolhuman.xyz/api/badboy?apikey=${setting.lolkey}&name=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'badgirl':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const badgirl = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://api.lolhuman.xyz/api/badgirl?apikey=${setting.lolkey}&name=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
			// Random Menu
			case prefix+'quote': case prefix+'quotes':
			case prefix+'randomquote': case prefix+'randomquotes':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				var data = await fetchJson(`https://megayaa.herokuapp.com/api/randomquote`)
			    reply(data.result.quotes+'\n\n-- '+data.result.author)
				limitAdd(sender, limit)
				break
			case prefix+'cecan': case prefix+'cewek':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fgif })
			    limitAdd(sender, limit)
 			    break
			case prefix+'cogan': case prefix+'cowok':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
				var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
				var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fgif })
			    limitAdd(sender, limit)
				break
            case prefix+'artimimpi':
  if (args.length < 2) return reply(`Kirim perintah ${command} jembatan`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    const artimimpi = args.join(" ")
				var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/primbon/artimimpi?text=${args[1]}&apikey=IzumiBot`)
			    reply(`Mimpi : ${q}\n\nArti : ${data.result.hasil}`)
				limitAdd(sender, limit)
				break
case prefix+'artinama':
  if (args.length < 2) return reply(`Kirim perintah ${command} jembatan`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    const artinama = args.join(" ")
				var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/primbon/artinama?text=${args[1]}&apikey=IzumiBot`)
			    reply(`Nama : ${q}\n\nArti : ${data.result.arti}`)
				limitAdd(sender, limit)
				break
            case prefix+'darkjokes': case prefix+'dark': case prefix+'darkjoke': case prefix+'meme': case prefix+'memeindo':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var darkjoke = JSON.parse(fs.readFileSync('./lib/darkjokes.js')) // posisinya sesuain
var hasil = pickRandom(darkjoke)
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
				conn.sendMessage(from, { caption: "DarkJokes", image: { url: hasil.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fgif })
limitAdd(sender, limit)
break
            case prefix+'quotesmaker':
                 if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                 reply(mess.wait)
                 var but = [{buttonId: `${prefix}menu`, buttonText: { displayText: "Back To Menu" }, type: 1 }]
                 conn.sendMessage(from, {caption: mess.succses, image: {url: `https://leyscoders-api.herokuapp.com/api/quote-maker?text=${q}&apikey=${setting.leyskey}`}, buttons: but, footer: `${setting.footer}` }, {quoted: fgif})
                 break
           case prefix+'katagalau':
    case prefix+'galau':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			var kotes = JSON.parse(fs.readFileSync('./fiturnya/katagalau.json'))
var hasil = pickRandom(kotes)
var quot = [
			{ quickReplyButton: { displayText: `Next Galau`, id: `${prefix}katagalau` } },
		]
		conn.sendMessage(from, {text: hasil, templateButtons: quot, footer: `© ${setting.botName}`, mentions: [sender]} )
		limitAdd(sender, limit)
break
           case prefix+'katabucin':
    case prefix+'bucin':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			var kotes2 = JSON.parse(fs.readFileSync('./fiturnya/katabucin.json'))
var hasil = pickRandom(kotes2)
var quot = [
			{ quickReplyButton: { displayText: `Next Bucin`, id: `${prefix}katabucin` } },
		]
		conn.sendMessage(from, {text: hasil, templateButtons: quot, footer: `© ${setting.botName}`, mentions: [sender]} )
		limitAdd(sender, limit)
break
           case prefix+'katagombal':
    case prefix+'gombalan':
    case prefix+'gombal':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			var kotes3 = JSON.parse(fs.readFileSync('./fiturnya/gombalan.json'))
var hasil = pickRandom(kotes3)
var quot = [
			{ quickReplyButton: { displayText: `Next Gombal`, id: `${prefix}katagombal` } },
		]
		conn.sendMessage(from, {text: hasil, templateButtons: quot, footer: `© ${setting.botName}`, mentions: [sender]} )
		limitAdd(sender, limit)
break
            // Education Menu
           case prefix+'persegipanjang':
if (args.length < 2) return reply(`Kirim perintah ${command} *Panjang|Lebar*\nContoh : ${command} 7|11`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppanjang?pjg=${text1}&lebar=${text2}&apikey=${setting.leyskey}`)
reply(`*KELILING*\n*Rumus* : ${data.rumus_keliling}\n*Hasil* : ${data.hasil_keliling}\n\n*LUAS*\n*Rumus* : ${data.rumus_luas}\n*Hasil* : ${data.hasil_luas}`)
break
           case prefix+'perkalian':
if (args.length < 2) return reply(`Kirim perintah ${command} *10|9*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/perkalian?angka1=${text1}&angka2=${text2}&apikey=${setting.leyskey}`)
reply(`*Hasil Perkalian* = ${data.result}`)
break
          case prefix+'kubik':
if (args.length < 2) return reply(`Kirim perintah ${command} 10`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/bdr/kubik?q=${q}&apikey=${setting.leyskey}`)
reply(`*Hasil Kubik ${q}* = ${data.result}`)
break
          case prefix+'kuadrat':
if (args.length < 2) return reply(`Kirim perintah ${command} 10`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/bdr/kuadrat?q=${q}&apikey=${setting.leyskey}`)
reply(`*Hasil Kuadrat ${q}* = ${data.result}`)
break
          case prefix+'asupan':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  reply(mess.wait)
  var asupan = JSON.parse(fs.readFileSync('./fiturnya/asupan.json'))
var hasil = pickRandom(asupan)
conn.sendMessage(from, {video: {url: hasil.url}}, {quoted: fgif})
break
//Other Menu
case prefix+'readmore':
  case prefix+'more':
    if (args.length < 2) return reply(`Kirim perintah ${command} Text1|Text2`)
    var read = q.split('|')[0] ? q.split('|')[0] : q
                var morr = q.split('|')[1] ? q.split('|')[1] : ''
    var retmor = `${read}${readmore}${morr}`
    conn.sendMessage(from, { text: retmor}, { quoted: fgif })
    break
case prefix+'getpp':
case prefix+'getprofile':
  case prefix+'getpic':
if (!isQuotedMsg) return reply(`Reply Message nya!`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
conn.profilePictureUrl(quotedMsg.sender, 'image').then( res => conn.sendMessage(from, { image: { url: res }}, {quoted: fgif})).catch(() => conn.sendMessage(from, {caption: `Yah maaf kak, dia ini gak pake foto profile, kayaknya dia depresiiiii/Di Private...\n\nJadiii aku kasih ini ajaaa ya`, image: {url: `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`}}, {quoted: fgif}))
limitAdd(sender, limit)
break
case prefix+'say': case prefix+'tts':
  if (args.length < 2) return reply(`Kirim perintah ${command} Text`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
   conn.sendMessage(from, { audio: {url : `https://hadi-api.herokuapp.com/api/tts?text=${q}&language=id`}, mimetype: 'audio/mp4', ptt: true}, {quoted: fgif})
limitAdd(sender, limit)
   break
case prefix+'ppcp':
case prefix+'ppcouple':
  case prefix+'pp':
var couple = JSON.parse(fs.readFileSync('./fiturnya/couple.json'))
var hasil = pickRandom(couple)
conn.sendMessage(from, {caption: `Cowo`, image: {url: hasil.male}}, {quoted: fgif})
conn.sendMessage(from, {caption: `Cewe`, image: {url: hasil.female}}, {quoted: fgif})
break 
case prefix+'kontak':
  if (args.length < 2) return reply(`kirim Perintah ${command} Nomer Kontak|Nama Kontak\nContoh ${command} 62899xxxxxxxx|${setting.ownerName}`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var nom = q.split('|')[0] ? q.split('|')[0] : q
                var or = q.split('|')[1] ? q.split('|')[1] : ''
  sendContact(from, `${nom}@s.whatsapp.net`, or, fgif)
  limitAdd(sender, limit)
  break
case prefix+'thanksto': // INI DAH ADA NAMA LU JANGAN UBAH² KALAU KETAHUAN UBAH TQTO AWAS AJA
case prefix+'tqto': // JANGAN UBAH UBAH KETAUAN TANGGUNG RESIKO NYA!!!
var but = [{buttonId: `${prefix}owner`, buttonText: { displayText: "Owner" }, type: 1 }]
  var teks = `*──「 THANKS TO 」──*

*- Chitanda :*
*- https://github.com/rtwone*
*- Christian ID :*
*- https://github.com/TianBot1*
*- ${setting.ownerName} (Owner)*
*- ${setting.linkButton}*
*- Baileys Md*
*- @adiwajshing/baileys*`
conn.sendMessage(from, { caption: teks, image: { url: `https://telegra.ph/file/690548b0ce1de0b305496.jpg` }, buttons: but, footer: 'Thanks You For Making This Bot' }, { quoted: fgif })
break
			// Search Menu
			case prefix+'lirik': case 'liriklagu':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} judul lagu`)
				reply(mess.wait)
			    ra.Musikmatch(q).then(async(data) => {
				  var teks = `*${data.result.judul} - ${data.result.penyanyi}*\n\n${data.result.lirik}`
				  conn.sendMessage(from, { image: { url: data.result.thumb }, caption: teks }, { quoted: msg })
				}).catch(() => reply(`Judul lagu tidak ditemukan`))
				limitAdd(sender, limit)
				break
			case prefix+'grupwa': case prefix+'searchgrup':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} nama grup`)
				reply(mess.wait)
			    hxz.linkwa(q).then(async(data) => {
				  if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
				  var teks = `*Hasil Pencarian Dari ${q}*\n\n`
				  for (let x of data) {
					teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
				  }
				  reply(teks)
				  limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'pinterest':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
				reply(mess.wait)
			    var jumlah;
			    if (q.includes('--')) jumlah = q.split('--')[1]
			    pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
				  if (q.includes('--')) {
					if (data.result.length < jumlah) {
					  jumlah = data.result.length
					  reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
					}
					for (let i = 0; i < jumlah; i++) {
					  conn.sendMessage(from, { image: { url: data.result[i] }})
					}
				    limitAdd(sender, limit)
				  } else {
					var but = [{buttonId: `${command} ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					conn.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
				    limitAdd(sender, limit)
				  }
				})
			    break
			case prefix+'yts': case prefix+'ytsearch':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} query`)
				reply(mess.wait)
			    yts(q).then( data => {
				  let yt = data.videos
				  var jumlah = 15
				  if (yt.length < jumlah) jumlah = yt.length
				  var no = 0
				  let txt = `*YOUTUBE SEARCH*

 *Data berhasil didapatkan*
 *Hasil pencarian dari ${q}*
 
 *${prefix}getmusic <no urutan>*
 *${prefix}getvideo <no urutan>*
 Untuk mengambil Audio/Video dari hasil pencarian`
                for (let i = 0; i < jumlah; i++) {
				  no += 1
				  txt += `\n─────────────────\n\n*No Urutan : ${no.toString()}*\n*▢ Judul :* ${yt[i].title}\n*▢ ID :* ${yt[i].videoId}\n*▢ Channel :* ${yt[i].author.name}\n*▢ Upload :* ${yt[i].ago}\n*▢ Ditonton :* ${yt[i].views}\n*▢ Duration :* ${yt[i].timestamp}\n*▢ URL :* ${yt[i].url}\n`
				}
				conn.sendMessage(from, { image: { url: yt[0].image }, caption: txt }, { quoted: fgif })
				limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
            case prefix+'gsmarena':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Username\nContoh : ${command} Xiomi`)
    reply(mess.wait)
    var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/gsm-arena?q=${q}&apikey=${setting.leyskey}`)
    var caption = `*[ GSM ARENA ]*\n\n${setting.sb} Spek : ${data.result.spek}\n${setting.sb} Display Type : ${data.result.display_type}\n${setting.sb} Display Size : ${data.result.display_size}\n${setting.sb} Display Resolusi : ${data.result.display_resolusi}\n${setting.sb} Platform Chipset : ${data.result.chipset}\n${setting.sb} Platform Os : ${data.result.os}\n${setting.sb} Platform Cpu : ${data.result.cpu}\n${setting.sb} Memori Internal : ${data.result.internal}\n${setting.sb} Camera : ${data.result.camera}\n${setting.sb} Batterai : ${data.result.Batterai}\n\n${readmore} *By ${botName}*`
    conn.sendMessage(from, {caption: caption, image: {url: data.result.thumb}}, {quoted: fgif})
    limitAdd(sender, limit)
    break
case prefix+'wallsearch':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var datanya = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${setting.lolkey}&query=${q}`)
				var but = [{buttonId: `${prefix}wallsearch ${q}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
				conn.sendMessage(from, { caption: "Wallpaper Search", image: { url: datanya.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fgif })
			    limitAdd(sender, limit)
 			    break
case prefix+'googleimage':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
				var but = [{buttonId: `${prefix}googleimage ${q}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
				conn.sendMessage(from, { caption: "Google Image Search", image: { url: `https://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=${q}` }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: fgif })
			    limitAdd(sender, limit)
 			    break
/*case prefix+'brainly':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
		if (args.length < 2) return reply(`Kirim perintah ${command} Pencarian`)
		reply(`Sedang mencari ${q}`)
             var data = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${setting.lolkey}&query=${q}`)
             var hmm = '────────────\n'
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${data.result.question.content}\n\n*➸ Jawaban:* ${data.result.answer.content}\n───────────\n`
             reply(hmm)
             break*/
             case prefix+'brainly':
             reply(mess.wait)
             brainly(args.join(" ")).then(mess => {
             var hmm = '────────────\n'
             for (let hasil of mess.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${hasil.pertanyaan}\n\n*➸ Jawaban:* ${hasil.jawaban[0].text}\n───────────\n`
}
             reply(hmm)
             console.log(mess)
})
             break
             // Nulis Menu
            case prefix+'nulis':
            reply(`*Silakan Pilih Nulis Menu*\n\n1. ${prefix}nuliskanan\n2. ${prefix}foliokiri`)
            break
            case prefix+'nuliskanan':
  var kanan = chats.slice(11)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} Tulisan Mu\nContoh ${command} ${ownerName}\n\n📌 *NOTE : GAK BOLEH DI TAMBAHIN EMOJI/TEXT TEXT GAK JELAS*`)
  reply(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hadi-api.herokuapp.com/api/canvas/nulis?text=${kanan}`}}, {quoted: fgif})
  limitAdd(sender, limit)
  break
case prefix+'foliokiri':
  var fkiri = chats.slice(10)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} Tulisan Mu\nContoh ${command} ${ownerName}\n\n📌 *NOTE : GAK BOLEH DI TAMBAHIN EMOJI/TEXT TEXT GAK JELAS*`)
  reply(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hadi-api.herokuapp.com/api/canvas/nulis2?text=${fkiri}`}}, {quoted: fgif})
  limitAdd(sender, limit)
  break
             // Islam Menu
            case prefix+'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    const daerah = args.join(" ")
                    var get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${args[1]}?apikey=${setting.lolkey}`)
                    var ini_txt = `Wilayah : ${get_result.result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.result.imsak}\n`
                    ini_txt += `Isya : ${get_result.result.isya}`
                    reply(ini_txt)
                    break
			// Game & Fun Menu
			case prefix+'tictactoe': case prefix+'ttt': case prefix+'ttc':
                if (!isGroup)return reply(mess.OnlyGrup)
			    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                if (mentionByTag.length !== 1) {
				if (mentionByTag[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
                if (mentionByTag[0] === sender) return reply(`Sad amat main ama diri sendiri`)
                     var hadiah = randomNomor(100, 150)
				     mentions(monospace(`@${sender.split('@')[0]} menantang @${mentionByTag[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/N) untuk bermain\n\nHadiah : ${hadiah} balance`), [sender, mentionByTag[0]], false)
                     tictactoe.push({
                        id: from,
                        status: null,
						hadiah: hadiah,
                        penantang: sender,
                        ditantang: mentionByTag[0],
                        TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
                     })
					 gameAdd(sender, limit)
                } else {
                    reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                }
                break
			case prefix+'delttt':
            case prefix+'delttc':
                if (!isGroup)return reply(mess.OnlyGrup)
				if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
                var posi = getPosTic(from, tictactoe)
                if (tictactoe[posi].penantang.includes(sender)) {
                    tictactoe.splice(posi, 1)
                    reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (tictactoe[posi].ditantang.includes(sender)) {
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isGroupAdmins) {
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isOwner) {
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else {
                   reply(`Anda tidak bisa menghapus sesi tictactoe, karena bukan pemain!`)
                }
                break
			case prefix+'tebakgambar':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tebakgambar)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tebakgambar[getGamePosi(from, tebakgambar)].msg)
				kotz.tebakgambar().then( data => {
				  data = data[0]
				  data.jawaban = data.jawaban.split('Jawaban ').join('')
				  var teks = `*TEBAK GAMBAR*\n\n`+monospace(`Petunjuk : ${data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, { image: { url: data.image }, caption: teks }, { quoted: fgif })
				  .then( res => {
					var jawab = data.jawaban.toLowerCase()
					addPlayGame(from, 'Tebak Gambar', jawab, gamewaktu, res, tebakgambar)
					gameAdd(sender, glimit)
				  })
				})
			    break
            case prefix+'caklontong':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, caklontong)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, caklontong[getGamePosi(from, caklontong)].msg)
				var soal = JSON.parse(fs.readFileSync('./fiturnya/caklontong.json'))
				var kukus = pickRandom(soal)
				  kukus.jawaban = kukus.jawaban.split('Jawaban ').join('')
				  var teks = `*CAK LONTONG*\n\n`+monospace(`Soal : ${kukus.soal}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: fgif})
				  .then( res => {
					var jawab = kukus.jawaban.toLowerCase()
					addPlayGame(from, 'Cak Lontong', jawab, gamewaktu, res, caklontong)
					gameAdd(sender, glimit)
				  })
			    break
            case prefix+'asahotak':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, ao)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, ao[getGamePosi(from, ao)].msg)
				var soal = JSON.parse(fs.readFileSync('./fiturnya/asahotak.json'))
				var kukus = pickRandom(soal)
				  kukus.jawaban = kukus.jawaban.split('Jawaban ').join('')
				  var teks = `*ASAH OTAK*\n\n`+monospace(`Soal : ${kukus.soal}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: fgif})
				  .then( res => {
					var jawab = kukus.jawaban.toLowerCase()
					addPlayGame(from, 'Asah Otak', jawab, gamewaktu, res, ao)
					gameAdd(sender, glimit)
				  })
			    break
            case prefix+'tebakjenaka':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tj)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tj[getGamePosi(from, tj)].msg)
				var datanya = await fetchJson(`https://hitomi-rest-api.herokuapp.com/api/tebakjenaka?apikey=${setting.hitokey}`)
				  datanya.jawaban = datanya.result.jawaban.split('Jawaban ').join('')
				  var teks = `*TEBAK JENAKA*\n\n`+monospace(`Soal : ${datanya.result.pertanyaan}\nPetunjuk : ${datanya.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: fgif})
				  .then( res => {
					var jawab = datanya.result.jawaban.toLowerCase()
					addPlayGame(from, 'Tebak Jenaka', jawab, gamewaktu, res, tj)
					gameAdd(sender, glimit)
				  })
			    break
            case prefix+'tebakbendera':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tb)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tb[getGamePosi(from, tb)].msg)
				var teben = JSON.parse(fs.readFileSync('./fiturnya/tebakbendera.json'))
				var kukus = pickRandom(teben)
				  kukus.name = kukus.name.split('Jawaban ').join('')
				  var teks = `*TEBAK BENDERA*\n\n`+monospace(`Petunjuk : ${kukus.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nFlag Code : ${kukus.flag}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {caption: teks, image: {url: kukus.img}}, {quoted: fgif})
				  .then( res => {
					var jawab = kukus.name.toLowerCase()
					addPlayGame(from, 'Tebak Bendera', jawab, gamewaktu, res, tb)
					gameAdd(sender, glimit)
				  })
			    break
            case prefix+'siapakahaku':
  case prefix+'siapaaku':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, siapaaku)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, siapaaku[getGamePosi(from, siapaaku)].msg)
			    
				var tebaknya = JSON.parse(fs.readFileSync('./fiturnya/siapakahaku.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.jawaban = hayo.jawaban.split('Jawaban ').join('')
				  var teks = `*Siapa Aku?*\n\n`+monospace(`Soal : ${hayo.soal}\nNomor Soal Ke : ${hayo.index}\nPetunjuk : ${hayo.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: fgif})
				  .then( res => {
					var jawab = hayo.jawaban.toLowerCase()
					addPlayGame(from, 'Siapa Aku?', jawab, gamewaktu, res, siapaaku)
					gameAdd(sender, glimit)
				  })
			    break
            case prefix+'duithoki':
            if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
            var hadiahnya = randomNomor(10, 100)
			addBalance(sender, htgm, balance)
            var teks = `*[ 🎰 DUIT HOKI 🎰 ]*\n\n @${sender.split('@')[0]} Mendapatkan ${hadiahnya} Balance`
            var but = [{buttonId: `${prefix}duithoki`, buttonText: { displayText: "Next ➡️" }, type: 1 }]
			    conn.sendMessage(from, { text: teks, footer: "Jangan Judi Bro!", buttons: but, mentions: [sender]} )  
			gameAdd(sender, glimit)
				break
            case prefix+'susunkata':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, susun)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, susun[getGamePosi(from, susun)].msg)
				var ngen = JSON.parse(fs.readFileSync('./fiturnya/susunkata.json'))
				var kukus = pickRandom(ngen)
				  kukus.jawaban = kukus.jawaban.split('Jawaban ').join('')
				  var teks = `*SUSUN KATA*\n\n`+monospace(`Susunlah Kalimat Berikut :\n${kukus.soal}\nPetunjuk : ${kukus.tipe}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: fgif})
				  .then( res => {
					var jawab = kukus.jawaban.toLowerCase()
					addPlayGame(from, 'Susun Kalimat', jawab, gamewaktu, res, susun)
					gameAdd(sender, glimit)
				  })
			    break
            case prefix+'dadu': // Fun Menu
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var dadu = JSON.parse(fs.readFileSync('./fiturnya/dadu.json'))
var hasil = pickRandom(dadu)
conn.sendMessage(from, {sticker: {url: hasil.url}}, {quoted: fgif})
limitAdd(sender, limit)
break
			// Group Menu
            case prefix+'groupsetting':
            if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
const salamnya = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
  var sections = [
    {
	title: "SETTING 1",
	rows: [
	    {title: "Antilink On", rowId: "antilink enable"},
	    {title: "Antilink Off", rowId: "antilink disable"}
	]
    },
    {
	title: "SETTING 2",
	rows: [
	    {title: "Welcome On", rowId: "welcome enable"},
	    {title: "Welcome Off", rowId: "welcome disable"}
	]
    },
    {
	title: "SETTING 3",
	rows: [
	    {title: "Group Open", rowId: "group open"},
	    {title: "Group Close", rowId: "group close"}
	]
    },
    {
	title: "SETTING 4",
	rows: [
	    {title: "Mute On", rowId: "mute"},
	    {title: "Mute Off", rowId: "unmute"}
	]
    },
]
var listMessage = {
  text: `${salamnya} ${pushname} 👋\n\n*Pilih Group Setting Dibawah*`,
  footer: `\n*${setting.footer}*`,
  title: "",
  buttonText: "Group Setting",
  sections
}
conn.sendMessage(from, listMessage, { quoted: fgif })
  break
			case prefix+'linkgrup': case prefix+'link': case prefix+'linkgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
			    url = 'https://chat.whatsapp.com/'+url
				reply(url)
				break
			case prefix+'setppgrup': case prefix+'setppgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage('image', `ppgc${from}.jpeg`)
			      await conn.updateProfilePicture(from, { url: media })
				  .then( res => {
					reply(`Sukses`)
					fs.unlinkSync(media)
				  }).catch(() => reply(mess.error.api))
				} else {
			      reply(`Kirim/balas gambar dengan caption ${command}`)
				}
				break
			case prefix+'setnamegrup': case prefix+'setnamegc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateSubject(from, q)
			    .then( res => {
				  reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'setdesc': case prefix+'setdescription':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateDescription(from, q)
			    .then( res => {
			      reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
				break
			case prefix+'group': case prefix+'grup':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				if (args[1] == "close") {
				  conn.groupSettingUpdate(from, 'announcement')
				  reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
				} else if (args[1] == "open") {
				  conn.groupSettingUpdate(from, 'not_announcement')
				  reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
				} else {
				  reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				}
			    break
			case prefix+'revoke':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				await conn.groupRevokeInvite(from)
			    .then( res => {
				  reply(`Sukses menyetel tautan undangan grup ini`)
				}).catch(() => reply(mess.error.api))
				break
			case prefix+'hidetag':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
				
			    let mem = [];
		        groupMembers.map( i => mem.push(i.id) )
				conn.sendMessage(from, { text: q ? q : '', mentions: mem }, {quoted: fgif})
			    break
case prefix+'tagall':
      if (!isGroup) return reply(mess.OnlyGrup)
      if (!isGroupAdmins) return reply(mess.GrupAdmin)
      if (args.length < 2) return reply(`Kirim perintah ${command} Pesan nya yang ingin disampaikan`)
     var mems = []
      var teks = `*[ TAG ALL ]*\nPesan : ${q}\n\n`
      for (let i of groupMembers) {
        teks += `> @${i.id.split("@")[0]}\n`
        mems.push(i.id)
      }
      conn.sendMessage(from, { text: teks, mentions: mems}, { quoted: fgif })
      break
case prefix+'listadmin':
  if (!isGroup) return reply(mess.OnlyGrup)
      if (!isGroupAdmins) return reply(mess.GrupAdmin)
   var mems = []
      var teks = `*[ TAG ADMIN ]*\n${q !== undefined ? q : `Pesan Tidak Ada`}\n`
      for (let i of groupAdmins) {
        teks += `> @${i.split("@")[0]}\n`
        mems.push(i)
      }
      conn.sendMessage(from, { text: teks, mentions: mems}, { quoted: fgif })
      break
case prefix+'infogc':
  case prefix+'infogrup':
    case prefix+'grupinfo':
      case prefix+'infogroup':
        case prefix+'groupinfo':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isGroup)return reply(mess.OnlyGrup)
  var owngc = groupMetadata.owner
  var caption = `*[ ${groupMetadata.subject} ]*\n\n*Nama Grup :* ${groupMetadata.subject}\n*Pemilik Grup :* @${owngc.split("@")[0]}\n*Di Buat Pada :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Jumlah Member :* ${groupMembers.length}\n*Jumlah Admin :* ${groupAdmins.length}\n*Antilink :* ${isAntiLink ? 'Aktif ✔️' : 'Gak Aktif ✖️'}\n*Deskripsi :* ${groupMetadata.desc}`
  conn.profilePictureUrl(from, 'image').then( res => conn.sendMessage(from, {caption: caption, image: { url: res }, mentions: [owngc]}, {quoted: fgif})).catch(() => conn.sendMessage(from, {caption: caption, image: {url: `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`}, mentions: [owngc]}, {quoted: fgif}))
  limitAdd(sender, limit)
  break
case prefix+'promote':
  case prefix+'admin':
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (mentioned.length !== 0) {
      number = mentioned[0]
      conn.groupParticipantsUpdate(from, [number], "promote")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      conn.groupParticipantsUpdate(from, [number], "promote")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Tag atau balas pesan member yang ingin dijadikan admin grup`)
    }
    break
case prefix+'demote':
  case prefix+'unadmin':
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (mentioned.length !== 0) {
      number = mentioned[0]
      conn.groupParticipantsUpdate(from, [number], "demote")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      conn.groupParticipantsUpdate(from, [number], "demote")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Tag atau balas pesan admin yang ingin diturunkan menjadi member`)
    }
    break
case prefix+'kick':
  if (!isOwner)return reply("_Maaf Fitur Ini Di Nonaktifkan Oleh Owner, Karena menyebabkan nomer bot 3 kali ke banned_")
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (mentioned.length !== 0) {
      number = mentioned[0]
      conn.groupParticipantsUpdate(from, [number], "remove")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      conn.groupParticipantsUpdate(from, [number], "remove")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Tag atau balas pesan member yang ingin dikeluarkan dari grup`)
    }
    break

case prefix+'add':
  if (!isOwner)return reply("_Maaf Fitur Ini Di Nonaktifkan Oleh Owner, Karena menyebabkan nomer bot 3 kali ke banned_")
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (args[1]) {
      number = mentioned[0]
      var cek = await conn.onWhatsApp(number)
      if (cek.length == 0) return reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
      conn.groupParticipantsUpdate(from, [number], "add")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      var cek = await conn.onWhatsApp(number)
      if (cek.length == 0) return reply(`Member yang kamu balas pesannya sudah tidak terdaftar di WhatsApp`)
      conn.groupParticipantsUpdate(from, [number], "add")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Kirim perintah ${command} nomer atau balas pesan orang yang ingin dimasukkan kedalam grup`)
    }
    break
            case prefix+'welcome':
                            if (!isGroup) return reply(mess.OnlyGrup)
                            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                            var teks = `*MODE WELCOME ON/OFF*`
                var but = [{buttonId: `${prefix}welcome enable`, buttonText: { displayText: "⬡ ENABLE" }, type: 1 }, {buttonId: `${prefix}welcome disable`, buttonText: { displayText: "⬡ DISABLE" }, type: 2 }]
                if (args.length === 1) return conn.sendMessage(from, { text: teks, footer: "Silakan Pilih Salah Satu Dibawah", buttons: but, mentions: [sender]} )  
                            if (args[1].toLowerCase() === "enable") {
                              if (isWelcome) return reply(`Welcome sudah aktif`)
                              welcome.push(from)
                              fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                              reply(`Sukses mengaktifkan welcome di grup ini`)
                            } else if (args[1].toLowerCase() === "disable") {
                              if (!isWelcome) return reply(`Welcome sudah nonaktif`)
                              var posi = welcome.indexOf(from)
                              welcome.splice(posi, 1)
                              fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                              reply(`Sukses menonaktifkan welcome di grup ini`)
                            } else {
                              conn.sendMessage(from, { text: teks, footer: "Silakan Pilih Salah Satu Dibawah", buttons: but, mentions: [sender]} )  
                            }
                            break
            case prefix+'antilink':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                var teks = `*MODE ANTILINK ON/OFF*`
                var but = [{buttonId: `${prefix}antilink enable`, buttonText: { displayText: "⬡ ENABLE" }, type: 1 }, {buttonId: `${prefix}antilink disable`, buttonText: { displayText: "⬡ DISABLE" }, type: 2 }]
                if (args.length === 1) return conn.sendMessage(from, { text: teks, footer: "Silakan Pilih Salah Satu Dibawah", buttons: but, mentions: [sender]} )  
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiLink) return reply(`Antilink sudah aktif`)
                    antilink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('Sukses mengaktifkan antilink di grup ini')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antilink.indexOf(from)
                    antilink.splice(anu, 1)
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
                    reply('Sukses menonaktifkan antilink di grup ini')
                } else {
                conn.sendMessage(from, { text: teks, footer: "Silakan Pilih Salah Satu Dibawah", buttons: but, mentions: [sender]} )  
                }
                break
            case prefix+'mute':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`Bot berhasil dimute di chat ini`)
                break
            case prefix+'afk':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (isAfkOn) return reply('afk sudah diaktifkan sebelumnya')
                if (body.slice(150)) return reply('Alasanlu kepanjangan')
                let reason = body.slice(5) ? body.slice(5) : 'Nothing.'
                addAfkUser(sender, Date.now(), reason, afk)
                mentions(`*Nama :* @${sender.split('@')[0]} sedang afk\n*Alasan :* ${reason}`, [sender], true)
                break
			// Bank & Payment Menu
			case prefix+'topbalance':{
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
            case prefix+'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, parseInt(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
			case prefix+'transfer':
            case prefix+'tf':{
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @6285791458996 2000`)
                 if (mentioned.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[2]) return reply(`Masukkan nominal nya!`)
                 if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
                 if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 kurangBalance(sender, parseInt(args[2]), balance)
                 addBalance(mentioned[0], parseInt(args[2]), balance)
                 reply(`Sukses transfer balance sebesar $${args[2]} kepada @${mentioned[0].split("@")[0]}`)
            }
                 break
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                givegame(sender, parseInt(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
			case prefix+'limit': case prefix+'balance':
			case prefix+'ceklimit': case prefix+'cekbalance':
			    if (mentioned.length !== 0){
					var Ystatus = ownerNumber.includes(mentioned[0])
					var isPrim = Ystatus ? true : _prem.checkPremiumUser(mentioned[0], premium)
				    var ggcount = isPrim ? gcounti.prem : gcounti.user
                    var limitMen = `${getLimit(mentioned[0], limitCount, limit)}`
                    textImg(`Limit : ${_prem.checkPremiumUser(mentioned[0], premium) ? 'Unlimited' : limitMen}/${limitCount}\nLimit Game : ${cekGLimit(mentioned[0], ggcount, glimit)}/${ggcount}\nBalance : $${getBalance(mentioned[0], balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                } else {
                    var limitPrib = `${getLimit(sender, limitCount, limit)}/${limitCount}`
                    textImg(`Limit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                }
				break
// Maker Text Pro
case prefix+'berry':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const berry = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/berry?text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'pencil':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const pencil = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/pencil?text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'blackpink':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const bl = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/blackpink?text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'neon':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const neon = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/neon?text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'logobear':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const bear = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/neon?text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'christmas':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const christmas = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/3dchristmas?text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'box3d':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const box3d = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/3dboxtext?text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'glitchtiktok':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1|text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
reply(mess.wait)
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/glitchtiktok?text=${text1}&text2=${text2}`}}, {quoted: fgif})
break
case prefix+'videogame':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1|text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
reply(mess.wait)
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/video-game-classic?text=${text1}&text2=${text2}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'marvel':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1|text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
reply(mess.wait)
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/marvel-studios?text=${text1}&text2=${text2}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'ninjalogo':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1|text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
reply(mess.wait)
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/ninja-logo?text=${text1}&text2=${text2}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'greenhorror':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const greenhorror = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/green-horror?text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'magma':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const magma = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/magma?text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'neon3d':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const neon3d = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/3d-neon-light?text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'orangejuice':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const juice = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/3d-orange-juice?text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'chococake':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const chococake = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/chocolate-cake?text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'strawberry':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const strawberry = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/strawberry?text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'thunder':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://yuzzu-api.herokuapp.com/api/textpro/thunder?text=${q}`)
reply(mess.wait)
conn.sendMessage(from, {caption: mess.succses, image: {url: data.result}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'thunder2':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const thunder = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/thunder?text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'glitch':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const glitch = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/glitch?text=${args[1]}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'glitch2':
if (args.length < 2) return reply(`Kirim perintah ${command} *text1|text2*`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
reply(mess.wait)
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://rest-api-hitomi.herokuapp.com/api/textpro/glitch2?text=${text1}&text2=${text2}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'greenneon':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://yuzzu-api.herokuapp.com/api/textpro/green-neon?text=${q}`)
reply(mess.wait)
conn.sendMessage(from, {caption: mess.succses, image: {url: data.result}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'tahta':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
const tahta = args.join(" ")
conn.sendMessage(from, {caption: mess.succses, image: {url: `https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${args[1]}&apikey=${setting.leyskey}`}}, {quoted: fgif})
limitAdd(sender, limit)
break
case prefix+'skeleton':
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://yuzzu-api.herokuapp.com/api/textpro/skeleton?text=${q}`)
reply(mess.wait)
conn.sendMessage(from, {caption: mess.succses, image: {url: data.result}}, {quoted: fgif})
limitAdd(sender, limit)
break
			default:
			if (!isGroup && !isCmd) {
				reply(`*Hallo Kak ${pushname}*\n*Maaf Command ${command} Tidak Ada Di Dalam ${prefix}menu*`)
			}
		}
	} catch (err) {
		console.log(color('[ERROR]', 'red'), err)
	}
}
