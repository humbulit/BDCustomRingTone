/**!
 * @name CustomRingTone
 * @description Lets you have a custom ring tone.
 * @version 1.0.0
 * @author humbulit#0001
 * @authorId 504808783176794116
 * @updateUrl https://raw.githubusercontent.com/
 * @website https://github.com/
 */

const ytdl = require('ytdl-core');

const config = {
        info: {
                name: "CustomRingTone",
                description: "Lets you have a custom ring tone.",
                version: "1.0.0",
                authors: [{
                        name: "humbulit#0001",
                        discord_id: "504808783176794116"
                }],
                github_raw: "https://raw.githubusercontent.com/",
        },
        defaultConfig: []
};

module.exports = class name {

        constructor() {
                this._config = config;
        }

	load() { }

	start() {
                ytdl(song.url, { quality: 'highestaudio', filter: 'audio' })
		Audio.prototype._play = Audio.prototype.play;
                Audio.prototype.play = function() {
                        this.src = this.src.replace(/84a1b4e11d634dbfa1e5dd97a96de3ad/g, 'b9411af07f154a6fef543e7e442e4da9');
                        return this._play();
                };
	}

	stop(){
                Audio.prototype._play = Audio.prototype.play;
                Audio.prototype.play = function() {
                        this.src = this.src.remove(/84a1b4e11d634dbfa1e5dd97a96de3ad/g);
                        return this._play();
                };
	}
}