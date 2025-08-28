<?php

namespace App\Filament\Resources\ApaKataMerekas;

use App\Filament\Resources\ApaKataMerekas\Pages\CreateApaKataMereka;
use App\Filament\Resources\ApaKataMerekas\Pages\EditApaKataMereka;
use App\Filament\Resources\ApaKataMerekas\Pages\ListApaKataMerekas;
use App\Filament\Resources\ApaKataMerekas\Schemas\ApaKataMerekaForm;
use App\Filament\Resources\ApaKataMerekas\Tables\ApaKataMerekasTable;
use App\Models\ApaKataMereka;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ApaKataMerekaResource extends Resource
{
    protected static ?string $model = ApaKataMereka::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Schema $schema): Schema
    {
        return ApaKataMerekaForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ApaKataMerekasTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListApaKataMerekas::route('/'),
            'create' => CreateApaKataMereka::route('/create'),
            'edit' => EditApaKataMereka::route('/{record}/edit'),
        ];
    }
}
