<script lang="ts">
  import Input from '$lib/components/ui/input/input.svelte'
  import Label from '$lib/components/ui/label/label.svelte'
  import Button from '$lib/components/ui/button/button.svelte'
  import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte'
</script>

<main>
  <div class="panel">
    <div class="left-half" />

    <div class="right-half">
      <div class="form-wrap">
        <h1>Login to IC Meet</h1>
        <div class="signup-hint">
          New to Meet? <a href="/" class="link-animated">Create an account</a>
        </div>

        <form action="">
          <div>
            <Label for="username-input">Your IC ID</Label>
            <Input id="username-input" class="bg-opacity-75" />
          </div>

          <div>
            <Label for="pw-input">Your Password</Label>
            <Input type="password" id="pw-input" class="bg-opacity-75" />
          </div>

          <div class="remember-wrap">
            <Checkbox id="remember" />
            <Label for="remember">Remember Me</Label>
          </div>

          <Button class="my-4">Login</Button>
        </form>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .panel {
    max-width: 60rem;
    width: 80%;
    height: 33rem;
    display: flex;
    background-color: #2f6de010;
    border-radius: 20px;
  }

  .left-half {
    width: 50%;
    background-image: url('/auth-picture.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 20px 0 0 20px;
  }

  .right-half {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .form-wrap {
    width: 16rem;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  form {
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .remember-wrap {
    margin: 2px 0;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 8px;
  }

  .signup-hint {
    color: hsl(var(--primary) / 0.6);
  }
</style>
