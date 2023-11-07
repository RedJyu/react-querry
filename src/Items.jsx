import SingleItem from './SingleItem';

import { useFetchTasks } from './customHooks';
const Items = () => {
  const { isLoading, error, data } = useFetchTasks();

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
