import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'
import PropTypes from 'prop-types';

const Dropdown = ({ eventHandler }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleParamsChange = (value, key = 'filter') => {
    setSearchParams(() => {
      !value && searchParams.delete(key);
      !searchParams.get(key) || searchParams.get(key).includes('null')
        ? searchParams.set(key, value)
        : searchParams.getAll(key).includes(value)
          ? searchParams.delete(key, value)
          : searchParams.append(key, value);
      return searchParams;
    })
  };

  const handleClearAllFilters = () => {
    handleParamsChange(null);
    eventHandler(null);
  }

  useEffect(() => {
    const checkboxEl = document.querySelectorAll(`input[type='checkbox']`);
    checkboxEl.forEach(queryItem => {
      queryItem.checked
        ? queryItem.parentElement.querySelector('.dropdown__status').classList.remove('hidden')
        : queryItem.parentElement.querySelector('.dropdown__status').classList.add('hidden')
    });
    (!searchParams.get('filter') || searchParams.get('filter').includes('null'))
      && checkboxEl.forEach(queryItem => {
        queryItem.checked ?
          (queryItem.checked = false,
          queryItem.parentElement.querySelector('.dropdown__status').classList.add('hidden'))
          : null;
      });
  });

  const inputArray = [
    {
      group: 'Role',
      tags: ['Frontend', 'Backend', 'Fullstack',],
    },
    {
      group: 'Level',
      tags: ['Junior', 'Midweight', 'Senior',],
    },
    {
      group: 'Languages',
      tags: ['Python', 'Ruby', 'JavaScript', 'HTML', 'CSS',],
    },
    {
      group: 'Tools',
      tags: ['React', 'Sass', 'Vue', 'Django', 'RoR',],
    },
  ];

  return (
    <details className='dropdown'>
      <summary className='dropdown__summary'>Filter jobs by</summary>
      { inputArray.map((inputItem, inputIndex) => {
        return (
          <div key={ `group__${inputIndex}` } className='dropdown__group'>
            <hr />
            { inputItem.group }
            <br />
            { inputItem.tags.map((tagItem, tagIndex) => {
              return (
                <span 
                  key={`${inputItem.group}__element__${tagIndex}`}
                  onClick={() => handleParamsChange(`${tagItem}`)}
                  className='dropdown__container'>
                    <label className='dropdown__label'>
                      <input
                        type='checkbox'
                        defaultChecked={ false }
                        value={ tagItem }
                        onChange={(event) => eventHandler(event)}
                        className='dropdown__checkbox' />
                      {tagItem}
                      <span className='dropdown__status hidden'>applied</span>
                    </label>
                    <br />
                </span>
              )
            })}
          </div>
        )
      })}
      <button type='button' className='dropdown__clear__btn' onClick={handleClearAllFilters}>clear filters</button>
    </details>
  );
}

Dropdown.propTypes = {
  eventHandler: PropTypes.func,
};

export default Dropdown;