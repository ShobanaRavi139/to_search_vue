<template>
    <Head title="Register" />

    <GuestLayout>
        <template #logo>
            <AuthenticationCardLogo />
        </template>

    <form @submit.prevent="submit">
    <a-form-item label="Name" name="name" :rules="[{ required: true, message: 'Please input your name!' }]"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }">
      <a-input v-model:value="form.name" id="name" type="text" required autofocus autocomplete="name">
      </a-input>
    </a-form-item>
    <a-form-item label="Email" name="email" :rules="[{ required: true, message: 'Please input your email!' }]"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }">
      <a-input v-model:value="form.email" id="email" type="email" required autofocus autocomplete="email">
      </a-input>
    </a-form-item>
    <a-form-item label="Password" name="password" :rules="[{ required: true, message: 'Please input your password!' }]"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }">
      <a-input v-model:value="form.password" id="password" type="password" required autofocus autocomplete="new-password">
      </a-input>
    </a-form-item>
     <a-form-item label="Confirm Password" name="password_confirmation" :rules="[{ required: true, message: 'Please input your Confirm Password!' }]"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }">
      <a-input v-model:value="form.password_confirmation" id="password_confirmation" type="password" required autofocus autocomplete="new-password">
      </a-input>
    </a-form-item>
    <a-form-item>
    <a-button type="primary" html-type="submit" :disabled="form.processing"  :class="{ 'opacity-25': form.processing }" class="login-form-button">Register</a-button>
      <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" style="float: right;">
                    Already registered?
      </Link>
    </a-form-item>
        </form>
    </GuestLayout>
</template>
<script>
import { Head, Link, useForm } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import Checkbox from '@/Components/Checkbox.vue';
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
    Link,
    useForm,
    AuthenticationCardLogo,
    Checkbox,
    InputError,
    InputLabel,
    PrimaryButton,
    TextInput,
  },
  props: {
    canResetPassword: {
      type: Boolean,
      required: true, // If canResetPassword is required, set this to true
    },
    status: {
      type: String,
      default: '', // Provide a default value for status if needed
    },
  },
   setup(props) {
        const submit = () => {
            form.post(route('register'), {
            onFinish: () => form.reset('password', 'password_confirmation'),
            });
        };
        const form = useForm({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            terms: false,
        });
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
