import { Router } from "express";
import req from "express/lib/request";
import res from "express/lib/response";
import Task from "../models/Task";

const indexRoutes = Router();

indexRoutes.get("/", async (req, res) => {
  const task = await Task.find().lean();

  res.render("index", { task: task });
});

indexRoutes.post("/tasks/add", async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

indexRoutes.get("/about", (req, res) => {
  res.render("about");
});

indexRoutes.get("/edit/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task: task });
  } catch (error) {
    console.log(error.message);
  }
});

indexRoutes.post("/edit/:id", async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
});

indexRoutes.get("/delete/:id", async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);

  res.redirect("/");
});

indexRoutes.get("/toggleDone/:id", async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  task.done = !task.done;

  await task.save();

  res.redirect("/");
});

export default indexRoutes;
