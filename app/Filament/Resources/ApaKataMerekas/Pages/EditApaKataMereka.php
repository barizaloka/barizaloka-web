<?php

namespace App\Filament\Resources\ApaKataMerekas\Pages;

use App\Filament\Resources\ApaKataMerekas\ApaKataMerekaResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditApaKataMereka extends EditRecord
{
    protected static string $resource = ApaKataMerekaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
