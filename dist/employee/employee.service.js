"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EmployeeService = class EmployeeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createEmployeeDto, dep_id) {
        const employee = await this.prisma.employee.create({
            data: {
                ...createEmployeeDto,
                dep_id,
            },
            include: {
                department: { include: { organization: true } },
            },
        });
        return employee;
    }
    async findAll() {
        const employees = await this.prisma.employee.findMany({
            include: {
                department: { include: { organization: true } },
            },
        });
        return employees;
    }
    async findOne(id) {
        const employee = await this.prisma.employee.findFirst({
            where: {
                id,
                isDeleted: false,
            },
            include: {
                department: { include: { organization: true } },
            },
        });
        return employee;
    }
    async update(id, updateEmployeeDto) {
        const employee = await this.prisma.employee.update({
            where: {
                id,
            },
            data: {
                ...updateEmployeeDto,
            },
            include: {
                department: { include: { organization: true } },
            },
        });
        return employee;
    }
    async softDelete(id) {
        const deleteEmployee = await this.prisma.employee.update({
            where: {
                id,
            },
            data: {
                isDeleted: true,
            },
            include: {
                department: { include: { organization: true } },
            },
        });
        if (!deleteEmployee) {
            throw new common_1.NotFoundException(`Employee with ID ${id} not found`);
        }
        return deleteEmployee;
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmployeeService);
//# sourceMappingURL=employee.service.js.map