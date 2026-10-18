import {Hono} from "hono";

const ingredientRouter = new Hono()

ingredientRouter.get('/:id', async (c) => {
    // TODO: Make a route
})

ingredientRouter.get('/search', async (c) => {
    // TODO: Make a route
})

export default ingredientRouter