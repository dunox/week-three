// Core
import { loader } from 'graphql.macro';
import {useSubscription} from '@apollo/react-hooks';

// Queries
const subscriptionTasksLoader = loader('./gql/subscriptionTasksLoader.graphql');

export const useTasksLoader = () => {
  const  { tasks,  loading, refetch } = useSubscription(subscriptionTasksLoader);
  return { tasks, loading, refetch};
}
