const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Ad9HGhboHcgDoTc5V9U7oylXS6oxXNir-CaMtjp7hqRM_N-NmjllH3LmEay7V69zsND8rA4YP7E05pwo",
  client_secret: "EFusseC8sO0FgapL1R1M_ZD2DnvHQckCl32vh-yr9ps7NlxEcVylbEcuURO1GXk_tqtrNTiki_3VuSka",
});

module.exports = paypal;
