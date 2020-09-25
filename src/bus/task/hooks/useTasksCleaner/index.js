// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';


// Mutations
const mutationTasksCleaner = loader('./gql/mutationTasksCleaner.graphql');

export const useTasksCleaner = () => {
  const [ removeAllTasks, { } ] = useMutation(mutationTasksCleaner);
  return { removeAllTasks };
}