const express = require("express");

class OrderRouter {
  constructor(cookieMakerApp) {
    this.cookieMakerApp = cookieMakerApp;
    this.router = express.Router();
    this.setUpRoutes();
  }

  setUpRoutes() {
     this.router.get('/summary', this.summary);
     this.router.get('/thanks', this.thanks)
  }

  summary = (req, res) => {

    const {sum, addons, base, allAddons, allBases} = this.cookieMakerApp.getCookieSettings(req);
  
      res.render('order/summary', {
        cookie: {
          base,
          addons,
        },
        allBases,
        allAddons,
        sum,
      })
  };

  thanks = (req, res) => {

    const {sum} = this.cookieMakerApp.getCookieSettings(req);
  
      res
      .clearCookie('cookieBase')
      .clearCookie('cookieAddons')
      .render('order/thanks', {
        sum,
      })
  };
}

module.exports = {
  OrderRouter,
};
