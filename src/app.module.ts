import { Module } from "@nestjs/common"

import { VideoInfoModule } from "./video-info/video-info.module"

@Module({
    imports: [VideoInfoModule],
})
export class AppModule {}
