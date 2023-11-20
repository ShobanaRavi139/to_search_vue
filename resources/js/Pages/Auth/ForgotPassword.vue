
<template>
    <Head title="Forgot Password" />

    <GuestLayout>
        <template #logo>
            <AuthenticationCardLogo />
        </template>

        <div class="mb-4 text-sm text-gray-600" style="margin-bottom: 20px;">
            Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
        </div>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

    <form @submit.prevent="submit">
    <a-form-item label="Email" name="email" :rules="[{ required: true, message: 'Please input your Email!' }]">
      <a-input v-model:value="form.email" id="email" type="email" required autofocus autocomplete="email">
      </a-input>
    </a-form-item>
    
    <a-form-item>
    <a-button type="primary" html-type="submit" :disabled="form.processing"  :class="{ 'opacity-25': form.processing }" class="login-form-button">Email Password Reset Link</a-button>
    </a-form-item>
    
    </form>
    </GuestLayout>
</template>
<script>
import { Head, useForm } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { Form, Input, FormItem, InputPassword, Button } from 'ant-design-vue';
export default {
  components: {
    'user-outlined': UserOutlined,
    'a-form': Form,
    'a-input': Input,
    'a-button': Button,
    'a-form-item': FormItem,
    'a-input-password': InputPassword,
    'lock-outlined': LockOutlined,
    GuestLayout,
    Head,
    useForm,
    AuthenticationCardLogo,
    InputError,
    InputLabel,
    PrimaryButton,
    TextInput,
  },
  props: {
    status: String,
  },
   setup(props) {
        const form = useForm({
            email: '',
        });
        const submit = () => {
            form.post(route('password.email'));
        };
        return {
            form,
            submit,
        };
    },
   data() {
    return {
    };
  },
  // ... other component options
};
</script>
<style>
@import './resources/css/style.css';
</style>
