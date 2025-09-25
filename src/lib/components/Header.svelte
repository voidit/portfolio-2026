<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    let hidden = true;
</script>

<Navbar class="!bg-transparent dark:!bg-transparent py-6 px-4 container mx-auto">
    <NavBrand href="/">
        <span class="text-2xl font-serif font-bold text-gray-900 dark:text-white">Portfolio</span>
    </NavBrand>

    <NavHamburger on:click={() => (hidden = !hidden)} />

    <NavUl {hidden}>
        <NavLi href="/portfolio" class="text-base font-sans text-gray-600 hover:text-gray-900">Portfolio</NavLi>
        <NavLi href="/about" class="text-base font-sans text-gray-600 hover:text-gray-900">About</NavLi>
    </NavUl>
</Navbar>