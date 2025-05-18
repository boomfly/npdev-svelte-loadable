import { EJSON } from 'meteor/ejson'
import { LOADED, load, findByResolved } from 'svelte-loadable'

export { default as LoadableProvider } from './svelte-loadable-provider-client.svelte'
export { default as Loadable, preloadAll, register } from 'svelte-loadable'

export const loadHydratables = async (id = '__hydratables__') => {
  const hydratablesNode = document.getElementById(id)
  if (!hydratablesNode) {
    return
  }

  const hydratables = EJSON.parse(hydratablesNode.innerText)
  hydratablesNode.parentNode.removeChild(hydratablesNode)
  if (hydratables.length == 0) {
    return
  }
  for (let resolved of hydratables) {
    const loader = findByResolved(resolved)
    if (LOADED.has(loader)) {
      continue
    }
    await load(loader);
  }
  return
}
