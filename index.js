const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('readey', () => {
    console.log("bot is on!");
    bot.user.setGame("*help");
})

bot.login('NTE0MTEzMDc5MTM1NDM2ODMw.DtR03Q.6u959mLFRwIdakB_lgwfQT-9-i0');

bot.on('message', message => {
    if(message.content === "*help"){
        message.reply("*contact / *site");
    }

    if(message.content === "*contact"){
        var contactEmbed = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle("Contact")
        .setDescription("Notre adresse mail : dioxstudio.contact@gmail.com")
        .setFooter("DioxStudio")
        message.channel.sendMessage(contactEmbed);
    }
    if(message.content === "*site"){
        var contactEmbed = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle("Site")
        .setDescription("Notre site : http://dioxstudio.alwaysdata.net/index.html")
        .setFooter("DioxStudio")
        message.channel.sendMessage(contactEmbed);
    }
}); 

bot.on("guildMemberAdd", member => {
    member.addRole("name", "Membre")
})

bot.on("guildMemberRemove", member => {

})
