<script lang="ts">
  export let data: { code: number };
</script>

<h1 class="text-6xl text-center mt-5 font-bold mb-6">Log in</h1>
<form
  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-screen"
  method="post"
>
  <div class="mb-8 flex justify-center">
    <input
      name="user-id"
      class="h-12 shadow border-2 border-black appearance-none rounded-xl w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Enter your User ID"
    />
  </div>
  <div class="mb-10 flex justify-center">
    <input
      name="password"
      class="h-12 w-[50%] shadow appearance-none border-2 border-black rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="password"
      placeholder="******************"
    />
  </div>
  <div class="flex items-center justify-evenly">
    <button
      class="bg-yellow-400 hover:bg-yellow-500 font-bold py-2 px-6 w-[50%] text-black focus:outline-none focus:shadow-outline rounded-xl"
      type="submit"
    >
      Log in
    </button>
  </div>
</form>
