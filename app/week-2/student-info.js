import Link from "next/link";

export default function StudentInfo(){
    return(
        <main className="bg-slate-200">
            <h1 className="py-3 text-violet-700 pl-2">Charmisha</h1>
            <Link href="https://github.com/" className="text-violet-700 pl-2">Github account</Link>
        </main>
    );
}

