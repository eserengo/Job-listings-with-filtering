import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import JobCard from '../components/JobCard'
import '../styles/Display.css'

const Display = () => {
  const [data, setData] = useState(null);
  const state = useOutletContext();

  const filteredData = () => {
    const outputArray = [];
    state.map(stateItem => {
      data.map(dataItem => {
        dataItem.role.includes(stateItem)
          || dataItem.level.includes(stateItem)
          || Object.values(dataItem.tools).includes(stateItem)
          || Object.values(dataItem.languages).includes(stateItem)
          ? !outputArray.includes(dataItem) && outputArray.push(dataItem)
          : null
      });
    });
    return outputArray;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('./src/assets/data.json');
        const json = await response.json();
        setData(json);
      }
      catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <main className='main'>
      { data 
        ? !state.length
          ? <JobCard source={ data } />
          : <JobCard source={ filteredData() } />
        : <h2>Loading...</h2>
      }
    </main>
  );
}

export default Display;