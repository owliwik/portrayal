<script lang="ts">
  import { type ClubActivity, clubActivitySchema } from '$src/types/club-activity'
  import Input from '$src/lib/components/ui/input/input.svelte'
  import Textarea from '$src/lib/components/ui/textarea/textarea.svelte'
  import Label from '$src/lib/components/ui/label/label.svelte'
  import Button from '$src/lib/components/ui/button/button.svelte'
  import Datepicker from '$src/components/datepicker.svelte'
  import { type DateValue } from '@internationalized/date'
  import { UploadCloudIcon, Loader2Icon } from 'lucide-svelte'
  import SuperDebug, { superForm, fileProxy } from 'sveltekit-superforms'
  import { zodClient } from 'sveltekit-superforms/adapters'
  import { twMerge } from 'tailwind-merge'
  import { sleep } from '$src/lib/sleep.js'

  let fileElement: HTMLInputElement

  export let data

  let dateValue: DateValue | undefined = undefined
  $: if (dateValue) {
    $formData.date = dateValue.toString()
  }

  const onResult = async () => {
    isSubmitting = false
    dateValue = undefined
  }

  const form = superForm(data.form, {
    validators: zodClient(clubActivitySchema),
    dataType: 'json',
    onResult
  })

  let isSubmitting = false
  const onSubmit = async () => {
    isSubmitting = true
    await sleep(1000)
    form.submit()
  }

  const { form: formData, enhance, errors } = form
  const photoFile = fileProxy(form, 'photo')
</script>

<main class="flex w-full flex-col items-center bg-gray-100">
  <div class="my-10 flex-col rounded-2xl bg-white p-16 shadow-lg">
    <div class="mb-6">
      <h1 class="text-2xl font-semibold">社团活动打卡</h1>
      <p class="text-gray-400">ICCU将会审核提交内容，请勿重复提交</p>
    </div>

    <form
      method="POST"
      enctype="multipart/form-data"
      use:enhance
      class="activity-form flex w-72 flex-col gap-5"
    >
      <div class="">
        <Label for="club-name">社团名</Label>
        <Input id="club-name" bind:value={$formData.clubName} />
        {#if $errors.clubName}
          <span class="invalid">{$errors.clubName}</span>
        {/if}
      </div>

      <div class="">
        <Label for="date">活动日期</Label>
        <Datepicker bind:value={dateValue} class="w-[100%]" />
        {#if $errors.date}
          <span class="invalid">{$errors.date}</span>
        {/if}
      </div>

      <div>
        <Label for="members">参与的社员</Label>
        <Input id="members" bind:value={$formData.members} />
        {#if $errors.members}
          <span class="invalid">{$errors.members}</span>
        {/if}
      </div>

      <div>
        <Label for="topic">活动主题</Label>
        <Textarea id="topic" bind:value={$formData.topic} />
        {#if $errors.topic}
          <span class="invalid">{$errors.topic}</span>
        {/if}
      </div>

      <input
        type="file"
        accept="image/*"
        id="photo"
        class="hidden"
        bind:this={fileElement}
        bind:files={$photoFile}
      />

      <div>
        <Label>一张活动照片 {$formData.photo ? '（再次点击更换）' : ''}</Label>
        <button
          type="button"
          on:click={() => {
            fileElement.click()
          }}
          class={twMerge(
            'aspect-video w-full rounded-2xl border-2 bg-slate-100',
            $formData.photo
              ? 'border-transparent'
              : 'flex flex-col items-center justify-center border-dashed px-10'
          )}
        >
          {#if $formData.photo}
            <img
              src={URL.createObjectURL($formData.photo)}
              alt="The file you just uploaded"
              class="h-full w-full rounded-2xl object-cover"
            />
          {:else}
            <UploadCloudIcon class="h-8 w-8 text-slate-400" />
            <div class="text-center text-slate-400">点我选择一张照片</div>
          {/if}
        </button>

        {#if $errors.photo}
          <span class="invalid">{$errors.photo}</span>
        {/if}
      </div>

      <Button type="button" class="submit" on:click={onSubmit}>
        {#if isSubmitting}
          <Loader2Icon class='animate-spin' />
        {:else}
          提交打卡！
        {/if}
      </Button>

      <div class="hidden">
        <SuperDebug data={$formData} />
      </div>
    </form>
  </div>
</main>

<style>
  .invalid {
    @apply text-sm text-red-500;
  }

  h1 {
    background: linear-gradient(
      135deg,
      rgba(237, 137, 54, 1) 0%,
      rgba(221, 84, 205, 1) 70%,
      rgba(79, 144, 218, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .activity-form :global(.submit) {
    background: linear-gradient(135deg, #00c6ff 0%, #0072ff 80%);
    background-size: 180%;
    transition: all 0.2s linear;
  }

  .activity-form :global(.submit):hover {
    background-position: 80%;
  }
</style>
