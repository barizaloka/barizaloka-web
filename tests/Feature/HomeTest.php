<?php

describe('Landing page', function () {
    it('Memastikan dapat diakses', function () {
        $response = $this->get('/');
        $response->assertStatus(200);
    });

    it('Memastikan ada tulisan Tentang Kami', function () {
        $response = $this->get('/');
        $response->assertSee('Tentang Kami');
    });

    it('Memastikan ada tulisan Chat via WA', function () {
        $response = $this->get('/');
        $response->assertSee('Chat via WA');
    });

    it('Memastikan tombol Chat via WA mengarah ke link yang benar', function () {
        $response = $this->get('/');
        $response->assertSee('https://wa.me/6287714625940');
    });
});
