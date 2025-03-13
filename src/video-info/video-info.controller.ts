import { Controller, Get, Query } from "@nestjs/common"

import { VideoInfoService } from "./video-info.service"

@Controller("video-info")
export class VideoInfoController {
    constructor(private readonly videoInfoService: VideoInfoService) {}

    @Get()
    async getInfo(@Query("url") url: string) {
        return this.videoInfoService.getVideoInfo(url)
    }
}
