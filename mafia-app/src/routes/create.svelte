<script lang="ts">
    let roles = [["Mafia", 2], ("Detective", 1), ("Doctor", 1), ("Jester", 1)]
</script>

<h1 class="text-center text-5xl font-bold">Game Options</h1>
<div class="flex flex-col justify-center gap-5 py-5 text-center">
    <input type="text" placeholder="Game Name" class="mx-48 h-8 text-center rounded">
    <div>
        <h2 class="mx-28 text-left">Roles:</h2>
        <div class="grid grid-cols-4 grid-flow-row">
            <div class="">2x</div>
            <div class="">Mafia</div>
            <button class="">plus</button>
            <button class="">minus</button>

            <div class="">1x</div>
            <div class="">Detective</div>
            <button class="">plus</button>
            <button class="">minus</button>

            <div class="">1x</div>
            <div class="">Doctor</div>
            <button class="">plus</button>
            <button class="">minus</button>

            <div class="">1x</div>
            <div class="">Jester</div>
            <button class="">plus</button>
            <button class="">minus</button>
        </div>
    </div>
    <div>
        <input type="checkbox" id="manual-roles">
        <label for="manual-roles">Assign Roles Manually</label>
    </div>
    <button class="mx-96 h-10 text-center rounded border border-gray-600 hover:bg-gray-50">Create Game</button>
</div>