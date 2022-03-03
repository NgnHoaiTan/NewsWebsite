using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TTNewsBE.Models;
namespace TTNewsBE.Services
{
    public class Cloudinary
    {
        public async Task UploadImageCloudinary(string filepath)
        {
            var cloudinary = new CloudinaryDotNet.Cloudinary(new Account
            {
                ApiKey = Credientials.ApiKey,
                ApiSecret = Credientials.ApiSecret,
                Cloud = Credientials.Cloudname

            });
            cloudinary.Api.Secure = true;

            var imageUploadParams = new ImageUploadParams()
            {
                File = new FileDescription(filepath)
            };
            _ =await cloudinary.UploadAsync(imageUploadParams);
           
        }

       
    }
}
