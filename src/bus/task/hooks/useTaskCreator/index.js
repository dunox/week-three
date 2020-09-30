// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

// Book
import { book } from '../../../../navigation/book';

// Mutations
const mutationTaskCreator = loader('./gql/mutationTaskCreator.graphql');

export const useTaskCreator = () => {
    const [ _addTask, {error} ] = useMutation(mutationTaskCreator);
    const history = useHistory();

    const createTask = async (task, refetch) => {
        try {
            const {data} = await _addTask({
                variables: {
                    task
                }
            });

            if (data) {
                history.push(book.tasks);
            }
        }
        catch (error) {
            console.log(error.message);
        }
        refetch();
    };
    return {
        error,
        createTask,
    }
}
