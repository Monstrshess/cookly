import {Hono} from "hono";

const recipesRouter = new Hono()

recipesRouter.get('/all', async (c) => {
    // TODO: Make a route
})

recipesRouter.get('/:id', async (c) => {
    // TODO: Make a route
})

recipesRouter.get('/search/name', async (c) => {
    // TODO: Make a route
})

recipesRouter.get('/search/ingredients', async (c) => {
    // TODO: Make a route
})

export default recipesRouter