import { rest } from 'msw'

export const handlers = [
  rest.get('/products', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: 'Табуретка', subtitle: 'Новые продукты'},
        { id: 2, title: 'Еще табуретка', subtitle: 'Новые продукты' },
        { id: 2, title: 'Еще табуретка', subtitle: 'Новые продукты' },
        { id: 2, title: 'Еще табуретка', subtitle: 'Новые продукты' },
        { id: 2, title: 'Еще табуретка', subtitle: 'Новые продукты' },
        { id: 2, title: 'Еще табуретка', subtitle: 'Новые продукты' },
        { id: 2, title: 'Еще табуретка', subtitle: 'Новые продукты' },
      ]),
    )
  }),
]