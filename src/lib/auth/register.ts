const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

/**
 * Interface untuk data yang akan dikirim ke REST API.
 * Properti tambahan (seperti nama lengkap, gender, dll.)
 * akan menjadi metadata user.
 */
interface RegisterData {
  username: string;
  email: string;
  password: string;
  // Anda mungkin perlu menambahkan field lain di sini
  // untuk menyimpan metadata user (seperti nama, tanggal lahir, dll)
  // Ini memerlukan plugin tambahan di WordPress, seperti ACF to REST API.
}

/**
 * Mengirim data pendaftaran user ke backend WordPress menggunakan REST API.
 * Endpoint pendaftaran user default adalah /wp-json/wp/v2/users.
 *
 * @param data Data formulir pendaftaran (username, email, password, dll).
 * @returns Promise yang mengembalikan data user jika berhasil.
 * @throws Error jika pendaftaran gagal.
 */
export const registerUser = async (data: RegisterData): Promise<any> => {
  // Ganti URL ini dengan domain WordPress Anda.
  // Endpoint ini memerlukan otentikasi (seperti Application Passwords)
  // dan hak akses pengguna yang cukup untuk mendaftarkan user baru.
  // Pastikan untuk mengonfigurasi WordPress Anda dengan benar.
  const API_URL = WORDPRESS_API_URL + '/users';

  try {
    console.log(API_URL)
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Jika endpoint ini memerlukan otentikasi, tambahkan header di sini.
        // Contoh: 'Authorization': 'Basic ' + btoa('username:password')
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
        // Tambahkan metadata user di sini. Ini sangat bergantung
        // pada bagaimana Anda mengonfigurasi backend WordPress.
        // name: data.name,
        // gender: data.gender,
        // ...
      }),
    });

    console.log(response.url)
    const result = await response.json();

    if (!response.ok) {
      // Tangani error dari API, seperti email sudah terdaftar.
      throw new Error(result.message || 'Pendaftaran gagal.');
    }

    // Mengembalikan data user yang baru dibuat
    return result;

  } catch (err: any) {
    console.error('API Error:', err);
    throw new Error(err.message || 'Terjadi kesalahan saat menghubungi server.');
  }
};
