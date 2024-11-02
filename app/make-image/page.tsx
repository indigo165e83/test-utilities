'use client';

export default function ImageGenerator() {
    // 画像を生成してダウンロードする関数
    const generateImages = () => {
        const width = 800; // 画像の幅
        const height = 600; // 画像の高さ

        // 指定した数の画像を生成
        for (let i = 1; i <= 3; i++) {
            createImageBlob(i, width, height);
        }
    };

    // 画像のBlobを作成してダウンロードする関数
    const createImageBlob = (index, width, height) => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        // ランダムな背景色
        ctx.fillStyle = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        ctx.fillRect(0, 0, width, height);

        // テキストの描画
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText(`Sample Image ${index} - ${width} x ${height}`, 10, 30);

        // 画像をダウンロード
        canvas.toBlob((blob) => {
            if (blob) {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `sample_image_${index}.png`;
                link.click();
            } else {
                console.error('Blob creation failed');
            }
        }, 'image/png');
    };

    // ランダムな色を生成する関数
    const randomColor = () => Math.floor(Math.random() * 256);

    return (
      <div className="flex flex-col items-center sm:flex-row sm:justify-between p-6 bg-gray-100 rounded-lg shadow-md">
        <p className="text-4xl font-bold text-center sm:text-left">サンプル画像を生成</p>
        <button
          onClick={generateImages}
          className="mt-4 sm:mt-0 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          画像を生成してダウンロード
        </button>
      </div>
    );
}
