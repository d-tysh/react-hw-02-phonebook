import { AppHeader } from "components/AppHeader/AppHeader"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div style={{maxWidth: '800px', display: 'block', margin: '0 auto'}}>
            <AppHeader />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}