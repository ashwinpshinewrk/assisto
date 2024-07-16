<script>
    export let data
</script>

<table class="mx-auto table-auto border-separate border-spacing-3 border-slate-500">
    <thead><tr>
        <th>Customer Name</th>
        <th>Service</th>
        <th>Car</th>
        <th>Date</th>
        <th>Time</th>
        <th>Is Completed</th>
    </tr></thead>
    <tbody>
        {#each data.response as templ,i}
        <tr>
            <td>{templ.name}</td>
            <td>{templ.service}</td>
            <td>{templ.car}</td>
            <td>{templ.date}</td>
            <td>{templ.time}</td>
            <td>{templ.isComplete}</td>
        </tr>
        {/each}
    </tbody>
</table>