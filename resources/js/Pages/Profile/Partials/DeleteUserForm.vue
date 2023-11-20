<script setup>



</script>

<template>
    <ActionSection class="mt-2">
        <template #title>
            Delete Account
        </template>

        <template #description>
            Permanently delete your account.
        </template>

        <template #content>
            <div class="max-w-xl text-sm text-gray-600">
                Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.
            </div>

            <div class="mt-2">
             <a-button type="primary" @click="confirmUserDeletion"  class="login-form-button"> Delete Account</a-button>
            </div>

            <!-- Delete Account Confirmation Modal -->
            <DialogModal :show="confirmingUserDeletion" @close="closeModal">
                <template #title>
                    Delete Account
                </template>

                <template #content>
                    Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.

                    <div class="mt-4">
                        <TextInput
                            ref="passwordInput"
                            v-model="form.password"
                            type="password"
                            class="mt-1 block w-3/4"
                            placeholder="Password"
                            autocomplete="current-password"
                            @keyup.enter="deleteUser"
                        />

                        <InputError :message="form.errors.password" class="mt-2" />
                    </div>
                </template>

                <template #footer>
                    <SecondaryButton @click="closeModal">
                        Cancel
                    </SecondaryButton>

                    <DangerButton
                        class="ms-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="deleteUser"
                    >
                        Delete Account
                    </DangerButton>
                </template>
            </DialogModal>
        </template>
    </ActionSection>
</template>

<script>
import { Input, FormItem, Button} from 'ant-design-vue';
import { ref, defineComponent } from 'vue';
import { useForm } from '@inertiajs/vue3';
import ActionSection from '@/Components/ActionSection.vue';
import DangerButton from '@/Components/DangerButton.vue';
import DialogModal from '@/Components/DialogModal.vue';
import InputError from '@/Components/InputError.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;
    setTimeout(() => passwordInput.value.focus(), 250);
};

export default defineComponent({
    props: {
      sessions: Array,
    },
    components: {
        'a-input': Input,
        'a-form-item': FormItem,
        'a-button': Button,
        ActionSection,
        DangerButton,
        DialogModal,
        InputError,
        SecondaryButton,
        TextInput,
    },
    setup(props) {
        const form = useForm({
            password: '',
        });
        const deleteUser = () => {
            form.delete(route('current-user.destroy'), {
                preserveScroll: true,
                onSuccess: () => closeModal(),
                onError: () => passwordInput.value.focus(),
                onFinish: () => form.reset(),
            });
        };
        const closeModal = () => {
            confirmingUserDeletion.value = false;
            form.reset();
        };
        return {
            deleteUser,
            closeModal,
            form,
            confirmingUserDeletion,
            passwordInput,
            confirmUserDeletion,
        };
    },
});
</script>