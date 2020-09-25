// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';


// Mutations
const mutationTaskUpdater = loader('./gql/mutationTaskUpdater.graphql');

export const useTaskUpdater = () => {
  const [ updateTask ] = useMutation(mutationTaskUpdater);
  return { updateTask };
}