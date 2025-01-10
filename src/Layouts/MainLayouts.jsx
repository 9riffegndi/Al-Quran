
import { Children } from "react"
export default function MainLayout( {children} ) {
    return  (
        <div className="w-full justify-center p-2 md:p-10 flex items-start min-h-screen">
            {children}
        </div>
    )
}