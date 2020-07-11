
MinecraftAPI.getServerStatus('fsip.ml', {
    port: 25565 // optional, only if you need a custom port
}, function(err, status) {
	if (err) {
		return document.querySelector('.status').innerHTML = '오류';
	}
	document.querySelector('.status').innerHTML = status.online ? '온라인' : '오프라인';
	document.querySelector('.version').innerHTML = status.server.name;
	document.querySelector('.players').innerHTML = status.players.now+"/"+status.players.max;
	var ping = status.duration/1000000000;
	ping = ping.toString().match(/^.*\.\d{3}/);
	document.querySelector('.duration').innerHTML = ping + "ms";
			});