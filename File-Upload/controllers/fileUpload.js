const File =  require("../models/File");

//local file upload  -> handler function
exports.localFileUpload = async (req, res) => {
    try{
        //fetch file from request
        const file = req.files.file;
        console.log("FILE AA GYI BHAI",file);
        //save file to database
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`; // server ka path
        console.group("PATH->", path);

        file.mv(path, async (err) => {
            console.log("ERROR", err);
        });

        res.json({
            success: true,
            message:'local file uploaded successfully',
        });
    }catch(error){
        console.log("ERROR", error);
    }
}