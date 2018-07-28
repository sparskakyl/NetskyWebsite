var R = new XMLHttpRequest();
R.open("GET", "https://canary.discordapp.com/api/guilds/265970458338394123/widget.json", true);
R.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var Q = JSON.parse(this.responseText);
        document.getElementById("memberCount").innerText = " There are currently " + Q.members.length + " members online.";
    }
};
R.send();

/** Script created by Draco (https://twitter.com/DracoZ12). **/
/** Handled by the Discord API. Therefore, it will not work offline or if the API is down. **/