<template>
    <Head title="Reset Password" />

    <GuestLayout>
        <template #logo>
            <AuthenticationCardLogo />
        </template>

    <form @submit.prevent="submit">
    <a-form-item label="Email" name="email" :rules="[{ required: true, message: 'Please input your Email!' }]"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }">
      <a-input v-model:value="form.email" id="email" type="email" required autofocus autocomplete="email">
      </a-input>
    </a-form-item>

    <a-form-item label="Password" name="password" :rules="[{ required: true, message: 'Please input your Password!' }]"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }">
      <a-input v-model:value="form.password" id="password" type="password" required autofocus autocomplete="new-password">
      </a-input>
    </a-form-item>

    <a-form-item label="Confirm Password" name="password_confirmation" :rules="[{ required: true, message: 'Please input your Password!' }]"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }">
      <a-input v-model:value="form.password_confirmation" id="password_confirmation" type="password" required autofocus autocomplete="new-password">
      </a-input>
    </a-form-item>

    <a-form-item>
    <a-button type="primary" html-type="submit" :disabled="form.processing"  :class="{ 'opacity-25': form.processing }" class="login-form-button">Reset Password</a-button>
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
    email: String,
    token: String,
  },
   setup(props) {
        const form = useForm({
            token: props.token,
            email: props.email,
            password: '',
            password_confirmation: '',
        });
        const submit = () => {
            form.post(route('password.update'), {
            onFinish: () => form.reset('password', 'password_confirmation'),
        });
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
