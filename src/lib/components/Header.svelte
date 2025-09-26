<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    let hidden = true;
</script>

<Navbar
        class="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md py-4 px-4 border-b border-gray-200"
>
    <div class="container mx-auto flex justify-between items-center">
        <NavBrand href="/">
            <span class="text-3xl font-serif font-bold text-gray-900 tracking-wider">Your Name</span>
        </NavBrand>

        <NavHamburger on:click={() => (hidden = !hidden)} class="md:hidden" />

        <NavUl
                {hidden}
                class="p-4 md:p-0 mt-4 md:mt-0 font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse uppercase text-sm tracking-widest bg-transparent"
        >
            <NavLi href="/portfolio">Work</NavLi>
            <NavLi href="/about">About</NavLi>
            <NavLi href="/journal">Journal</NavLi>
            <NavLi href="/contact">Contact</NavLi>
        </NavUl>
    </div>
</Navbar>