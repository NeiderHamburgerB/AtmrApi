import { Module } from "@nestjs/common"
import { EnvironmentProvider } from "./environments.provider"

@Module({
    imports:[EnvironmentProvider],
    exports:[EnvironmentProvider]
})
export class EnvironmentModule {}