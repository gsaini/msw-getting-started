import { graphql } from 'msw'
export const handlers = [
  // Handles a "GetUserInfo" query
  graphql.query('GetExchangeRates', (req, res, ctx) => {
    return res(
      ctx.data({
        rates: [
          {
            currency: 'USD',
            rate: '1',
          },
          {
            currency: 'INR',
            rate: '1.5',
          },
          {
            currency: 'USD',
            rate: '1',
          },
          {
            currency: 'INR',
            rate: '1.5',
          }
        ],
      }),
    )
  })
]