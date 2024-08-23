import { gql } from '@apollo/client';

export const GET_LOGS = gql`
  subscription MySubscription {
    logs(order_by: {block_timestamp: desc}, limit: 6) {
      activity
      points
      block_timestamp
      transaction_hash
    }
  }
`;