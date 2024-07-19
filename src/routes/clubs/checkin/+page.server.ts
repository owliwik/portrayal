import type { PageServerLoad } from './$types.js'
import { message, superValidate, fail } from 'sveltekit-superforms'
import { clubActivitySchema } from '$src/types/club-activity.js'
import { zod } from 'sveltekit-superforms/adapters'
import fs from 'fs'
import path from 'path'
import { DATA_FILE_ROOT } from '$env/static/private'

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(clubActivitySchema))
  }
}

export const actions = {
  default: async (event) => {
    const submitted = await superValidate(event.request, zod(clubActivitySchema))
    const { date, clubName, photo } = submitted.data

    if (!submitted.valid) {
			console.log('FAILED')
			console.log(submitted.errors)
      return fail(400, { submitted })
    }

		console.log(submitted.data)
    const photoBuffer = Buffer.from(await photo.arrayBuffer())
    const photoName = `${clubName}_${date}.${photo.name.split('.').pop()}`
    fs.writeFileSync(path.join(DATA_FILE_ROOT, photoName), photoBuffer)
    
		return message(submitted, 'Successfully checked in')
  }
}
