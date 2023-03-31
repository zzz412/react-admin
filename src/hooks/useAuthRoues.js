import { filterRouteList } from '@/utils/utils'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

export let routes = []

const useAuthRoutes = (base, async) => {
	const authRouter = useSelector(({ auth }) => auth.authRouter)

	const routeList = useMemo(() => {
		const dynamicRouter = filterRouteList(async, authRouter)
		routes = base.concat(dynamicRouter)
		return routes
	}, [authRouter])

	return routeList
}

export default useAuthRoutes
