export async function uploadToImgBB(fileBuffer, fileName) {
  const IMGBB_API_KEY = process.env.IMGBB_API_KEY;

  if (!IMGBB_API_KEY) {
    throw new Error('IMGBB_API_KEY is not set in environment variables');
  }

  const base64 = fileBuffer.toString('base64');
  
  const formData = new FormData();
  formData.append('image', base64);
  if (fileName) {
    formData.append('name', fileName.split('.')[0]); // optional name without extension
  }

  const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(`ImgBB upload failed: ${data.error?.message || JSON.stringify(data)}`);
  }

  return {
    url: data.data.url,
    deleteUrl: data.data.delete_url,
    id: data.data.id,
  };
}
