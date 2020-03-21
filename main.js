const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config.js");
const bot = new Discord.Client();
bot.PREFIX = PREFIX;
bot.commands = new Discord.Collection();

bot.on("message", message => require("./events/message.js")(bot, message));

bot.commands.set("inter", require("./cmd/inter.js"));
bot.commands.set("cpf", require("./cmd/cpf.js"));

bot.commands.set("capas", require("./cmd/game/capas.js"));
bot.commands.set("capa", require("./cmd/game/capas.js"));
bot.commands.set("tierlist", require("./cmd/game/tierlist.js"));
bot.commands.set("tl", require("./cmd/game/tierlist.js"));
bot.commands.set("teams", require("./cmd/game/teams.js"));
bot.commands.set("team", require("./cmd/game/teams.js"));
bot.commands.set("choc", require("./cmd/game/choc.js"));
bot.commands.set("g13", require("./cmd/game/g13.js"));
bot.commands.set("t13", require("./cmd/game/g13.js"));
bot.commands.set("g14", require("./cmd/game/g14.js"));
bot.commands.set("t14", require("./cmd/game/g14.js"));
bot.commands.set("farm", require("./cmd/game/farm.js"));
bot.commands.set("farming", require("./cmd/game/farm.js"));
bot.commands.set("contre", require("./cmd/game/contre.js"));
bot.commands.set("contres", require("./cmd/game/contre.js"));
bot.commands.set("counter", require("./cmd/game/contre.js"));
bot.commands.set("leg", require("./cmd/game/legend.js"));
bot.commands.set("lvl", require("./cmd/game/leveling.js"));
bot.commands.set("level", require("./cmd/game/leveling.js"));
bot.commands.set("leveling", require("./cmd/game/leveling.js"));

// Capacités oranges
bot.commands.set("aim", require("./cmd/game/capas/aim.js"));
bot.commands.set("asg", require("./cmd/game/capas/asg.js"));
bot.commands.set("cog", require("./cmd/game/capas/cog.js"));
bot.commands.set("bh", require("./cmd/game/capas/bh.js"));
bot.commands.set("bkt", require("./cmd/game/capas/bkt.js"));
bot.commands.set("def", require("./cmd/game/capas/def.js"));
bot.commands.set("f4", require("./cmd/game/capas/f4.js"));
bot.commands.set("gar", require("./cmd/game/capas/gar.js"));
bot.commands.set("hyd", require("./cmd/game/capas/hyd.js"));
bot.commands.set("inh", require("./cmd/game/capas/inh.js"));
bot.commands.set("mar", require("./cmd/game/capas/mar.js"));
bot.commands.set("shd", require("./cmd/game/capas/shd.js"));
bot.commands.set("sur", require("./cmd/game/capas/sur.js"));
bot.commands.set("sym", require("./cmd/game/capas/sym.js"));
bot.commands.set("s6", require("./cmd/game/capas/s6.js"));
bot.commands.set("tec", require("./cmd/game/capas/tec.js"));
bot.commands.set("wak", require("./cmd/game/capas/wak.js"));
bot.commands.set("xme", require("./cmd/game/capas/xme.js"));

bot.login(TOKEN);
bot.on("error", console.error);
bot.on("warn", console.warn);
process.on("unhandledRejection", error => {
  console.log("ERREUR : ", error);
});

bot.on("ready", () => {
  bot.user.setPresence({ activity: { name: "se développer" }, status: "idle" });
  console.log(`....................................................................
.....██╗.█████╗.██████╗.██╗...██╗██╗███████╗....██████╗.....██████╗.
.....██║██╔══██╗██╔══██╗██║...██║██║██╔════╝....╚════██╗...██╔═████╗
.....██║███████║██████╔╝██║...██║██║███████╗.....█████╔╝...██║██╔██║
██...██║██╔══██║██╔══██╗╚██╗.██╔╝██║╚════██║.....╚═══██╗...████╔╝██║
╚█████╔╝██║..██║██║..██║.╚████╔╝.██║███████║....██████╔╝██╗╚██████╔╝
.╚════╝.╚═╝..╚═╝╚═╝..╚═╝..╚═══╝..╚═╝╚══════╝....╚═════╝.╚═╝.╚═════╝.
....................................................................
`);
});