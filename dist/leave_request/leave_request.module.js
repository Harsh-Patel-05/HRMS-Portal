"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveRequestModule = void 0;
const common_1 = require("@nestjs/common");
const leave_request_service_1 = require("./leave_request.service");
const leave_request_controller_1 = require("./leave_request.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let LeaveRequestModule = class LeaveRequestModule {
};
exports.LeaveRequestModule = LeaveRequestModule;
exports.LeaveRequestModule = LeaveRequestModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [leave_request_controller_1.LeaveRequestController],
        providers: [leave_request_service_1.LeaveRequestService],
        exports: [leave_request_service_1.LeaveRequestService],
    })
], LeaveRequestModule);
//# sourceMappingURL=leave_request.module.js.map