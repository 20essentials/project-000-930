import { getDictionary } from '@lib/query'
 
export const getStudies = () => {
  return getDictionary('study')
}