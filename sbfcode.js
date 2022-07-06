const { Client, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")
const client = new Client({intents: 98303})
const { TextInputComponent, Modal, showModal} = require("discord.js")

client.on(`messageCreate`, async message => {

    if (message.content.toLowerCase() === '!!--öneri') { //Sbf Code 
        let öneri = new MessageButton()//Sbf Code
        .setStyle("SUCCESS")//Sbf Code
        .setLabel("Öneri Ver")//Sbf Code
        .setCustomId("öneri_komutu")//Sbf Code
        const embed = new MessageEmbed()//Sbf Code
        .setTitle('Öneri Sistemi')//Sbf Code
        .setColor("GREEN")//Sbf Code
        .setDescription("Öneri Vermek için aşağıdaki butona basınız.")//Sbf Code



        message.channel.send({embeds: [embed] ,components: [new MessageActionRow({ components: [öneri]})]})//Sbf Code

    }
    })

    client.on(`interactionCreate`, async interaction => {//Sbf Code


        const dcöneri = new Modal()//Sbf Code
        .setCustomId('öneri')//Sbf Code
        .setTitle('Sbf Code')//Sbf Code
        .setComponents(//Sbf Code
            new MessageActionRow()//Sbf Code
            .setComponents(//Sbf Code
                new TextInputComponent()//Sbf Code
                .setCustomId('öneri_komut_yazı')//Sbf Code
                .setLabel('Önerinizi Yazınız')//Sbf Code
                .setPlaceholder('Sbf COde')//Sbf Code
                .setMinLength(2)//Sbf Code
                .setMaxLength(500)//Sbf Code
                .setRequired(true)//Sbf Code
                .setStyle('SHORT')//Sbf Code
                
    )
            )     
        if(interaction.isButton()){//Sbf Code
            if(interaction.customId ==="öneri_komutu" ){//Sbf Code
           interaction.showModal(dcöneri)//Sbf Code
             } }  

            if (interaction.isModalSubmit()) {//Sbf Code
                await interaction.deferReply({ephemeral: true})//Sbf Code

                    if (interaction.customId === "öneri") {//Sbf Code

                        const dcöneri = interaction.fields.getTextInputValue("öneri_komut_yazı") //SameeT - Developer #0001
                        const discord = interaction.guild.channels.cache.find(c => c.id === '993938123518132254');//SameeT - Developer #0001
                        if(!discord) return interaction.editReply('Öneri kanalı mevcut değil! , Lüften yetkililere bildiriniz!');//SameeT - Developer #0001
                        const embed = new MessageEmbed()//SameeT - Developer #0001
                        .setDescription(`**Atan Kullanıcı:** <@${interaction.user.id}>\n**Öneri:** ${dcöneri} `)//SameeT - Developer #0001
                        .setTimestamp()//SameeT - Developer #0001
                        discord.send({embeds:[embed]})//SameeT - Developer #0001
                        await interaction.editReply(`Başarılı!`)//SameeT - Developer #0001
                
                }
                  }}
    )
client.login("token")//token giriniz
