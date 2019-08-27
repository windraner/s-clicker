export const LOADING = 'loading'
export const OPENED_MODAL = 'openedModal'
export const OPENED_MODAL_ITEM = 'openedModalItem'
export const COMPANIES_LIST = 'companiesList'
export const QUERY_TITLES = 'queryTitles'
export const IGNORE_TITLES = 'ignoreTitles'

export const COUNTRY_LIST = [{ id: 'ua', name: 'ua' }, { id: 'us', name: 'us' }]
export const HOUR_LIST = (new Array(24)).fill('').map((item, index) => ({ id: index, name: index }))
export const MINUTE_LIST = (new Array(12)).fill('').map((item, index) => ({ id: index * 5, name: index * 5 }))

// export const PAGE = 'page'
// export const PAGE_COUNT = 'pageCount'
// export const QUERY = 'query'
