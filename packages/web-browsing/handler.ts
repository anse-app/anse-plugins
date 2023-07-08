import Readability from '@mozilla/readability'

interface Props {
  url: string
}

export const handler = async (parameters: Props) => {
  const webBody = await fetch(parameters.url).then(res => res.text())
  const dom = new DOMParser().parseFromString(webBody, 'text/html')
  console.log('dom', dom)
  const article = new Readability.Readability(dom).parse()
  console.log('website', parameters.url, article)
  const result = article?.textContent || 'no content'
  return result
}