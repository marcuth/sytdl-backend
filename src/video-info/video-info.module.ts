import { Module } from "@nestjs/common"

import { VideoInfoController } from "./video-info.controller"
import { VideoInfoService } from "./video-info.service"

@Module({
    providers: [VideoInfoService],
    controllers: [VideoInfoController],
})
export class VideoInfoModule {}
