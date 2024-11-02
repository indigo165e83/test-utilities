'use client';
import { useState } from 'react';

export default function ImageGenerator() {
    // 選択された画像形式を保存するstate
    const [format, setFormat] = useState('png'); // デフォルトはpng  
    // 画像を生成してダウンロードする関数
    const generateImages = () => {
        const width = 800; // 画像の幅
        const height = 600; // 画像の高さ

        // 指定した数の画像を生成
        for (let i = 1; i <= 10; i++) {
            createImageBlob(i, width, height, format);
        }
    };

    // 画像のBlobを作成してダウンロードする関数
    const createImageBlob = (index, width, height, format) => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        // JPG形式の場合は白い背景を描画して透過を無効化
        if (format === 'jpg') {
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, width, height);
        }        
        // ランダムな背景色
        ctx.fillStyle = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        ctx.fillRect(0, 0, width, height);

        // テキストの描画
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText(`Sample Image ${index} - ${width} x ${height}`, 10, 30);

        // 画像を選択された形式でダウンロード
        canvas.toBlob((blob) => {
            if (blob) {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `sample_image_${index}.${format}`;
                link.click();
            } else {
                console.error('Blob creation failed');
            }
        }, `image/${format}`, format === 'jpg' ? 0.9 : undefined); // JPEGなら品質を指定
    };

    // ランダムな色を生成する関数
    const randomColor = () => Math.floor(Math.random() * 256);

    return (
      <div className="flex flex-col items-center sm:flex-row sm:justify-between p-6 bg-gray-100 rounded-lg shadow-md">
        <p className="text-4xl font-bold text-center sm:text-left">サンプル画像を生成</p>

        <div className="mt-4 sm:mt-0 flex items-center space-x-4">
          {/* 画像形式の選択UI */}
          <label htmlFor="format" className="text-lg font-semibold">形式:</label>
          <select
            id="format"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="py-2 px-4 border rounded"
          >
            <option value="png">PNG</option>
            <option value="jpg">JPG</option>
          </select>
          
          {/* 画像生成ボタン */}
          <button
            onClick={generateImages}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          >
            画像を生成してダウンロード
          </button>
        </div>
      </div>
    );
}
