import express from "express"
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {

    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/api', (req, res) => {
        return res.send("Hello Híu!!!")
    });
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);

    return app.use("/", router);
}

module.exports = initWebRoutes;