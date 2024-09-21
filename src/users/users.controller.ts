import { Controller, Logger } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UsersService } from "./users.service";

@Controller()
export class UsersController {
    private readonly logger = new Logger(UsersController.name);

    constructor(
        private usersService: UsersService
    ) { }

    @MessagePattern({ cmd: 'createUser' })
    createUser(@Payload() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto)
    }

    @EventPattern('paymentCreated')
    paymentCreated(@Payload() data: any) {
        console.log(data)
    }
    
}