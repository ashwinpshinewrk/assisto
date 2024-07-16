<script>
export let data

</script>

<form class="flex justify-end" method="post">
    <button class=" absolute text-red-200 text-lg px-4 py-2 bg-red-800 mr-6 mt-4 rounded-lg"
        >Logout</button
    >
</form>

<div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <h1 class="text-3xl font-bold mb-4">Welcome to Assisto, {data.name}!</h1>

    <div class="flex justify-center mb-8">
        <a href="/customer/appoiment"><button
            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-4"
            >Book Appointment</button
        ></a>

        <button
            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >Check Due Service</button
        >
    </div>

    <p class="text-lg">The Company's Sales Assistant</p>
</div>
