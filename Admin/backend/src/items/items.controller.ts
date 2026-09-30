import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Query, Req, Res } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Response } from 'express';
import { CurrentUser, Roles } from '../common/decorators';
import { AuthenticatedUser, HttpRequestContext } from '../common/types';
import { readClientIp } from '../common/utils';
import { QueryItemDto, UpdateItemDto } from './dto';
import { ItemsService } from './items.service';

@Controller('items')
@Roles(Role.ADMIN, Role.WAREHOUSE_STAFF)
export class ItemsController {
  constructor(private readonly items: ItemsService) {}

  @Get()
  list(@Query() query: QueryItemDto) {
    return this.items.list(query);
  }

  @Get('lookup/:qrCode')
  lookup(@Param('qrCode') qrCode: string) {
    return this.items.findByQr(qrCode);
  }

  @Get(':id/qr-image')
  async qrImage(@Param('id', ParseUUIDPipe) id: string, @Res() res: Response): Promise<void> {
    const png = await this.items.qrPng(id);
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'private, max-age=3600');
    res.send(png);
  }

  @Get(':id')
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.items.get(id);
  }

  @Patch(':id')
  update(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateItemDto,
    @Req() req: HttpRequestContext,
  ) {
    return this.items.update(actor, id, dto, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/refurbish')
  refurbish(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Req() req: HttpRequestContext,
  ) {
    return this.items.refurbish(actor, id, readClientIp(req.headers, req.ip));
  }

  @Patch(':id/complete-refurbish')
  completeRefurbish(
    @CurrentUser() actor: AuthenticatedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Req() req: HttpRequestContext,
  ) {
    return this.items.completeRefurbish(actor, id, readClientIp(req.headers, req.ip));
  }
}
