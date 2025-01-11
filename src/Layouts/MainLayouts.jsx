
import { Children } from "react"
export default function MainLayout( {children, className=''} ) {
    return  (
        <div className={`w-full justify-start flex items-start min-h-screen ${className}`}>
            {children}
        </div>
    )
}