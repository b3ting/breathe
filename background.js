chrome.browserAction.onClicked.addListener((tab) => {
    let video = document.createElement("video")
    video.id = 'breathe'
    video.src = "breathe.mp4"
    video.autoplay = true
    video.loop = true

    video.onloadedmetadata = function() {
        video.requestPictureInPicture()
            .catch(err => {
                console.error(err)
            })
    };
})
