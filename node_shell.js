const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'3a097e6f-d13c-4cc3-99e7-7b538495ba76'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
