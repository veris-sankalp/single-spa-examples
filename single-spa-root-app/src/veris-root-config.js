import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@veris/navbar",
  app: () => System.import("@veris/navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@veris/infinite-scroll",
  app: () => System.import("@veris/infinite-scroll"),
  activeWhen: [(location) => location.pathname === "/"],
});

registerApplication({
  name: "@veris/infinite-scroll-addItem",
  app: () => System.import("@veris/infinite-scroll-addItem"),
  activeWhen: ["/about"]
});

start({
  urlRerouteOnly: true,
});
