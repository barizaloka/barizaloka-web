<?php

namespace App\Filament\Resources\ApaKataMerekas\Pages;

use App\Filament\Resources\ApaKataMerekas\ApaKataMerekaResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListApaKataMerekas extends ListRecords
{
    protected static string $resource = ApaKataMerekaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
