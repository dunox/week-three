// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';


// Mutations
const mutationTaskCleaner = loader('./gql/mutationTaskCleaner.graphql');

export const useTaskCleaner = () => {
  const [ removeTask, {  } ] = useMutation(mutationTaskCleaner);
  return { removeTask };
}