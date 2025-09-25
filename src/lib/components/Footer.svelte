<script lang="ts">
    import { Button, Modal, Label, Input, Checkbox, Textarea } from 'flowbite-svelte';
    // Import the Lucide icons we need
    import { Github, Linkedin, Twitter } from 'lucide-svelte';

    let showContactForm = false;
</script>

<footer class="mt-24 py-8 border-t border-gray-200">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p class="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Your Name Here. All Rights Reserved.
        </p>

        <div class="flex items-center space-x-4">
            <a href="#" aria-label="Twitter Profile" class="text-gray-500 hover:text-gray-900">
                <Twitter size={24} />
            </a>
            <a href="#" aria-label="LinkedIn Profile" class="text-gray-500 hover:text-gray-900">
                <Linkedin size={24} />
            </a>
            <a href="#" aria-label="GitHub Profile" class="text-gray-500 hover:text-gray-900">
                <Github size={24} />
            </a>
        </div>

        <div class="mt-4 md:mt-0">
            <Button on:click={() => (showContactForm = true)} color="light">Contact Me</Button>
        </div>
    </div>
</footer>

<Modal title="Contact Me" bind:open={showContactForm} autoclose>
    <form class="flex flex-col space-y-6" action="#">
        <div>
            <Label for="email" class="mb-2">Your email</Label>
            <Input type="email" name="email" id="email" placeholder="name@company.com" required />
        </div>
        <div>
            <Label for="message" class="mb-2">Your message</Label>
            <Textarea id="message" placeholder="Leave a comment..." rows="4" name="message" />
        </div>
        <div class="flex items-center gap-2">
            <Checkbox id="subscribe" name="subscribe" />
            <Label for="subscribe">Subscribe to mailing list</Label>
        </div>
        <Button type="submit" class="w-full">Send Message</Button>
    </form>
</Modal>