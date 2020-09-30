// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';


// Mutations
const mutationTaskCreator = loader('./gql/mutationTaskCreator.graphql');

export const useTaskCreator = () => {
    const [ _addTask, {error} ] = useMutation(mutationTaskCreator);

    const createTask = async (task, refetch) => {
        try {
            const {data} = await _addTask({
                variables: {
                    task
                }
            });

            if (data) {
                refetch();
            }
        }
        catch (error) {
            console.log(error.message);
        }
    };
    return {
        error,
        createTask,
    }
}
