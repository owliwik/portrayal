import { z } from 'zod'
import { type DateValue } from '@internationalized/date'

const MAX_UPLOAD_SIZE = 10 * 1_000_000 //10MB

export const clubActivitySchema = z.object({
  clubName: z.string().min(2, '请准确填写社团名称'),
  date: z.string().min(1, '别忘了选活动时间'),
  members: z.string().trim().min(2, '至少填写五位（兴趣小组三位）参与者'),
  topic: z.string().trim().min(5, '介绍地再详细一点吧'),
  photo: z.instanceof(File, { message: '请上传一张照片' })
  .refine((f) => f.size < MAX_UPLOAD_SIZE, '太大啦，图片最多10MB')
})

export type ClubActivity = typeof clubActivitySchema