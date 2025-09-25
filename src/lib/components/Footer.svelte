<script lang="ts">
    import { Github, Linkedin, Twitter } from 'lucide-svelte';
</script>

<footer class="py-8 mt-16 text-center">
    <div class="container mx-auto px-4">
        <div class="flex justify-center items-center space-x-6 mb-4">
            <a href="#" aria-label="Twitter Profile" class="text-gray-400 hover:text-gray-800">
                <Twitter />
            </a>
            <a href="#" aria-label="LinkedIn Profile" class="text-gray-400 hover:text-gray-800">
                <Linkedin />
            </a>
            <a href="#" aria-label="GitHub Profile" class="text-gray-400 hover:text-gray-800">
                <Github />
            </a>
        </div>
        <p class="text-xs text-gray-400 tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Your Name
        </p>
    </div>
</footer>