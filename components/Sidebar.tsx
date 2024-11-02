import Link from 'next/link'
//import SidebarLink from "@/components/SidebarLink";

//import { getIntl } from "@/lib/intl";
//import { Locale } from "@/lib/definitions";

//interface Props {
//  locale: Locale;
//}

export default async function Sidebar() {
  //const intl = await getIntl(locale);

  return (
    <div className="fixed top-0 left-0 z-50 w-60 h-screen bg-gray-800 hidden lg:block">
      <div className="flex items-center justify-start h-16 w-[calc(100%-2rem)] mx-4">
        <div className="text-xl text-gray-200">
          <Link href={`/`} className="flex items-center">
            Test Utilities
          </Link>
        </div>
      </div>

      <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />

      <div className="h-[calc(100vh-65px)] overflow-y-auto">
        <div className="flex items-center px-4 py-2 my-1 text-base hover:text-white hover:bg-gray-700 text-white bg-gray-700">
          <Link href={`/make-image`} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <div className="mx-4">Make Sample Image</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
