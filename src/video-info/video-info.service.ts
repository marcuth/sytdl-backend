import { BadRequestException, Injectable } from "@nestjs/common"
import * as ytdl from "@distube/ytdl-core"

@Injectable()
export class VideoInfoService {
    async getVideoInfo(url: string) {
        if (!ytdl.validateURL(url)) {
            throw new BadRequestException(messagesHelper.INVAID_YOUTUBE_URL)
        }

        const info = await ytdl.getInfo(url)

        return {
            title: info.videoDetails.title,
            thumbnail: info.videoDetails.thumbnails.pop()?.url,
            duration: info.videoDetails.lengthSeconds,
            formats: info.formats.map((format) => {
                return {
                    quality: format.qualityLabel,
                    type: format.container,
                    url: format.url,
                    hasAudio: format.hasAudio
                }
            }),
        }
    }
}
