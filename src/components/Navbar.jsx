import ThemeControl from "./ThemeControl";

export default function Navbar() {
    return (
        <div className="bg-base-300 gap-3 p-5 flex justify-center items-center w-full">
            <img className="w-8" src="https://img.icons8.com/?size=100&id=uS1xN7rHnCoC&format=png&color=FAB005" />
            <p className="flex-1 text-2xl font-extrabold">AL-Qur'an</p>
            <ThemeControl />
        </div>
    )
}