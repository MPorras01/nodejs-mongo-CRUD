import { Router } from "express";

const indexRoutes = Router();

indexRoutes.get("/", (req, res) => {
    res.render('index');
  });

  indexRoutes.get("/about", (req, res) => {
    res.render('about');
  });

  indexRoutes.get("/edit", (req, res) => {
    res.render('edit');
  });

  export default indexRoutes;    