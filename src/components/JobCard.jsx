import PropTypes from 'prop-types';

const JobCard = ({ source }) => {

  return (
    source.map((sourceItem, sourceIndex) => {
      return (
        <div key={ `card__${sourceItem.id}__${sourceIndex}` } className={ `job__card ${ sourceItem.featured ? 'featured' : '' }` }>
          <div className='flex__row between'>
            <div className='flex__row'>
              <img src={ sourceItem.logo } alt={ `${ sourceItem.company } company logo` } className='job__company__image' />
              <div className='job__info'>
                <span className='job__info__company'>{ sourceItem.company }</span>
                { sourceItem.new && <span className='job__info__pill'>NEW!</span>}
                { sourceItem.featured && <span className='job__info__pill'>FEATURED</span>}
                <h2 className='job__info__position'>{ sourceItem.position }</h2>
                <p className='job__info__details'>{ sourceItem.postedAt } &#9702; { sourceItem.contract } &#9702; { sourceItem.location }</p>
              </div>
            </div>
            <div className='job__tags flex__row evenly'>
              <span className='job__tag'>{ sourceItem.role }</span>
              <span className='job__tag'>{ sourceItem.level }</span>
              { sourceItem.languages.map((languageItem, langaugeIndex) => <span key={ `language__${ langaugeIndex }` } className='job__tag'>{ languageItem }</span>) }
              { sourceItem.tools.map((toolItem, toolIndex) => <span key={ `tool__${ toolIndex }` } className='job__tag'>{ toolItem }</span>)}
            </div>
          </div>
        </div>
      );
    })
  );
}

JobCard.propTypes = {
  source: PropTypes.array,
};

export default JobCard;