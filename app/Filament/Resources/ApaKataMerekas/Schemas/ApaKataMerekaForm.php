<?php

namespace App\Filament\Resources\ApaKataMerekas\Schemas;

use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ApaKataMerekaForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                TextInput::make('position')
                    ->required(),
                RichEditor::make('quote')
                    ->required()
            ]);
    }
}
