'use client';

export default function MakeImage() {
    function generateImages() {
        //中サイズの画像（本文中で使用）推奨サイズ: 800×600 px から 1024×768 px
        const width = 800;
        const height = 600;
    
        for (let i = 1; i <= 3; i++) {
            // Canvasの作成
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
    
            // ランダムな背景色
            ctx.fillStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            ctx.fillRect(0, 0, width, height);
    
            // テキストの描画
            ctx.fillStyle = 'black';
            ctx.font = '20px Arial';
            ctx.fillText(`Sample Image ${i} - ${width} x ${height}`, 10, 30);
    
            // 画像をダウンロード
            canvas.toBlob((blob) => {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `sample_image_${i}.png`;
                link.click();
            }, 'image/png');
        }
    };

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
  