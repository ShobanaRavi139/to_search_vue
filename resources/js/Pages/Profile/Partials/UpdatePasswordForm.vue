<template>
    <FormSection @submitted="updatePassword" class="mt-2">
        <template #title>
            Update Password
        </template>

        <template #description>
            Ensure your account is using a long, random password to stay secure.
        </template>

        <template #form>
        <a-form-item label="Current Password" name="current_password" class="mt-2" :label-col="{ span: 3 }" :wrapper-col="{ span: 6 }">
            <a-input v-model:value="form.current_password" id="current_password" type="password" required autofocus 
                    ref="currentPasswordInput">
            </a-input>
        </a-form-item>
        <a-form-item label="New Password" name="password" class="mt-2" :label-col="{ span: 3 }" :wrapper-col="{ span: 6 }">
            <a-input v-model:value="form.password" id="password" type="password" required autofocus autocomplete="new-password"
                    ref="passwordInput">
            </a-input>
        </a-form-item>
        <a-form-item label="Confirm Password" name="password_confirmation" class="mt-2" :label-col="{ span: 3 }" :wrapper-col="{ span: 6 }">
            <a-input v-model:value="form.password_confirmation" id="password_confirmation" type="password" required autofocus autocomplete="new-password">
            </a-input>
        </a-form-item>
        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="me-3">
                Saved.
            </ActionMessage>
             <a-button type="primary" html-type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="login-form-button">Save</a-button>
        </template>
    </FormSection>
</template>

<script>
import { ref, defineComponent  } from 'vue';
import { useForm } from '@inertiajs/vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Input, FormItem, Button} from 'ant-design-vue';

const passwordInput = ref(null);
const currentPasswordInput = ref(null);



const updatePassword = () => {
    form.put(route('user-password.update'), {
        errorBag: 'updatePassword',
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value.focus();
            }

            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
        },
    });
};
export default defineComponent({
    components: {
        ActionMessage,
        'a-input': Input,
        'a-form-item': FormItem,
        'a-button': Button,
        FormSection,
        InputError,
        InputLabel,
        PrimaryButton,
        TextInput,
    },
    setup(props) {
        const form = useForm({
            current_password: '',
            password: '',
            password_confirmation: '',
        });
        return {
            passwordInput,
            form,
            currentPasswordInput,
            updatePassword,

        };
    },
});
</script>