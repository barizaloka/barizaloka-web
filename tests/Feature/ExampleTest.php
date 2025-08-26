<?php

describe('Errors page', function () {
    it('memastikan 404 diatur', function () {
        $response = $this->get('/tidak-ada');

        $response->assertSee('halaman yang Anda cari tidak ditemukan');
    });
});
