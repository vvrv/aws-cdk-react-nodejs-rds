module.exports = {
  apps: [
    {
      name: "server",
      script: "src/index.js",
      watch: ".",
      instances: 1,
    },
    // {
    //   script: "./service-worker/",
    //   watch: ["./service-worker"],
    // },
  ],
};
