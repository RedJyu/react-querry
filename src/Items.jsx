import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';

const Items = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => customFetch.get('/'),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className='items'>
      {/* dat.data because axios and react query both use data so it creates that nested structure */}
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
