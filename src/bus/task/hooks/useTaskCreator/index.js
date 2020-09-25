// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';


// Mutations
const mutationTaskCreator = loader('./gql/mutationTaskCreator.graphql');

export const useTaskCreator = () => {
    const [ createTask, {  error } ] = useMutation(mutationTaskCreator);
    return { createTask, error};
}
