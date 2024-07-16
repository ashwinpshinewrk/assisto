<aside aria-label="Sidenav" class="fixed top-0 left-0 w-16 md:w-32 lg:w-40 h-full text-black">
    <div class="overflow-y-auto py-3 px-2 h-full bg-yellow-400 border-r border-gray-200">
        <ul class="space-y-2 text-black">
            <li>
                <a href="/admin/todo" class="flex items-center p-2 font-normal text-black rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-white">
                    Todo
                   
                </a>
            </li>
            <li>
                <a href="/admin/queries" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-white">
                    Appoinments
                </a>
            </li>
        </ul>
    </div>
  </aside>

  <slot />