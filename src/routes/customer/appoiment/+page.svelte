<div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <h1 class="text-3xl font-bold mb-4">Book Appointment</h1>

    <form class="grid-cols-*" method="POST">
        <label class="text-center text-lg block mb-2" for="car-model">Choose Car model:</label>

        <div class="flex justify-center"><select name="car" class="btn bg-orange-500 text-white rounded-l-xl px-8 text-left" >
            <option value="coupe">Coupe</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
        </select></div>

        <label class="text-center text-lg block mt-8 mb-2" for="date">Choose date:</label>

        <div class="flex flex-wrap mb-4">
            <input class="mx-auto h-20 text-white rounded-lg bg-orange-500" type="date" name="date" >
        </div>

        <label class="block mb-2 mt-8 text-center" for="time">Choose time:</label>
        <div class="flex justify-center"><select name="time" class="btn bg-orange-500 text-white rounded-l-xl px-8 text-left" >
            <option value="10">10-12 AM</option>
            <option value="1">1-3 PM</option>
            <option value="3">3-5 PM</option>
        </select></div>

        <label class="block mb-2 mt-8 text-center" for="service">Choose Service:</label>

    
        <div class="flex justify-center"><select name="service" class="btn bg-orange-500 text-white rounded-l-xl px-8 text-left" >
            <option value="full">Full check up (1000 rs)</option>
            <option value="wash">Car Wash (500 rs)</option>
            <option value="oil">Oil Change (150 rs)</option>
        </select></div>

       <div class="flex justify-center mt-10"> <button
        class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full "
        type="submit">Confirm Appointment</button
    ></div>
    </form>
</div>
