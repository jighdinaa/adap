const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'1d7c1251-de73-43af-a8ce-31e577cf421a'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
