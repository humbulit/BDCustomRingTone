/**!
 * @name CustomRingTone
 * @description Lets you have a custom ring tone.
 * @version 1.0.0
 * @author humbulit#0001
 * @authorId 504808783176794116
 * @updateUrl https://raw.githubusercontent.com/humbulit/BDCustomRingTone/main/CustomRingTone.plugin.js
 * @website https://github.com/humbulit/BDCustomRingTone/blob/main/CustomRingTone.plugin.js
*/

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

module.exports = class CustomRingTone {

        constructor() {
                this._config = config;
        }

	start() {
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
