import React, { useContext } from 'react'
import { Checkbox } from 'vtex.styleguide'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'
import classNames from 'classnames'

import SettingsContext from './SettingsContext'

const CSS_HANDLES = ['filterItem']

const FacetItem = ({
  navigateToFacet,
  facetTitle,
  facet,
  className,
  preventRouteChange,
}) => {
  const { showFacetQuantity } = useContext(SettingsContext)
  const handles = useCssHandles(CSS_HANDLES)
  const classes = classNames(
    applyModifiers(handles.filterItem, facet.value),
    { [`${handles.filterItem}--selected`]: facet.selected },
    className,
    'lh-copy w-100'
  )

  return (
    <div
      className={classes}
      style={{ hyphens: 'auto', wordBreak: 'break-word' }}
    >
      <Checkbox
        id={facet.value}
        checked={facet.selected}
        label={
          showFacetQuantity ? `${facet.name} (${facet.quantity})` : facet.name
        }
        name={facet.name}
        onChange={() =>
          navigateToFacet({ ...facet, title: facetTitle }, preventRouteChange)
        }
        value={facet.name}
      />
    </div>
  )
}

export default FacetItem
