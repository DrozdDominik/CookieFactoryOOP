const express = require("express");

class HomeRouter {
   constructor(cookieMakerApp) {
     this.cookieMakerApp = cookieMakerApp;
     this.router = express.Router();
     this.setUpRoutes();
   }

   setUpRoutes() {
      this.router.get('/', this.home);
   }

   home = (req, res) => {
    const {sum, addons, base, allBases, allAddons} = this.cookieMakerApp.getCookieSettings(req);
  
    res.render("home/index", {
      cookie: {
        base,
        addons,
      },
      allBases,
      allAddons,
      sum,
    });
  };
}

module.exports = {
  HomeRouter,
};
